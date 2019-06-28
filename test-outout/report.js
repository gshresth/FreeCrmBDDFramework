$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "log in to facebook.com",
  "description": "",
  "id": "log-in-to-facebook.com",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "enter username and password to facebook.com and validate",
  "description": "",
  "id": "log-in-to-facebook.com;enter-username-and-password-to-facebook.com-and-validate",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@SmokeTest"
    },
    {
      "line": 2,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Facebook",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "log-in-to-facebook.com;enter-username-and-password-to-facebook.com-and-validate;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "log-in-to-facebook.com;enter-username-and-password-to-facebook.com-and-validate;;1"
    },
    {
      "cells": [
        "ganu_15@hotmail.com",
        "pogan28505"
      ],
      "line": 13,
      "id": "log-in-to-facebook.com;enter-username-and-password-to-facebook.com-and-validate;;2"
    },
    {
      "cells": [
        "ganu_15@hotmail.com",
        "pogan28505"
      ],
      "line": 14,
      "id": "log-in-to-facebook.com;enter-username-and-password-to-facebook.com-and-validate;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "enter username and password to facebook.com and validate",
  "description": "",
  "id": "log-in-to-facebook.com;enter-username-and-password-to-facebook.com-and-validate;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@RegressionTest"
    },
    {
      "line": 2,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Facebook",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"ganu_15@hotmail.com\" and \"pogan28505\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_onLlogin_page()"
});
formatter.result({
  "duration": 3538718985,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page()"
});
formatter.result({
  "duration": 29468305,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ganu_15@hotmail.com",
      "offset": 13
    },
    {
      "val": "pogan28505",
      "offset": 39
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 588411602,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 8812393565,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 102001771,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 104529641,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "enter username and password to facebook.com and validate",
  "description": "",
  "id": "log-in-to-facebook.com;enter-username-and-password-to-facebook.com-and-validate;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@RegressionTest"
    },
    {
      "line": 2,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Facebook",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"ganu_15@hotmail.com\" and \"pogan28505\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_onLlogin_page()"
});
formatter.result({
  "duration": 2251952330,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page()"
});
formatter.result({
  "duration": 9202702,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ganu_15@hotmail.com",
      "offset": 13
    },
    {
      "val": "pogan28505",
      "offset": 39
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 520970453,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 8031812639,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 278707202,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 93235509,
  "status": "passed"
});
});