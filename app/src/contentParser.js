const titleRe = /^(#+)\s+(.*)$/
const metaDividerRe = /^---$/
const metaContentRe = /^(.*): (.*)$/
const trimLinesRe = /^\n+|\n+$/g

function finishSection (state) {
  if (state.item) {
    state.item.content = state.item.content
      .join('\n')
      .replace(trimLinesRe, '')
    state.result.push({...state.item})
  }
}

function handleMetadata ({state, line}) {
  const [, key, value] = metaContentRe.exec(line)
  state.item[key] = Number(value)
}

function handleContent ({state, line}) {
  state.item.content.push(line)
}

function handleTitle ({state, match}) {
  state.isMetadata = false
  const [, hashes, title] = match

  finishSection(state)

  state.item = {
    title,
    level: hashes.length,
    content: []
  }
}

function handleGeneralLine ({state, line}) {
  if (state.isMetadata) {
    handleMetadata({state, line})
  } else {
    handleContent({state, line})
  }
}

function handleMetaDivider ({state}) {
  state.isMetadata = !state.isMetadata
}

const stateHandlers = [
  {re: titleRe, handler: handleTitle},
  {re: metaDividerRe, handler: handleMetaDivider},
  {re: /.*/, handler: handleGeneralLine}
]

function handleLine (state, line) {
  for (const {re, handler} of stateHandlers) {
    const match = re.exec(line)
    if (match) {
      handler({state, line, match})
      return
    }
  }
}

export function parseMarkdown (input = '') {
  const state = {
    result: [],
    item: null,
    isMetadata: false
  }
  const lines = input.split('\n')

  lines.forEach((line) => handleLine(state, line))

  finishSection(state)

  return state.result
}

export function convertLinearDataToTree (input = '') {
  const data = parseMarkdown(input)
  const result = {children: []}
  const pointers = new Map()
  pointers.set(0, result)

  data.forEach((node) => {
    node.children = []
    pointers.set(node.level, node)
    pointers.get(node.level - 1).children.push(node)
  })

  return result
}
