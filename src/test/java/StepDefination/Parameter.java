package StepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Parameter {
	WebDriver driver=null;
	@Given("User opens the application")
	public void user_opens_the_application() {
	    // Write code here that turns the phrase above into concrete actions
		 System.setProperty("webdriver.chrome.driver", "C:\\Users\\training_b6b.01.16\\Desktop\\Browser driver\\chromedriver.exe");
		    driver = new ChromeDriver();
		    driver.get("http://10.232.237.143:443/TestMeApp/fetchcat.htm");
		    driver.manage().window().maximize();
	}

	@When("User click on to signin link")
	public void user_click_on_to_signin_link() {
	    // Write code here that turns the phrase above into concrete actions
		 driver.findElement(By.linkText("SignIn")).click();
	}

	@When("User enters {string} and {string}")
	public void user_enters_and(String string, String string2) {
	    // Write code here that turns the phrase above into concrete actions
		 driver.findElement(By.name("userName")).sendKeys(string);
		 driver.findElement(By.id("password")).sendKeys(string2);
	}

	@Then("Message displayed Login Successfully")
	public void message_displayed_Login_Successfully() {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.name("Login")).click();
		   System.out.println("Title of the page is "+driver.getTitle());
	}

}
