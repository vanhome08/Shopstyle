//const CommonPage = require("../../common/common-page.js")
const { expect } = require('chai');
class DashboardPage
//extends CommonPage
{
    get profileIcon() { return $('[data-test="profile-icon"]') };
    get myProfileMenuIcon() {return $('[id="myProfile"]')}
    get searchTxt() { return $('[type="text"]')};
    get nikeShoesPageTitle() { return $('[data-test="search-page__title"]')};
    get searchBtn() { return $('[class="mat-icon notranslate u-icon mat-icon-no-color"]')};
    get anyNikeShoes() { return $('[src="https://img.shopstyle-cdn.com/sim/2b/74/2b74fcb7fafdff2c768850a7b1857e89_xlarge/nikecourt-air-max-volley-mens-hard-court-tennis-shoe.jpg"]')};
    get storeVarify() { return $('[class="css-mso6zd"]')};
     // helper method that opens profile -> my profile
     openProfileMyProfile() {
        this.profileIcon.click()
        this.myProfileMenuIcon.click();
        
        };

        // helper method search nike shoes and get store page 
        searchNikeShoesAndGetStorePage(search = 'Nike man shoes') {
            this.searchTxt.click();
            this.searchTxt.setValue(search);
            this.searchBtn.click()

            this.nikeShoesPageTitle.waitForDisplayed();
            
            


    
        };

       };

module.exports = new DashboardPage();