// Author: Rickie
// Purpose: To display the task form popup when the user clicks the add new task button.

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
      <section class="taskForm__details">
        <div class="taskPopupBox">
          <h1>New Task Details</h1>
          <div class="taskForm__list">
            ${TaskCard()}
          </div>
            <button id="close-popup">Close</button>
        </div>
      </section>
    `
  }

// Add New Task Pop Up Details
  const TaskCard = () => {
    return `
    <fieldset class="taskForm__form">
      <input type="text" id="taskForm__taskName" class="taskForm" placeholder="Input task name">
      <input type="date" class="taskForm" name="taskForm__taskdate">
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

// Close Dialog 
eventHub.addEventListener('click', evt => {
  if (evt.target.id === 'close-popup' ||
    evt.target.classList.contains('attraction-details')) {
    closeDialogAttraction();
  }
})

 // Exit Popup with Escape Key
 window.addEventListener('keydown', evt => {
  if (evt.key === 'Escape') {
     closeDialog()
  }
})
  
// Add New Task Popup when clicked
 eventHub.addEventListener('addNewTaskBtnClicked', evt => {
   console.log("Hello")
   openDialog(TaskPop())
})