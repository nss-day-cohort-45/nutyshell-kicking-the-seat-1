
const contentTarget = document.querySelector(".events")
const eventHub = document.querySelector(".dashboard")

// eventHub.addEventListener("", event => {})


const render = () => {
    contentTarget.innerHTML = `<form action="" class="forms">
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
            <label for="eventEntry">Event Details</label>
            <input type="text" name="eventEntry" id="eventDetails">
        </fieldset>
    </form>

    <form action="" class="forms">
        <fieldset>
            <label for="weatherDuringEvent">Weather during Event</label>
            <select name="mood" id="mood">
                <option value="sunny">Sunny</option>
                <option value="cloudy">Cloudy</option>
                <option value="in-between">In-between</option>
            </select>
        </fieldset>
    </form>
    <input id="submit_button" type="submit" value="Submit Event"></input>
`
}

export const EventForm = () => {
    render()
}

