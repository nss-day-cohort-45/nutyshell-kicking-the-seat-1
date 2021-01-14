const eventHub = document.querySelector(".container")
let articles = []

const dispatchStateChangeEvent = () => {
  const articleStateChangedEvent = new CustomEvent("articleStateChanged")

  eventHub.dispatchEvent(articleStateChangedEvent)
}

export const useArticles = articles.slice()

export const getArticles = () => {
  return fetch('http://localhost:8088/articles')
    .then(response => response.json())
    .then(parsedArticles => {
        articles = parsedArticles
    })
}

export const saveArticle = article => {
  return fetch('http://localhost:8088/articles', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(article)
  })
  .then(getArticles)
  .then(dispatchStateChangeEvent)
}

export const deleteArticle = articleId => {
  return fetch(`http://localhost:8088/articles/${articleId}`, {
    method: "DELETE"
  })
    .then(getArticles)
    .then(dispatchStateChangeEvent)
}