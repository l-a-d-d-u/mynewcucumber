package PomWithPagefactory;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.annotations.Test;

public class TestClass {
  @Test
  public void f() {
	  System.setProperty("webdriver.chrome.driver", "C:\\Users\\training_b6b.01.16\\Desktop\\Browser driver\\chromedriver.exe");
	  WebDriver driver =new ChromeDriver();
	  driver.get("http://demowebshop.tricentis.com");
	  driver.manage().window().maximize();
	  driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	  Pageclass locateElements = PageFactory.initElements(driver, Pageclass.class);
	  locateElements.loginMethod("aravind.guggilla57@gmail.com", "aravind");
  }
}
