// Author: Sosina Tolossa
/* Purpose: To fetch an array of event objects from our API, and store
 those data in a new array so we can use that elsewhere.*/

 const eventHub = document.querySelector(".container")

let events = []

//creating a function that returns a copy of events array and exporting it
export const useEvents = () => events.slice()

// This function gets notes from our database
export const getEvents = () => {
  return fetch("http://localhost:8088/events")
  .then(response => response.json()) 
  .then(
    parsedEvents => {
    events = parsedEvents //makes our empty array to the events that are in our database
  })
}

// This function gets the events from our database
export const saveEvent = anEvent => {
  let stringifiedObj = JSON.stringify(anEvent)
  return fetch('http://localhost:8088/events', {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: stringifiedObj //to grab the object stored as strings
  })
  .then(getEvents) //then put it in our events array in the database
  .then(dispatchChangedEvent) // shouts the events list has been updated
}

// returns event id of the specific event
export const deleteEvent = eventId => {
  return fetch(`http://localhost:8088/events/${eventId}`, {
    method: "DELETE" //puts a delete methos
  })
  .then(getEvents) //gets the new array of updated list of events
  .then(dispatchChangedEvent) // shouts that the event list has been updated
}

// This function creates new event that the event list has been changed
const dispatchChangedEvent = () => {
  const changedEvent = new CustomEvent("eventChanged")
  eventHub.dispatchEvent(changedEvent)
}

