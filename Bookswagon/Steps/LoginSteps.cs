using Bookswagon.Pages;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using System.Data;
using TechTalk.SpecFlow;
using TechTalk.SpecFlow.Assist;

namespace Bookswagon
{
    [Binding]
    public class LoginSteps
    {
        IWebDriver currentDriver = new ChromeDriver();
        [Given(@"I  navigated to my application")]
        public void GivenINavigatedToMyApplication()
        {
            currentDriver.Manage().Window.Maximize();
            currentDriver.Navigate().GoToUrl("https://www.bookswagon.com/login");
        }
        
        [Given(@"I type the data")]
        public void GivenITypeTheData(Table table)
        {
            LoginPage login = new LoginPage(currentDriver);
            dynamic data = table.CreateDynamicInstance();
            login.Login(data.Email, data.Password);
        }
        
        [When(@"I click Login Button")]
        public void WhenIClickLoginButton()
        {
            LoginPage add = new LoginPage(currentDriver);
            add.Clicklogin();
        }
        
        [Then(@"I should see my account")]
        public void ThenIShouldSeeMyAccount()
        {
            currentDriver.Manage().Window.Maximize();
            currentDriver.Navigate().GoToUrl("https://www.bookswagon.com/myaccount.aspx");
        }
    }
}
