import {AppScreen} from './appScreen';

export class HomeScreen extends AppScreen {
  readonly goToDetailsScreenButton = element(by.id('goToDetailsButton'));
  readonly goToScrollableScreenButton = element(by.id('goToScrollableScreenButton'));
  readonly nameInputField = element(by.id('nameInputField'));

  async tapGoToDetailsButton() {
    await this.goToDetailsScreenButton.tap();
  }

  async tapGoToScrollableScreenButton() {
    await this.goToScrollableScreenButton.tap();
  }

  async enterName(name: string) {
    await this.nameInputField.typeText(name);
  }
}
