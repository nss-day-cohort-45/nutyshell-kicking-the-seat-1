//HTML for rendering already sent messages.
//-Joshua
 

export const messageHTML = (messageObject) => {
    if (parseInt(sessionStorage.activeUser) === messageObject.userId) {
    return `
        <section class="messages">
            <div class="messageAuthor">${messageObject.user.username}</div>
                <div class="messageDate"> Sent ${ new Date(messageObject.date).toLocaleDateString('en-US') }</div>
                <div class="messageText">${messageObject.text}</div>
                <button id="deleteMessage--${messageObject.id}">Delete</button>
        </section>
            `
    }
    else {
        return `
        <section class="messages">
            <div class="messageAuthor">${messageObject.user.username}</div>
            <div class="messageDate"> Sent ${ new Date(messageObject.date).toLocaleDateString('en-US') }</div>
            <div class="messageText">${messageObject.text}</div>
        </section>`
    }
}