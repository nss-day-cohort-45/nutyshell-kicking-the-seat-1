// Author: Rickie and Chris
// Purpose: Creates an HTML representation of all the tasks and checkboxes

export const FriendsHTMLConverter = (friend) => {
  return `
    <section class="friendList">
      <div class="friend__username">${friend.friendUserId}</div>
      <button id="deleteFriendBtn--${friend.id}" class="deleteFriendBtn">Delete Friend</button>
    </section>
  `
}