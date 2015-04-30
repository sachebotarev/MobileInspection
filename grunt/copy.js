module.exports = {                                 // Копирование файлов из dev в prod версию приложения
    dist: {
        files: [ {
            expand: true,
            cwd: '<%= dir.webapp %>',
            src: [
                '**',
                '!test/**'
            ],
            dest: '<%= dir.dist %>'
        } ]
    }
};