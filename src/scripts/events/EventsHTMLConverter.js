import { useEvents } from "./EventsDataProvider.js"

//this function returns html representation of each event object of our 'events' array
export const EventsHTML = (eventObj) => {
    return `<div class="anEvent">
        <h2>List of Events</h2>
        <h3>${eventObj.name}</h3>
        <div class="anEvent__details">
            <p>Date: ${eventObj.date}.now</p>
            <p>Location: ${eventObj.location}</p>
            <p>Weather: ${eventObj.weather}</p>
            <p>Temperature: ${eventObj.temperature}&#8457;</p>
            <p>Description: ${eventObj.description}</p>      
    </div>
    <div><button id="deleteEventButton">Delete Event</button></div>
    `
}

