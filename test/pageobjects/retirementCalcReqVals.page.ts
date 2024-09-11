import Page from "./page"

class retirementCalculatorPage extends Page{

    //defined all my elements here
    get retirementCalcForm() { return $('.enhancedRetirementCalculator')}
    get currentAge(){ return $('#current-age') }
    get retirementAge() { return $('#retirement-age')}
    get currentIncome() { return $('//input[@id="current-income"]')}
    get spouseIncome(){ return $('#spouse-income') }
    get currentSavingsBalance(){ return $('#current-total-savings') }
    get currentAnnualSavings(){ return $('#current-annual-savings') }
    get RateOfIncrease(){ return $('#savings-increase-rate') }
    get SocialBenifitsCheckYes(){ return $('//*[@id="include-social-container"]/div/div[1]/label') }
    get SocialBenifitsCheckNo(){ return $('//*[@id="include-social-container"]/div/div[2]/label') }
    get SocialBenifitsMaritalStatusBlock() { return $('#marital-status-toggle-group')}
    get SocialBenifitsOverRideBlock() { return $('//*[@class="row social-security-field"][2]')}
    get MaritalStatus(){ return $('//*[@id="marital-status-ul"]/div[2]/label') }
    get SocialSecurityOverRide(){ return $('#social-security-override')}

    get calculateBtn(){ return $('button=Calculate') }
    get result(){ return $('h3=Results')}
    get resultsSection() { return $('#calculator-results-section')}
    get defaultCalcValuesText() { return $('#assumption-label')}
    get adjustDefaultVls() { return $('//*[text()="Adjust default values"]')}
    get requiredFieldsAlert() { return $('#calculator-input-alert-desc')}


    async retirementFormIsDisplayed() {
        await this.retirementCalcForm.waitForDisplayed();
        await expect(this.retirementCalcForm).toBeDisplayed();
    }

    async noSocialSecurityBenifitsBlk() {
        await expect(this.SocialBenifitsMaritalStatusBlock).not.toBeDisplayed();
        await expect(this.SocialBenifitsOverRideBlock).not.toBeDisplayed();
    }

    open () {
        return super.open('retirement-calculator.html')
    }
    
}

export default new retirementCalculatorPage()