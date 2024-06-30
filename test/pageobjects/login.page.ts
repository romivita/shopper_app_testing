import { driver } from '@wdio/globals';
import find from 'appium-flutter-finder';

class LoginPage {
  get buttonEnter() {
    return find.byText('ENTER');
  }

  get txtUsername() {
    return find.ancestor({
      of: find.byText('Username'),
      matching: find.byType('TextField'),
      firstMatchOnly: true,
    });
  }

  get txtPassword() {
    return find.ancestor({
      of: find.byText('Password'),
      matching: find.byType('TextField'),
      firstMatchOnly: true,
    });
  }

  async login() {
    await driver.execute('flutter:waitFor', this.txtUsername);
    await driver.elementClick(this.txtUsername);
    await driver.execute('flutter:enterText', 'Jeanne_Doe63@yahoo.com');
    await driver.elementClick(this.txtPassword);
    await driver.execute('flutter:waitFor', this.txtPassword);
    await driver.execute('flutter:enterText', 'Test123!');
    await driver.elementClick(this.buttonEnter);
  }
}

export default new LoginPage();
