import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency-service';


$(document).ready(function() {
  $('#calc').click(function() {
    let amount = parseInt($('#amount').val());
    let choice = $('select#country option:selected').val();
    let promise = CurrencyService.getExchange();
    $('#countryChoice').text(`is this thing on? ${choice} ${amount}`);
    promise.then(function(response) {
      const responseGiven = JSON.parse(response);
      // let error = responseGiven.error-type;
      $('#result').text(`Hey you, please work ${responseGiven}`);
      
    }, function() {
      $('#anyError').text(`There was an error processing your request`);
    });
  });
});



