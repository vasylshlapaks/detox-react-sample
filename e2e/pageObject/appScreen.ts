import Detox from 'detox';

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
}
