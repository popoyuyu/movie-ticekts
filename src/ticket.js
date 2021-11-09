export function Ticket(movie, time, age, cost) {

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