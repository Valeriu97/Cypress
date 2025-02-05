describe('Handle Table', (() => {

    beforeEach('Access site', () => {

        cy.visit("https://testautomationpractice.blogspot.com/");

    })

    it.skip('Check Number Rows & Columns', () => {

        cy.get("table[name='BookTable']>tbody>tr").should('have.length', '7');

        cy.get("table[name='BookTable']>tbody>tr>th").should('have.length', '4')

    })

    it.skip('Check cell data from specific row & Column', () => {

        cy.get("table[name='BookTable']>tbody>tr:nth-child(4)>td:nth-child(2)")
            .contains("Animesh");

    })

    it.skip('Read all the rows & Columns data in the first page', () => {

        cy.get("table[name='BookTable']>tbody>tr")
            .each(($row, index, $rows) => {

                cy.wrap($row).within(() => {

                    cy.get("td").each(($col, index, $cols) => {
                        cy.log($col.text());
                    })
                })

            })

    })

    it.only('Pagination', () => {



    })
}))