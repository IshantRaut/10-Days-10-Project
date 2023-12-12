// Step 1: Get reference of DOM element
const container = document.querySelector(".container");
const btn = document.getElementById("button");
const clear = document.getElementById("clear");
//Reference to availbale seat
const seats = document.querySelectorAll(".row .seat:not(.sold)");
//reference to count and total
const count = document.getElementById("count");
const total = document.getElementById("total");
//Reference of the movie dropdown
const movieSelect = document.getElementById("movie");
const screen = document.getElementById("screen");


//Step 2 : ADD Event Listner
//Event listner for movie selection change
movieSelect.addEventListener('click', e =>{
    //update ticket price and store selected movie data
    ticketPrice = +e.target.value;
    console.log(ticketPrice);

    setMovieData(e.target.selectedIndex,e.target.value);

    //Displayed Coutn and total
    updateSelectedCount();
}); 

container.addEventListener("click", e => {
    //check if seat s clicked and not solid
    if(
        e.target.classList.contains("seat") &&
        !e.target.classList.contains("sold")
    ) {
        //Toggle selection
        e.target.classList.toggle("selected");
        updateSelectedCount();
    }
});

//Define function to update selected count and total
function updateSelectedCount(){
    //get all selected seats
    const selectedSeats = document.querySelectorAll(".row .seat.selected");

    //Get and array of selected seats indexes
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    console.log(seatsIndex);

    //store index to local storage
    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

    //calculate selected Seats and count
    const selectedSeatsCounts = selectedSeats.length;
    console.log("Lenght", selectedSeatsCounts);

    //Update UI
    count.innerText= selectedSeatsCounts;
    total.innerText = selectedSeatsCounts * ticketPrice;
   

    setMovieData(movieSelect.selectedIndex, movieSelect.value);

}

function setMovieData(movieIndex, moviePrice){
    localStorage.setItem("selectedMovieIndex",movieIndex);
    localStorage.setItem("selectedMoviePrice",moviePrice);
}

function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

    if(selectedSeats != null && selectedSeats.length > 0){
        seats.forEach((seat, index) => {
            if(selectedSeats.indexOf(index) > -1){
                seat.classList.add("selected");
            }
        });
    }

    //Get selected movie data from local storage
    const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

    if(selectedMovieIndex !== null){
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}


btn.addEventListener("click", e =>{
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    const selectedSeatsCounts = selectedSeats.length;
    selectedSeats.forEach(seat => {
        seat.classList.add("sold");
        seat.classList.remove("selected");
    })
    screen.innerHTML = `<p>You have Selected ${selectedSeatsCounts}</p> <br> <p>You Have To PAY Total of ${selectedSeatsCounts*ticketPrice}</p>`;
});


populateUI();
let ticketPrice = +movieSelect.value;
updateSelectedCount();

clear.addEventListener("click", e=>{
    seats.forEach(seat => seat.classList.remove("selected"));
    screen.innerHTML='';
    count.innerText=0;
    total.innerText=0;
    movieSelect.selectedIndex=0;
});


function resetValues(){

    seats.forEach(seat => seat.classList.remove("selected"));

     // Clear local storage
     localStorage.removeItem("selectedSeats");
     localStorage.removeItem("selectedMovieIndex");
     localStorage.removeItem("selectedMoviePrice");

    count.innerText=0;
    total.innerText=0;
    movieSelect.selectedIndex=0;
    
}

window.onload= resetValues;