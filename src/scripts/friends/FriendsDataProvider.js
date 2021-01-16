// Author: Rickie and Chris
/* Purpose: To fetch an array of friend objects from the API, 
  and stores it into an empty array we can use elsewhere.
*/ 

const eventHub = document.querySelector(".container")
let friends = []

const dispatchStateChangeEvent = () => {
  const friendStateChangedEvent = new CustomEvent("friendStateChanged")

  eventHub.dispatchEvent(friendStateChangedEvent)
}

export const useFriends = () => {
  return friends.slice()
} 

export const getFriends = () => {
  return fetch('http://localhost:8088/friends?_expand=friendUser')
    .then(response => response.json())
    .then(parsedFriends => {
        friends = parsedFriends
    })
}

export const saveFriend = friend => {
  return fetch('http://localhost:8088/friends', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(friend)
  })
  .then(getFriends)
  .then(dispatchStateChangeEvent)
}

export const deleteFriend = friendId => {
  return fetch(`http://localhost:8088/friends/${friendId}`, {
    method: "DELETE"
  })
    .then(getFriends)
    .then(dispatchStateChangeEvent)
}