import {AppScreen} from './appScreen';

export class WelcomeScreen extends AppScreen {
  readonly clickMeButton;

  constructor() {
    super();
    this.clickMeButton = element(by.id('buttonClickMe'));
  }

  async tapClickMeButton() {
    await this.scrollToElementAndTap(this.clickMeButton);
  }
}
