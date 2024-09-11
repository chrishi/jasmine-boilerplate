class retireCalcDefaultVlsPage{
    
    
    get titleText(){ return $('#default-values-modal-title') }
    get additionalIncome(){ return $('//input[@id="additional-income"]') }
    get retirementDuration(){ return $('//input[@id="retirement-duration"]') }
    get postRetirementtIncomeRadioBtn(){ return $('//div[@aria-labelledby="inflation-label"]/div[1]/label') }
    get finalAnnualIncome(){ return $('//input[@id="retirement-annual-income"]') }
    get preRetirementROI(){ return $('//input[@id="pre-retirement-roi"]') }
    get postRetirementROI(){ return $('//input[@id="post-retirement-roi"]') }
    get saveChangesBtn(){ return $('button=Save changes') }

}

export default new retireCalcDefaultVlsPage()