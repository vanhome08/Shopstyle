//const CommonPage = require("../../common/common-page.js")

class DashboardPage
//extends CommonPage
{
    get profileIcon() { return $('[data-test="profile-icon"]') };
    get myProfileMenuIcon() {return $('[id="myProfile"]')}

     // helper method that opens profile -> my profile
     openProfileMyProfile() {
        this.profileIcon.click()
        this.myProfileMenuIcon.click();
        };
    
};

module.exports = new DashboardPage();