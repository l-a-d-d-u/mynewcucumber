Feature: login Sction Test
  Scenario: Successful Login with Valid Credentials
    Given the login page is opened
    When user enters "Lalitha" as a username and "password123" as a password
    When user click on Login Button
    Then user will Finds a testmeapp homepage
    