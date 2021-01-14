
const parkPop= (chosenPark) => {
    return `
        <section class="detailsPark">
          <div class="parksDetailsBox">
            <h1>Park Details</h1>
            <div class="ParksDetails__list">
              ${ParkCard(chosenPark)}
            </div>
              <button id="close-details-dialog-park">Close</button>
          </div>
        </section>
      `;
    };

    const ParkCard = (chosenPark) => {
      
        return `
          <div class="park-details__card">
            <div class="park-details__name"> ${chosenPark.fullName} </div>
            <div class="park-details__description"> ${chosenPark.description} </div>
          </div>
        `;
        
      };

eventHub.addEventListener('parkDetailsBtnClicked', evt => {
    const usingParkId = evt.detail.parkId; //parkId relates to the split off from the cray ID that we just received from our eventHub (from Parks component)
    const parks = copiedParks(); //making it available for use to access all of the parks, so it is an array of the parks
    const chosenPark = parks.find(park => park.id === usingParkId); //this is going through all of the parks and FINDing the one that matches the id of the one that was clicked, AKA the id of usingParkId
  
    openDialogPark(parkPop(chosenPark)); //we're calling the function openDialogPark. We're passing the function parkPop into it with a parameter of chosenPark.
  });

  eventHub.addEventListener('click', evt => {
    if (evt.target.id === 'close-details-dialog-park' ||
      evt.target.classList.contains('park-details')) {
      closeDialogPark();
    }
  })
  window.addEventListener('keydown', evt => {
    if (evt.key === 'Escape') {
      closeDialogPark();
    }
  });
  
  const closeDialogPark = (taco) => {
    parkPopUp.innerHTML = taco;
    parkPopUp.close()
  };
  