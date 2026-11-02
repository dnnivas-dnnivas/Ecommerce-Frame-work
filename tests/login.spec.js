import {test} from"@playwright/test"
import Login from "../POM/Login.page.js"


test("login to sauce demo",async({page})=>{
let login= new Login(page)
await login.goto()
await login.LoginSauceDemo()
await login.LoginSauceDemo()
await login.LoginSauceDemo()


})
