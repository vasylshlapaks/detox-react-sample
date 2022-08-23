import type {Circus} from '@jest/types';
import Detox from 'detox';

const Allure = require('allure-js-commons');
const fs = require('fs');
const stripAnsi = require('strip-ansi');

export class AllureReporterCircus {
  private allure: typeof Allure;
  private detox: typeof Detox;

  // @ts-ignore
  constructor({ detox }) {
    this.allure = new Allure();
    this.detox = detox;

    this.allure.setOptions({ targetDir: 'e2e/allure-results' });
  }

  run_describe_start(event: Circus.Event) {
      // @ts-ignore
      this.allure.startSuite(event.describeBlock.name);
  }

  run_describe_finish() {
      this.allure.endSuite();
  }

  test_start(event: Circus.Event) {
    // @ts-ignore
    const { test } = event;
    this.allure.startCase(test.name);
  }

  async test_done(event: Circus.Event) {
    // @ts-ignore
    if (event.test.errors.length > 0) {
      // @ts-ignore
      const { test } = event;
      const screenshotPath = await this.detox.device.takeScreenshot(`${test.startedAt}-failed`);
      const buffer = fs.readFileSync(`${screenshotPath}`);
      this.allure.addAttachment('Screenshot test failue', Buffer.from(buffer, 'base64'), 'image/png');

      const err = test.errors[0][0];
      err.message = stripAnsi(err.message);
      err.stack = stripAnsi(err.stack);

      this.allure.endCase('failed', err);
    }
    else {
      this.allure.endCase('passed');
    }
  }

  test_skip(event: Circus.Event) {
    // @ts-ignore
    const { test } = event;
    this.allure.startCase(test.name, this.allure.skipped);
    this.allure.endCase('skipped');
  }
}


module.exports = AllureReporterCircus;
