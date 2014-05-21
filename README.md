geolocation-simulator
=====================

## Description
An HTML5 geolocation simulator for desktops that want to pretend to be mobile. Basically for simulating a mobile use case of walking / driving.

### Features
* Oh, you want features...
* Customize speed of movement
* Pause at any coordinate

### Demos
* [Basic](http://russellgoldenberg.com/libraries/geolocation-simulator/basic)
* [Advanced](http://russellgoldenberg.com/libraries/geolocation-simulator/advanced)

### How it works
When testing something with geolocation, it can be a pain to walk around, so this simulates that experience by overriding the native geolocation API so you change almost zero code switching to production. You supply a list of coordinates, and the simulator will follow the path (as the crow flies) between them. It moves at a constant pace and then stops on completion. You can provide a custom speed. Use something [like this](http://www.findlatitudeandlongitude.com/click-lat-lng-list/) to easily create your path coordinates.

### Browser compatibility
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