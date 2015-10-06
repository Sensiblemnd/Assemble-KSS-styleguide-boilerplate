/*
 * Generated on 2015-09-15
 * generator-assemble v0.5.0
 * https://github.com/assemble/generator-assemble
 *
 * Copyright (c) 2015 Hariadi Hinta
 * Licensed under the MIT license.
 */

'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// '<%= config.src %>/templates/pages/{,*/}*.hbs'
// use this if you want to match all subfolders:
// '<%= config.src %>/templates/pages/**/*.hbs'

module.exports = function(grunt) {

	require('time-grunt')(grunt);
	require('load-grunt-tasks')(grunt);

	// Project configuration.
	grunt.initConfig({

		config: {
			src: 'src',
			dist: 'dist'
		},

		watch: {
			bower: {
				files: ['bower.json'],
				tasks: ['wiredep']
			},
			assemble: {
				files: ['<%= config.src %>/{content,data,templates}/{,*/}*.{md,hbs,yml}'],
				tasks: ['assemble','clean:style','styleguide']
			},
			sass: {
				files: ['<%= config.src %>/scss/{,*/}*.{scss,sass}'],
				tasks: ['sass:server', 'autoprefixer','clean:style','styleguide']
			},
			css: {
			files: ['<%= config.src %>/scss/{,*/}*.{css}'],
			tasks: ['assemble','kss']
			},
			js: {
				files: ['<%= config.src %>/assets/js/{,*/}*.js'],
				tasks: ['jshint','copy:js']
				
			},

			sprite:{
				files: ['<%= config.src %>/assets/images/sprites/*.png'],
				tasks: ['sprite']
			}

		},
		 styleguide: {
			build: {
				options: {
					
					template: {
						src: '<%= config.src %>/styleguide/'
						//kss template contained in this directory so that it can be editable
					},
					framework: {
						name: 'kss'
						
					}
				},
				files: {
					 '<%= config.dist %>/styleguide': ['<%= config.src %>/assets/css/main.css']
				}
			}
		},
		assemble: {
			
			pages: {
				options: {
					flatten: true,
					assets: '<%= config.dist %>/assets',
					layout: '<%= config.src %>/templates/layouts/default.hbs',
					data: '<%= config.src %>/data/*.{json,yml}',
					partials: '<%= config.src %>/templates/partials/*.hbs',
					plugins: ['assemble-contrib-permalinks','assemble-contrib-sitemap'],
				},
				files: {
					'<%= config.dist %>/': ['<%= config.src %>/templates/pages/*.hbs']
				}
			},
			options: {
					plugins: ['assemble-middleware-kssnode']
				}
		},

		copy: {

			dist: {
				expand: true,
				cwd: '<%= config.src %>/assets/',
				src: ['**/*','!*.txt','!*.md','!**/sprites/**'],
				dest: '<%= config.dist %>/assets/'
			},
			js: {
				expand: true,
				cwd: '<%= config.src %>/assets/js/',
				src: ['**/*','!*.txt','!*.md','!**/sprites/**'],
				dest: '<%= config.dist %>/assets/js/'
			}
			
		},
		modernizr: {
			dist: {
				devFile: 'bower_components/modernizr/modernizr.js',
				outputFile: '<%= config.dist %>/assets/js/vendor/modernizr.js',
				files: {
					src: [
						'<%= config.dist %>/scripts/{,*/}*.js',
						'<%= config.dist %>/styles/{,*/}*.css',
						'!<%= config.dist %>/scripts/vendor/*'
					]
				},
				uglify: true
			}
		},
		// wiredep: {
		// 	dist: {
		// 		ignorePath: /^\/|\.\.\//,
		// 		src: ['<%= config.dist %>/*.html']
		// 	}
			
		// },
		// Compiles Sass to CSS and generates necessary files if requested
		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= config.src %>/assets/scss',
					src: ['*.{scss,sass}'],
					dest: '<%= config.dist %>/assets/css/',
					ext: '.css'
				}]
			},
			server: {
				files: [{
					expand: true,
					cwd: '<%= config.src %>/scss',
					src: ['*.{scss,sass}'],
					dest: '<%= config.src %>/assets/css/',
					ext: '.css'
				}]
			}
		},
				// Reads HTML for usemin blocks to enable smart builds that automatically
		// concat, minify and revision files. Creates configurations in memory so
		// additional tasks can operate on them
		useminPrepare: {
			options: {
				dest: '<%= config.dist %>',
				flow: {
					steps: {
						js: ['concat'],
						css: ['concat']
					},
					post: {}
				}
			},
			html: '<%= config.dist %>/{,*/}*.html',
		},
		// Performs rewrites based on rev and the useminPrepare configuration
		usemin: {
			options: {
				assetsDirs: [
					'<%= config.dist %>',
					'<%= config.dist %>/images',
					'<%= config.dist %>/assets/css/',
					'<%= config.dist %>/assets/js/'
				]
			},
			html: ['<%= config.dist %>/{,*/}*.html'],
			css: ['<%= config.dist %>/assets/css/{,*/}*.css'],
			js: ['<%= config.dist %>/assets/js/{,*/}*.js']
		},
		uglify: {
			dist: {
				files: {
					'<%= config.dist %>/assets/js/{,*/}*.js': ['<%= config.dist %>/assets/js/{,*/}*.js']
				}
			}
			
		},
		
		concat: {
			dist: {}
		},
		htmlmin: {
			dist: {
				options: {
				 /* collapseBooleanAttributes: true,
					collapseWhitespace: true,
					conservativeCollapse: true,
					removeAttributeQuotes: true,
					removeCommentsFromCDATA: true,
					removeEmptyAttributes: true,
					removeOptionalTags: true,
					removeRedundantAttributes: true,
					useShortDoctype: true*/
				},
				files: [{
					expand: true,
					cwd: '<%= config.dist %>',
					src: '{,*/}*.html',
					dest: '<%= config.dist %>'
				}]
			}
		},


		// Add vendor prefixed styles
		autoprefixer: {
			options: {
				browsers: ['> 1%', 'last 4 versions', 'Firefox ESR', 'Opera 12.1'],
				map: true
			},
			dist: {
				files: [{
					expand: true,
					cwd: '<%= config.dist %>/assets/css/',
					src: '{,*/}*.css',
					dest: '<%= config.dist %>/assets/css/'
				}]
			}
		},
		 sprite:{
			all: {
				src: '<%= config.src %>/assets/images/sprites/*.png',
				dest: '<%= config.src %>/assets/images/spritesheet.png',
				destCss: '<%= config.src %>/scss/_sprites.scss',
				imgPath: '../assets/images/spritesheet.png'
			}
		},
		// Make sure code styles are up to par and there are no obvious mistakes
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish')
			},
			all: [
				'Gruntfile.js',
				'<%= config.src %>/assets/js/{,*/}*.js'
				
			]
		},
		browserSync: {
			files: {
				src : [
					'<%= config.dist %>/{,*/}*.html',
					'<%= config.dist %>/assets/js/{,*/}*',
					'<%= config.dist %>/assets/css/',
					'<%= config.dist %>/assets/images/{,*/}*'
				]
			},
			options: {
				watchTask: true,
				reloadDelay: 2000,
				ghostMode: {
					scroll: true,
					links: true,
					forms: true,
					ui: {
						port: 3005
					}
				},
				server: {
					baseDir: [
					'<%= config.dist %>'
					],
					routes: {
						'/bower_components': './bower_components'
					}
				}
			}
		},
		// Before generating any new files,
		// remove any previously-created files.
		clean:{
			dist: {
				files: [{
					dot: true,
					src: [
						'<%= config.dist %>/*'
					]
				}]
			},
			style: '<%= config.dist %>/styleguide*'

		}


	});

	grunt.loadNpmTasks('assemble');

	grunt.registerTask('server', [
		'build',
		'browserSync',
		'watch'
	]);

	grunt.registerTask('build', [
		'clean:dist',
		'sass:server',
		'sprite',
		'copy',
		'assemble',
		'useminPrepare',
		'modernizr',
		'autoprefixer',
		'concat',
		'usemin',
		'htmlmin',
		//'uglify', Uncomment if you want to uglify your files
		'styleguide:build'
		
	]);

	grunt.registerTask('default', [
		'build'
	]);

};
