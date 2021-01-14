//Fetching messages from the database and exporting them for further use. Also saves notes and dispatches a change event
//-Joshua
import {messageListComponent} from "./MessagesList.js"

const eventHub = document.querySelector(".main")

let messages = []

const dispatchStateChengeEvent = () => {
    const messageStateChengedEvent = new CustomEvent("messageStateChanged")

    eventHub.dispatchEvent(messageStateChengedEvent)
}

export const getMessages = () => {
    return fetch("http://localhost:8088/messages?_expand=user")
        .then(messageResponse => messageResponse.json())
        .then(
            parsedMessages => {
                messages = parsedMessages
            }
        )
}

export const useMessages = () => {
    const sortedByDate = journal.sort(
        (currentMessage, nextMessage) =>
        Date.parse(currentMessage.date) - Date.parse(nextMessage.date)
    )
    return sortedByDate
}

export const saveMessage = message => {
    let messageString = JSON.stringify(message)
    return fetch('http://localhost:8088/messages', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: messageString
    })
    .then(getMessages)
    .then(dispatchStateChengeEvent)
    .then(messageListComponent())
}

