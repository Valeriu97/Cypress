describe('NewTest', () => {
    it('Ola', () => {
        cy.visit('https://linkedin.com');

        cy.get('[action-type="ACCEPT"]').click();

        cy.get('.nav__button-secondary').click();

        cy.get('#username').type('emailexample@prod.com');

        cy.get('#password').type('password123');

        cy.get('.btn__primary--large').click();

        cy.get('#ember16').should('exist');

    })
})