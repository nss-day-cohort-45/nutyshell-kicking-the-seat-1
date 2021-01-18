// Author: Sosina Tolossa
/* Purpose: To render our data into the DOM and also let the user 
fill out event form and save that in our API*/

import { useEvents, getEvents, deleteEvent } from "./EventsDataProvider.js"
import { EventsHTML } from "./EventsHTMLConverter.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".events")

let allEvents = [] //empty array for now

// This function gets event, then put those events in allEvents array and renders those events
export const EventList = () => {
    getEvents()
    .then( () => {
        allEvents = useEvents()
        render()
    })
}


// This function renders a title and a button to click which then brings up a form to fill if the button is clicked
export const render = () => {
    contentTarget.innerHTML = `
        <section class="eventsContainer nutshellComponent">
        <h2><em>Events To Go To</em></h2>
        <div class="eventsToGoTo">
        ${
            allEvents.map(
            (anEvent) => {
                return EventsHTML(anEvent)
            }).join("")
        }
        </div>
        <button id="addEventBtn" class="addEventBtn">Add Event</button>
    </section>
    `
}


// This function creates event listener for 'Add New Event' button clicked and dispatch that event
eventHub.addEventListener('click', event => {
    if (event.target.id.startsWith('addEventBtn')) {
      const customEvent = new CustomEvent('addNewEventBtnClicked')
      eventHub.dispatchEvent(customEvent)
    }
  })

// This function listens for the delete button to be clicked and deletes the specific event
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEventBtn--")) {
        const [prefix, taskId] = clickEvent.target.id.split("--")
        /*
            Invoke the function that performs the delete operation.
            Once the operation is complete you should THEN invoke
            useEvents() and render the event list again.
        */
       deleteEvent(taskId)
    }
  })

// This function listens for the change event of that the user saved an event 
eventHub.addEventListener("eventChanged", () => {
    EventList() //then we call EventList to render the new list of event (with the new event added)
})
