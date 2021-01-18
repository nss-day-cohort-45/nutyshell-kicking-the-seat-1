// Author: Rickie
/* Purpose: To render a list of Friends HTML elements
*/

import { getTasks, useTasks, deleteTask } from './TasksDataProvider.js'
import { TasksHTMLConverter } from './TasksHTMLConverter.js'

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector(".tasks")

let allTasks = []

eventHub.addEventListener("taskStateChanged", () => {
  TaskList()
})

export const TaskList = () => {
  getTasks()
    .then(() => {
      allTasks = useTasks()
      render()
    })
}

const render = () => {
  contentTarget.innerHTML = `
      <section class="tasksContainer nutshellComponent">
        <h2>Daily Tasks</h2>
        <div class="dailyTasks">
          ${
            allTasks.map(
              (task) => {
                return TasksHTMLConverter(task)
              }).join("")
          }
        </div> 
        <button id="addNewTaskBtn" class="addNewTaskBtn">Add New Task</button>
      </section>
    `
}

// ------------------------------------------------------------------------------------------------------------------------------------//
//                                                            - EVENTS                                                                 //
// ------------------------------------------------------------------------------------------------------------------------------------//


// Add New Task Button Click - Dispatch
eventHub.addEventListener('click', event => {
  if (event.target.id.startsWith('addNewTaskBtn')) {
    const customEvent = new CustomEvent('addNewTaskBtnClicked')
    eventHub.dispatchEvent(customEvent)
  }
})


// Delete Task
eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id.startsWith("deleteTaskBtn--")) {
      const [prefix, taskId] = clickEvent.target.id.split("--")
     
     deleteTask(taskId)
  }
})

// Delete Task - Checkbox
eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id.startsWith("checkbox--")) {
      const [prefix, taskId] = clickEvent.target.id.split("--")
     
     deleteTask(taskId)
  }
})
