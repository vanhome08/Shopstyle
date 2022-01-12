const LoginPage = require('../../page-objects/login/login-page.js');

describe('Login', () => {
  it('User should be able to Log out', () => {
    // log in using test account creds
    LoginPage.login()
    // log out
    LoginPage.logOut()
    //  browser.debug()
  })
})