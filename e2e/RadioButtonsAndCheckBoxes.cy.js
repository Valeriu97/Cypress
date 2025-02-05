


describe("Check UI Elements", () => {
    it("Checking Radion Buttons", () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('#cookieChoiceDismiss').click()
        cy.get("input#male").should('be.visible')
        cy.get("input#female").should('be.visible')

        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('not.be.checked')

        cy.get("input#female").check().should('be.checked')
        cy.get("input#male").should('not.be.checked')
    })

    it("Checking Check Boxes", () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('#cookieChoiceDismiss').click()

        cy.get("input#monday").should('be.visible')
        cy.get("input#monday").check().should('be.checked')

        cy.get("input#monday").should('be.visible')
        cy.get("input#monday").uncheck().should('not.be.checked')

        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')

        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        cy.get("input.form-check-input[type='checkbox']").first().check()
        cy.get("input.form-check-input[type='checkbox']").last().check()
    })
})
