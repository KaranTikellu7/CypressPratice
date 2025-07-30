import MainPage from '../support/pages/mainPage'

describe('Main page', () => {
  const mainPage = new MainPage()

  beforeEach(()=>{
    cy.visit('/')
  })
 
  it('Verify Main Page', () => {
    mainPage.verifyNavLinks()
    mainPage.verifyAdvertisementCard()
    mainPage.verifyFilterTextbox()
    mainPage.verifyProductTable()
  })
})
