// Author: Chris Denmark
// Purpose: rendering the list of articles and populating the page with an updated articles as they are posted/deleted.

import { getArticles, useArticles, deleteArticle } from "./ArticlesDataProvider.js"
import { ArticleHTMLConverter } from "./ArticlesHTMLConverter.js"

const contentTarget = document.querySelector(".articleList")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("articleStateChanged", () => {
  articleList()
})


eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id.startsWith("deleteArticle--")) {
      const [prefix, articleId] = clickEvent.target.id.split("--")

      deleteArticle(articleId)
  }
})

const render = (articlesArray) => {
  const allArticlesConvertedToStrings = articlesArray.map((articles) => {
    return ArticleHTMLConverter(articles)
  }).join("")
  contentTarget.innerHTML = allArticlesConvertedToStrings
}

export const articleList = () => {
  getArticles()
    .then(() => {
      const allArticles = useArticles()
      render(allArticles)
    })
}