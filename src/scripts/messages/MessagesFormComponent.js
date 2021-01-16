//Displays the message form and allows users to send a message.
//-Joshua

import {saveMessage} from "./MessagesDataProvider.js"

const contentTarget = document.querySelector(".messageForm")
const eventHub = document.querySelector(".container")
const messagePopup = document.querySelector('.detailDialog')

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


// Add New Friend
eventHub.addEventListener('click', event => {
    if (event.target.id.startsWith('messageUsername')) {
      const customEvent = new CustomEvent('messageUsernameClicked')
      eventHub.dispatchEvent(customEvent)
    }
  })




export const MessagesFormComponent = () => {
    MessagePop()
  }
  
  //  Add New Task Pop Up Container
  const MessagePop = () => {
    return `
        <section id="friendForm__details">
          <button id="closeDialog" class="closeDialog">X</button>
          <div class="friendPopupBox">
            <h1>Add User as Friend?</h1>
              <div class="friendForm__list">
                ${MessageCard()}
              </div>
							<button id="saveFriendBtn" class="">Yes</button>
							<button id="noToFriend" class="noToFriend">Nah</button>
          </div>
        </section>
      `
    }
	

    const MessageCard = () => {
      return `
      <fieldset id="friendForm__form">
          <input type="text" id="friendForm__friendName" class="friendForm" placeholder="Input friend's username">
      </fieldset>
      `  
    }
  
  // Close Dialog
    const closeDialog = (popup) => {
      messagePopup.innerHTML = popup;
      messagePopup.close()
    }
    
  // Open Dialog
    const openDialog = (popup) => { 
      messagePopup.innerHTML = popup;
      messagePopup.show()
		}
		

// Close Popup
messagePopup.addEventListener('click', event => {
  if (event.target.id === 'noToFriend') {
    closeDialog();
  }
})

 // Exit Popup with Escape Key
 messagePopup.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
     closeDialog()
  }
})

// Add New Task Popup When Clicked
 eventHub.addEventListener('messageUsernameClicked', event => {
   openDialog(MessagePop())
})
