import { driver } from '@wdio/globals';
import find from 'appium-flutter-finder';
import { isDisplayed } from './../utils/widgetUtils.ts';

class LoginPage {
  get enterButton() {
    return find.byText('ENTER');
  }

  get usernameField() {
    return find.ancestor({
      of: find.byText('Username'),
      matching: find.byType('TextField'),
      firstMatchOnly: true,
    });
  }

  get passwordField() {
    return find.ancestor({
      of: find.byText('Password'),
      matching: find.byType('TextField'),
      firstMatchOnly: true,
    });
  }

  /**
   * Inicia sesión en la aplicación utilizando las credenciales proporcionadas.
   * @param {string} username - Nombre de usuario para iniciar sesión.
   * @param {string} password - Contraseña para iniciar sesión.
   * @returns {Promise<void>}
   */
  async login(username: string, password: string): Promise<void> {
    await this.waitForUsernameField();
    await this.enterTextInField(this.usernameField, username);
    await this.enterTextInField(this.passwordField, password);
    await this.submitLogin();
  }

  /**
   * Espera a que el campo de nombre de usuario esté visible.
   * @returns {Promise<void>}
   */
  async waitForUsernameField(): Promise<void> {
    const isVisible = await isDisplayed(this.usernameField);
    if (!isVisible) {
      throw new Error('Username field is not displayed');
    }
  }

  /**
   * Ingresa texto en un campo de texto.
   * @param {Object} fieldLocator - Localizador del campo de texto.
   * @param {string} text - Texto a ingresar.
   * @returns {Promise<void>}
   */
  async enterTextInField(fieldLocator: any, text: string): Promise<void> {
    await driver.elementClick(fieldLocator); // Clic en el campo para activarlo
    await driver.execute('flutter:enterText', text);
  }

  /**
   * Envía el formulario de inicio de sesión haciendo clic en el botón de entrada.
   * @returns {Promise<void>}
   */
  async submitLogin(): Promise<void> {
    await driver.elementClick(this.enterButton);
  }
}

export default new LoginPage();
