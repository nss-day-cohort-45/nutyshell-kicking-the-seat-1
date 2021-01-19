// Author: Sosina Tolossa
/* Purpose: To change our submitted data into HTML representation 
and save it into our database*/

import { saveEvent } from "./EventsDataProvider.js"

const eventDialog = document.querySelector(".detailDialog")
const eventHub = document.querySelector(".container")

// This function calls EventPopup
export const EventsFormComponent = () => {
    EventPopup()
}

//this is rendering the form when 'Add Event' button is clicked
const EventPopup = () => {
    return `
        <section id="eventForm__details">
        <button id="closeDialog" class="closeDialog">X</button
          <div class="addEventBox">
            <h1>Add Event</h1>
            <div class="eventForm__list">
                ${eventDialogForm()}
        </section>
      `
}

//this is a form the user can fill out to add an event
const eventDialogForm = () => {
    return `
    <form action="" class="forms">
    <fieldset>
    <label for="eventName">Event Name</label>
    <input type="text" name="eventName" id="eventName">
    </fieldset>
    </form>

    <form action="" class="forms">
        <fieldset>
            <label for="eventDate">Date of Event</label>
            <input type="date" name="eventDate" id="eventDate">
        </fieldset>
    </form>

    <form action="" class="forms">
        <fieldset>
            <label for="EventLocation">Location</label>
            <input type="text" name="location" id="EventLocation">
        </fieldset>
    </form>

    <form action="" class="forms">
        <fieldset>
            <label for="eventDetails">Event Details</label>
            <input type="text" name="eventEntry" id="eventDetails">
        </fieldset>
    </form>

    <form action="" class="forms">
        <fieldset>
            <label for="weatherDuringEvent">Weather during Event</label>
            <select name="mood" id="weatherMood">
                <option value="sunny">Sunny</option>
                <option value="cloudy">Cloudy</option>
                <option value="in-between">In-between</option>
            </select>
        </fieldset>
    </form>
    <form action="" class="forms">
        <fieldset>
            <label for="eventTemperature">Temperature</label>
            <input type="text" name="eventTemperature" id="eventTemperature">
        </fieldset>
    </form>
    <input id="submit_button" type="submit" value="Submit Event"></input>
`
}

  
// This lets the user close dialog when they click the close button
const closeDialog = (popup) => {
    eventDialog.innerHTML = popup;
    eventDialog.close()
  }

  // This lets the user open dialog when they click 'Add event' button
  const openDialog = (popup) => {
    eventDialog.innerHTML = popup;
    eventDialog.show()
  };

//This is telling that the user clicked the close dialog button
eventDialog.addEventListener('click', event => {
    if (event.target.id === 'closeDialog') {
      closeDialog();
    }
  })

  // This is listening for the close dialog button being clicked and then it exit dialog with escape key
  eventDialog.addEventListener('keydown', evt => {
    if (evt.key === 'Escape') {
      closeDialog();
    }
  });

  //Adding event listener that listens for 'Add event' buttton being clicked
  eventHub.addEventListener("addNewEventBtnClicked", event => {
      openDialog(EventPopup())
  })

  // This is telling the 'submit' button has been clicked
  eventDialog.addEventListener("click", event => {
      if (event.target.id === "submit_button") {
          const customEvent = new CustomEvent("saveEventBtnRecorded")
        //   console.log("event is saved")
          eventDialog.dispatchEvent(customEvent) //this is shouting a new event has been created which is 'submit' button is clicked
      }
  })

  // This is taking information that the user submitted for the event
  eventDialog.addEventListener("saveEventBtnRecorded", event => {
      const eventName = document.querySelector("#eventName").value
      const eventDate = document.querySelector("#eventDate").value
      const eventLocation = document.querySelector("#EventLocation").value
      const weatherMood = document.querySelector("#weatherMood").value
      const eventTemperature = document.querySelector("#eventTemperature").value
      const eventDetails = document.querySelector("#eventDetails").value
    // And creates new event object
      const newEvent = {
          name: eventName,
          date: eventDate,
          location: eventLocation,
          weather: weatherMood,
          temperature: eventTemperature,
          description: eventDetails
      }

      saveEvent(newEvent) // then saves it in our database
      closeDialog() //closes the dialog
  })