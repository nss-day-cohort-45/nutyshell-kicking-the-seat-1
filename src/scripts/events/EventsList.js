import { useEvents } from "./EventsDataProvider.js"
import { EventsHTML } from "./EventsHTMLConverter.js"

const eventHub = document.querySelector(".addEventBtn")
const contentTarget = document.querySelector(".events")

eventHub.addEventListener("click", event => {
    if (event.target.id === "eventButton") {
        const customEvent = new CustomEvent("close-event-dialog", {
            detail: {
                clickedEventId: event.target.id
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})

export const EventList = () => {
    let theEvents = useEvents()
    render(theEvents)
}

export const render = () => {
    let theEvents = useEvents()
    for (const event of theEvents) {
        /*
            Invoking the component that returns an
            HTML representation of a single event
        */
       eventHub.innerHTML += EventsHTML(event)
         
    }
}

