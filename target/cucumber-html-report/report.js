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
  "duration": 75839384503,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Could not start a new session. Possible causes are invalid address of the remote server or browser start-up failure.\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027Maneeshs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1457:1f8e:f1b6:7140%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.1\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:569)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:212)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:130)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:143)\n\tat glue.glue.launchBrowser(glue.java:46)\n\tat glue.glue.a_browser(glue.java:52)\n\tat ✽.Given a browser(features/home.feature:5)\nCaused by: java.net.ConnectException: Failed to connect to /11.11.11.11:4444\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:242)\n\tat okhttp3.internal.connection.RealConnection.connect(RealConnection.java:160)\n\tat okhttp3.internal.connection.StreamAllocation.findConnection(StreamAllocation.java:257)\n\tat okhttp3.internal.connection.StreamAllocation.findHealthyConnection(StreamAllocation.java:135)\n\tat okhttp3.internal.connection.StreamAllocation.newStream(StreamAllocation.java:114)\n\tat okhttp3.internal.connection.ConnectInterceptor.intercept(ConnectInterceptor.java:42)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.internal.cache.CacheInterceptor.intercept(CacheInterceptor.java:93)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.internal.http.BridgeInterceptor.intercept(BridgeInterceptor.java:93)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RetryAndFollowUpInterceptor.intercept(RetryAndFollowUpInterceptor.java:126)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.RealCall.getResponseWithInterceptorChain(RealCall.java:200)\n\tat okhttp3.RealCall.execute(RealCall.java:77)\n\tat org.openqa.selenium.remote.internal.OkHttpClient.execute(OkHttpClient.java:105)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:101)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:212)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:130)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:143)\n\tat glue.glue.launchBrowser(glue.java:46)\n\tat glue.glue.a_browser(glue.java:52)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:82)\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:70)\n\tat org.testng.TestRunner$1.run(TestRunner.java:570)\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:717)\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:601)\n\tat org.testng.TestRunner.run(TestRunner.java:502)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\n\tat org.testng.TestNG.run(TestNG.java:1017)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\nCaused by: java.net.ConnectException: Operation timed out (Connection timed out)\n\tat java.net.PlainSocketImpl.socketConnect(Native Method)\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350)\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\n\tat java.net.Socket.connect(Socket.java:589)\n\tat okhttp3.internal.platform.Platform.connectSocket(Platform.java:129)\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:240)\n\t... 85 more\n",
  "status": "failed"
});
formatter.match({
  "location": "glue.user_launches_google_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "glue.website_title_should_be_Google()"
});
formatter.result({
  "status": "skipped"
});
});