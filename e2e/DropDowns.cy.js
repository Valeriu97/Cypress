

describe('DropDowns', () => {

    it.skip('DropDown with select', () => {

        cy.visit('https://www.zoho.com/commerce/free-demo.html')
        cy.get('#zcf_address_country')
            .select('Panama')
            .should('have.value', 'Panama')

    })

    it.skip('DropDown without select', () => {

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

        cy.get('#select2-billing_country-container').click()

        cy.get('.select2-search__field').type('Panama').type('{enter}')

        cy.get('#select2-billing_country-container')
            .should('have.text', 'Panama')

    })

    it.skip('DropDown with Auto suggest', () => {

        cy.visit('https://www.wikipedia.org/')

        cy.get('#searchInput').type('Steaua')

        cy.get('.suggestion-title').contains('Steaua fans').click()

    })

    it('Dynamic DropDown', () => {

        cy.visit('https://www.google.com/')

        cy.get('#L2AGLb > .QS5gu').click()

        cy.get('#APjFqb').type('cypress automation')

        cy.wait(3000)

        cy.get('div.wM6W7d>span').should('have.length', 13)

        cy.get('div.wM6W7d>span').each(($el, index, $list) => {

            if ($el.text() == 'cypress automation testing') {
                cy.wrap($el).click()
            }
        })

        cy.get("#APjFqb").should('have.value', 'cypress automation testing')

    })
})
