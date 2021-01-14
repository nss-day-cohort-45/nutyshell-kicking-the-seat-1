import { useEvents } from "./EventsDataProvider.js"

//this function returns html representation of each event object of our 'events' array
export const EventsHTML = (eventObj) => {
    return `<div class="anEvent">
        <h3>${eventObj.name}</h3>
        <div class="anEvent__details">
            <p>Date: ${eventObj.date}.now</p>
            <p>Location: ${eventObj.location}</p>
            <p>Weather: ${eventObj.weather}</p>
            <p>Temperature: ${eventObj.temperature}</p>
            <p>Description: ${eventObj.description}</p>
            <div><button id="eventButton">Add Event</button></div>      
    </div>`
}

