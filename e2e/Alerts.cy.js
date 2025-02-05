

describe('Alerts', () => {
    //1. Javascript alert: It will have some text and an 'Ok' button
    it.skip('Js alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click();

        cy.on('window:alert', (t) => {

            expect(t).to.contains('I am a JS Alert');
        })

        //alert window automatically closed by cypress

        cy.get("#result").should('have.text', 'You successfully clicked an alert')

    })

    //2. Javascript Confirmation alert: It will have text with 'Ok' and 'Cancel' buttons
    it.skip('Js confirm alert-Ok', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm', (t) => {

            expect(t).to.contains('I am a JS Confirm');
        })
        // cypress automatically closed the alert window by using ok button-default

        cy.get('#result').should('have.text', 'You clicked: Ok');

    })
    it.skip('Js confirm alert- Cancel', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm', (t) => {

            expect(t).to.contains('I am a JS Confirm');
        })
        cy.on('window:confirm', () => false); // cypress closes the alert window using 'Cancel' button

        cy.get('#result').should('have.text', 'You clicked: Cancel');

    })
    // 3. javascript Prompt Alert: It will have some text along with a text box for user input along with 'OK'

    it.skip('Js Prompt alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('bye');
        })
        cy.get("button[onclick='jsPrompt()']").click();

        // cypress will automatically close prompt- it will use 'OK' button

        //cy.on('window:prompt', () => false);

        cy.get("#result").should('have.text', 'You entered: bye');

    })
    // 4. Authenticanted alert
    it.only('Authenticated alert', () => {
        //approach 1
        /*  cy.visit("https://the-internet.herokuapp.com/basic_auth", { auth: { username: "admin", password: "admin" } });
  
          cy.get("div[class='example'] p").should('have.contain', "Congratulations")
  */
        // approach 2
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get("div[class='example'] p").should('have.contain', "Congratulations")
    })

})