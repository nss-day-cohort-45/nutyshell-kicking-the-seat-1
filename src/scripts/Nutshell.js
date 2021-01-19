// Authors: Team Kicking The Seat
// Purpose: Rendering all the UI components and the listen for an authenticated user sign in and make the login/register forms disappear to make way for the main page.

import { articleList } from "./articles/ArticlesList.js"
import { ArticleForm } from "./articles/ArticlesFormComponent.js"
import { EventList } from "./events/EventsList.js"
import { EventsFormComponent } from "./events/EventsFormComponent.js"
import { TaskList } from './tasks/TasksList.js'
import { TasksFormComponent } from './tasks/TasksFormComponent.js'
import { messageFormComponent } from "./messages/MessagesFormComponent.js"
import { messageListComponent } from "./messages/MessagesList.js"
import { FriendList } from './friends/FriendsList.js'
import { FriendsFormComponent } from './friends/FriendsFormComponent.js'


export const Nutshell = () => {
    // Render all your UI components here
    articleList()
    ArticleForm()
    EventList()
    EventsFormComponent()
    TaskList()
    TasksFormComponent()
    messageFormComponent()
    messageListComponent()
    FriendList()
    FriendsFormComponent()
}

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".auth")

eventHub.addEventListener("userAuthenticated", clickEvent => {
    contentTarget.innerHTML = Nutshell()
})

