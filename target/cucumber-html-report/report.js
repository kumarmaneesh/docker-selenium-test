$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/home.feature");
formatter.feature({
  "line": 1,
  "name": "Google Home",
  "description": "",
  "id": "google-home",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Launch Google Home",
  "description": "",
  "id": "google-home;launch-google-home",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@home1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "a browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user launches google website",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "website title should be Google",
  "keyword": "Then "
});
formatter.match({
  "location": "glue.a_browser()"
});
formatter.result({
  "duration": 2855598577,
  "status": "passed"
});
formatter.match({
  "location": "glue.user_launches_google_website()"
});
formatter.result({
  "duration": 945394739,
  "status": "passed"
});
formatter.match({
  "location": "glue.website_title_should_be_Google()"
});
formatter.result({
  "duration": 2397563276,
  "status": "passed"
});
});