// Author: Rickie
// Purpose: Creates an HTML representation of all the tasks and checkboxes

export const TasksHTMLConverter = (task) => {
  return `
  <section class="taskList"> 
    <input type="checkbox" class="tasks__checkbox"></input>
    <div class="tasks__task">${task.name}</div>
  </section>
  `
}