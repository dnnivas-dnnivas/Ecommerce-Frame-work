class Product{

    constructor(page){

        this.page=page

        this.menubar=page.locator(".bm-burger-button")

        this.cardiocn=page.locator(".shopping_cart_link")
        this.cardbadge=page.locator(".shopping_cart_badge")
        this.logotbutton=page.locator("#logout_sidebar_link")
        this.title=page.locator(".title")
        this.sortdropdown=page.locator(".product_sort_container")
        this.removebutton=page.getByRole("button",{name:"Remove"})
        this.addtocardbutton=page.getByRole("button",{name:"Add to cart"})
        this.productitem=locator(".inventory_item")
        this.productitemname=page.locator(".inventory_item_name ")
        this.profuctitemprice=page.locator(".inventory_item_price")

    }
    async AddtoCard(){

       await this.addtocardbutton.first()
    }
}

export default Product;