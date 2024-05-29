const {test, expect} = require('@playwright/test');
import { defineConfig } from '@playwright/test';  

test("Verify new registration - Ace OnlineShoePortal", async ({page}) => {

  await page.goto('https://anupdamoda.github.io/AceOnlineShoePortal/index.html');
  await page.waitForSelector("#menuToggle > input[type=checkbox]");
  await page.click("#menuToggle > input[type=checkbox]");
  await page.waitForSelector("#menu > a:nth-child(2) > li");
  await page.click("#menu > a:nth-child(2) > li");
  await page.waitForSelector("#NewRegistration");
  await page.click("#NewRegistration");
  await page.locator('#firstname').type('omom');
  await page.locator('#lastname').type('Smppopith');
  await page.locator('#emailId').type('samjjj@gmail.com');
  await page.locator('#contactNumber').type('88989988');
  await page.locator('#usr').type('samuiuiukmomomiu');
  await page.locator('#pwd').type('Santoalbertus29!');  
  await page.click('#first_form > div > div:nth-child(27) > center > input', {timeout: 20000});
})