import find from 'appium-flutter-finder';
import { driver } from '@wdio/globals';

class CartPage {
  get myCart() {
    return find.byType('MyCart');
  }

  async isCartDisplayed() {
    return driver.execute('flutter:waitFor', this.myCart);
  }
}

export default new CartPage();
