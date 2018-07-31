var BasePage = function(){

    this.navigateToURL = function(){

        browser.driver.get(OR.json);

    };

    this.getPageTitle = function(){

        return browser.driver.getTitle();

    }
};
module.exports = new BasePage();