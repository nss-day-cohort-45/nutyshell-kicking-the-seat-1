// Author: Rickie Le
/* Purpose: To fetch an array from tasks objects from the API, and to store into an empty array (tasks). Updates the DOM when tasks are saved and deleted.
*/ 

const eventHub = document.querySelector(".container")

let tasks = []

// Returns a copy of daily tasks array
export const useTasks = () => {
  return tasks.slice()
}

// Fetches all the tasks from the database
export const getTasks = () => {
  return fetch("http://localhost:8088/tasks")
  .then(response => response.json())
  .then(
    parsedTasks => {
      tasks = parsedTasks
    }
  )
}

// SAVE - Puts the saved tasks into the database
export const saveTask = task => {
  let stringifiedObj = JSON.stringify(task)
  return fetch('http://localhost:8088/tasks', {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: stringifiedObj
  })
  .then(getTasks)
  .then(dispatchStateChangeEvent)
}

// DELETE - Permanantly deletes tasks from the database
export const deleteTask = taskId => {
  return fetch(`http://localhost:8088/tasks/${taskId}`, {
      method: "DELETE"
  })
  .then(getTasks)
  .then(dispatchStateChangeEvent)
}

// CHECKBOX - Permanantly deletes tasks from the database
export const updateTasks = (task) => {
  return fetch(`http://localhost:8088/tasks/${task.id}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json",
          "cache-control":"no-cache"
      },
      body: JSON.stringify(task)
  })
      .then(getTasks)
      .then(dispatchStateChangeEvent)
}

// Changes the state of the DOM to reflect 
const dispatchStateChangeEvent = () => {
  const taskStateChangedEvent = new CustomEvent("taskStateChanged")
  eventHub.dispatchEvent(taskStateChangedEvent)
}