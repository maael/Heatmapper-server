/*
	Grunt set up used from http://mattbailey.io/a-beginners-guide-to-grunt-redux/.
	With the following modification - 
	25/11/14 - imagemin removed
	25/11/14 - test added using mocha
*/
module.exports = function(grunt) {
  require('load-grunt-config')(grunt, {
    jitGrunt: true
  });
	require('time-grunt')(grunt);
};