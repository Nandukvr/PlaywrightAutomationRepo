
exports.Loginpage =
class Loginpage {

    constructor(page){
        this.page = page;
        this.username_txtbox = page.getByRole('textbox',{name:'Username'});
         this.password_txtbox = page.getByRole('textbox',{name:'Password'});
        this.login_btn = page.getByTestId('login-button');
        this.btn_addToCart_Backpack = page.getByTestId('add-to-cart-sauce-labs-backpack');

    }

    async gotoLoginPage(){
        await this.page.goto("https://www.saucedemo.com");
    }

    async login (username , password ) {
        await this.username_txtbox.fill(username);
        await this.password_txtbox.fill(password);
          await this.login_btn.click();
        if (await this.btn_addToCart_Backpack.isVisible()) {
    console.log('Login was Successful and Add to Cart button is visible');
  } else {
    console.log('Login was UnSuccessful Add to Cart button is NOT visible');
  }
    }

     
}