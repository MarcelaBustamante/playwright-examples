import { test, expect} from '@playwright/test';
import { LoginPage } from '../../lib/pages/login.page';


test.describe('Login Page Tests', () => {
    test('Valid Login Test', async ({ page }) => {
      const email = 'customer@practicesoftwaretesting.com';
      const password = 'welcome01';

      const loginPage = new LoginPage(page);

      await loginPage.goto();
      // await loginPage.emailInput.fill(email);
      // await loginPage.passwordInput.fill(password);
      // await loginPage.loginButton.click();
      await loginPage.login(email, password);

      await page.waitForLoadState('networkidle');

      // Verify the user name appears or the account page heading is visible.
      // Use a text locator for Jane Doe as it's present in the nav when logged in.
      await expect(page.locator('text=Jane Doe')).toBeVisible();
      await expect(page.getByRole('heading', { name: 'My account' })).toBeVisible();
    });
});