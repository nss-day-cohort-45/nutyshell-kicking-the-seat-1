// Author: Rickie Le and Chris Denmark
// Purpose: Creates an HTML representation of all the friends

// A function that returns an HTML representation of a single friend their designated delete button.
export const FriendsHTMLConverter = (friend) => {
  return `
    <section class="friendList">
      <div class="friend__username">${friend.friendUserId}</div>
      <button id="deleteFriendBtn--${friend.id}" class="deleteFriendBtn">Delete Friend</button>
    </section>
  `
}