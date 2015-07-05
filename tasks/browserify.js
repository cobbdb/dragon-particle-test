module.exports = function (grunt) {
    grunt.config.merge({
        browserify: {
            build: {
                files: {
                    'bin/dragon-particle-test.js': [
                        'src/*.js'
                    ]
                }
            }
        }
    });
};
