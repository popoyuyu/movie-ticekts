export default function Ticket(movie, time, age, cost) {
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