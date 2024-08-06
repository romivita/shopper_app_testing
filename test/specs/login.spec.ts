import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.ts';
import CatalogPage from '../pageobjects/catalog.page.ts';

describe('Login Flow Validation', () => {
  it('should navigate to and display the catalog page following a successful login', async () => {
    await LoginPage.login('Jeanne_Doe63@yahoo.com', 'Test123!');

    expect(await CatalogPage.isCatalogDisplayed()).toBe(true);
  });
});
