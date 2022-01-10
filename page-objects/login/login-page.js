//const CommonPage = require("../../common/common-page.js")

class LoginPage
//extends CommonPage 
{
    get emailTxt() { return $('[data-test="email-input"]') };
    get passwordTxt() { return $('[data-test="password-input"]') }
    get loginBtn() { return $('[data-test="login-button"]') }
    get nextLoginBtn() { return $('[data-test="submit-button"]') }
    get profileLogoIcon() { return $('[data-test="profile-icon"]') }

    get userMenuIcon() { return $('[data-test="profile-icon"]') };
    get logOutBtn() { return $('[id="logout-button"]') };
    get varifyLogOut() { return $('[class="header__wrapper"]') };

    // helper method that logs in using special testing credentials
    login(email = "Okachev.gym@gmail.com", password = "YourPassword") {
        // navigate to Login page and verify that page is open
        browser.url(browser.config.baseUrl)
        //browser.url("http://shopstyle.com")
        this.loginBtn.click();
        this.emailTxt.waitForClickable();
        // enter test email 
        this.emailTxt.setValue(email);

        // enter password
        this.passwordTxt.setValue(password);
        // click join log in button
        this.nextLoginBtn.click();
        this.profileLogoIcon.waitForDisplayed();
    };

    logOut() {
        // open user menu
        this.userMenuIcon.click();
        // click Log Out and verify that user has been taken to a home page
        this.logOutBtn.click();
        this.varifyLogOut.waitForDisplayed();

    };
};

module.exports = new LoginPage();