// Business Logic
function Ticket(movie, time, age, cost) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.cost = cost;
}

Ticket.prototype.ticketPrice = function () {
  if (this.movie === "Scary Movie") {
    this.cost += 2;
  }
  if (this.time === "12pm") {
    this.cost -= 2;
  }
  if (this.age >= 65 || this.age <= 10) {
    this.cost -= 2;
  }
};

//UI Logic

$(document).ready(function () {
  $("#ticket").submit(function (e) {
    e.preventDefault();
    const inputtedMovieName = $("select#movie").val();
    const inputtedAge = $("input#age").val();
    const inputtedTime = $("select#time").val();
    const moviePrice = 10;
    let ticket = new Ticket(inputtedMovieName, inputtedTime, inputtedAge, moviePrice);
    ticket.ticketPrice();
    $("#movie-name").html(ticket.movie);
    $("#time-of-day").html(ticket.time);
    $("#final-cost").html(ticket.cost);
  });
});