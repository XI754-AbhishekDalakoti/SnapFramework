var LoginPage=function () {

    this.enterDetails = function () {
        browser.driver.findElement(by.xpath('//input[@name="username"]')).sendKeys('sgarg');

        browser.driver.findElement(by.xpath('//input[@name="password"]')).sendKeys('Tribune!1');

        browser.driver.findElement(by.xpath('//button[@class="btn meta-btn"]')).click();
    };

};

module.exports = new LoginPage();