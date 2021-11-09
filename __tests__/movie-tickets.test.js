import Ticket from './../src/ticket.js';

describe('Ticket', () => {

  test('should should create a new Ticket object with keys of movie, time, age, and cost', () => {
    const ticket = new Ticket("movie", "time", "age", "cost");
    expect(ticket.movie).toEqual("movie");
    expect(ticket.time).toEqual("time");
    expect(ticket.age).toEqual("age");
    expect(ticket.cost).toEqual("cost");
  });
});