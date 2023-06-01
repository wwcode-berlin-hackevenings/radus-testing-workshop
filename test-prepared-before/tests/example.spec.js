// @ts-check
const { test, expect } = require("@playwright/test");

test("Smokescreen", async ({ page }) => {
  await page.goto(
    "file:///Users/radu.nicoara/Documents/codebase/test/index.html"
  );

  await expect(page).toHaveTitle("test");
  expect((await page.$$("text=This is a test")).length).toBe(1);
});

test("Loads Click", async ({ page }) => {
  await page.goto(
    "file:///Users/radu.nicoara/Documents/codebase/test/index.html"
  );

  await page.click("#button");
  expect((await page.$$("text=There is some data here")).length).toBe(1);
});
