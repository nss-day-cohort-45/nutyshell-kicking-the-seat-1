// Author: Rickie
/* Purpose: To render a list of Daily Task HTML elements
*/

import { getFriends, useFriends, deleteFriend } from './FriendsDataProvider.js'
import { FriendsHTMLConverter } from './FriendsHTMLConverter.js'

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector(".friends")

let allFriends = []

eventHub.addEventListener("friendStateChanged", () => {
  FriendList()
})

export const FriendList = () => {
  getFriends()
    .then(() => {
      allFriends = useFriends()
      render()
    })
}

const render = () => {
  contentTarget.innerHTML = `
      <section class="friendsContainer">
        <h2>Friends</h2>
        <div class="friendList">
          ${
            allFriends.map(
              (friend) => {
                return FriendsHTMLConverter(friend)
              }).join("")
          }
        </div>
      </section>

   <button id="addNewFriendBtn" class="addNewFriendBtn">Add New Friend</button>
    `
}


// Add New Friend
eventHub.addEventListener('click', event => {
  if (event.target.id.startsWith('addNewFriendBtn')) {
    const customEvent = new CustomEvent('addNewFriendBtnClicked')
    eventHub.dispatchEvent(customEvent)
  }
})

// Delete Friend
eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id.startsWith("deleteFriendBtn--")) {
      const [prefix, friendId] = clickEvent.target.id.split("--")
      /*
          Invoke the function that performs the delete operation.
          Once the operation is complete you should THEN invoke
          useNotes() and render the note list again.
      */
     deleteFriend(friendId)
  }
})