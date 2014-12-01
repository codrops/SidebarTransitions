module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['client/js/*.js'],
                dest: 'dist/js/<%= pkg.name %>.js'
            }
        },
        
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        
        cssmin: {
            minify: {
                files: [{
                    expand: true,
                    cwd: 'client/css/',
                    src: ['<%= pkg.name %>.css'],
                    dest: 'dist/css/',
                    ext: '.min.css'
                }, {
                    expand: true,
                    cwd: 'client/css/',
                    src: ['<%= pkg.name %>-right.css'],
                    dest: 'dist/css/',
                    ext: '.min.css'
                }]
            }
        },
        
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint', 'qunit']
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};