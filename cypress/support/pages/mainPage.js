import mainPage from '../locators/mainPage.json'

class MainPage {
  verifyNavLinks() {
    const navLinks = ['Products', 'Add Product', 'Practice', 'Learn', 'Login']
    cy.xpath(mainPage.mainPageNavLinks).should('be.visible')

    cy.xpath(mainPage.mainPageNavLinks)
      .should('have.length', navLinks.length)
      .each(($elements, index) => {
        cy.wrap($elements)
          .should('have.text', navLinks[index])
          .and('have.attr', 'href')
      })
  }

  verifyAdvertisementCard() {
    cy.xpath(mainPage.banner).should('be.visible')
    cy.xpath(mainPage.bannerText).should(
      'have.text',
      'ADVERTISE YOUR PRODUCT / SERVICE HERE: Contact me on X @CommitQuality'
    )
    cy.xpath(mainPage.bannerAdvertismentLink).should('have.attr', 'href')
  }

  verifyFilterTextbox() {
    cy.xpath(mainPage.filterTextbox)
      .should('be.visible')
      .and('have.attr', 'placeholder', 'Filter by product name')

    cy.xpath(mainPage.filterButton)
      .should('be.enabled')
      .and('have.text', 'Filter')

    cy.xpath(mainPage.resetButton)
      .should('be.enabled')
      .and('have.text', 'Reset')
  }

  verifyProductTable() {
    let productListColumnHeader = ['ID', 'Name', 'Price', 'Date Stocked']

    cy.xpath(mainPage.productListTable).should('be.visible')

    cy.xpath(mainPage.productListTableColumn)
      .and('have.length', productListColumnHeader.length)
      .each(($header, index) => {
        cy.wrap($header).should('have.text', productListColumnHeader[index])
      })

    cy.xpath(mainPage.showMoreButton)
      .should('have.text', 'Show More')
      .and('be.enabled')

    cy.xpath(mainPage.addProductButton)
      .should('have.text', 'Add a Product')
      .and('have.attr', 'href')
  }
}

export default MainPage
