import mainPage from '../locators/mainPage.json'

class MainPage {
  verifyNavLinks() {
    const navLinks = ['Products', 'Add Product', 'Practice', 'Learn', 'Login']
    cy.xpath(mainPage.mainPageNavLinks).should('be.visible')

    cy.xpath(mainPage.mainPageNavLinks).each(($elements, index) => {
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
}

export default MainPage
