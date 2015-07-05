module.exports = function (grunt) {
    grunt.config.merge({
        uglify: {
            raw: {
                files: {
                    'dist/dragon-particle-test.js': [
                        'bower_components/cocoonjs-plugins/build/cocoon.js',
                        'bin/dragon-particle-test.js'
                    ]
                },
                options: {
                    compress: false,
                    beautify: true,
                    mangle: false
                }
            },
            build: {
                files: {
                    'dist/dragon-particle-test.min.js': [
                        'dist/dragon-particle-test.js'
                    ]
                }
            }
        }
    });
};
