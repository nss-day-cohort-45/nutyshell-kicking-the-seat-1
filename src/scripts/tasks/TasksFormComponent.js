// Author: Rickie Le
// Purpose: To display the task form popup when the user clicks the add new task button.


import { saveTask } from './TasksDataProvider.js'

const eventHub = document.querySelector('.container')
const taskPopup = document.querySelector('.detailDialog')

// Function which is called in Nutshell.js. This invokes TaskPop, which is responsible for the Add New Task popup
export const TasksFormComponent = () => {
  TaskPop()
}

//  Add New Task popup Container, TaskCard is interpolated in its own div to display form user needs to fill.
const TaskPop = () => {
  return `
      <section id="taskForm__details">
        <button id="closeDialog" class="closeDialog">X</button>
        <div class="taskPopupBox">
          <h1>New Task Details</h1>
            <div class="taskForm__list">
              ${TaskCard()}
            </div>
            <button id="saveTaskBtn" class="saveTaskBtn">Save Task</button>
        </div>
      </section>
    `
  }

// Add New Task popup details/innards - Contains form to input task name and to be completed by date.
  const TaskCard = () => {
    return `
    <fieldset id="taskForm__form">
      <label> <h4>Task name:<h4></label>
        <input type="text" id="taskForm__taskName" class="taskForm" placeholder="Input task name">

      <label> <h4>To be completed by:<h4></label>
        <input type="date" id="taskForm__taskDate" class="taskForm">
    </fieldset>
    `  
  }

// Closes the popup
  const closeDialog = (popup) => {
    taskPopup.innerHTML = popup;
    taskPopup.close()
  }
  
// Opens the popup
  const openDialog = (popup) => { 
    taskPopup.innerHTML = popup;
    taskPopup.show()
  }


// Targets the close/exit button in the popup to close out of the popup
taskPopup.addEventListener('click', event => {
  if (event.target.id === 'closeDialog') {
    closeDialog();
  }
})

 // Allows you to use the escape key to exit the popup
 taskPopup.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
     closeDialog()
  }
})

// Opens the Add New Task popup when the Add New Task button is clicked
 eventHub.addEventListener('addNewTaskBtnClicked', event => {
   openDialog(TaskPop())
})

// When the Save Task button is clicked, dispatch the saveTaskBtnRecorded event
taskPopup.addEventListener('click', event => {
  if (event.target.id === 'saveTaskBtn') {
    const customEvent = new CustomEvent('saveTaskBtnRecorded')

    taskPopup.dispatchEvent(customEvent)
  }
})

// Save Button -- Saves the data the user entered into the form to the API.
// saveTask will also change the state of the DOM to reflect most updated Tasks
taskPopup.addEventListener('saveTaskBtnRecorded', event => {
    const taskName = document.querySelector("#taskForm__taskName").value
    const taskDate = document.querySelector("#taskForm__taskDate").value

    const newTask = {
      name: taskName,
      completionDate: taskDate
    }

    saveTask(newTask)
    closeDialog()
}) 
