describe('Testing', () => {
    it('verify title-pos', () => {
        cy.visit("https://sport.ro")
        cy.title().should('eq', 'SPORT.RO - Stiri din sport')
    })

    it('verify title-neg', () => {
        cy.visit("https://sport.ro")
        cy.title().should('eq', 'SportPunctRO')


    })
})