import { Selector } from 'testcafe'

fixture `Getting Started`
  .page `http://devexpress.github.io/testcafe/example`

test('Input name and click submit button', async t => {
  await t
    .typeText('#developer-name', 'John Smith')
    .click('#submit-button')
})
