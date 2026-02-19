import { test, expect } from '@playwright/test';
import { Checkoutpage } from '../pages/Checkoutpage';



test("click on checkOut button",async ({page})=>{
    const checkout = new Checkoutpage(page);
await checkout.clickCheckout();
 await expect(checkout.label_checkoutInfo).toHaveText('Checkout: Your Information');
})

test("fill check out Info",async ({page})=>{
    const checkout = new Checkoutpage(page);
await checkout.fillCheckoutInformation("demo","user","67895");
await expect(checkout.btn_Continue).toBeVisible();
})

test("click Continue Button",async ({page})=>{
    const checkout = new Checkoutpage(page);
await checkout.clickcontinuebtn();
await expect(checkout.label_PaymentInfo).toBeVisible();
await expect(checkout.label_ShippingInfo).toBeVisible();

})

test("click finish checkout Button",async ({page})=>{
    const checkout = new Checkoutpage(page);
await checkout.clickFinish();
await expect(checkout.heading_orderConfirmMsg).toBeVisible();
await expect(checkout.txt_DispatchConfirmMsg).toBeVisible();
})