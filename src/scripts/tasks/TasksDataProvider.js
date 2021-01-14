// Author: Rickie
/* Purpose: To fetch an array of tasks objects from the API, 
  and stores it into an empty array we can use elsewhere.
*/ 

let tasks = [];

export const useTasks = () => {
  return tasks.slice();
}

export const getTasks = () => {
  return fetch("http://localhost:8088/tasks")
  .then(response => response.json())
  .then(
    parsedTasks => {
      tasks = parsedTasks
    }
  );
}