// Author: Chris Denmark
// Purpose: Adding the form to create new articles and saving those articles to the database.json.

import { saveArticle, getArticles } from "./ArticlesDataProvider.js"

const contentTarget = document.querySelector(".articleForm")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveArticle") {
        const title = document.querySelector("#articleTitle").value
        const synopsis = document.querySelector("#text").value
        const URL = document.querySelector("#articleURL").value

        const newArticle = {
           title: title,
           synopsis: synopsis,
           URL: URL,
           timestamp: Date.now()
        }
        saveArticle(newArticle)
    }
})


const render = () => {
    contentTarget.innerHTML = `
    <input type="text" id="articleTitle" placeholder="Title">
    <textarea id="text" placeholder="Article text"></textarea>
    <input type="text" id="articleURL" placeholder="URL">
    <button id="saveArticle">Save Article</button>
    `
}

export const ArticleForm = () => {
    getArticles()
    .then(() => render()) 
}