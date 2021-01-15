// Authors: Team Kicking The Seat
// Purpose: Rendering all the UI components and the listen for an authenticated user sign in and make the login/register forms disappear to make way for the main page.

import { EventList } from "./events/EventsList.js"
import { EventsFormComponent } from "./events/EventsFormComponent.js"
import { messageFormComponent } from "./messages/MessagesFormComponent.js"
import { messageListComponent } from "./messages/MessagesList.js"

export const Nutshell = () => {
    // Render all your UI components here
    EventList()
    EventsFormComponent()

    messageFormComponent()
    messageListComponent()
}

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".auth")
// const eventTarget = document.querySelector(".events")

eventHub.addEventListener("userAuthenticated", clickEvent => {
    contentTarget.innerHTML = Nutshell()
})

