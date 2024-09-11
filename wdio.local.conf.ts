import { config as sharedConfig } from './wdio.shared.conf.js'


export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],
        capabilities: [{
            browserName: 'chrome'
            // 'goog:chromeOptions': {
            //     args: ['headless', 'disable-gpu']
            // }
        }]
    }
}
