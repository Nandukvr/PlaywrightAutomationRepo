import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/Loginpage';


test("Verify Login Functionality",async ({page})=>{
const Login = new Loginpage(page);

await Login.gotoLoginPage();
await Login.login('standard_user','secret_sauce');
// assertion After login Products page has to display
await expect(page.getByTestId('title')).toHaveText('Products');

})
