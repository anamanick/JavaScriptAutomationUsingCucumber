Feature: This is find flights Feature

    Background:
    Given user navigates to demo web tour application

    Scenario: User should be able to login to demo webtour site and book a flight
    When user loghin using default user and password
    Then user validates flight search page
    Then user completes flight information
    Then user validates find flight page
    Then user clicks logout