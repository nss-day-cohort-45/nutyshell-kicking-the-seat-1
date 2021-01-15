// Author: Sosina Tolossa
/* Purpose: To render our data into the DOM and also let the user 
fill out event form and save that in our API*/

import { useEvents, getEvents, deleteEvent } from "./EventsDataProvider.js"
import { EventsHTML } from "./EventsHTMLConverter.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".events")

let allEvents = []

//
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
        <section class="eventsContainer">
        <h2>Events To Go To</h2>
        <div class="eventsToGoTo">
        ${
            allEvents.map(
            (anEvent) => {
                return EventsHTML(anEvent)
            }).join("")
        }
        </div>
    </section>
    <button id="addEventBtn">Add Event</button>
    `
}


// Add New Event Button Click - Dispatch
eventHub.addEventListener('click', event => {
    if (event.target.id.startsWith('addEventBtn')) {
      const customEvent = new CustomEvent('addNewEventBtnClicked')
      eventHub.dispatchEvent(customEvent)
    }
  })

// Delete Task
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

eventHub.addEventListener("eventChanged", () => {
    EventList()
})
