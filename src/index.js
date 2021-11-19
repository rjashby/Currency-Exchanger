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
    promise.then(function(response) {
      const responseGiven = JSON.parse(response);
      // let error = responseGiven.error-type;
      $('#result').html(`${responseGiven}`);
      $('#countryChoice').text(`${choice}`);
    }, function(error) {
      $('#anyError').text(`There was an error processing your request ${error}`);
    });
  });
});



