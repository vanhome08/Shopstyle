const DashboardPage = require('../../page-objects/dashboard/dashboard-page.js');
const LoginPage = require('../../page-objects/login/login-page.js');
const {expect} = require('chai');
describe('Login', () => {
  it('User should be able to Log out', () => {
    // log in using test account creds
    LoginPage.login()
    // log out
    LoginPage.logOut()
    //  browser.debug()
  })

  it('User should be able to search nike man shoes ', () => {
    // log in using test account creds
    LoginPage.login()
    // log out
    DashboardPage.searchNikeShoesAndGetStorePage();
    const name = DashboardPage.nikeShoesPageTitle.getText()
        expect(name).to.contain('Nike Men\'s Shoes');

    //  browser.debug()
  })
})