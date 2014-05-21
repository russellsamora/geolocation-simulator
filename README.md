geolocation-simulator
=====================

## Description
An HTML5 geolocation simulator for desktops that want to pretend to be mobile. Basically for simulating a mobile use case of walking / driving.

### Features
* Oh, you want features?

### Browser Compatibility
Tested in the following browsers/versions:
* Google Chrome 4.0+

## Documentation

### Examples

##### Basic
```javascript
var coordinates = [
	{latitude: 42.74357, longitude: -71.42357},
	{latitude: 42.74353, longitude: -71.42359},
	{latitude: 42.74342, longitude: -71.42363}
];
var simulation = GeolcationSimulation(coordinates);

//when you are ready, fire it up.
simulation.start(); 
```

## License

Copyright (c) 2014 Russell Goldenberg

Released under the MIT License.