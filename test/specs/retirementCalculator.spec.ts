import retireCalcDefaultVlsPage from '../pageobjects/retirementCalcDfltVals.page';
import retirementCalculator from '../pageobjects/retirementCalcReqVals.page'
import formdata from "../resources/testData/RetirementData1.json";


describe('Pre-Retirement Calculator App', () => {

    //Scenario's 

    it('Submit Form with all Required Fields', async () => {
        await retirementCalculator.open();
        await retirementCalculator.retirementFormIsDisplayed();
        await requiredFieldsInput();

        if (formdata.Social_Security_Benifit === "Yes") {
            await retirementCalculator.SocialBenifitsCheckYes.click();
            if (formdata.Relationship_status === "Married") {
                await retirementCalculator.MaritalStatus.click();
            }
        }
        await clickCalculateButton();
        await expect(retirementCalculator.requiredFieldsAlert).not.toBeDisplayed();
        await expect(retirementCalculator.result).toBePresent();
        await expect(retirementCalculator.resultsSection).toBeDisplayed();
    })

    it('Display Additional social Security fields based on the toggle', async () => {
        await retirementCalculator.open();
        await retirementCalculator.retirementFormIsDisplayed();
        await retirementCalculator.noSocialSecurityBenifitsBlk();

        if (formdata.Social_Security_Benifit === "Yes") {
            await retirementCalculator.SocialBenifitsCheckYes.click();
            await expect(retirementCalculator.SocialBenifitsMaritalStatusBlock).toBeDisplayed();
            await expect(retirementCalculator.SocialBenifitsOverRideBlock).toBeDisplayed();
            if (formdata.Relationship_status === "Married") {
                await retirementCalculator.MaritalStatus.click();
            }
            await retirementCalculator.SocialSecurityOverRide.setValue(formdata.Social_Security_Override)
        }

        await retirementCalculator.SocialBenifitsCheckNo.click();
        await retirementCalculator.noSocialSecurityBenifitsBlk();

    })

    it('Submit Form with all Fields filled', async () => {
        await retirementCalculator.open();
        await retirementCalculator.retirementFormIsDisplayed();
        await requiredFieldsInput();

        if (formdata.Social_Security_Benifit === "Yes") {
            await retirementCalculator.SocialBenifitsCheckYes.click();
            if (formdata.Relationship_status === "Married") {
                await retirementCalculator.MaritalStatus.click();
            }
            await retirementCalculator.SocialSecurityOverRide.setValue(formdata.Social_Security_Override)
        }
        await retirementCalculator.adjustDefaultVls.click();
        await expect(retireCalcDefaultVlsPage.titleText).toBePresent();
        await defaultFieldInputs();
        await clickCalculateButton();
        await expect(retirementCalculator.requiredFieldsAlert).not.toBeDisplayed();
        await expect(retirementCalculator.resultsSection).toBeDisplayed();
    })

    it('Update Default values', async () => {
        await retirementCalculator.open();
        await retirementCalculator.retirementFormIsDisplayed();
        await expect(retirementCalculator.defaultCalcValuesText).toBePresent();
        await expect(retirementCalculator.adjustDefaultVls).toBeClickable();
        await requiredFieldsInput();
        await retirementCalculator.adjustDefaultVls.click();
        await expect(retireCalcDefaultVlsPage.titleText).toBePresent();
        await defaultFieldInputs();
        await expect(retirementCalculator.retirementCalcForm).toBeDisplayed();
        await clickCalculateButton();
        await expect(retirementCalculator.resultsSection).toBeDisplayed();
    })

    // Negative scenario

    it('Submit form without filling required fields', async () => {
        await retirementCalculator.open();
        await retirementCalculator.retirementFormIsDisplayed();
        await retirementCalculator.calculateBtn.click();
        await expect(retirementCalculator.requiredFieldsAlert).toBeDisplayed();
    })

    // Common reusable functions

    async function requiredFieldsInput() {
        await browser.maximizeWindow();
        await retirementCalculator.currentAge.click()
        await retirementCalculator.currentAge.setValue(formdata.Current_Age);
        await retirementCalculator.retirementAge.setValue(formdata.retirement_Age);
        await retirementCalculator.currentIncome.click();
        await retirementCalculator.currentIncome.setValue(formdata.Current_Annual_Income);
        await retirementCalculator.spouseIncome.click();
        await retirementCalculator.spouseIncome.setValue(formdata.Spouse_annual_income); //not a required field
        await retirementCalculator.currentSavingsBalance.click();
        await retirementCalculator.currentSavingsBalance.setValue(formdata.Current_retirement_savings);
        await retirementCalculator.currentAnnualSavings.setValue(formdata.Current_retirement_contribution);
        await retirementCalculator.RateOfIncrease.setValue(formdata.Annual_retirement_contribution_increase);
    }

    async function defaultFieldInputs() {
        await browser.pause(300)
        await retireCalcDefaultVlsPage.additionalIncome.click();
        await retireCalcDefaultVlsPage.additionalIncome.setValue(formdata.Additional_income);
        await retireCalcDefaultVlsPage.retirementDuration.click();
        await retireCalcDefaultVlsPage.retirementDuration.setValue(formdata.years_Retirement_To_Last);
        await retireCalcDefaultVlsPage.postRetirementtIncomeRadioBtn.click();
        await retireCalcDefaultVlsPage.finalAnnualIncome.click();
        await retireCalcDefaultVlsPage.finalAnnualIncome.setValue(formdata.Final_Annual_Income_Desired);
        await retireCalcDefaultVlsPage.postRetirementROI.setValue(formdata.PostRetirement_Return);
        await retireCalcDefaultVlsPage.preRetirementROI.setValue(formdata.PreRetirement_Return);
        await retireCalcDefaultVlsPage.saveChangesBtn.click();
    }

    async function clickCalculateButton() {
        await retirementCalculator.calculateBtn.click();
        await retirementCalculator.result.waitUntil(async function () {
            return (await retirementCalculator.result.getText()) === 'Results'
        }, {
            timeout: 10000,
            timeoutMsg: "Page took too long to load"
        })
    }

})