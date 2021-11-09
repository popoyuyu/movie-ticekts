import { Ticket } from './ticket.js';
import './css/styles.css'
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

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