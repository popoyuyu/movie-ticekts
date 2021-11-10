import Ticket from './../src/ticket.js';

describe('Ticket', () => {
  test('should create a new Ticket object with keys of movie, time, age', () => {
    const ticket = new Ticket("movie", "time", "age");
    expect(ticket.movie).toEqual("movie");
    expect(ticket.time).toEqual("time");
    expect(ticket.age).toEqual("age");
  });

  test('should display the movie Scary Movie', () => {
    const firstMovie = new Ticket("Scary Movie");
    expect(firstMovie.movie).toEqual("Scary Movie");
  });

  test('should display the time 12pm', () => {
    const time = new Ticket("", "12pm");
    expect(time.time).toEqual("12pm");
  });

  test('should display the ', () => {
    const newTicket = new Ticket("Scary Movie", "11pm", "20");
    expect(newTicket.ticketPrice()).toEqual(12);
  });
});
