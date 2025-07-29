class mainPage {
    verifyHeaderBar(){
        cy.xpath('//div[@class="nav-links "]').should('be.exist')
    }
}