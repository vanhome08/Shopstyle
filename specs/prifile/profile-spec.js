const ProfilePage = require('../../page-objects/profile/profile-page.js');
const LoginPage = require('../../page-objects/login/login-page.js');
const DashboardPage = require('../../page-objects/dashboard/dashboard-page.js');
const {expect} = require('chai');
describe('Profile', () => {
    it('User should be able to add and save basic information (name, email, location, preferred category)', () => {
        // log in using test account creds
        LoginPage.login()
        // Open prifile => my profile
        DashboardPage.openProfileMyProfile()
        // swap profile settings and verify that they were saved
        ProfilePage.swapProfileInfo();
    })

})