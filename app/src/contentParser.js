export function splitMarkdownByHeaders (content, level = 1) {
  const headerRe = new RegExp(`^#{${level}} `, 'gm')
  return content
    .split(headerRe)
    .filter(Boolean)
    .map((input) => input.trim())
}

export function parseSection (input, level = 1) {
  const nextLevelRe = new RegExp(`^#{${level + 1}} `)

  const [title, ...lines] = input.split(/\n/)

  let isSubcontent = false
  let content = ''
  let subContent = ''

  lines.forEach((line) => {
    if (!isSubcontent && nextLevelRe.test(line)) {
      isSubcontent = true
    }
    if (isSubcontent) {
      subContent += '\n' + line
    } else {
      content += '\n' + line
    }
  })

  // TODO parse sub content into sections
  // TODO parse metadata

  const subsections = []
  const duration = -1

  return {
    title,
    subsections,
    duration,
    content: content.trim()
  }
}

export function contentParser (input) {
  const result = {}



  return result
}
