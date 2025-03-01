import 'cypress-iframe'

describe("handling frames", () => {


    it('approach1', () => {

        cy.visit("https://the-internet.herokuapp.com/iframe");

        const iframe = cy.get("#mce_9_ifr")
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);

        iframe.clear().type("Welcome {cmd+a}");

        cy.get("[aria-label='Bold']").click();
    })




    it('approach2- by using a custom command', () => {

        cy.visit("https://the-internet.herokuapp.com/iframe");

        cy.getIframe('#mce_9_ifr').clear().type("Welcome {cmd+a}")

        cy.get("[aria-label='Bold']").click();
    })

    it.only('approach3- cypress iframe plugin', () => {

        cy.visit("https://the-internet.herokuapp.com/iframe");

        cy.frameLoaded('#mce_9_ifr');  // Load the frame

        cy.iframe('#mce_9_ifr').clear().type("Welcome");


    })
})

