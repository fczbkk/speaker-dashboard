import {
  parseMarkdown,
  convertLinearDataToTree
} from './../../src/contentParser.js'

const fs = require('fs').promises
const path = require('path')

async function getMockContent (mockName) {
  return await fs.readFile(
    path.resolve(__dirname, `../mocks/${mockName}.md`),
    { encoding: 'utf8' }
  )
}

describe('contentParser', () => {

  it('should get linear data', async () => {
    const content = await getMockContent('complexContent')
    const expectation = require('./../mocks/linearExpectation.json')
    const result = parseMarkdown(content)
    expect(result).toEqual(expectation)
  })

  it('should get hierarchical data', async () => {
    const content = await getMockContent('complexContent')
    const expectation = require('./../mocks/hierarchicalExpectation.json')
    const result = convertLinearDataToTree(content)
    expect(result).toEqual(expectation)
  })

})
