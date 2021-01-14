
const events = [
    {
      "id": 1,
      "name": "Feel the New Sound of Nashville",
      "date": "2021-08-06",
      "location": "1 Titans Way, Nashville, TN 37213",
      "weather": "Sunny",
      "temperature": 84,
      "description": "The Music City Grand Prix, in partnership with INDYCAR, is bringing a new sound to Nashville. The Music City Grand Prix announced that the newest NTT INDYCAR SERIES race will debut Aug. 6-8, 2021, in Nashville, Tennessee. The three-day international festival of speed and sound will be staged on a temporary grand prix circuit in downtown Nashville and around the Nissan Stadium campus.",
      "userId": 1
    }, 
    {
        "id": 2,
        "name": "KENNY CHESNEY CHILLAXIFICATION TOUR",
        "date": "2021-05-15",
        "location": "1 Titans Way, Nashville, TN 37213",
        "weather": "Cloudy",
        "temperature": 65,
        "description": "Kenny Chesney’s Chillaxification tour has been re-scheduled for Saturday, May 15, 2021 at Nissan Stadium. Original tickets are automatically valid for the rescheduled show date. Patrons unable to attend the rescheduled show have thirty (30) days from today’s date to request a refund at the point of purchase.",
        "userId": 4
      }
]

//creating a function that returns a copy of events array and exporting it
export const useEvents = () => events.slice()