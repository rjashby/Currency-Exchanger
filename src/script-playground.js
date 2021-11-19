// export default class CurrencyService {
//   static getExchange() {
//     return new Promise(function(resolve, reject) {
//       let request = new XMLHttpRequest();
//       const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
//       request.onload = function() {
//         if (this.status === 200) {
//           resolve(request.response);
//         } else {
//           reject(request.response);
//         }
//       };
//       request.open("GET", url, true);
//       request.send();
//     }); 
//   }
// }

// $(document).ready(function() {
//   $('#calc').click(function() {
//     let amount = parseInt($('#amount').val());
//     let choice = $('select#country option:selected').val();
//     let promise = CurrencyService.getExchange(amount);
//     promise.then(function(response) {
//       const responseGiven = JSON.parse(response);
//       // let error = responseGiven.error-type;
//       $('#result').html(`${responseGiven.conversion_rates}`);
//       $('#countryChoice').html(choice);
//     }, function(error) {
//       $('#anyError').text(`There was an error processing your request: ${error}`);
//       console.log(promise);
//     });
//     window.scrollTo(0,document.body.scrollHeight);
//   });
// });

// let error = ${responseGiven.error-type};


//FETCH METHOD
// export default class CurrencyService {  
//   static getExchange() {
//     return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
//       .then(function(response) {
//         if (!response.ok) {
//           throw Error(response.statusText);
//         }
//         console.log(response);
//         return response.json();
//       })
//       .catch(function(error) {
//         return error;
//       });
//   }
// }

// function getExchange(response) {
//   let choice = $('select#country option:selected').val();
//   let error = $(response.error);
//   let amount = parseInt($('#amount').val());
//   if (response.conversion_rates) {
//     $('#result').html(amount / `${response.conversion_rates.choice}`);
//     $('#countryChoice').html(choice);
//   } else {
//     $('#anyError').text(`There was an error processing your request: ${error}`);
//   }
//   console.log(response);
// }

// $(document).ready(function() {
//   $('#calc').click(function() {
//     CurrencyService.getExchange()
//       .then(function(response) {
//         getExchange(response);
//       });
//     console.log(CurrencyService.getExchange());
//   });
// });

//BARE BONES

// $(document).ready(function() {
//   $('#calc').click(function() {
//     let promise = CurrencyService.getExchange();
//     promise.then(function(response) {
//       const body = JSON.parse(response);
//       $('#result').text(`Please just work ${body}`);
//       $('#countryChoice').text(`Is this thing on?`);
//     }, function(error) {
//       $('.showErrors').text(`There was an error processing your request: ${error}`);
//     });
//   });
// });