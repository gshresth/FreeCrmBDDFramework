$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "some feature to run",
  "description": "",
  "id": "some-feature-to-run",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "in some scenario",
  "description": "",
  "id": "some-feature-to-run;in-some-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
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
  "id": "some-feature-to-run;in-some-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "some-feature-to-run;in-some-scenario;;1"
    },
    {
      "cells": [
        "ganu_15@hotmail.com",
        "pogan28505"
      ],
      "line": 13,
      "id": "some-feature-to-run;in-some-scenario;;2"
    },
    {
      "cells": [
        "poonamtam@yahoo.com",
        "123"
      ],
      "line": 14,
      "id": "some-feature-to-run;in-some-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "in some scenario",
  "description": "",
  "id": "some-feature-to-run;in-some-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
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
  "duration": 3001262629,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page()"
});
formatter.result({
  "duration": 28688163,
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
  "duration": 427848635,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 5800971289,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 60093,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 86948161,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "in some scenario",
  "description": "",
  "id": "some-feature-to-run;in-some-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Facebook",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"poonamtam@yahoo.com\" and \"123\"",
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
  "duration": 1975700463,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page()"
});
formatter.result({
  "duration": 7412863,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "poonamtam@yahoo.com",
      "offset": 13
    },
    {
      "val": "123",
      "offset": 39
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 380195535,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 643831423,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 54353,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 72156303,
  "status": "passed"
});
});