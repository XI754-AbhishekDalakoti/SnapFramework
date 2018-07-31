describe('automating login page', function() {
    var baseObject = require('../pages/BasePage.js');
    var loginObject = require('../pages/LoginPage.js');

    it('non-angular page so ignore sync and active wait to load', function() {
        baseObject.navigateToURL();
        var title = base.getPageTitle();
                expect(title).toBe("SNAP");
                browser.sleep(3000);
    });

    it('should login the user', function() {
        loginObject.enterDetails();
    });

     describe('Verify the login functionality with valid credentials', function() {
        var baseObject = require('../pages/BasePage.js');
        var loginObject = require('../pages/LoginPage.js');
        browser.ignoreSynchronization=true;
        beforeEach(function()
        { browser.ignoreSynchronization=true;
          baseObject.navigateToURL();
          browser.driver.manage().window().maximize();
          });
        it('should login the user and display  the SNAP  HomePage', function() {
            loginObject.login();
        });
});