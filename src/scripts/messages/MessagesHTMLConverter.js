export const messageHTML = (messageObject) => {
    return `
        <section class="messages">
        <div class ="message Author">${messageObjet.userId.username}</div>
            <div class ="messageDate"> Sent ${ new Date(MessageObject.date).toLocaleDateString('en-US') }</div>
            <div class ="messageText">${messageObject.text}</div>
            `
}