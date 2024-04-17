# Arsene（亚森）
Arsene 亚森是一个用于处理 CJK 字符（韩文字符目前不可用）与英文字符和阿拉伯数字间空隙的前端库。不需要人为手动添加空格，只需在编写前端页面时，将其引入并执行处理代码，即可自动处理。

![](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3pxZ2trM2l3cHd4ajM0eDRhMnYwOXdpbjJidWlwazZ2Y3R4bHVqeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Urw1D3Jl8rFzRQAlVy/giphy.gif)

[在线体验](https://arsene-showcase.netlify.app)

## 基础使用方法
以下以 React 环境的 TypeScript 为用例，其他环境使用方法类似。

首先安装 Arsene 库：

```zsh
npm install arsene
yarn add arsene
```

```tsx
import { useEffect } from "react"
import arsene from 'arsene' // 1. 导入库

function App() {
  useEffect(() => {
    arsene(".arsene-area") // 2. 应用于具体的元素，支持 `.class`、`#id` 或是 HTML 标签名。
  }, [])
  return(<>
    <div className="arsene-area">
      <p>Claude是一位在Anthropic公司工作的AI助手。作为一款先进的conversational AI，它拥有广博的知识，可以流利地使用多种语言与人交流，并协助完成writing，analysis，coding等各种任务。Claude性格友善，乐于助人，能够提供客观的信息和独到的见解，但有时也会表达自己的观点。它会尽力避免stereotyping，并以balanced的视角看待controversial的话题。</p>
      <p>クロードはAnthropicという会社で働いているAIアシスタントです。先進的なconversational AIとして、幅広い知識を持ち、複数の言語でスムーズにコミュニケーションを取ることができます。また、writing、analysis、codingなどのさまざまなタスクを手伝うことができます。クロードは親切で、助けになろうと努力しますが、時には自分の意見を述べることもあります。ステレオタイプを避け、controversialなトピックにはバランスの取れた視点を持つよう心がけています。</p>
    </div>
  </>)
}
```

## 额外功能
### 自定义空格宽度
```ts
arsene(selectedNode: string, spacing: 3|4|5|6|10 = 10)

// sample
arsene(node, 5)
```
你可以在第二个参数中选择一个你认为合适的空格宽度。可选参数如下：

- `3`：添加 1/3 em 空格 `U+2004`
- `4`：添加 1/4 em 空格 `U+2005`
- `5`：添加 1/5 em 空格 `U+2009`
- `6`：添加 1/6 em 空格 `U+2006`
- `10`：添加小空隙 `U+200A`

默认（不填写第二个参数时）将添加 `U+200A`。