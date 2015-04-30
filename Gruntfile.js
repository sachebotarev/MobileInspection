'use strict';

module.exports = function(grunt) {

    require('time-grunt')(grunt);

    require('load-grunt-config')(grunt, {
        jitGrunt: true,
        dir: {
            bower_components: 'bower_components',
            webapp: 'webapp',
            dist: 'dist'
        }
    });

};