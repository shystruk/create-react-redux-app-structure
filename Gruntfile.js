'use strict';

const config = require('./app/config.json');
const TARGET = process.env.npm_lifecycle_event;

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        'cache-busting': {
            libsJs: {
                replace: ['./index.html'],
                replacement: 'libs.js',
                file: './build/libs.js',
                cleanup: true
            },
            vendorJs: {
                replace: ['./index.html'],
                replacement: 'vendor.js',
                file: './build/vendor.js',
                cleanup: true
            },
            indexJs: {
                replace: ['./index.html'],
                replacement: 'index.js',
                file: './build/index.js',
                cleanup: true
            },
            css: {
                replace: ['./index.html'],
                replacement: 'styles.min.css',
                file: './build/styles.min.css',
                cleanup: true
            }
        },

        strip_code: {
            options: {
                blocks: [
                    {
                        start_block: '/* staging-code */',
                        end_block: '/* end-staging-code */'
                    }
                ]
            },
            target: {
                src: `${config.PATHS.app}/app.jsx`,
                dest: `${config.PATHS.app}/app.jsx`
            }
        },

        replace: {
            js_images: {
                options: {
                    patterns: [
                        {
                            match: new RegExp('src:"./images/', 'g'),
                            replacement: () => `src:"${config[TARGET].assetHost}/images/`
                        }
                    ]
                },
                files: [
                    {
                        src: ['./build/index.js'],
                        dest: './'
                    }
                ]
            },
            fonts: {
                options: {
                    patterns: [
                        {
                            match: new RegExp('../fonts/', 'g'),
                            replacement: () => `${config[TARGET].assetHost}/fonts/`
                        }
                    ]
                },
                files: [
                    {
                        src: ['./build/styles.min.css'],
                        dest: './'
                    }
                ]
            },
            css_images: {
                options: {
                    patterns: [
                        {
                            match: new RegExp('../images/', 'g'),
                            replacement: () => `${config[TARGET].assetHost}/images/`
                        }
                    ]
                },
                files: [
                    {
                        src: ['./build/styles.min.css'],
                        dest: './'
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-cache-busting');
    grunt.loadNpmTasks('grunt-strip-code');
    grunt.loadNpmTasks('grunt-replace');

    grunt.registerTask('remove-code', ['strip_code']);
    grunt.registerTask('default', ['replace', 'cache-busting']);
};
