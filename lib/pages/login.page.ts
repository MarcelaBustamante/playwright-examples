import { type Locator, type Page } from "@playwright/test";
import { CONFIG } from '../config';

export class LoginPage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.locator(CONFIG.selectors.login.emailInput);
        this.passwordInput = page.locator(CONFIG.selectors.login.passwordInput);
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }
    
    async goto() {
        await this.page.goto(CONFIG.loginUrl);
        await this.page.waitForLoadState('networkidle', { 
            timeout: CONFIG.timeouts.navigation 
        });
    }

    async login(email:string, password:string){
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}