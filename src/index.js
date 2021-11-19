import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency-service';


$(document).ready(function() {
  $('#calc').click(function(event) {
    event.preventDefault();
    let amount = parseInt($('#amount').val());
    let choice = $('select#country option:selected').val();
    let promise = CurrencyService.getExchange();
    console.log(choice);
    console.log(amount);
    if (choice === "AUD") {
      promise.then(function(response) {
        const responseGiven = JSON.parse(response);
        $('#result').text((amount * `${responseGiven.conversion_rates.AUD}`).toFixed(2));
        $('#countryChoice').text(`${choice}`);
      }, function(error) {
        $('#anyError').text(`There was an error processing your request ${error}`);
      });
    } else if (choice === "CAD") {
      promise.then(function(response) {
        const responseGiven = JSON.parse(response);
        $('#result').text((amount * `${responseGiven.conversion_rates.CAD}`).toFixed(2));
        $('#countryChoice').text(`${choice}`);
      }, function(error) {
        $('#anyError').text(`There was an error processing your request ${error}`);
      });
    } else if (choice === "GBP") {
      promise.then(function(response) {
        const responseGiven = JSON.parse(response);
        $('#result').text((amount * `${responseGiven.conversion_rates.GBP}`).toFixed(2));
        $('#countryChoice').text(`${choice}`);
      }, function(error) {
        $('#anyError').text(`There was an error processing your request ${error}`);
      });
    } else if (choice === "EUR") {
      promise.then(function(response) {
        const responseGiven = JSON.parse(response);
        $('#result').text((amount * `${responseGiven.conversion_rates.EUR}`).toFixed(2));
        $('#countryChoice').text(`${choice}`);
      }, function(error) {
        $('#anyError').text(`There was an error processing your request ${error}`);
      });
    } else if (choice === "CHF") {
      promise.then(function(response) {
        const responseGiven = JSON.parse(response);
        $('#result').text((amount * `${responseGiven.conversion_rates.CHF}`).toFixed(2));
        $('#countryChoice').text(`${choice}`);
      }, function(error) {
        $('#anyError').text(`There was an error processing your request ${error}`);
      });
    } else {
      promise.then(function(response) {
        const responseGiven = JSON.parse(response);
        $('#result').text(`${responseGiven.error}`);
      }, function(error) {
        $('#anyError').text(`There was an error processing your request ${error}`);
      });
    }
  });
});
