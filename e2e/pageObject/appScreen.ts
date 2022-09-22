import Detox from 'detox';
import {timeouts} from '../helpers/timeouts';

export class AppScreen {
  readonly goToHomeScreenButton = element(by.id('goToHomeScreenButton'));
  readonly scrollableBackgroundView = 'scrollView';

  async scrollToElement(element: Detox.NativeElement, direction: Detox.Direction = 'down', scrollableElement: string = this.scrollableBackgroundView) {
    await waitFor(element)
      .toBeVisible()
      .whileElement(by.id(scrollableElement))
      .scroll(150, direction);
  }

  async scrollToElementAndTap(element: Detox.NativeElement, direction?: Detox.Direction, scrollableElement?: string) {
    await this.scrollToElement(element, direction, scrollableElement);
    await element.tap();
  }

  async enterText(textField: Detox.NativeElement, text: string) {
    await waitFor(textField).toBeVisible().withTimeout(timeouts.mediumTimeout);
    await textField.clearText();
    await textField.typeText(text);
    await textField.tapReturnKey();
  }

  async tapElement(element: Detox.NativeElement) {
    await waitFor(element).toBeVisible().withTimeout(timeouts.mediumTimeout);
    await element.tap();
  }
}
