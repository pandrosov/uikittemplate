
module.exports = function (grunt) {

    grunt.initConfig({
        watch: {
            less_imports: {
                files: 'components/styles/**/*.less',
                tasks: ['imports']
            },
            concat: {
                files: ['components/js/**/*.js'],
                tasks: ['concat']
            },
            uglify: {
                files: 'dist/js/build.js',
                tasks: ['uglify'],
            },
            imagemin: {
                files: 'components/images/**/*.{png,jpg}',
                tasks: ['images']
            }
        },
        less_imports: {
            options: {
                inlineCSS: false
            },
            custom: {
                src: ['components/styles/**/*.less'],
                dest: 'custom/import_components.less'
            },
        },
        concat: {
            options: {
                separator: '\n/*next file*/\n'
            },
            dist: {
                src: ['components/js/**/*.js'],
                dest: 'dist/js/build.js'
            }
        },
        uglify: {
            build: {
                files: {
                    'dist/js/build.min.js': ['dist/js/build.js']
                }
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    cwd: 'components/images/',
                    expand: true,
                    src: ['**/*.{png,jpg}'],
                    dest: 'dist/images'
                }]
            }
        },
        clean: {
            images: ['dist/images/'],
            less: ['custom/import_components.less'],
        },
        webp: {
            files: {
                cwd: 'dist/images/',
                expand: true,
                src: ['**/*.png'],
                dest: 'dist/images/'
            },
            options: {
                binpath: require('webp-bin').path,
                preset: 'photo',
                verbose: true,
                quality: 80,
                alphaQuality: 80,
                compressionMethod: 6,
                segments: 4,
                psnr: 42,
                sns: 50,
                filterStrength: 40,
                filterSharpness: 3,
                simpleFilter: true,
                partitionLimit: 50,
                analysisPass: 6,
                multiThreading: true,
                lowMemory: false,
                alphaMethod: 0,
                alphaFilter: 'best',
                alphaCleanup: true,
                noAlpha: false,
                lossless: false
            }
        }
    })

    // load up tasks
    grunt.loadNpmTasks('grunt-less-imports');
    grunt.loadNpmTasks('grunt-webp');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // register task
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('imports', ['clean:less','less_imports']);
    grunt.registerTask('images', ['clean:images', 'imagemin', 'webp']);
    grunt.registerTask('js', ['concat', 'uglify']);

};