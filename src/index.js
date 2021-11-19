import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency-service';

$(document).ready(function() {
  $('#calc').click(function() {
    let amount = $('#amount').val();
    let choice = $('#country').val();
    let promise = CurrencyService.getExchange(amount);
    promise.then(function(response) {
      const body = JSON.parse(response);
      $('#result').html(`${body.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});