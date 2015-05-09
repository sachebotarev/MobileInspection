'use strict';

module.exports = function(grunt) {

    var path = require('path');
    require('time-grunt')(grunt);


    var gruntData = {
        dir: {
            bower_components: 'bower_components',
            webapp: 'webapp',
            dist: 'dist'
        },
        serve: {
            host: 'localhost',
            dev_port: '8080',
            prod_port: '8090'
        }
    };

    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'grunt'),
        jitGrunt: {
            staticMappings:{
                'openui5_connect': 'grunt-openui5',
                'openui5_theme': 'grunt-openui5',
                'openui5_preload': 'grunt-openui5'
            }
        },
        data: gruntData
    });
};