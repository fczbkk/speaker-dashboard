import {
  contentParser, parseSection,
  splitMarkdownByHeaders
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

  it('should parse simple content', async () => {
    const content = await getMockContent('simpleContent')
    const expectation = {
      sections: [
        {
          title: 'first section',
          content: 'first section content',
          sections: []
        },
        {
          title: 'second section',
          content: 'second section content',
          sections: []
        }
      ]
    }
    expect(contentParser(content)).toEqual(expectation)
  })

  it('should parse hierarchical content', async () => {
    const content = await getMockContent('hierarchicalContent')
    const expectation = {
      sections: [
        {
          title: 'first main title',
          content: 'first section content',
          sections: [
            {
              title: 'first subsection',
              content: 'first subsection content',
              subsections: []
            },
            {
              title: 'second subsection',
              content: 'second subsection content',
              subsections: []
            }
          ]
        },
        {
          title: 'second main section',
          content: 'second section content',
          subsections: []
        }
      ]
    }
    expect(contentParser(content)).toEqual(expectation)  })

  it('should parse metadata', async () => {
    const content = await getMockContent('metaContent')
    const expectation = {
      sections: [
        {
          title: 'five minute section',
          content: 'first section content',
          duration: 5,
          subsections: []
        },
        {
          title: 'one minute section',
          content: 'second section content',
          duration: 1,
          subsections: []
        }
      ]
    }
    expect(contentParser(content)).toEqual(expectation)  })

})

describe('splitMarkdownByHeaders', () => {

  it('should split by headers', () => {
    const content = '# aaa\ncontent 1\n# bbb\ncontent 2'
    const result = splitMarkdownByHeaders(content, 1)
    const expectation = [
      'aaa\ncontent 1',
      'bbb\ncontent 2'
    ]
    expect(result).toEqual(expectation)
  })

  it('should respect level', () => {
    const content = '# aaa\ncontent 1\n## bbb\ncontent 2'
    const result = splitMarkdownByHeaders(content, 1)
    const expectation = [
      'aaa\ncontent 1\n## bbb\ncontent 2'
    ]
    expect(result).toEqual(expectation)
  })

})

describe.only('parseSection', () => {
  it.only('should parse a simple section', () => {
    const content = 'mock title\n\nmock content\n\nmock content 2'
    const expectation = {
      title: 'mock title',
      content: 'mock content\n\nmock content 2',
      duration: -1,
      subsections: []
    }
    const result = parseSection(content)

    expect(result).toEqual(expectation)
  })

  it('should parse section with subsections', () => {
    const content = 'mock title\n\nmock content\n\n## mock subtitle\n\nmock subcontent'
    const expectation = {
      title: 'mock title',
      content: 'mock content',
      duration: -1,
      subsections: [
        {
          title: 'mock subtitle',
          content: 'mock subcontent',
          duration: -1,
          subsections: []
        }
      ]
    }
    const result = parseSection(content)
    expect(result).toEqual(expectation)
  })

  it('should parse section with metadata', () => {
    const content = 'mock title\n\n---\nduration: 100\n---\n\nmock content'
    const expectation = {
      title: 'mock title',
      content: 'mock content',
      duration: 100,
      subsections: []
    }
    const result = parseSection(content)
    expect(result).toEqual(expectation)
  })
})
