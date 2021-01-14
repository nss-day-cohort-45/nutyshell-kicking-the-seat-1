import {getMessages, useMessages} from "./MessagesDataProvider.js"
import {messageHTML} from "./MessagesHTMLConverter.js"

const contentTarget = document.querySelector(".messages")
const eventHub = document.querySelector(".main")

eventHub.addEventListener("messageStateChanged", () => {
    messageList()
})

