# Email Sign-up Automation

Automation of positive scenarios for email sign-up using Selenium Webdriver and WebdriverIO

### Installation

1. Clone or download this repository to your local machine: https://github.com/arcmorales/hooq
2. Run `npm install`in your terminal to download all node packages and libraries needed

## Running the tests

1. In your terminal, open two windows of your local repository's root folder.
2. On one window, run the Selenium standalone server and the gecko driver using the following command:
`java -jar -Dwebdriver.gecko.driver=./geckodriver selenium-server-standalone-3.6.0.jar`
3. On the other window, run `./node_modules/.bin/wdio wdio.conf.js`
4. An instance of the firefox browser would prompt with the tests being executed.
5. Check the results in the terminal.

## Limitations
Notice in the test the use of an online disposable email service (temp-mail) to act as receiver of the verification emails from Hooq. This poses a limitation and a possibility of temp-mail server being down, thus the test may fail. 

Any downtimes on this service is out of the automation's scope.

A recommendation would be to set-up a local email server similar to (temp-mail) for testing purposes.

## Demo

![alt text](https://github.com/arcmorales/hooq/blob/master/img/hooq.gif "Hooq")

## Author

**Ara Morales**