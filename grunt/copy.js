module.exports = function(grunt, config) {
    return {
        dist: {
            files: [ {
                expand: true,
                cwd: '<%= dir.webapp %>/',
                src: [
                    '**',
                    '!test/**'
                ],
                dest: '<%= dir.dist %>/'
            } ]
        }
    }
};