package Runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;



@RunWith(Cucumber.class)
@CucumberOptions(features= "Feature\\demo.Feature",tags= {"@SmokeTest","@FunctionalTest"})
public class Runner2 {

	
}
