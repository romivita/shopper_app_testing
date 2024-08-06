import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.ts';
import CatalogPage from '../pageobjects/catalog.page.ts';

describe('Catalog Screen', () => {
  const itemName = 'Code Smell';

  before(async () => {
    await LoginPage.submitLogin();

    expect(await CatalogPage.isCatalogDisplayed()).toBe(true);
  });

  it('should display a check icon next to an item after the item has been added to the cart', async () => {
    await CatalogPage.addItemToCart(itemName);

    expect(await CatalogPage.isCheckDisplayed(itemName)).toBe(true);
  });
});
