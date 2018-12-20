package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"classpath:features"},
        plugin = {"pretty", "html:target/cucumber-html-report","json:target/cucumber.json"},
        tags = {"@home1"},
        glue={"classpath:glue"},
        monochrome = true
)


public class Test {
}
