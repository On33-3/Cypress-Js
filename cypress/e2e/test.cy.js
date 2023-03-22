/// <reference types = "cypress"/>

import { HomePage } from "../support/pages/homePage";
import { LoginPage } from "../support/pages/loginPage";
import { ProductPage } from "../support/pages/productPage";
import { RegisterPage } from "../support/pages/registerPage";
import { ShoppingCart } from "../support/pages/shoppingcartPage";
const registerPage = new RegisterPage();
const loginPage = new LoginPage();
const homePage = new HomePage();
const productPage = new ProductPage();
const shoppingCartPage = new ShoppingCart();
let loginData;
let products;




before("Set the values in a variable for user login", () => {

    cy.fixture("loginData").then((data) => {
        loginData = data;
    })
})

before("Set the values in a variable for product selection", () => {

    cy.fixture("productsFix").then((data1) => {
        products = data1;
    })
})

describe("Pre entrega", () => {

 
    

    it("Test global", () => {
        cy.visit('');
        registerPage.dbClickLogin();
        loginPage.logComplete(loginData.user , loginData.password)
        homePage.selectOnlineShop();
        productPage.addProduct(products.product1.name);
        productPage.addProduct(products.product2.name);
        cy.xpath('//*[@id="goShoppingCart"]').click();
        shoppingCartPage.verifyNameProduct(products.product1.name);
        shoppingCartPage.verifyNameProduct(products.product2.name);
        shoppingCartPage.verifyPriceTotal(products.product1.price , products.product2.price);
    })



})