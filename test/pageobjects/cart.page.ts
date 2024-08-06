import find from 'appium-flutter-finder';
import { isDisplayed, isNotDisplayed } from './../utils/widgetUtils.ts';

class CartPage {
  /**
   * Verifica si la página del carrito está visible.
   * @returns {Promise<boolean>} - Devuelve true si el carrito está visible, false en caso contrario.
   */
  async isCartDisplayed(): Promise<boolean> {
    const myCart = find.byType('MyCart');
    return isDisplayed(myCart);
  }

  /**
   * Verifica si un ítem específico está presente en el carrito.
   * @param {string} item - Nombre del ítem a verificar.
   * @returns {Promise<boolean>} - Devuelve true si el ítem está presente, false en caso contrario.
   */
  async isItemDisplayed(item: string): Promise<boolean> {
    const itemLocator = find.ancestor({
      of: find.byText(item),
      matching: find.byType('_CartList'),
      matchRoot: true,
    });
    return isDisplayed(itemLocator);
  }

  /**
   * Verifica si un ítem específico no está presente en el carrito.
   * @param {string} item - Nombre del ítem a verificar.
   * @returns {Promise<boolean>} - Devuelve true si el ítem no está presente, false en caso contrario.
   */
  async isItemNotDisplayed(item: string): Promise<boolean> {
    const itemLocator = find.ancestor({
      of: find.byText(item),
      matching: find.byType('_CartList'),
      matchRoot: true,
    });
    return isNotDisplayed(itemLocator);
  }

  /**
   * Verifica si el total del carrito se muestra correctamente.
   * @param {number} total - Monto total esperado del carrito.
   * @returns {Promise<boolean>} - Devuelve true si el total está visible, false en caso contrario.
   */
  async isTotalDisplayed(total: number): Promise<boolean> {
    const totalLocator = find.descendant({
      of: find.byType('_CartTotal'),
      matching: find.byText(`$${total}`),
      firstMatchOnly: true,
    });
    return isDisplayed(totalLocator);
  }

  /**
   * Elimina un ítem específico del carrito.
   * @param {string} item - Nombre del ítem a eliminar.
   * @returns {Promise<void>}
   */
  async removeItem(item: string): Promise<void> {
    const itemLocator = find.ancestor({
      of: find.byText(item),
      matching: find.byType('ListTile'),
      matchRoot: true,
    });
    const removeButtonLocator = find.descendant({
      of: itemLocator,
      matching: find.byType('IconButton'),
    });
    await driver.elementClick(removeButtonLocator);
  }

  /**
   * Hace clic en el botón de compra.
   * @returns {Promise<void>}
   */
  async clickBuy(): Promise<void> {
    await driver.elementClick(find.byText('BUY'));
  }

  /**
   * Verifica si el mensaje de Snackbar está visible.
   * @returns {Promise<boolean>} - Devuelve true si el Snackbar está visible, false en caso contrario.
   */
  async isSnackBarDisplayed(): Promise<boolean> {
    const snackBarLocator = find.descendant({
      of: find.byType('SnackBar'),
      matching: find.byText('Buying not supported yet.'),
    });
    return isDisplayed(snackBarLocator);
  }
}

export default new CartPage();
