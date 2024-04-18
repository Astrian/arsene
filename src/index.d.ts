/**
 * @description 在页面上使用 Arsene 添加中英/中日文间隙
 * @param selectedNode 一个 CSS 选择器，用于选择要添加间隙的元素。支持 `.class`、`#id`、`tag` 等选择器。全局使用可以直接使用 `body`。
 * @param spacing 间隙大小，由大至小有 `2xl`、`xl`、`l`、`m`、`s` 选项。默认为 `s`。
 * @example arsene('body')
 * @example arsene('.post-content', 'm')
 */
export default function (selectedNode: string, spacing?: '2xl' | 'xl' | 'l' | 'm' | 's'): void
