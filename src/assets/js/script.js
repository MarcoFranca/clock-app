

// const successCallback = (location) =>{
//     console.log(location)
// }
//
// const errorCallback = (error) =>{
//     console.error('user denied Geolocation')
// }
//
// // navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
//
// const watchId = navigator.geolocation.watchPosition(successCallback, errorCallback)
//
// // const clearWatch = navigator.geolocation.clearWatch(watchId)

let url = 'https://challenge-fielo.herokuapp.com/users'
let accessToken = 'TOKEN_JWT'

var request = require('request');
var options = {
    'method': 'GET',
    'url': 'https://challenge-fielo.herokuapp.com/users',
    'headers': {
        'x-access-token': 'TOKEN_JWT'
    }
};
request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
});