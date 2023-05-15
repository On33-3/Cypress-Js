export class HomePage {
    
    selectOnlineShop() {
        cy.xpath('//*[@id="onlineshoplink"]').click();
    }


}