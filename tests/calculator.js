let homepage = require('../pages/homepage')

describe('semo calculator tests', function () {

    it('addition test', function () {


        homepage.get('http://juliemr.github.io/protractor-demo/');


        homepage.enterFirstNumber('4');


        homepage.enterSecondNumber('5');



        homepage.clickGo();



        homepage.verifyResult('9');

        browser.sleep(3000);

    });

    

});
