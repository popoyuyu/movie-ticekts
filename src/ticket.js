export default function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.cost = 10;
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
  return this.cost;
};