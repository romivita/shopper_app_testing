import find from 'appium-flutter-finder';
import { driver } from '@wdio/globals';
import { isDisplayed } from './../utils/widgetUtils.ts';

class CatalogPage {
  /**
   * Verifica si la página del catálogo está visible.
   * @returns {Promise<boolean>} - Devuelve true si el catálogo está visible, false en caso contrario.
   */
  async isCatalogDisplayed(): Promise<boolean> {
    const catalog = find.byType('MyCatalog');
    return isDisplayed(catalog);
  }

  /**
   * Obtiene el localizador de un ítem específico en el catálogo.
   * @param {string} itemName - Nombre del ítem a buscar.
   * @returns {Object} - Localizador del ítem en el catálogo.
   */
  getItemLocator(itemName: string) {
    return find.ancestor({
      of: find.byText(itemName),
      matching: find.byType('_MyListItem'),
      firstMatchOnly: true,
    });
  }

  /**
   * Agrega un ítem específico al carrito.
   * @param {string} itemName - Nombre del ítem a agregar.
   * @returns {Promise<void>}
   */
  async addItemToCart(itemName: string): Promise<void> {
    const addButton = find.descendant({
      of: this.getItemLocator(itemName),
      matching: find.byText('ADD'),
      matchRoot: true,
    });

    await driver.elementClick(addButton);
  }

  /**
   * Verifica si el ícono de verificación está visible para un ítem específico.
   * @param {string} itemName - Nombre del ítem a verificar.
   * @returns {Promise<boolean>} - Devuelve true si el ícono de verificación está visible, false en caso contrario.
   */
  async isCheckDisplayed(itemName: string): Promise<boolean> {
    const checkIcon = find.descendant({
      of: this.getItemLocator(itemName),
      matching: find.byType('Icon'),
      matchRoot: true,
    });

    return isDisplayed(checkIcon);
  }

  /**
   * Navega a la página del carrito.
   * @returns {Promise<void>}
   */
  async goToCartPage(): Promise<void> {
    const cartIcon = find.descendant({
      of: find.byType('_MyAppBar'),
      matching: find.byType('Icon'),
    });

    await driver.elementClick(cartIcon);
  }
}

export default new CatalogPage();
