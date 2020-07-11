//const ul = document.getElementById('cities');
//const url = 'https://api.breezometer.com/air-quality/v2/current-conditions?lat={lat}&lon={lon}&key=b024607f571b48318956687919e6a8cd'

fetch('https://api.breezometer.com/air-quality/v2/current-conditions?lat=44.9778&lon=93.2650&key=b024607f571b48318956687919e6a8cd')
  .then(response => response.json())
//  .then(data => obj = data)
  .then(data => console.log(data));
 