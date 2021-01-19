// Author: Rickie Le
// Purpose: Creates an HTML representation of a single task, it's checkbox, and delete button

// A function that returns an HTML representation of a single task, its designated checkbox, and its designated delete button.
export const TasksHTMLConverter = (task) => {
  return `
  <div class="taskList"> 
    <input type="checkbox" class="tasks__checkbox" id="checkbox--${task.id}"></input>
    <div class="tasks__task">${task.name}</div>
    <button id="deleteTaskBtn--${task.id}" class="deleteTaskBtn">Delete Task</button>
  </div>
  `
}