// Author: Chris Denmark
// Purpose: the HTML converter for the Articles section.

export const ArticleHTMLConverter = (articleObject) => {
  return `
    <section class="article">
      <div class="article__newsTitle">${articleObject.title}</div>
      <div class="article__synopsis">Synopsis: ${articleObject.synopsis}</div>
      <a href="${articleObject.URL}" class="article__URL">URL: ${articleObject.URL}"</a>
      <button id="deleteArticle--${articleObject.id}">Delete Article</button>
  `
}