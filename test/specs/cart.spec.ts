import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.ts';
import CatalogPage from '../pageobjects/catalog.page.ts';
import CartPage from '../pageobjects/cart.page.ts';

describe('Cart Screen', () => {
  const itemNames = ['Code Smell', 'Interpreter'];
  const itemPrice = 42;

  before(async () => {
    await LoginPage.submitLogin();

    expect(await CatalogPage.isCatalogDisplayed()).toBe(true);

    await CatalogPage.addItemToCart(itemNames[0]);
    await CatalogPage.addItemToCart(itemNames[1]);
  });

  it('should navigate to the cart page and verify item presence and total price', async () => {
    await CatalogPage.goToCartPage();

    expect(await CartPage.isCartDisplayed()).toBe(true);

    for (const itemName of itemNames) {
      expect(await CartPage.isItemDisplayed(itemName)).toBe(true);
    }

    const expectedTotalPrice = itemPrice * itemNames.length;
    expect(await CartPage.isTotalDisplayed(expectedTotalPrice)).toBe(true);
  });

  it('should remove an item from the cart and verify updated total price', async () => {
    await CartPage.removeItem(itemNames[1]);

    expect(await CartPage.isItemNotDisplayed(itemNames[1])).toBe(true);

    const updatedTotalPrice = itemPrice;
    expect(await CartPage.isTotalDisplayed(updatedTotalPrice)).toBe(true);
  });

  it('should display a snackbar message upon clicking the buy button', async () => {
    await CartPage.clickBuy();

    expect(await CartPage.isSnackBarDisplayed()).toBe(true);
  });
});
