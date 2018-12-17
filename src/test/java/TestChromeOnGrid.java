import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import java.net.URL;

public class TestChromeOnGrid {

    WebDriver driver;

    @BeforeTest
    public void setup(){
        System.out.println("Test started! ");
    }

    @Test
    public void launchChromeOnNode() throws Exception{

        DesiredCapabilities cap = DesiredCapabilities.chrome();
        cap.setPlatform(Platform.LINUX);

        URL url = new URL("http://localhost:32768/wd/hub");

        driver = new RemoteWebDriver(url,cap);

        driver.get("http://www.google.com");

        System.out.println("Title is: " + driver.getTitle());

        driver.findElement(By.name("q")).sendKeys("seleniumhq");
        Actions actions= new Actions(driver);

        actions.sendKeys(Keys.ENTER);
        Thread.sleep(1000);

        System.out.println("Next Page Title is: " + driver.getTitle());

        //System.out.println(driver.findElement(By.xpath("//h3[contains(text(),'Web Browser Automation')]")).getText());

        Thread.sleep(1000);

    }

    @AfterTest
    public void tearup(){
        driver.quit();
        System.out.println("Test finished!");
    }
}
