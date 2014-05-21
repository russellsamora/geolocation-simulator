geolocation-simulator
=====================

## Description
The HTML5 geolocation simulator for desktops that you never thought you needed. Because you can't carry around your computer to demonstrate and test a mobile feature. If this is already a Chrome Dev tool, oops.

### Features
* Custom path
* Variable speed
* Pause at any location

### Demos
* [Basic](http://russellgoldenberg.com/libraries/geolocation-simulator/basic)
* [Advanced](http://russellgoldenberg.com/libraries/geolocation-simulator/advanced)

### How it works
When testing something with geolocation, it can be a pain to walk around or go the actual place you will be implementing. This simulates that experience by overriding the native geolocation API so you change almost zero code when you do the real thing. You supply a list of coordinates, and the simulator will interpolate a path between them. It moves at a constant pace and stops on completion. You can provide a custom speed or pause at any point. Use something [like this](http://www.findlatitudeandlongitude.com/click-lat-lng-list/) to easily create your path coordinates.

### Browser compatibility
Tested in the following browsers/versions:
* Chrome 35
* Firefox 29
* Safari 7
* iOS 7.1

## Documentation

### Examples

##### Basic
```javascript
var coordinates = [
	{latitude: 42.347856, longitude: -71.073668},
    {latitude: 42.347872, longitude: -71.068561},
    {latitude: 42.347555, longitude: -71.065986},
];
var simulation = GeolcationSimulation({coords: coordinates});

//when you are ready, fire it up.
simulation.start(); 
```

##### Customized
```javascript
var coordinates = [
	{latitude: 42.347856, longitude: -71.073668},
    {latitude: 42.347872, longitude: -71.068561, pause: 5000}, //pause for 5 seconds
    {latitude: 42.347555, longitude: -71.065986},
];
var simulation = GeolcationSimulation({coords: coordinates, speed: 160}); //160 km (slow down!)

//when you are ready, fire it up.
simulation.start(); 
```

## License

Copyright (c) 2014 Russell Goldenberg

Released under the MIT License.