import { test } from 'media-typer';
import Ticket from './../src/ticket.js';

describe('Ticket', () => {

  test('should create a new Ticket object with keys of movie, time, age, and cost', () => {
    const ticket = new Ticket("movie", "time", "age", "cost");
    expect(ticket.movie).toEqual("movie");
    expect(ticket.time).toEqual("time");
    expect(ticket.age).toEqual("age");
    expect(ticket.cost).toEqual("cost");
  });

  test('should display the movie Scary Movie', () => {
    const firstMovie = new Ticket("movie");
    expect(firstMovie.movie).toEqual("Scary Movie");
  });
});
