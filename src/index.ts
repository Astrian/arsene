export default function (selectedNode: string, spacing: '2xl'|'xl'|'l'|'m'|'s' = 's') {
  let spacingCharacter = ''
  switch (spacing) {
    case '2xl':
      spacingCharacter = '\u2004'
      break
    case 'xl':
      spacingCharacter = '\u2005'
      break
    case 'l':
      spacingCharacter = '\u2009'
      break
    case 'm':
      spacingCharacter = '\u2006'
      break
    case 's':
      spacingCharacter = '\u200A'
      break
    default:
      spacingCharacter = '\u200A'
  }
  const nodes = document.querySelectorAll(`${selectedNode}`)
  for (let i in nodes) {
    processText(nodes[i], spacingCharacter)
  }
}

function processText(node: Node, spacingCharacter: string): void {
  if (node.nodeType === Node.TEXT_NODE) {
    // detect the characters includes chinese and english, or japanese (kanji or kana) and english
    const reg = /[\u4e00-\u9fa5\u3040-\u30FF][a-zA-Z]|\w[\u4e00-\u9fa5\u3040-\u30FF]|\w[a-zA-Z]/
    const text = node.nodeValue || ''
    if (reg.test(text)) {
      // process the text char by char
      const textArr = text.split('')
      let newText = ''
      for (let i = 0; i < textArr.length; i++) {
        const cnchar_and_kanji = /[\u4e00-\u9fa5\u3040-\u30FF]/
        const kana = /[\u3040-\u30FF]/
        const english_and_number = /[a-zA-Z0-9]/
        // if the char is chinese or japanese (kanji or kana)
        if (cnchar_and_kanji.test(textArr[i]) || kana.test(textArr[i])) {
          // if next char is english
          if (english_and_number.test(textArr[i + 1])) {
            // 1/8 em space
            newText += textArr[i] + spacingCharacter
          } else {
            newText += textArr[i]
          }
        } else if (english_and_number.test(textArr[i])) {
          if (cnchar_and_kanji.test(textArr[i + 1]) || kana.test(textArr[i + 1])) {
            newText += textArr[i] + spacingCharacter
          } else {
            newText += textArr[i]
          }
        } else {
          newText += textArr[i]
        
        }
      }
      node.nodeValue = newText
    }
  } else {
    if (!node.nodeName) return
    for (let i = 0; i < node.childNodes.length; i++) processText(node.childNodes[i], spacingCharacter)
  }
}
