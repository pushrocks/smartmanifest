import { expect, tap } from '@pushrocks/tapbundle';
import * as smartmanifest from '../ts/index';

let testSmartManifest: smartmanifest.SmartManifest;

tap.test('first test', async () => {
  testSmartManifest = new smartmanifest.SmartManifest({
    name: 'test app',
    short_name: 'app'
  });
  expect(testSmartManifest).to.be.instanceOf(smartmanifest.SmartManifest);
});

tap.test('should produce a web app manifest', async () => {
  const testData = testSmartManifest.getData();
  console.log(testData);
});

tap.start();
