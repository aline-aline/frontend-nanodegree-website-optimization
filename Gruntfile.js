 
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
            cssmin: {
                target: {
                    files: [{
                        expand: true,
                        cwd: 'src/',
                        src: ['**/*.css', '**/!*.min.css'],
                        dest: 'dist/',
                        ext: '.min.css'
                    }]
                }
            },
            imagemin: {
                target: {
                    options: {
                        optimizationLevel: 7
                    },
                    files: [{
                        expand: true,
                        cwd: 'src/',
                        src: ['**/*.{png,jpg,gif}', '**/**/*.{png,jpg,gif}'],
                        dest: 'dist/'
                    }]
                }
            },
            responsive_images: {
                myTask: {
                    options: {
                        sizes: [{
                            width: 100,
                            quality: 15
                        }]
                    },
                    files: [{
                        expand: true,
                        cwd: 'src/',
                        src: ['**/*.{png,jpg,gif}', '**/**/*.{png,jpg,gif}'],
                        dest: 'dist/'
                    }]
                }
            },
            htmlmin: {
                options: {
                        removeComments: true,
                        collapseWhitespace: true
                    },
                build: {
                    files: [
                        {
                        expand: true,     
                        cwd: 'src/',      
                        src: ['**/*.html', '*.html'], 
                        dest: 'dist/'
                        },
                    ],
                }
            },
            purifycss: {
                target: {
                    src: ['src/index.html', 'src/js/*.js'],
                    css: ['src/css/style.css'],
                    dest: 'dist/css/pure-css.css'
                }
            },
            uglify: {
                my_target: {
                    files: [{
                        expand: true,
                        cwd: 'src/',
                        src: ['**/*.js', '**/**/*.js'],
                        dest: 'dist/'
                    }]
                }
            }
    });
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-purifycss');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['responsive_images', 'imagemin', 'purifycss', 'htmlmin', 'cssmin', 'uglify']);
};