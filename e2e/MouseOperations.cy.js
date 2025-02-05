import 'cypress-iframe'
require('@4tw/cypress-drag-drop')

describe("Mouse Operations", () => {

    it('Mouse Hover', () => {

        cy.visit("https://testautomationpractice.blogspot.com/")

        cy.get('#cookieChoiceDismiss').click();

        cy.get("div[id='HTML3'] a:nth-child(2)").should('not.be.visible');



        cy.get('.dropbtn').trigger('mouseover').click()

        cy.wait(2000)

        cy.get("div[id='HTML3'] a:nth-child(2)").should('be.visible');


    })

    it('Right Click', () => {

        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")

        //approach 1
        /* cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu')
 
         cy.get('.context-menu-icon-copy > span').should('be.visible') */

        //approach 2
        cy.get('.context-menu-one.btn.btn-neutral').rightclick();

        cy.get('.context-menu-icon-copy > span').should('be.visible')
    })

    it('Double click', () => {

        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3");
        cy.get('#accept-choices').click();

        cy.frameLoaded('#iframeResult');  //Load the frame

        //Approach 1 - trigger()

        /*    cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick');
            cy.iframe('#iframeResult').find('#field2').should('have.value', 'Hello World!'); */

        // Approach 2 - dblclick ()
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").dblclick();
        cy.iframe('#iframeResult').find('#field2').should('have.value', 'Hello World!');

    })

    it('Drag and Drop using plugin', () => {

        cy.visit("http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        cy.get('#box6').should('be.visible')
        cy.get('#box106').should('be.visible')

        cy.wait(3000);

        cy.get('#box6').drag('#box106', { force: true });

    })

    it.only('Scrolling Page', () => {
        cy.visit("https://www.worldometers.info/geography/flags-of-the-world/")

        //India flag
        cy.get(':nth-child(79) > [align="center"] > a > img').scrollIntoView({ duration: 3000 })

        cy.get(':nth-child(79) > [align="center"] > a > img').should('be.visible')

        cy.get(':nth-child(24) > [align="center"] > a > img').scrollIntoView({ duration: 2000 })

        cy.get(':nth-child(24) > [align="center"] > a > img').should('be.visible')

        cy.get('.footerlinks').scrollIntoView();

    })
})