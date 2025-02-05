// click on link using label
// overwriting exiting contains () command
// re-usable custom command

describe('Custom commands', () => {

    it("handling links", () => {

        cy.visit("https://www.mystoredemo.io/#/");

        // Without using custom command 
        //  cy.get("body > div:nth-child(1) > main:nth-child(2) > section:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1) > p:nth-child(2)").click();

        // using custom command
        cy.clickLink("Headphones");
        cy.get(".product-detail__title").should('have.text', 'Headphones');

    })

    it("overwriting existing command", () => {
        cy.visit("https://www.mystoredemo.io/#/");

        cy.clickLink("HEADPHONES");
        cy.get(".product-detail__title").should('have.text', 'Headphones');

    })

    it.only("Login command", () => {

        cy.visit("https://www.inmotionhosting.com/");

        cy.clickLink(".fa.fa-imh-user");
        cy.loginapp("testing@gmail.com", "test123")
    })
})