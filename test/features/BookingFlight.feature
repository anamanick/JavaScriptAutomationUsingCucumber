Feature: This feature is about booking a flight

    Background:
    Given user navigates to demo web tour application

    Scenario: User should be able to login to demo webtour site and book a flight and complete a purchase
    When user loghin using default user and password
    Then user validates flight search page
    Then user completes flight information
    Then user clicks on continue
    Then user completes the passengers information
    Then user clicks on secure purchase