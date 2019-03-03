import { Selector } from 'testcafe'

fixture `Getting Started`
  .page `http://devexpress.github.io/testcafe/example`

test('Assert submitted page h1 content', async t => {
  await t
    .typeText('#developer-name', 'John Smith')
    .click('#submit-button')
    .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!')
})
