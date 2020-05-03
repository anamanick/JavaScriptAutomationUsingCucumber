class FlightConfirmation{

    get bookingConfirm(){ return $("//*[contains(text(),'itinerary has been booked!')]")};

    validateBookingConfirmation(){
        this.bookingConfirm.waitForExist(10000);
        browser.pause(5000);
    }
}

export default new FlightConfirmation(); 