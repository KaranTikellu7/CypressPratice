import MainPage from '../support/pages/mainPage'

describe('Main page', () => {
  const mainPage = new MainPage()
 
  it('Verify Main Page', () => {
    cy.visit('/')

    mainPage.verifyNavLinks()
  })
})
