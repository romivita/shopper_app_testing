import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.ts';
import CatalogPage from '../pageobjects/catalog.page.ts';
import CartPage from '../pageobjects/cart.page.ts';

describe('Catalog and Cart Interaction', () => {
  before(async () => {
    await LoginPage.enter();
    expect(await CatalogPage.isCatalogDisplayed()).toBeTruthy();
  });

  it('should add items to cart and navigate to cart page', async () => {
    const item = 'Sprint';
    const itemPrice = 42;
    await CatalogPage.addItemToCart(item);

    await CatalogPage.goToCartPage();

    expect(await CartPage.isCartDisplayed()).toBeTruthy();
    expect(await CartPage.isTotalDisplayed(itemPrice)).toBeTruthy();
  });
});
