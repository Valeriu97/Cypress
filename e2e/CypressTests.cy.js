describe('Cypress Learning', () => {
    it('Ex 1', () => {
        //cy.visit('https://myanimelist.net');
        //     cy.wait(3000);
        //     cy.get('.button-wrapper > button').click();
        //     cy.get('.header-menu-login > #malLogin').click();
        //     cy.get('#loginUserName').type('Casull454');
        //     cy.get('#login-password').type('Animeisnumber1!');
        //     cy.get('.pt16.ac > .inputButton').click();
        // 
        cy.visit('https://cultaholic.com');
        cy.get('#ez-accept-all').click();
        cy.get('.popular-categories > :nth-child(1) > a').click();
    })
})