import { getArticles, useArticles, deleteArticle } from "./ArticlesDataProvider.js"
import { ArticleHTMLConverter } from "./ArticlesHTMLConverter.js"

const contentTarget = document.querySelector(".articles")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.dispatchEvent.startsWith("deleteArticle--")) {
      const [prefix, articleId] = clickEvent.target.id.split("--")

      deleteArticle(articleId)
  }
})

const render = ()







































// export const TasksFormComponent = () => {
//   taskPop()
// }

// //  Add New Task Pop Up Container
// const taskPop = () => {
//   return `
//       <section class="taskForm__details">
//         <div class="taskPopupBox">
//           <h1>New Task Details</h1>
//           <div class="taskForm__list">
//             ${taskCard()}
//           </div>
//             <button id="close-popup">Close</button>
//         </div>
//       </section>
//     `
//   }

// // Add New Task Pop Up Details
//   const taskCard = () => {
//     return `
//     <fieldset class="taskForm__form">
//       <input type="text" id="taskForm__taskName" placeholder="Input task name">
//       <input type="date" name="taskForm__taskdate">
//     </fieldset>
//     `  
//   }

// // Close Dialog
//   const closeDialog = (taco) => {
//     taskPopup.innerHTML = taco;
//     taskPopup.close()
//   }
  
// // Open Dialog
//   const openDialog = (taco) => { 
//     taskPopup.innerHTML = taco;
//     taskPopup.show()
//   }
// // Close Dialog 
// eventHub.addEventListener('click', evt => {
//   if (evt.target.id === 'close-popup' ||
//     evt.target.classList.contains('taskForm__')) {
//       closeDialog()
//    }
// })
  
//  // Exit Popup with Escape Key
//  window.addEventListener('keydown', evt => {
//   if (evt.key === 'Escape') {
//      closeDialog()
//   }
// })
  
// // Add New Task Popup when clicked
//  eventHub.addEventListener('addNewTaskBtnClicked', evt => {
//    console.log("Hello")
//    openDialog(taskPop())
// })
