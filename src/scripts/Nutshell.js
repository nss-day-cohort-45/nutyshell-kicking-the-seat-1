export const Nutshell = () => {
    // Render all your UI components here
}

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".auth")

eventHub.addEventListener("userAuthenticated", clickEvent => {
    contentTarget.innerHTML = Nutshell()
})

