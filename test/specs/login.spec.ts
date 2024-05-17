import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.ts';
import CatalogPage from '../pageobjects/catalog.page.ts';

describe('Shopper App Login Flow', () => {
  it('should display catalog after successful login', async () => {
    await LoginPage.login();
    expect(await CatalogPage.waitForCatalogDisplay()).toBeTruthy();
  });
});
