export class ReciptPage {


    verifyFullName(name, lastName) {
        let fullName = name + ' ' + lastName;
        return cy.contains(fullName, { timeout: 15000 });
    }


    verifyProductName(nameProduct) {

        return cy.xpath(`//p[@id='${nameProduct}'][contains(text(),'${nameProduct}')]`);

    }

    verifyTotalPRice(aux) {
        return cy.contains(aux);

    }

    verifyCardNumber(cardNumber) {
        return cy.contains(cardNumber);
    }
}