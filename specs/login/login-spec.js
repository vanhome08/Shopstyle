const LoginPage = require('../../page-objects/login/login-page.js');

describe('Login', () => {
    it('User should be able to Log In using email and password', () => {
        // log in using test account creds
        LoginPage.login()
        //  browser.debug()
    })

})