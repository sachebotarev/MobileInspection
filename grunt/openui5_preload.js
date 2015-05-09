module.exports =  function(grunt, config) {
    return {
        component: {
            options: {
                resources: {
                    cwd: '<%= dir.webapp %>',
                    prefix: 'sciener/mobile'
                },
                dest: '<%= dir.dist %>'

            },
            components: true,
            compress: true
        }
    }
};