export const CONFIG = {
    // Base URLs
    baseUrl: 'https://practicesoftwaretesting.com',
    loginUrl: 'https://practicesoftwaretesting.com/auth/login/',
    
    // Default test credentials
    defaultUser: {
        email: 'customer@practicesoftwaretesting.com',
        password: 'welcome01'
    },
    
    // Timeouts (in milliseconds)
    timeouts: {
        navigation: 30000,    // 30 seconds
        element: 10000,       // 10 seconds
        animation: 1000       // 1 second
    },
    
    // API endpoints
    api: {
        login: '/api/auth/login',
        account: '/api/account'
    },
    
    // Test data selectors
    selectors: {
        login: {
            emailInput: '[data-test="email"]',
            passwordInput: '[data-test="password"]',
            submitButton: '[data-test="login-submit"]',
            navMenu: '[data-test="nav-menu"]'
        }
    }
};