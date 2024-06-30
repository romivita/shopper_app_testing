import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.ts';
import CatalogPage from '../pageobjects/catalog.page.ts';
import CartPage from '../pageobjects/cart.page.ts';

describe('Catalog and Cart Interaction', () => {
  before(async () => {
    await LoginPage.login();
    expect(await CatalogPage.isCatalogDisplayed()).toBeTruthy();
  });

  it('should add items to cart and navigate to cart page', async () => {
    await CatalogPage.addItemToCart('Sprint');
    await CatalogPage.addItemToCart('Off-By-One');

    await CatalogPage.goToCartPage();

    expect(await CartPage.isCartDisplayed()).toBeTruthy();
  });
});
