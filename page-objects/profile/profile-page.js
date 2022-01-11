const faker = require('faker');
const { expect } = require('chai');

class ProfilePage
//extends CommonPage
{
    get profileFirstNameTxt() { return $('[id="firstname"]') };
    get profileLastNameTxt() { return $('[id="lastname"]') };
    get profileUsernameTxt() { return $('[id="handle"]') };
    get profileEmailTxt() { return $('[id="email"]') };
    get profileLocationBtn() { return $('[id="location"]') };
    get ukProfileLocation() { return $('[value="en_GB"]') };
    get australiaProfilLocation() { return $('[value="en_AU"]') };
    get canadaProfilLocation() { return $('[value="en_CA"]') };
    get usProfilLocation() { return $('[value="en_US"]') };
    get profilePreferredCategoryBtn() { return $('[id="preferredCategoryId"]') };
    get manProfilePreferredCategoryBtn() { return $('[value="men"]') };
    get womanProfilePreferredCategoryBtn() { return $('[value="women"]') };
    get profileSaveChangesBtn() { return $('[data-test="profile__save-changes"]') };


    // helper method that changes profile Info to the given parameters
    changeProfileInfo(firstName, lastName, username, email,) {
        // change first name, last name, username, email
        this.profileFirstNameTxt.setValue(firstName);
        this.profileLastNameTxt.setValue(lastName);
        this.profileUsernameTxt.setValue(username);
        this.profileEmailTxt.setValue(email);
        // change location and select one of the given menu options
        this.profileLocationBtn.click();
        this.canadaProfilLocation.click();
        // change preferred category
        this.profilePreferredCategoryBtn.click();
        this.womanProfilePreferredCategoryBtn.click();
        // save changes
        this.profileSaveChangesBtn.click();
        browser.refresh();
    }

    // helper method that verifies that the current Info match the given ones
    verifyProfileInfo(firstName, lastName, username,) {
        // ensure that you are on the General Info page
        this.profileFirstNameTxt.waitForDisplayed();
        // verify first name, last name, email, and location
        expect(this.profileFirstNameTxt.getAttribute('value')).to.equal(firstName);
        expect(this.profileLastNameTxt.getAttribute('value')).to.equal(lastName);
        expect(this.profileUsernameTxt.getAttribute('value')).to.equal(username);

    }

    // helper method that swaps the General profile Info
    swapProfileInfo() {
        // setting up a new username that at least 8 symbols long. This step is necessary to avoid username duplication with another accounts
        let tempUserName = "testUsername" + faker.datatype.number();
        // check if the current Info are equal to one of the options and if not, apply them
        if (this.profileFirstNameTxt.getAttribute('value') != 'Rick') {
            this.changeProfileInfo('Rick', 'Test', tempUserName.toLowerCase());
            this.verifyProfileInfo('Rick', 'Test', tempUserName.toLowerCase());
        }
        // if the current Info are equal the first option, apply the other one
        else {
            this.changeProfileInfo('Test', 'Doe', tempUserName.toLowerCase());
            this.verifyProfileInfo('Test', 'Doe', tempUserName.toLowerCase());
        }
    }

}

module.exports = new ProfilePage();