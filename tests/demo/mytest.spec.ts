import { test, expect } from "@playwright/test";

test("Should load the homepage ith correct title", async ({ page }) => {
  //1. Go to the homepage
  await page.goto("https://katalon-demo-cura.herokuapp.com/");

  //2. Assert if the title is correct
  await expect(page).toHaveTitle("CURA Healthcare Service");

  //3. Assert header text
  await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");
});

test("Should do something", { tag: "@smoke" }, async ({ page }) => {
  await page.locator("//h1").click();
});

test.only("Should demo locators", async ({ page }) => {
  //1. Launch URL
  await page.goto("https://katalon-demo-cura.herokuapp.com/");

  //2. Click on Make Appointment
  let makeAppmBtn = page.getByRole("link", { name: "Make Appointment" });
  console.log(
    `Type of Locator is : " ${typeof makeAppmBtn}, The value of the locator is: ${JSON.stringify(makeAppmBtn)}`,
  );
  await makeAppmBtn.click();
  //await expect(page.getByText('Please login to make')).toBeVisible();
});
