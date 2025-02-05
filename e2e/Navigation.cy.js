describe('MySuite', () => {

    it('NavigationTest', () => {

        cy.visit("https://demo.opencart.com/");
        cy.title().should('eq', "Your Store"); // Home page

        cy.get("li:nth-child(7) a:nth-child(1)").click();
        cy.get("div[id='content'] h2").should('have.text', "Cameras"); // cameras page

        cy.go('back'); // Go back to Home page
        cy.title().should('eq', "Your Store");

        cy.go('forward'); // cameras page
        cy.get("div[id='content'] h2").should('have.text', "Cameras");

        cy.go(-1); // Home Page
        cy.title().should('eq', "Your Store");

        cy.go(1); // cameras page
        cy.get("div[id='content'] h2").should('have.text', "Cameras");

        cy.reload()
    })
})