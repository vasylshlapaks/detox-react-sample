import {device, expect} from 'detox';
import {HomeScreen} from '../pageObject/homeScreen';
import {ScrollableScreen} from '../pageObject/scrollableScreen';
import {DetailsScreen} from '../pageObject/detailsScreen';

describe('Sample app tests', () => {
  const homeScreen = new HomeScreen();
  const scrollableScreen = new ScrollableScreen();
  const detailsScreen = new DetailsScreen();

  beforeEach(async () => {
    await device.launchApp({newInstance: true});
  });

  it('Checks Name field', async () => {
    const name = 'Joe';
    await homeScreen.enterName(name);

    await expect(homeScreen.nameInputField).toHaveText(name);
  });

  it('Checks Navigation between screens', async () => {
    await homeScreen.tapGoToScrollableScreenButton();
    await expect(scrollableScreen.stepOneTitle).toBeVisible();

    await scrollableScreen.tapGoToHomeScreenButton();
    await expect(homeScreen.nameInputField).toBeVisible();

    await homeScreen.tapGoToDetailsButton();
    await expect(detailsScreen.clickMeButton).toBeVisible();
  });

  it('Checks "Click me" button', async () => {
    await homeScreen.tapGoToDetailsButton();
    await detailsScreen.tapClickMeButton();

    await expect(detailsScreen.clickedTimesText).toHaveText('You clicked me 1 time');
  });
});
