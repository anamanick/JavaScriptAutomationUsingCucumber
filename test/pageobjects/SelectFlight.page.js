class SelectFlight{

    get continueBtn2(){return $("//input[@name='reserveFlights']")};

    continueBtn(){
        this.continueBtn2.waitForExist(10000);
        this.continueBtn2.click();
    }

}
export default new SelectFlight();