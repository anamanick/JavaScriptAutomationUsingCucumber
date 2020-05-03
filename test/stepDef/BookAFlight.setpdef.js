import {Then} from 'cucumber';
import BookAFlight from '../pageobjects/BookAFlight.page';
import FlightConfirmation from '../pageobjects/FlightConfirmation.page';
import SelectFlight from '../pageobjects/SelectFlight.page';

Then(/^user clicks on continue$/,function(){

    SelectFlight.continueBtn();

});

Then(/^user completes the passengers information$/,function(){

    BookAFlight.completeBookingInformation();

});

Then(/^user clicks on secure purchase$/,function(){

    FlightConfirmation.validateBookingConfirmation();

});
