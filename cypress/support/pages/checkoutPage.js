export class CheckoutPage {

    enterFullData(name, lastName, card) {
        cy.get('input[name="firstName"]').type(name);
        cy.get('input[name="lastName"]').type(lastName);
        cy.get('input[name="cardNumber"]').type(card);
    }

    goToReceipt() {
        cy.xpath("//button[contains(text(),'Purchase')]").click();
    }
}