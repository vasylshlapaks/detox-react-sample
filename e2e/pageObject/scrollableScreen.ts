import {AppScreen} from './appScreen';

export class ScrollableScreen extends AppScreen {
  readonly stepOneTitle = element(by.text('Step One'));

  async tapGoToHomeScreenButton() {
    await this.scrollToElementAndTap(this.goToHomeScreenButton);
  }
}
