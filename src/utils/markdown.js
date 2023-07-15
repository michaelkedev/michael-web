import MarkdownIt from "markdown-it";

const md = new MarkdownIt({
  html: true,
});

const mdCoverter = {
  toMD: (text) => {
  const result = text
    .trim() // 去除首尾空白
    .split("\n")
    .map((t) => t.trim()) //將每行連續空白清除
    .join("\n");
  return md.render(result);
}
}

export const toMD = mdCoverter.toMD

export default mdCoverter

