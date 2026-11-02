import { test } from "@playwright/test";
import LoginPage from "../POM/Login.page.js";
import fs from "fs";

let userdata = fs.readFileSync("C:/Users/DELL/OneDrive/Desktop/SauceDemo/Ecommerce-Frame-work/Test-Data/Login.json");

userdata = JSON.parse(userdata);

let url = userdata.url;
let username = userdata.username;
let password = userdata.password;

test("login to sauce demo", async ({ page }) => {
    let login = new LoginPage(page);
    await login.Logintosaucedemo(url, username, password);
    await login.Logintosaucedemo(url, username, password);
});