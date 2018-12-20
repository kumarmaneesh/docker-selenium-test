package glue;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.net.URL;

public class glue {
    private WebDriver driver;

    public void launchBrowser() throws Exception{

        DesiredCapabilities cap = DesiredCapabilities.chrome();
        cap.setPlatform(Platform.LINUX);

        URL url = new URL("http://localhost:32768/wd/hub");
        driver = new RemoteWebDriver(url,cap);
    }

    @Given("^a browser$")
    public void a_browser() throws Throwable {
        System.out.println("Launching Browser...");
        launchBrowser();
    }

    @When("^user launches google website$")
    public void user_launches_google_website() {
        driver.get("http://www.google.com");
    }

    @Then("^website title should be Google$")
    public void website_title_should_be_Google() throws Throwable {
        System.out.println("Title is: " + driver.getTitle());
        driver.findElement(By.name("q")).sendKeys("seleniumhq");
        Actions actions= new Actions(driver);
        actions.sendKeys(Keys.ENTER);
        Thread.sleep(1000);
        System.out.println("Next Page Title is: " + driver.getTitle());
        Thread.sleep(1000);
        driver.quit();
    }
}
