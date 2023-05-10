export class ProductPage {
    addProduct(product){
        cy.get(`button[value="${product}"]`).click();
        cy.get('#closeModal').click();
    }

        goToshoppingCart(){
            cy.xpath('//*[@id="goShoppingCart"]').click();
        }
}