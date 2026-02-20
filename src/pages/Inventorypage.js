
const { expect } = require('@playwright/test');
exports.Inventorypage =
class Inventorypage {

    constructor(page){
        this.page = page;
       this.btn_addToCart_Backpack = page.getByTestId('add-to-cart-sauce-labs-backpack');
         this.btn_addToCart_Bikelight = page.getByTestId('add-to-cart-sauce-labs-bike-light');
        this.link_shoppingcart = page.getByTestId('shopping-cart-link');
        this.label_cartItem_1 = page.getByText('Sauce Labs Backpack');
        this.label_cartItem_2 = page.getByText('Sauce Labs Bike Light');
       // this.label_cartItem_2 = page.getByText('Sauce Labs Bike Light');
        this.label_priceofCartItem_1 = page.getByText('29.99');
        this.label_priceofCartItem_2 = page.getByText('9.99');
         this.txt_products = page.getByText('Products');
        this.sort_Dropdown =  page.getByTestId('product-sort-container');
        this.dropdownOption_PriceLowToHigh = page.getByText('Price (low to high)');
        this.btn_removeItemFromCart =  page.getByTestId('remove-sauce-labs-backpack');
         this.btn_ContinueShopping =  page.getByTestId('continue-shopping');
        // Cart List Container (XPath)
        this.cart_list = page.locator('//div[@data-test="cart-list"]');

        // All cart items
        this.cart_items = page.locator('//div[@data-test="inventory-item"]');

        // Item name inside cart
        this.cart_item_names = page.locator('//div[@data-test="inventory-item-name"]');


        // Item quantity
        this.cart_item_quantities = page.locator('//div[@data-test="item-quantity"]');

        // Item price
        this.cart_item_prices = page.locator('//div[@data-test="inventory-item-price"]');

         // All product prices on inventory page
        this.inventory_prices = page.locator('//div[@data-test="inventory-item-price"]');
    }
    

    // add Two Items to cart and open cart
       
 async addTwoDistinctItemsToCart() {
    await this.btn_addToCart_Backpack.click();
    console.log('BackPack Item Is Added to cart Successfully')
     await this.btn_addToCart_Bikelight.click();
   console.log('Bike light  Item Is Added to cart Successfully');
  await this.clickOnCartBadge();

 }

 // This Method clicks on Cart Badge
 async clickOnCartBadge(){

   await this.link_shoppingcart.click();

  }
  // This Method Get Cart Details
 async getCartDetails() {

    const names = await this.cart_item_names.allTextContents();
    const quantities = await this.cart_item_quantities.allTextContents();
    const prices = await this.cart_item_prices.allTextContents();

    const cartItems = [];
    let subtotal = 0;

    for (let i = 0; i < names.length; i++) {

        const item = {
            name: names[i].trim(),
            quantity: parseInt(quantities[i]),
            price: parseFloat(prices[i].replace('$', ''))
        };

        subtotal += item.price * item.quantity;
        cartItems.push(item);
    }

    return {
        items: cartItems,
        subtotal: subtotal
    };
}
// This Method clicks on continue Shopping btn
async clickContinueShoppingbtn() {
   
    await this.btn_ContinueShopping.click();
  }
 

    async clickFilterDropdown() {
   
    await this.sort_Dropdown.click();
  }
   async selectSortOption(value) {
        await this.sort_Dropdown.selectOption(value);
    }

  async selectPriceLowToHigh() {
   
    await this.dropdownOption_PriceLowToHigh.click();
  }

// This Method Sort the price Options
  async validatePriceLowToHighSorting() {

        // Get all prices text
        const priceTexts = await this.inventory_prices.allTextContents();

        // Convert "$29.99" → 29.99
        const actualPrices = priceTexts.map(price =>
            parseFloat(price.replace('$', ''))
        );

        // Create sorted copy
        const sortedPrices = [...actualPrices].sort((a, b) => a - b);

        console.log("Actual Prices:", actualPrices);
        console.log("Expected Sorted:", sortedPrices);

        // Assertion
        expect(actualPrices).toEqual(sortedPrices);
    }

  /*async sortByPriceLowToHigh() {
    await this.btn_filter.selectOption('lohi');
  }*/




  async addProductsToCartAndValidateDetails() {
    await this.addTwoDistinctItemsToCart();
    await this.getCartDetails();
    await this.clickContinueShoppingbtn();
     
  }
async clickSortDropdownAndSelectOption(){
    await this.clickFilterDropdown();
   await this.selectSortOption('lohi');
  await this.validatePriceLowToHighSorting();
}

async clickonCart(){
    await this.clickOnCartBadge();
    //await this.page.waitForTimeout(2000);
}


  }
       
   
