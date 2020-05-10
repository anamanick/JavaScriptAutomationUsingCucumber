import {Given, When, Then} from 'cucumber';
import LoginPage from '../pageobjects/login.page';
import FlightFinder from '../pageobjects/FlightFinder.page';


Given(/^user navigates to demo web tour application$/,function(){
    browser.url("http://newtours.demoaut.com");
    browser.maximizeWindow();
});

When(/^user loghin using default user and password$/,function(){
    LoginPage.login();
});

Then(/^user validates flight search page$/,function(){
    //var myurl = browser.getUrl();
    //console.log("My Url is " + myurl);

    var myTitleAndUrl = browser.getUrlAndTitle();
    expect(myTitleAndUrl.url).to.contains('http://newtours.demoaut.com/mercuryreservation');
    expect(myTitleAndUrl.title).to.contains('Find a Flight: Mercury Tours:');
    console.log("My Url and page validation is successful....");


});

Then(/^user clicks logout$/,function(){
    FlightFinder.logout();
});