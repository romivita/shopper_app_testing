import find from 'appium-flutter-finder';
import { driver } from '@wdio/globals';

class CatalogPage {
  public get myCatalog() {
    return find.byType('MyCatalog');
  }

  public addItem(item: String) {
    return find.byText(item);
  }

  async waitForCatalogDisplay() {
    return driver.execute('flutter:waitFor', this.myCatalog);
  }

  async addItemToCart() {
    await driver.elementClick(this.addItem('Spaghetti'));
    return driver.execute('flutter:waitFor', this.myCatalog);
  }
}

export default new CatalogPage();
