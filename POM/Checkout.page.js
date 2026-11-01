class Checkout{
    constructor(page){

        this.page=page;
        this.firstname=page.getByPlaceholder("First Name")
        this.lastname=page.getByPlaceholder("Last Name")
        this.zipcode=page.getByPlaceholder("Zip/Postal Code")
        this.cancel=page.getByRole('button',{name:"Cancel"})
        this.continue=page.getByRole('button',{name:"Continue"})
        this.error=page.locator(".error-message-container.error")


    }

    async  FillYourInfo() {
        await this.firstname.fill("deve")
        await this.lastname.fill("nivas")
        await this.zipcode.fill("641113")
        
    }

    async clickOnCancelButton(){

        await this.cancel.click()
    }
    async  clickOnContinueButton(){

        await this.continue.click()
    }

    async fillAndContinue(){

        await this.FillYourInfo()
        await this.page.clickOnContinueButton()
    }
        async errorMessageOnCheckOut(){

            
        }
    
}
export default Checkout;