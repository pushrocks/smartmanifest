import { expect, tap } from '@pushrocks/tapbundle';
import * as smartmanifest from '../ts/index'

tap.test('first test', async () => {
  console.log(smartmanifest.standardExport)
})

tap.start()
