class MainPage {
    verifyNavLinks(){
        cy.xpath('//div[@class="nav-links "]').should('be.exist')
    }
}

export default MainPage