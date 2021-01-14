import {saveMessage} from "./MessagesDataProvider.js"

const contentTarget = document.querySelector(".messages")
const eventHub = document.querySelector(".main")

export const messageFormComponent = () => {
    contentTarget.innerHTML = ``
}