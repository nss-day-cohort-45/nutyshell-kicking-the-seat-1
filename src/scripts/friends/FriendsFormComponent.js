// Author: Rickie Le
// Purpose: To display the Add a Friend popup when the user clicks the Add New Friend button.

import { saveFriend } from './FriendsDataProvider.js'

const eventHub = document.querySelector('.container')
const friendsPopup = document.querySelector('.detailDialog')

// Function which is called in Nutshell.js. This invokes FriendPop, which is responsible for the Add New Friend popup
export const FriendsFormComponent = () => {
  FriendPop()
}

//  Add New Friend popup container
const FriendPop = () => {
  return `
      <section id="friendForm__details">
        <button id="closeDialog" class="closeDialog">X</button>
        <div class="friendPopupBox">
          <h1>Input Potential Friend's Username</h1>
            <div class="friendForm__list">
              ${FriendCard()}
            </div>
            <button id="saveFriendBtn" class="saveFriendBtn">Add To Friends List</button>
        </div>
      </section>
    `
  }

// Add New Friend popup form
  const FriendCard = () => {
    return `
    <fieldset id="friendForm__form">
      <label> <h4>Friend's Username<h4></label>
        <input type="text" id="friendForm__friendName" class="friendForm" placeholder="Input friend's username">
    </fieldset>
    `  
  }

// Close popup
  const closeDialog = (popup) => {
    friendsPopup.innerHTML = popup;
    friendsPopup.close()
  }
  
// Open popup
  const openDialog = (popup) => { 
    friendsPopup.innerHTML = popup;
    friendsPopup.show()
  }
  
// ------------------------------------------------------------------------------------------------------------------------------------//
//                                                            - EVENTS                                                                 //
// ------------------------------------------------------------------------------------------------------------------------------------//

// Close popup with close/x button
friendsPopup.addEventListener('click', event => {
  if (event.target.id === 'closeDialog') {
    closeDialog();
  }
})

 // Exit popup with escape key
 friendsPopup.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
     closeDialog()
  }
})

// Add New Friend popup when clicked
 eventHub.addEventListener('addNewFriendBtnClicked', event => {
   openDialog(FriendPop())
})

// When the Save Task button is clicked, dispatch the addNewFriendBtnClicked event
friendsPopup.addEventListener('click', event => {
  if (event.target.id === 'saveFriendBtn') {
    const customEvent = new CustomEvent('addNewFriendBtnClicked')
    
    friendsPopup.dispatchEvent(customEvent)
  }
})

// Save Button -- Saves the data the user entered into the form to the API.
// saveFriend will also change the state of the DOM to reflect most updated friends
friendsPopup.addEventListener('addNewFriendBtnClicked', event => {

    const friendName = document.querySelector("#friendForm__friendName").value

    const newFriend = {
      name: friendName
    }

    saveFriend(newFriend)
    closeDialog()
}) 
