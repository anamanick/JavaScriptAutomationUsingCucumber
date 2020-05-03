import {Given, When, Then} from 'cucumber';
import LoginPage from '../pageobjects/login.page';
import FlightFinder from '../pageobjects/FlightFinder.page';

Then(/^user completes flight information$/,function(){
    FlightFinder.findFlight();
});

Then(/^user validates find flight page$/,function(){
    var myurl = browser.getUrl();
    console.log("My Url is " + myurl);
});