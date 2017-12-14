'use strict';
var expect = require('chai').expect;
//generate timestamp
var emailDomain;
var fullEmail;
var randomEmail = "Test_HOOQ_" + Date.now();

describe('Preparing mock email receiver information', function () {
    it('should set inbox of online email receiver', function () {
        console.log('>>> preparing mock email receiver information...')
                browser.url('https://temp-mail.org/en/option/change/');
                browser.waitForExist('input[name="mail"]');
                emailDomain = browser.getValue('#domain');
                var uname = browser.element('input[name="mail"]');
                uname.setValue(randomEmail);
                browser.submitForm('.form-horizontal');
                browser.waitForExist('.alert-success');
                browser.pause(1000);
    })

})
describe('Navigation to HOOQ landing page', function() {
        it('should be able to navigate to HOOQ landing page', function () {
            console.log('>>> navigating to HOOQ landing page...')
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
                expect(emailSignupUrl).to.equal('https://wooow.hooq.tv/sg/signup-email');
         });
});

describe('Positive test to signing up via email', function () {
        it('should allow the user to sign-up when valid email and password is provided', function () {
                var emailField = browser.element('input[type="email"]');
                fullEmail = randomEmail + emailDomain;
                console.log('>>> signing up with email: '+fullEmail)
                emailField.setValue(fullEmail);
    /* insert here the automated test for adding a password field upon sign-up
        the test is expected to fail here, since the selectors being used are non-existent and are just presumed
        scenario:
            two password fields, one for setting password, another in order to verify password match
    */        
                var randomPassword = "TestPwd" + Date.now();            
                var passwordField = browser.element('input#QA-password[type="password"]');
                passwordField.setValue(randomPassword);
                var passwordRetype = browser.element('input#QA-retype-password[type="password"]');
                passwordRetype.setValue(randomPassword);
                browser.waitForEnabled('#submit-button');
                browser.click('#submit-button');
                browser.waitForExist('a#resend-button');
                var getButtonMsg = browser.getText('a#submit-button span');
                expect(getButtonMsg).to.equal('I have verified');
        })

        it('should receive the email confirmation link from HOOQ system', function () {
                console.log('>>> checking system generated email verification...')
                browser.url('https://temp-mail.org/');
                browser.waitForExist('.mailListTable');
                browser.click('=HOOQ - Your verification');
                browser.pause(1000);
                browser.waitForVisible('=Confirm Email');
        })

        it('should be able to verify the email', function () {
                console.log('>>> activating account...')
                browser.click('=Confirm Email');
                var handles = browser.windowHandles();
                browser.switchTab(handles[0]).pause(2000);
                browser.url('https://www.hooq.tv/sg/signup-app-verified')
                var verifiedHeading = browser.getText('h3.card-title');
                expect(verifiedHeading).to.equal('I HAVE VERIFIED');
        })
})


// });