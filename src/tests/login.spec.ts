import { test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";

test("login should work with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = await loginPage.quickLogin(
      "sandythirumal3.02f21631491e@agentforce.com",
      "Sandhiya08#"
    );
    await homePage.expectServiceTitleToBeVisible();
});