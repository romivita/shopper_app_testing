import find from 'appium-flutter-finder';
import { driver } from '@wdio/globals';

class CatalogPage {
  public get myCatalog() {
    return find.byType('MyCatalog');
  }

  async waitForCatalogDisplay() {
    return driver.execute('flutter:waitFor', this.myCatalog);
  }
}

export default new CatalogPage();
