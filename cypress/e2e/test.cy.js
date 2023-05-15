/// <reference types = "cypress"/>

import { CheckoutPage } from "../support/pages/checkoutPage";
import { HomePage } from "../support/pages/homePage";
import { ProductPage } from "../support/pages/productPage";
import { ReciptPage } from "../support/pages/reciptPage";
import { ShoppingCart } from "../support/pages/shoppingcartPage";
const recipt = new ReciptPage();
const homePage = new HomePage();
const productPage = new ProductPage();
const shoppingCartPage = new ShoppingCart();
const checkout = new CheckoutPage();
const username = "emmanuel35";
const password = "123456!";
const gender = "Male";
const day = "02";
const month = "6";
const year = "1998";

let checkoutData;
let products;





describe("Pre entrega", () => {

    before("fix & data", () => {

        cy.fixture("checkData").then((data) => {
            checkoutData = data;
        })
        cy.fixture("productsFix").then((data1) => {
            products = data1;
        })
    })




    it("Global test", () => {
        cy.request({
            url: "https://pushing-it.onrender.com/api/register",
            method: "POST",
            body: {
                username: username,
                password: password,
                gender: gender,
                day: day,
                month: month,
                year: year,
            },
        }).then((response) => {
            expect(response.status).is.equal(200);
            //logeo
            cy.request({
                url: "https://pushing-it.onrender.com/api/login",
                method: "POST",
                body: {
                    username: username,
                    password: password,
                },
            }).then((response) => {
                expect(response.status).equal(200);
                window.localStorage.setItem("token", response.body.token);
                window.localStorage.setItem("user", response.body.user.username);
            });
        });


        cy.visit('');
        homePage.selectOnlineShop();
        productPage.addProduct(products.product1.name);
        productPage.addProduct(products.product2.name);
        productPage.goToshoppingCart();

        shoppingCartPage.verifyNameProduct(products.product1.name).should('have.text', products.product1.name);
        shoppingCartPage.verifyNameProduct(products.product2.name).should('have.text', products.product2.name);;
        shoppingCartPage.verifyProductPrice(products.product1.name, products.product1.price);
        shoppingCartPage.verifyProductPrice(products.product2.name, products.product2.price);
        shoppingCartPage.clickShowTotalPrice();
        let aux = (products.product1.price + products.product2.price);
        shoppingCartPage.verifyTotalPrice(aux).should("have.text", aux);
        shoppingCartPage.goToCheckOut();
        checkout.enterFullData(checkoutData.name, checkoutData.lastName, checkoutData.card);
        checkout.goToReceipt();
        recipt.verifyFullName(checkoutData.name, checkoutData.lastName).should('exist');
        recipt.verifyProductName(products.product1.name).should('have.text', products.product1.name);
        recipt.verifyProductName(products.product2.name).should('have.text', products.product2.name);
        recipt.verifyTotalPRice(aux).should('exist');
        recipt.verifyCardNumber(checkoutData.card).should('exist');



    })
    after("Delete user", () => {
        //delete
        cy.request({
            url: `https://pushing-it.onrender.com/api/deleteuser/${username}`,
            method: "DELETE",
        }).then((response) => {
            expect(response.status).equal(200);
        })
    });


})
