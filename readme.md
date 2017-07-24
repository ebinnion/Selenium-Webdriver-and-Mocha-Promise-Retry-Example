# Selenium Webdriver and Mocha Promise Retry Example

While working on a fairly brittle test recently, that required logging in after a site had provisioned, I needed a way to retry a test a few times before giving up. I found a few examples, but nothing that was written specifically for Selenium Webdriver and Mocha.

This repo is just that. A basic example showing how retrying promises in Selenium Webdriver could work.

### To test

- Download repo
- Run `npm install` to download dependencies (also, be sure to install chromedriver)
- Run `npm test`