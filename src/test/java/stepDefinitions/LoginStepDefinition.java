package stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefinition {
	
	WebDriver driver;
	
	@Given("^user is on Login Page$")
	
	public void user_already_onLlogin_page() {
	System.setProperty("webdriver.chrome.driver", "/home/gshresth/chromedriver_linux64/chromedriver");
	driver = new ChromeDriver();
	
	driver.manage().window().maximize();
	driver.manage().deleteAllCookies();
	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
	driver.get("https://www.facebook.com");
	}
	
	@When("^title of login page is Facebook$")
	public void title_of_login_page() {
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Facebook - Log In or Sign Up", title);
	}
	
	@Then("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String username, String password) {
		driver.findElement(By.name("email")).sendKeys(username);
		driver.findElement(By.name("pass")).sendKeys(password);
	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() {
		WebElement loginBtn = driver.findElement(By.xpath("//input[@type='submit']"));
		JavascriptExecutor js = (JavascriptExecutor) driver;  
		js.executeScript("arguments[0].click();", loginBtn);	

	}

	@Then("^user is on home page$")
	public void user_is_on_home_page(){
	WebElement isLoggedIn = driver.findElement(By.xpath("//span[text()='Ganesh']"));
	   //String title = driver.getTitle();
	   System.out.println(isLoggedIn + "is logged in");
	   //Assert.assertEquals("Ganesh", isLoggedIn);
	   
	}
	
	@Then("^close the browser$")
	public void close_the_browser() {
		driver.quit();
	}

}
