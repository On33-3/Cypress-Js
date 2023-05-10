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



before("Set the values in a variable for user & product", () => {

    cy.fixture("loginData").then((data) => {
        loginData = data;
    })
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
        productPage.goToshoppingCart();
       
        shoppingCartPage.verifyNameProduct(products.product1.name).should('have.text', products.product1.name );
        shoppingCartPage.verifyNameProduct(products.product2.name).should('have.text', products.product2.name );;
        shoppingCartPage.verifyProductPrice(products.product1.name , products.product1.price);
        shoppingCartPage.verifyProductPrice(products.product2.name , products.product2.price);
        shoppingCartPage.clickShowTotalPrice();
        let aux = (products.product1.price + products.product2.price);
        shoppingCartPage.verifyTotalPrice(aux).should("have.text", aux);
        
    })



})