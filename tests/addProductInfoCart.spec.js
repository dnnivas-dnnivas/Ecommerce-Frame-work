import { test } from "@playwright/test";
import ProductsPage from "../POM/Productpage.js";
import LoginPage from "../POM/Login.page.js";
import fs from "fs";
let userdata=fs.readFileSync("C:/Users/DELL/OneDrive/Desktop/SauceDemo/Ecommerce-Frame-work/Test-Data/Login.json")
userdata=JSON.parse(userdata);

let url = userdata.url;
let username = userdata.username;
let password = userdata.password;

test("add product to cart", async ({ page }) => {

    let login = new LoginPage(page);
    let product = new ProductsPage(page);

    await login.Logintosaucedemo(url, username, password);

    await product.clickonaddtocart();
    await product.Opencart();

});