module.exports = function(grunt){
	grunt.initConfig({
		less: {
			development: {
				files: {
					"v2ex.css": "v2ex.less"
				}
			},
			production: {
				options: {
					compress: true
				},
				files: {
					"v2ex.min.css": "v2ex.less"
				}
			}
		},

		//监视器
		watch: {
			css: {
				files: ['v2ex.less'],
				tasks: ['less']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['less']);
};