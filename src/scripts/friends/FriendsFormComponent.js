// Author: Rickie
// Purpose: To display the friend form popup

// ------------------------------------------------------------------------------------------------------------------------------------//
//                                                            - IMPORT STATEMENTS                                                      //
// ------------------------------------------------------------------------------------------------------------------------------------//

import { saveFriend } from './FriendsDataProvider.js'


// ------------------------------------------------------------------------------------------------------------------------------------//
//                                                            - DOM NODE REFERENCES                                                    //
// ------------------------------------------------------------------------------------------------------------------------------------//

const eventHub = document.querySelector('.container')
const friendsPopup = document.querySelector('.detailDialog')

// ------------------------------------------------------------------------------------------------------------------------------------//
//                                                            - FUNCTIONS                                                              //
// ------------------------------------------------------------------------------------------------------------------------------------//

export const FriendsFormComponent = () => {
  FriendPop()
}

//  Add New Task Pop Up Container
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

// Add New Task Pop Up Details
  const FriendCard = () => {
    return `
    <fieldset id="friendForm__form">
      <label> <h4>Friend's Username<h4></label>
        <input type="text" id="friendForm__friendName" class="friendForm" placeholder="Input friend's username">
    </fieldset>
    `  
  }

// Close Dialog
  const closeDialog = (popup) => {
    friendsPopup.innerHTML = popup;
    friendsPopup.close()
  }
  
// Open Dialog
  const openDialog = (popup) => { 
    friendsPopup.innerHTML = popup;
    friendsPopup.show()
  }
  
// ------------------------------------------------------------------------------------------------------------------------------------//
//                                                            - EVENTS                                                                 //
// ------------------------------------------------------------------------------------------------------------------------------------//

// Close Popup
friendsPopup.addEventListener('click', event => {
  if (event.target.id === 'closeDialog') {
    closeDialog();
  }
})

 // Exit Popup with Escape Key
 friendsPopup.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
     closeDialog()
  }
})

// Add New Task Popup When Clicked
 eventHub.addEventListener('addNewFriendBtnClicked', event => {
   openDialog(FriendPop())
})

// Save Task Button Click - Dispatch
friendsPopup.addEventListener('click', event => {
  if (event.target.id === 'saveFriendBtn') {
    const customEvent = new CustomEvent('addNewFriendBtnClicked')
    friendsPopup.dispatchEvent(customEvent)
  }
})

// Save Button -- Save data inputted into API
friendsPopup.addEventListener('addNewFriendBtnClicked', event => {

    const friendName = document.querySelector("#friendForm__friendName").value

    const newFriend = {
      name: friendName
    }

    saveFriend(newFriend)
    closeDialog()
}) 
