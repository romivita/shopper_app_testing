import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.ts';
import CatalogPage from '../pageobjects/catalog.page.ts';

describe('Catalog Icon Display', () => {
  let selectedItem: string;

  before(async () => {
    await LoginPage.login();
    expect(await CatalogPage.isCatalogDisplayed()).toBeTruthy();
  });

  it('should display icon for selected item after adding to cart', async () => {
    selectedItem = 'Spaghetti';
    await CatalogPage.addItemToCart(selectedItem);
    expect(await CatalogPage.isIconDisplayed(selectedItem)).toBeTruthy();
  });
});
