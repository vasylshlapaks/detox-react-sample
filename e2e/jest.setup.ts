jest.setTimeout(1600 * 1000);
jest.retryTimes(0);

beforeEach(async () => {
  console.log('before');
});

afterAll(async () => {
  console.log('after');
});

export {};
