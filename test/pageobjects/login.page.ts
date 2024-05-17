import { driver } from '@wdio/globals';
import find from 'appium-flutter-finder';

class LoginPage {
  public get buttonEnter() {
    return find.byText('ENTER');
  }

  public async login() {
    await driver.elementClick(this.buttonEnter);
  }
}

export default new LoginPage();
