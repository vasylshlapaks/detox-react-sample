import {device, expect, element} from 'detox';
import {WelcomeScreen} from '../pageObject/welcomeScreen';

describe('Example describe block', () => {
  beforeEach(async () => {
    await device.launchApp({newInstance: true});
  //  throw new Error('hi');
  });

  afterEach(async () => {
  //  throw new Error('hi');
  });


  it.skip('should have "Step One" section', async () => {
    const welcomeScreen = new WelcomeScreen();

   // await welcomeScreen.tapClickMeButton();
   // await expect(welcomeScreen.clickMeButton).toBeVisible();
  });

  it('should have "See Your Changes" section', async () => {
    await expect(element(by.text('See Your Changes'))).toBeVisible();
  });
});
