export default class CurrencyService {
  static getExchange() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/a3a22fabb5b1ce59a083763a/latest/USD`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
        //console.log(this.status);
      };
      //console.log(Promise);
      request.open("GET", url, true);
      request.send();
    }); 
  }
}
