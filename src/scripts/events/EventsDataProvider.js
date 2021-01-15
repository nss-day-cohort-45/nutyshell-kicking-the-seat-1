// Author: Sosina Tolossa
/* Purpose: To fetch an array of event objects from our API, and store
 those data in a new array so we can use that elsewhere.*/

 const eventHub = document.querySelector(".container")

let events = []

//creating a function that returns a copy of events array and exporting it
export const useEvents = () => events.slice()

export const getEvents = () => {
  return fetch("http://localhost:8088/events")
  .then(response => response.json())
  .then(
    parsedEvents => {
    events = parsedEvents
  })
}

export const saveEvent = anEvent => {
  let stringifiedObj = JSON.stringify(anEvent)
  return fetch('http://localhost:8088/events', {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: stringifiedObj
  })
  .then(getEvents)
  .then(dispatchStateChangeEvent)
}

export const deleteEvent = eventId => {
  return fetch(`http://localhost:8088/tasks/${eventId}`, {
    method: "DELETE"
  })
  .then(getEvents)
  .then(dispatchChangedEvent)
}

const dispatchChangedEvent = () => {
  const changedEvent = new CustomEvent("eventChanged")
  eventHub.dispatchEvent(changedEvent)
}