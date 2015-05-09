module.exports =  function(grunt, config) {
    return {
        webapp: {
            options: {
                port: 8080,
                hostname: 'localhost'
            }
        },

        dist: {
            options: {
                port: 8090,
                hostname: 'localhost',
                keepalive: true
            }
        }
    }
};