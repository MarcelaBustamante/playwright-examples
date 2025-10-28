import { test, expect} from '@playwright/test';

test.describe('Login Page Tests', () => {
    test('Valid Login Test', async ({ page }) => {
      const url = 'https://practicesoftwaretesting.com/auth/login/';
      const email = 'customer@practicesoftwaretesting.com';
      const password = 'welcome01';

      await page.goto(url);
      await page.getByPlaceholder('Your email').fill(email);
      await page.getByPlaceholder('Your password').fill(password);
      await page.getByRole('button', { name: 'Login' }).click();

      await page.waitForLoadState('networkidle');

      // Verify the user name appears or the account page heading is visible.
      // Use a text locator for Jane Doe as it's present in the nav when logged in.
      await expect(page.locator('text=Jane Doe')).toBeVisible();
      await expect(page.getByRole('heading', { name: 'My account' })).toBeVisible();
    });
});