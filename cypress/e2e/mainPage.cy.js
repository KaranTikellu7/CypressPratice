describe('Main page', () => {
  it('Verify Main Page', () => {
    cy.visit('/')

    cy.xpath('//div[@class="nav-links "]').should('be.exist')
  })
})