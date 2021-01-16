// Author: Chris Denmark
// Purpose: Adding the form to create new articles and saving those articles to the database.json.

import { saveArticle, getArticles } from "./ArticlesDataProvider.js"

// const contentTarget = document.querySelector(".articleForm")
const eventHub = document.querySelector(".container")
const articlePopup = document.querySelector(".detailDialog")

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
				closeDialog()
    }
})

export const ArticleForm = () => {
    getArticles()
    .then(() => render()) 
}


export const ArticlesFormComponent = () => {
	ArticlePop()
  }
  
  //  Add New Task Pop Up Container
  const ArticlePop = () => {
    return `
        <section id="articleForm__details">
          <button id="closeDialog" class="closeDialog">X</button>
          <div class="articlePopupBox">
            <h1>Add New Article</h1>
              <div class="article__list">
                ${ArticleCard()}
              </div>
          </div>
        </section>
      `
    }
  
  // Add New Task Pop Up Details
    const ArticleCard = () => {
      return `
      <input type="text" id="articleTitle" placeholder="Title">
    <textarea id="text" placeholder="Article text"></textarea>
    <input type="text" id="articleURL" placeholder="URL">
    <button id="saveArticle">Save Article</button>
      `  
    }
  
  // Close Dialog
    const closeDialog = (popup) => {
      articlePopup.innerHTML = popup;
      articlePopup.close()
    }
    
  // Open Dialog
    const openDialog = (popup) => { 
			articlePopup.innerHTML = popup;
			articlePopup.show()
    }
    

articlePopup.addEventListener('click', event => {
    if (event.target.id === 'closeDialog') {
      closeDialog();
    }
  })
  
   // Exit Popup with Escape Key
   articlePopup.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
       closeDialog()
    }
  })
  
  // Add New Task Popup When Clicked
   eventHub.addEventListener('addNewArticleBtnClicked', event => {
     openDialog(ArticlePop())
  })
  