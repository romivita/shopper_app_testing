import find from 'appium-flutter-finder';
import { driver } from '@wdio/globals';

class CartPage {
  async isCartDisplayed() {
    const myCart = find.byType('MyCart');
    return driver.execute('flutter:waitFor', myCart);
  }

  async isTotalDisplayed(total: number) {
    const cartTotal = find.descendant({
      of: find.byType('_CartTotal'),
      matching: find.byText(`$${total}`),
      firstMatchOnly: true,
    });
    return driver.execute('flutter:waitFor', cartTotal);
  }
}

export default new CartPage();
