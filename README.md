Jasmine Boilerplate 
===================

To the existing framework, I have added Tests to validate Retirement calculator app on Securion web page.
Additional Notes on my changes:
1. Tests are written under the file name: 'test/specs/retirementCalculator.spec.ts'
2. Followed PageObject pattern approach and the page objects files that I created are - 'test/pageObjects/retirementCalcDfltVals.page.ts' & 'test/pageObjects/retirementCalcReqVals.page.ts'
3. I have written the code in TypeScript and used the Jasmine framework.
4. Tests read the input data from a Json file. Test data file - 'test/resources/testData/RetirementData1.json'
5. Added Allure Reporting to the framework.
6. Test can be triggered from the terminal using command - 'npm run test:local' .


Boilerplate project to run WebdriverIO tests with Jasmine using latest ES2016 features and the page objects pattern.

## Quick Start

Choose one of the following options:

1. Download the latest stable release [here](https://github.com/webdriverio/jasmine-boilerplate/archive/master.zip) or clone the git repo — `git clone https://github.com/webdriverio/jasmine-boilerplate.git`

2. Then copy the files to your project directory (all files in `/test` and the `wdio.*.conf.js`)

3. Merge project dev dependencies with your projects dev dependencies in your `package.json`


## Features

- super simple setup
- Page Object pattern used
- ESNext ready
- Integration with [Sauce Labs](https://saucelabs.com/)
- Example using [GitHub Actions](https://github.com/features/actions)
