import {test} from"@playwright/test"
import Product from "../POM/Product.page.js"
import Login from "../POM/Login.page.js"


test("add product to cart",async({page})=>{


    let login =new Product(page)

    await Product.addtocart()
    await Product.
})