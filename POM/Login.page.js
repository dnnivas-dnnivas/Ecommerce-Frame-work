class Login{

    constructor(page){

        this.page=page
        this.usernamefield=page.getByPlaceholder("Username")
        this.passwordfield=page.getByPlaceholder("Password")
        this.loginbutton=page.getByRole('button',{name:"Login"})
        this.errormessage=page.locator(".error-message-container.error")




    }

    async goto(){

        await this.page.goto("https://www.saucedemo.com/")
    }

    async LoginSauceDemo(){
         await this.page.goto("https://www.saucedemo.com/")
        await this.usernamefield.fill("standard_user")
        await this.passwordfield.fill("secret_sauce")
        await this.loginbutton.click()
    }

    async clickOnLoginButton(){

        await this.loginbutton.click()
    }

    async getErrorMsg(){

        return await this.errormessage.textContent()
    }



}

export default Login;