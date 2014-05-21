/*!
*  geolocation-simulator.js v0.0.1
*
*  (c) 2014, Russell Goldenberg
*
*  MIT License
*/

(function() {

	//constants
    var KM_IN_DEGREE = 110.562,
        SECONDS_IN_HOUR = 3600,
        UPDATE_INTERVAL = 1000;
	

	var GeoSim = function(params) {
		var self = this;
		//private vars
		var _watchTimer = null,
			_coords = params.coords,
			_speed = (params.speed || 40) / SECONDS_IN_HOUR, // km/second
			_current = { 
				coords: { 
					latitude: 0,
					longitude: 0,
					accuracy: 1,
					altitude: null,
					altitudeAccuracy: null,
					heading: null,
					speed: null
	            },
	            timestamp: 1},
	        _rate = {latitude: 0, longitude: 0},
	        _index = -1,
	        _numSteps,
	        _currentStep;

		//public functions            
		self.start = function() {
            nextCoord();
        };

        //private functions

        //advance to next coordinate in array
        function nextCoord() {
        	_index++;
            //check if route completed
            if(_index < _coords.length - 1) {
                //set current coordinate
                _current.coords.latitude = _coords[_index].latitude;
                _current.coords.longitude = _coords[self.index].longitude;
                
                //set rate of change
                //distance between points with direction for lat and lon (km)
                var deltaLat = (_coords[_index+1].latitude - _coords[_index].latitude) * KM_IN_DEGREE,
                    deltaLon = (_coords[_index+1].longitude - _coords[_index].longitude) * KM_IN_DEGREE;
                
                //as the crow flies distance (km)
                var deltaDist = Math.sqrt((deltaLat * deltaLat) + (deltaLon * deltaLon));
                
                //total time between points at desired speed (sec)
                var deltaSeconds = Math.floor(deltaDist / _speed);

                //rate of change for each update (1 sec) in lat/lon
                _rate.latitude = deltaLat / deltaSeconds / KM_IN_DEGREE;
                _rate.longitude = deltaLon / deltaSeconds / KM_IN_DEGREE;

                //total steps aka number of seconds
                _numSteps = deltaSeconds;
                _currentStep = 0;

                //begin movement
                setTimeout(step, UPDATE_INTERVAL);
            } else {
            	//path is complete
                alert('you have arrived!');
            }
        }

        //advance to next update along path between points
        function step() {
            _currentStep++;
            if(_currentStep < _numSteps) {
                _current.coords.latitude += _rate.latitude;
                _current.coords.longitude += _rate.longitude;
                setTimeout(step, UPDATE_INTERVAL);
            } else {
                nextCoord();
            }
        }

        //override native geolocation
        function overrideGeolocation() {
        	//override native functionality
	        navigator.geolocation.getCurrentPosition = function(cb,error,options) {
	            cb(self.current);
	        };

	        navigator.geolocation.watchPosition = function(cb,error,options) {
	            var sendPos = function() {
	                cb(self.current);
	               _watchTimer = setTimeout(sendPos, 1000);
	            };
	            sendPos();
	        };

	        navigator.geolocation.clearWatch = function() {
	            clearTimeout(_watchTimer);
	        }
        }();
        
        return self;
    };

	//utils

	//add convert to radian method for numbers
	if (typeof(Number.prototype.toRad) === "undefined") {
		Number.prototype.toRad = function() {
			return this * Math.PI / 180;
		}
    }

    window.GeolocationSimulator = GeoSim;
})();

