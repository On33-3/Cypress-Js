export class ShoppingCart {

    verifyNameProduct(productName) {
        return cy.xpath(`//p[contains(text(),"${productName}")]`);

    }
    verifyProductPrice(producto, precio) {
        cy.xpath(`//p[contains(text(),"${producto}")]
        //following-sibling::p[@name="${precio}"]`)
            .should("exist");
    }

    clickShowTotalPrice() {
        cy.xpath("//button[contains(text(),'Show total price')]").click();
    };

    verifyTotalPrice(total) {
        return cy.contains(total);
    };

}