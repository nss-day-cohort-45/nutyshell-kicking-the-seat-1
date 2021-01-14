export const ArticleHTMLConverter = (articleObject) => {
  return `
    <section class="article">
      <div class="article__newsTitle">${articleObject.text}</div>
      <div class="article__synopsis">Synopsis: ${articleObject.synopsis}</div>
      <div class="article__URL">URL: ${articleObject.URL}"</div>
      <button id="deleteArticle--${articleObject.id}">Delete Article</button>
  `
}