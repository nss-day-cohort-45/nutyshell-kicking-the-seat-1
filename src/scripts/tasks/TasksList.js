// Author: Rickie
/* Purpose: To render a list of Daily Task HTML elements
*/

import { getTasks, useTasks } from './TasksDataProvider.js'
import { TasksHTMLConverter } from './TasksHTMLConverter.js'

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector(".tasks")

let allTasks = []

export const TaskList = () => {
  getTasks()
    .then(() => {
      allTasks = useTasks()
      render()
    })
}

const render = () => {
  contentTarget.innerHTML = `
      <section class="tasksContainer">
        <h2>Daily Tasks</h2>
        <div class="dailyTasks">
          ${
            allTasks.map(
              (task) => {
                return TasksHTMLConverter(task)
              }).join("")
          }
        </div>
      </section>

   <button id="addNewTaskBtn">Add New Task</button>
   <button id="deleteTaskBtn">Delete Task</button>
    `
}

// ------------------------------------------------------------------------------------------------------------------------------------//
//                                                            - EVENTS                                                                 //
// ------------------------------------------------------------------------------------------------------------------------------------//


// Add New Task Button Click
eventHub.addEventListener("click", event => {
  if (event.target.id.startsWith("addNewTaskBtn")) {
    const customEvent = new CustomEvent("addNewTaskBtnClicked")
    eventHub.dispatchEvent(customEvent)
  }
});

// Close Popup
