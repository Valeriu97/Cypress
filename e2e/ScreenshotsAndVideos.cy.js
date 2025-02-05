describe('mysuite', () => {

    it('Capture screenshots & videos', () => {

        cy.visit("https://demo.opencart.com/");
        /* cy.screenshot("HomePage");
 
         cy.wait(5000);
         cy.get("img[title='Your Store']").screenshot("logo");*/

        //Automatically captuire screenshot & video on failure - only when you execture through CLI

        cy.get("li:nth-child(7) a:nth-child(1)").click(); //cameras
        cy.get("div[id='content'] h2").should('have.text', "Tablets");

    })
})