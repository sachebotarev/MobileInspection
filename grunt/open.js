module.exports = function(grunt, config) {
    return {
        darwin: {
            path: "http://<%= serve.host %>:<%= serve.port %>",
            options: {
                delay: 500
            },
            app: 'Google Chrome'
        },
        win32: {
            path: "http://<%= serve.host %>:<%= serve.port %>",
            options: {
                delay: 500
            },
            app: 'chrome'
        }
    }
};