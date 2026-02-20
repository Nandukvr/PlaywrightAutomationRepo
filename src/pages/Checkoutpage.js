const { expect } = require('@playwright/test');
exports.Checkoutpage =
class Checkoutpage {

    constructor(page){
        this.page = page;
        this.btn_checkout = page.getByRole('button',{name:'checkout'});
         this.inputbox_Firstname = page.getByTestId('firstName');
        this.inputbox_Lastname = page.getByTestId('lastName');
        this.inputbox_PostalCode = page.getByTestId('postalCode');
        this.btn_Continue = page.getByTestId('continue');
         this.label_checkoutInfo = page.getByTestId('Checkout: Your Information');
         this.label_CheckoutOverview = page.getByText('Checkout: Overview');
        this.txt_CartQty = page.getByTestId('item-quantity');
        this.label_PaymentInfo = page.getByText('Payment Information:');
        this.label_ShippingInfo = page.getByText('Shipping Information:');
        this.label_PriceTotal = page.getByText('Price Total');
        this.label_PaymentInfo = page.getByText('Payment Information:');
        this.btn_Finish = page.getByRole('finish');
        this.heading_orderConfirmMsg = page.getByText('Thank you for your order!');
        this.txt_DispatchConfirmMsg = page.getByText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    }

      
    async clickCheckout() {
    await this.btn_checkout.click();
  }

  async enterFirstName(firstName) {
    await this.inputbox_Firstname.fill(firstName);
  }

  async enterLastName(lastName) {
    await this.inputbox_Lastname.fill(lastName);
  }

  async enterPostalCode(postalCode) {
    await this.inputbox_PostalCode.fill(postalCode);
  }

  async fillCheckoutInformation(firstName, lastName, postalCode) {
    await this.enterFirstName(firstName);
    await this.enterLastName(lastName);
    await this.enterPostalCode(postalCode);
   // await this.page.waitForTimeout(2000);
  }
   async clickcontinuebtn() {
    await this.btn_Continue.click();
  }  

  async clickFinish() {
    await this.btn_Finish.click();
  }    
       



    }
