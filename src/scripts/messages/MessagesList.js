//Renders the list of already sent messages
//-Joshua

import {getMessages, useMessages} from "./MessagesDataProvider.js"
import {messageHTML} from "./MessagesHTMLConverter.js"

const contentTarget = document.querySelector(".messageList")
const eventHub = document.querySelector(".container")

export const messageListComponent = () => {
    getMessages()
        .then(() => {
            contentTarget.innerHTML = ""
            let usingMessages = useMessages()
            for (const text of usingMessages) {
                const messageList = messageHTML(text)
                contentTarget.innerHTML += messageList
            }
        })
}

eventHub.addEventListener("messageStateChanged", () => {
    messageListComponent()
})