'use strict';
var expect = require('chai').expect;
//generate timestamp
var emailDomain;
var fullEmail;
var randomEmail = "Test_HOOQ_" + Date.now();

describe('Preparing mock email receiver information', function () {
    it('should set inbox of online email receiver', function () {
                browser.url('https://temp-mail.org/en/option/change/');
                browser.waitForExist('input[name="mail"]');
                emailDomain = browser.getValue('#domain');
                var uname = browser.element('input[name="mail"]');
                uname.setValue(randomEmail);
                browser.submitForm('.form-horizontal');
                browser.waitForExist('.alert-success');
    })

})
describe('Navigation to HOOQ landing page', function() {
        it('should be able to navigate to HOOQ landing page', function () {
                browser.url('https://wooow.hooq.tv/welcome');
                var isLanding = browser.isExisting('#welcome-mount');
                expect(isLanding).to.be.true;
                
        });
});

describe('Positive test to redirection to sign-up page', function() {
        it('should be able find the sign-up button on the nav', function () {
                browser.scroll('div.whats-hot');
                browser.click('.nav-item .btn-signup');
                var isSignUpPage = browser.isExisting('div.signup');
                expect(isSignUpPage).to.be.true;
                var emailSignupUrl = browser.getUrl();
                expect(isSignUpPage).to.be.true;
         });

         it('should be able to redirect to the correct sign-up url', function () {
                var emailSignupUrl = browser.getUrl();
console.log(emailSignupUrl)
                expect(emailSignupUrl).to.equal('https://wooow.hooq.tv/sg/signup-email');
         });
});

describe('Positive test to signing up via email', function () {
        it('should allow the user to sign-up when valid email is provided', function () {
                var emailField = browser.element('input[type="email"]');
                fullEmail = randomEmail + emailDomain;
console.log(fullEmail)
                emailField.setValue(fullEmail);
                browser.waitForEnabled('#submit-button');
                browser.click('#submit-button');
                browser.waitForExist('a#resend-button');
                var getButtonMsg = browser.getText('a#submit-button span');
console.log(getButtonMsg)
                expect(getButtonMsg).to.equal('I have verified');
        })

        it('should receive the email confirmation link from HOOQ system', function () {
            browser.url('https://temp-mail.org/');
            browser.waitForExist('.mailListTable');
            browser.click('=HOOQ - Your verification');
            pause(1000);
            browser.waitForVisible('=Confirm Email');
            browser.click('=Confirm Email')
            pause(10000)
        })
})






// describe('Negative test to login page', function() {
//         before(function() {
//             browser.url('https://arcmorales.github.io/demo/');
//             browser.pause(1500); 
//     });
//         it('should not be able to log in with empty credentials', function () {
//                 browser.click('button[type="submit"]');
//                 browser.waitForVisible('.alert');
//                 var errMsg = browser.getText('span.errormsg');
//                 expect(errMsg).to.equal('Invalid username or password');
//         });

//         it('should not be able to log in with white spaces as credentials', function () {
//                 var username = browser.element('#inputUser');
//                 var password = browser.element('#inputPassword');
//                 username.setValue('    ');
//                 password.setValue(' ');
//                 browser.click('button[type="submit"]');
//                 browser.waitForVisible('.alert');
//                 var errMsg = browser.getText('span.errormsg');
//                 expect(errMsg).to.equal('Invalid username or password');
//         });

//          it('should not be able to log in with valid username but invalid password', function () {
//                 var username = browser.element('#inputUser');
//                 var password = browser.element('#inputPassword');
//                 username.setValue('A_morales');
//                 password.setValue('#PazWorD');
//                 browser.click('button[type="submit"]');
//                 browser.waitForVisible('.alert');
//                 var errMsg = browser.getText('span.errormsg');
//                 expect(errMsg).to.equal('Invalid username or password');
//         });

//          it('should not be able to log in with invalid username but valid password', function () {
//                 var username = browser.element('#inputUser');
//                 var password = browser.element('#inputPassword');
//                 username.setValue('AaaAaaaTEST');
//                 password.setValue('&PazWorD');
//                 browser.click('button[type="submit"]');
//                 browser.waitForVisible('.alert');
//                 var errMsg = browser.getText('span.errormsg');
//                 expect(errMsg).to.equal('Invalid username or password');
//         });

//             it('should not be able to log in with non-existent username and non-existent password', function () {
//                 var username = browser.element('#inputUser');
//                 var password = browser.element('#inputPassword');
//                 username.setValue('RAndom');
//                 password.setValue('$$RanDom');
//                 browser.click('button[type="submit"]');
//                 browser.waitForVisible('.alert');
//                 var errMsg = browser.getText('span.errormsg');
//                 expect(errMsg).to.equal('Invalid username or password');
//         });

//             it('should not be able to log in with empty username and an existing password', function () {
//                 var username = browser.element('#inputUser');
//                 var password = browser.element('#inputPassword');
//                 username.setValue('');
//                 password.setValue('&PazWorD');
//                 browser.click('button[type="submit"]');
//                 browser.waitForVisible('.alert');
//                 var errMsg = browser.getText('span.errormsg');
//                 expect(errMsg).to.equal('Invalid username or password');
//         });

//             it('should not be able to log in with valid username and empty password', function () {
//                 var username = browser.element('#inputUser');
//                 var password = browser.element('#inputPassword');
//                 username.setValue('A_morales');
//                 password.setValue('');
//                 browser.click('button[type="submit"]');
//                 browser.waitForVisible('.alert');
//                 var errMsg = browser.getText('span.errormsg');
//                 expect(errMsg).to.equal('Invalid username or password');
//         });

//             it('should not be able to log in with valid username and password of wrong letter casing', function () {
//                 var username = browser.element('#inputUser');
//                 var password = browser.element('#inputPassword');
//                 username.setValue('A_morales');
//                 password.setValue('&paszworD');
//                 browser.click('button[type="submit"]');
//                 browser.waitForVisible('.alert');
//                 var errMsg = browser.getText('span.errormsg');
//                 expect(errMsg).to.equal('Invalid username or password');
//         });


// });