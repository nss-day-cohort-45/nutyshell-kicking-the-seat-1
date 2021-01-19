// Author: Rickie Le 
/* Purpose: To render a list of Friend HTML elements
*/

import { getFriends, useFriends, deleteFriend } from './FriendsDataProvider.js'
import { FriendsHTMLConverter } from './FriendsHTMLConverter.js'

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector(".friends")

let allFriends = []

// Grabs the friends, and the render function is invoked to display the Friends container
export const FriendList = () => {
  getFriends()
    .then(() => {
      allFriends = useFriends()
      render()
    })
}

// To render the Friends List container, and a list of the user's friends with FriendsHTMLConverter
const render = () => {
  contentTarget.innerHTML = `
      <section class="friendsContainer nutshellComponent">
        <h2>Friends</h2>
        <div class="friendList">
          ${
            allFriends.map(
              (friend) => {
                return FriendsHTMLConverter(friend)
              }).join("")
          }
        </div>
        <button id="addNewFriendBtn" class="addNewFriendBtn">Add New Friend</button>
      </section>

    `
}

// Changes the current state of friends to the most updated version - Invokes FriendList
eventHub.addEventListener("friendStateChanged", () => {
  FriendList()
})

// Add New Friend - Dispatch
eventHub.addEventListener('click', event => {
  if (event.target.id.startsWith('addNewFriendBtn')) {
    const customEvent = new CustomEvent('addNewFriendBtnClicked')
    eventHub.dispatchEvent(customEvent)
  }
})

// Delete Friend when clicking the Delete Friend button
eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id.startsWith("deleteFriendBtn--")) {
      const [prefix, friendId] = clickEvent.target.id.split("--")
   
     deleteFriend(friendId)
  }
})