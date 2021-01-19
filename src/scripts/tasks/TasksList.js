// Author: Rickie Le
/* Purpose: To render a list of Tasks HTML elements
*/

import { getTasks, useTasks, deleteTask } from './TasksDataProvider.js'
import { TasksHTMLConverter } from './TasksHTMLConverter.js'

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector(".tasks")

let allTasks = []

// Grabs the tasks, and the render function is invoked to display Daily Tasks container
export const TaskList = () => {
  getTasks()
    .then(() => {
      allTasks = useTasks()
      render()
    })
}

// To render the Daily Tasks container, and a list of the user's tasks with TasksHTMLConverter
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

// Changes the current state of tasks to the most updated version - Invokes TaskList
eventHub.addEventListener("taskStateChanged", () => {
  TaskList()
})

// Add New Task Button - Dispatch
eventHub.addEventListener('click', event => {
  if (event.target.id.startsWith('addNewTaskBtn')) {
    const customEvent = new CustomEvent('addNewTaskBtnClicked')
    eventHub.dispatchEvent(customEvent)
  }
})


// Delete Task with Delete Task Button
eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id.startsWith("deleteTaskBtn--")) {
      const [prefix, taskId] = clickEvent.target.id.split("--")
     
     deleteTask(taskId)
  }
})

// Delete Task with Ticked Checkbox 
eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id.startsWith("checkbox--")) {
      const [prefix, taskId] = clickEvent.target.id.split("--")
     
     deleteTask(taskId)
  }
})
