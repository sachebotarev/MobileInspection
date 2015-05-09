module.exports = {
    'default': [ 'eslint', 'openui5_connect:webapp', 'open:darwin', 'watch'],
    'build': [ 'eslint', 'clear', 'copy', 'openui5_preload'],
    'serve': ['open:darwin', 'openui5_connect:dist' ],
    'clear':[
        'clean'
    ]
};