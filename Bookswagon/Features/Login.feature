Feature: Login
	verify the functionalities in the application

@Browser:Chrome
@SmokeTest
Scenario: Verify if the login functionality is working (+ve case)
	Given I  navigated to my application
	And I type the data
		| Email                         | Password     |
		| sriharshinirao25@gmail.com | harshini@25 |
	When I click Login Button
	Then  I should see my account
