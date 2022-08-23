import {AppScreen} from './appScreen';

export class DetailsScreen extends AppScreen {
  readonly clickMeButton = element(by.id('clickMeButton'));
  readonly clickedTimesText = element(by.id('clickedNumberText'))

  async tapClickMeButton() {
    await this.clickMeButton.tap();
  }
}
