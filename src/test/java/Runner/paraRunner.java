package Runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features= "Feature\\para.Feature",glue= {"StepDefination"},plugin= {"html:target/cucumber.html"})
public class paraRunner {

}
