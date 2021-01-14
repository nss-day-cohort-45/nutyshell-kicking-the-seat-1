// Authors: Team Kicking The Seat
// Purpose: Rendering all the UI components and the listen for an authenticated user sign in and make the login/register forms disappear to make way for the main page.

export const Nutshell = () => {
    // Render all your UI components here
}

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".auth")

eventHub.addEventListener("userAuthenticated", clickEvent => {
    contentTarget.innerHTML = Nutshell()
})

