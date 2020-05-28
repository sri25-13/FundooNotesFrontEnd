using OpenQA.Selenium;
using SeleniumExtras.PageObjects;
using System;
using System.Collections.Generic;
using System.Text;

namespace Bookswagon.Pages
{
    class LoginPage
    {
        IWebDriver driver;
        public LoginPage(IWebDriver currentDriver)
        {
            PageFactory.InitElements(currentDriver, this);
            this.driver = currentDriver;
        }
        [FindsBy(How = How.XPath, Using = "//input[@id='ctl00_phBody_SignIn_txtEmail']")]
        private IWebElement TxtEmail;
        [FindsBy(How = How.XPath, Using = "//input[@id='ctl00_phBody_SignIn_txtPassword']")]
        private IWebElement TxtPassword;
        [FindsBy(How = How.XPath, Using = "//input[@id='ctl00_phBody_SignIn_btnLogin']")]
        private IWebElement ButtonLogin;
        public void Login(string Email, string Password)
        {
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(3);
            TxtEmail.SendKeys(Email);
            TxtPassword.SendKeys(Password);
        }
        public void Clicklogin()
        {
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(3);
            ButtonLogin.Click();
        }

    }
}

