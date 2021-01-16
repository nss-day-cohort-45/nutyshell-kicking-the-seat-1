// Author: Chris Denmark
// Purpose: rendering the list of articles and populating the page with an updated articles as they are posted/deleted.

import { getArticles, useArticles, deleteArticle } from "./ArticlesDataProvider.js"
import { ArticleHTMLConverter } from "./ArticlesHTMLConverter.js"

const articleTarget = document.querySelector(".articles")
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

eventHub.addEventListener('click', event => {
  if (event.target.id.startsWith('addNewArticle')) {
    const customEvent = new CustomEvent('addNewArticleBtnClicked')
    eventHub.dispatchEvent(customEvent)
  }
})

const render = (articlesArray) => {
  const allArticlesConvertedToStrings = articlesArray.map((articles) => {
    return ArticleHTMLConverter(articles)
  }).join("")

  articleTarget.innerHTML = `
      <h2>News Articles</h2>
      ${allArticlesConvertedToStrings}
      <div>
      <button id="addNewArticle">Add New Article</button>
      </div>
    </div>
  `
}


export const articleList = () => {
  getArticles()
    .then(() => {
      const allArticles = useArticles()
      render(allArticles)
    })
}