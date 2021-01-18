//Renders the list of already sent messages
//-Joshua

import {deleteMessage, getMessages, useMessages} from "./MessagesDataProvider.js"
import {messageHTML} from "./MessagesHTMLConverter.js"

const contentTarget = document.querySelector(".messageList")
const eventHub = document.querySelector(".container")

export const messageListComponent = () => {
    getMessages()
        .then(() => {
            contentTarget.innerHTML = `
            <section class="messagesContainer">
            <h2>Chat Messages</h2>
            </section>
            ` 
                let usingMessages = useMessages()

                for (const text of usingMessages) {
                const messageList = messageHTML(text)
                contentTarget.innerHTML += messageList 
            }
        })
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteMessage--")) {
        const [prefix, messageId] = clickEvent.target.id.split("--")

        deleteMessage(messageId)
    }
})

eventHub.addEventListener("messageStateChanged", () => {
    messageListComponent()
})