//HTML for rendering already sent messages.
//-Joshua

export const messageHTML = (messageObject) => {
    return `
        <section class="messages">
        <div class="messageAuthor">${messageObject.user.username}</div>
            <div class="messageDate"> Sent ${ new Date(messageObject.date).toLocaleDateString('en-US') }</div>
            <div class="messageText">${messageObject.text}</div>
            `
}