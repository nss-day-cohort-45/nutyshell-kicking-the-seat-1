// Author: Rickie
/* Purpose: To fetch an array of tasks objects from the API, 
  and stores it into an empty array we can use elsewhere.
*/ 

// ------------------------------------------------------------------------------------------------------------------------------------//
//                                                            - DOM NODE REFERENCES                                                    //
// ------------------------------------------------------------------------------------------------------------------------------------//

const eventHub = document.querySelector(".container")


// ------------------------------------------------------------------------------------------------------------------------------------//
//                                                            - GLOBAL VARIABLES                                                       //
// ------------------------------------------------------------------------------------------------------------------------------------//

let tasks = []


// ------------------------------------------------------------------------------------------------------------------------------------//
//                                                            - FUNCTIONS                                                              //
// ------------------------------------------------------------------------------------------------------------------------------------//

export const useTasks = () => {
  return tasks.slice()
}

export const getTasks = () => {
  return fetch("http://localhost:8088/tasks")
  .then(response => response.json())
  .then(
    parsedTasks => {
      tasks = parsedTasks
    }
  )
}

// SAVE
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

// DELETE
export const deleteTask = taskId => {
  return fetch(`http://localhost:8088/tasks/${taskId}`, {
      method: "DELETE"
  })
  .then(getTasks)
  .then(dispatchStateChangeEvent)
}

// CHECKBOX
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


// ------------------------------------------------------------------------------------------------------------------------------------//
//                                                            - EVENTS                                                                 //
// ------------------------------------------------------------------------------------------------------------------------------------//

const dispatchStateChangeEvent = () => {
  const taskStateChangedEvent = new CustomEvent("taskStateChanged")
  eventHub.dispatchEvent(taskStateChangedEvent)
}