$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Feature/para.Feature");
formatter.feature({
  "name": "Login Action",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User opens the application",
  "keyword": "Given "
});
formatter.step({
  "name": "User click on to signin link",
  "keyword": "When "
});
formatter.step({
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "lalitha",
        "password123"
      ]
    },
    {
      "cells": [
        "admin",
        "password456"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User opens the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Parameter.user_opens_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on to signin link",
  "keyword": "When "
});
formatter.match({
  "location": "Parameter.user_click_on_to_signin_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"lalitha\" and \"password123\"",
  "keyword": "When "
});
formatter.match({
  "location": "Parameter.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Parameter.message_displayed_Login_Successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User opens the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Parameter.user_opens_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on to signin link",
  "keyword": "When "
});
formatter.match({
  "location": "Parameter.user_click_on_to_signin_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"admin\" and \"password456\"",
  "keyword": "When "
});
formatter.match({
  "location": "Parameter.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Parameter.message_displayed_Login_Successfully()"
});
formatter.result({
  "status": "passed"
});
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on to signin link",
  "keyword": "When "
});
formatter.match({
  "location": "Parameter.user_click_on_to_signin_link()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d77.0.3865.90)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BDC6-DX-6DX5NK2\u0027, ip: \u0027192.168.214.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_65\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.90, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: C:\\Users\\TRAINI~1.16\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:27497}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 17957e1688a06f881f16abcffe694317\n*** Element info: {Using\u003dlink text, value\u003dSignIn}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefination.Parameter.user_click_on_to_signin_link(Parameter.java:25)\r\n\tat ✽.User click on to signin link(file:Feature/para.Feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User enters \"admin\" and \"password456\"",
  "keyword": "When "
});
formatter.match({
  "location": "Parameter.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Parameter.message_displayed_Login_Successfully()"
});
formatter.result({
  "status": "skipped"
});
});