// Author: Rickie
// Purpose: To display the task form popup when the user clicks the add new task button.


// ------------------------------------------------------------------------------------------------------------------------------------//
//                                                            - IMPORT STATEMENTS                                                      //
// ------------------------------------------------------------------------------------------------------------------------------------//

import { saveTask } from './TasksDataProvider.js'


// ------------------------------------------------------------------------------------------------------------------------------------//
//                                                            - DOM NODE REFERENCES                                                    //
// ------------------------------------------------------------------------------------------------------------------------------------//

const eventHub = document.querySelector('.container')
const taskPopup = document.querySelector('.detailDialog')

// ------------------------------------------------------------------------------------------------------------------------------------//
//                                                            - FUNCTIONS                                                              //
// ------------------------------------------------------------------------------------------------------------------------------------//

export const TasksFormComponent = () => {
  TaskPop()
}

//  Add New Task Pop Up Container
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

// Add New Task Pop Up Details
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

// Close Dialog
  const closeDialog = (popup) => {
    taskPopup.innerHTML = popup;
    taskPopup.close()
  }
  
// Open Dialog
  const openDialog = (popup) => { 
    taskPopup.innerHTML = popup;
    taskPopup.show()
  }
  
// ------------------------------------------------------------------------------------------------------------------------------------//
//                                                            - EVENTS                                                                 //
// ------------------------------------------------------------------------------------------------------------------------------------//

// Close Popup

taskPopup.addEventListener('click', event => {
  if (event.target.id === 'closeDialog') {
    closeDialog();
  }
})

 // Exit Popup with Escape Key
 taskPopup.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
     closeDialog()
  }
})

// Add New Task Popup When Clicked
 eventHub.addEventListener('addNewTaskBtnClicked', event => {
   openDialog(TaskPop())
})

// Save Task Button Click - Dispatch
taskPopup.addEventListener('click', event => {
  if (event.target.id === 'saveTaskBtn') {
    const customEvent = new CustomEvent('saveTaskBtnRecorded')
    console.log("Task Added and Recorded")
    taskPopup.dispatchEvent(customEvent)
  }
})

// Save Button -- Save data inputted into API
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
