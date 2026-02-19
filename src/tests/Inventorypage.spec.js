import { test, expect } from '@playwright/test';
import { Inventorypage } from '../pages/Inventorypage';



test("add Products To Cart And Validate Details",async ({page})=>{
    const inventory = new Inventorypage(page);
await inventory.addProductsToCartAndValidateDetails();
// Assertion 
await expect(inventory.txt_products).toBeVisible();
})

test("click Sort Dropdown And Select Option",async ({page})=>{
    const inventory = new Inventorypage(page);
await inventory.clickSortDropdownAndSelectOption();
await expect(inventory.btn_removeItemFromCart).toBeVisible();
})

test("click on cart",async ({page})=>{
const inventory = new Inventorypage(page);
await inventory.clickOnCartBadge();
await expect(inventory.btn_ContinueShopping).toBeVisible();
})