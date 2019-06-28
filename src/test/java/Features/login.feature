Feature: log in to facebook.com
@SmokeTest @RegressionTest
Scenario Outline: enter username and password to facebook.com and validate 

Given user is on Login Page
When title of login page is Facebook
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on home page
Then close the browser
Examples:
		| username| password|
		|  	  |  	    |
		| 	  |   	    |
#End2End 
#Scenario: some scenario
#Given some method

#if you have 1000s of scenarios you can seggregate by tags
# can use AND or OR type for tags
#use ~to ignore tags
