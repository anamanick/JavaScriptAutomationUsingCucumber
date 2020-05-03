class BookAFlight{

    get bookAFlightImg(){ return $("//img[@src='/images/masts/mast_book.gif']")};

    get passengerFirstName() { return $("//input[@name='passFirst0']") };
    
    get passengerLastName() { return $("//input[@name='passLast0']") };
    
    get mealType() { return $("//select[@name='pass.0.meal']") };

    get ccType() { return $("//select[@name='creditCard']") };
    
    get ccNumber() { return $("//input[@name='creditnumber']") };

    get ccExpMonth() { return $("//select[@name='cc_exp_dt_mn']") };
    
    get ccExpYear() { return $("//select[@name='cc_exp_dt_yr']") };

    get ccFirstName() { return $("//input[@name='cc_frst_name']") };
    
    get ccMiddleName() { return $("//input[@name='cc_mid_name']") };
    
    get ccLastName() { return $("//input[@name='cc_last_name']") };


    get ticketLessChkBox() { return $("//input[@name='ticketLess'][1]") };

    get billingAddress() { return $("//input[@name='billAddress1']") };
    
    get billingCity() { return $("//input[@name='billCity']") };
    
    get billingState() { return $("//input[@name='billState']") };

    get billingZip() { return $("//input[@name='billZip']") };

    get billingCountry() { return $("//select[@name='billCountry']") };

    get deliveryChkBox() { return $("//input[@name='ticketLess'][2]") };

    get securePurchageBtn() {return $("//input[@name='buyFlights']")};

    completeBookingInformation(){
        this.bookAFlightImg.waitForDisplayed(20000);
        this.passengerFirstName.setValue("Anick");
        this.passengerLastName.setValue("Anam");
        this.mealType.selectByVisibleText("Muslim");
        this.ccType.selectByVisibleText("Visa");
        this.ccNumber.setValue("4111111111111111");
        this.ccExpMonth.selectByVisibleText("09");
        this.ccExpYear.selectByVisibleText("2009");
        this.ccFirstName.setValue("Anick");
        this.ccMiddleName.setValue("None");
        this.ccLastName.setValue("Anam");
        this.billingAddress.setValue("3536 Millenia Blvd Apt 5555");
        this.billingCity.setValue("Orlando");
        this.billingState.setValue("FL");
        this.billingZip.setValue("32827");
        this.billingCountry.selectByVisibleText("UNITED STATES");
        browser.pause(10000);
        this.securePurchageBtn.click();
    }
}

export default new BookAFlight();