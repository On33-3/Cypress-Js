export class ShoppingCart{

    verifyNameProduct(productName){
        cy.contains(productName).should('exist');

    }


    verifyPriceTotal(price1 , price2){
        cy.contains('Show total price').click();
        cy.contains(price1 + price2).should('exist');
    }

}