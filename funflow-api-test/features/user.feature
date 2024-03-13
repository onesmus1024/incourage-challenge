Feature: Can user login with email and password
  In order to access the system
  As a user
  I want to be able to login with my email and password

  Scenario: User logs in with email and password
    Given a user logs in with email and password
    Then the response status code should be 200

  Scenario: User logs in with invalid email and password
    Given a user logs in with invalid email and password
    Then the response status code should be 400


