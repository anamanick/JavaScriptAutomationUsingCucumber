class FlightFinder{

    get tripTypeOneway() { return $("//input[@name='tripType' and @value='oneway']") };
    get tripTypeTwoway() { return $("//input[@name='tripType' and @value='roundtrip']") };
    get passengers() { return $("//select[@name='passCount']") };
    
    get departingFrom() { return $("//select[@name='fromPort']") };

    get dateMonthFrom() { return $("//select[@name='fromMonth']") };
    get dateDayFrom() { return $("//select[@name='fromDay']") };
    

    get arrivingIn() { return $("//select[@name='toPort']") };

    get dateMonthTo() { return $("//select[@name='toMonth']") };
    get dateDayTo() { return $("//select[@name='toDay']") };

    get serviceClassFirst() { return $("//input[@name='servClass' and @value='First']") };
    get serviceClassBusiness() { return $("//input[@name='servClass' and @value='Business']") };
    get serviceClassEconomic() { return $("//input[@name='servClass' and @value='Coach']") };

    get airLine() { return $("//select[@name='airline']") };

    get continueBtn() { return $("//input[@name='findFlights']") };

    get logoutLnk() { return $("//*[contains(text(), 'SIGN-OFF')]") }

    get nextPage() { return $("//img[@src='/images/masts/mast_selectflight.gif']") };

    findFlight(){
        this.tripTypeOneway.waitForExist();
        this.tripTypeOneway.click();
        this.tripTypeTwoway.click();
        this.passengers.selectByIndex(1);
        this.departingFrom.selectByVisibleText("New York");
        this.dateMonthFrom.selectByVisibleText("June");
        this.dateDayFrom.selectByVisibleText("10");
        this.arrivingIn.selectByVisibleText("Zurich");
        this.dateMonthTo.selectByVisibleText("July");
        this.dateDayTo.selectByVisibleText("10");
        this.serviceClassFirst.click();
        this.airLine.selectByVisibleText("Unified Airlines");
        this.continueBtn.click();
        this.nextPage.waitForExist();

    }

    logout(){
        this.logoutLnk.click();
    }
}
export default new FlightFinder();