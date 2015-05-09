module.exports = {
    webapp: {
        options: {
            livereload: true
        },
        files: [
            "<%= dir.webapp %>/**"
        ],
        tasks: ["eslint"]
    }
};