import find from 'appium-flutter-finder';
import { driver } from '@wdio/globals';

class CatalogPage {
  get myCatalog() {
    return find.byType('MyCatalog');
  }

  async isCatalogDisplayed() {
    return driver.execute('flutter:waitFor', this.myCatalog);
  }

  getItem(itemName: string) {
    return find.ancestor({
      of: find.byText(itemName),
      matching: find.byType('_MyListItem'),
      firstMatchOnly: true,
    });
  }

  async addItemToCart(itemName: string) {
    const addItem = find.descendant({
      of: this.getItem(itemName),
      matching: find.byText('ADD'),
      firstMatchOnly: true,
    });

    await driver.elementClick(addItem);
  }

  async isIconDisplayed(itemName: string) {
    const checkItem = find.descendant({
      of: this.getItem(itemName),
      matching: find.byType('Icon'),
      firstMatchOnly: true,
    });

    return await driver.execute('flutter:waitFor', checkItem);
  }
}

export default new CatalogPage();
