//Displays the message form and allows users to send a message.
//-Joshua

import {saveMessage} from "./MessagesDataProvider.js"

const contentTarget = document.querySelector(".messageForm")
const eventHub = document.querySelector(".container")

export const messageFormComponent = () => {
    contentTarget.innerHTML = `
        <section class="messageEntry">
            <input class="messageField" type="text" placeholder="Your message here!"></input>
            <button id="messageSend" type="button">Send</button>
        </section>`
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "messageSend") {
       const userId = parseInt(sessionStorage.activeUser)
       const text = document.querySelector(".messageField").value
       
       const newMessage = {
           date: Date.now(),
           userId: userId,
           text: text
       }
       saveMessage(newMessage)
    }
})