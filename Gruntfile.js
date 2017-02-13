/**
 * Created by igor on 26.07.16.
 */
module.exports = function (grunt) {

	grunt.initConfig({
		mochaTest: {
			test: {
				options: {
					reporter: 'spec',
					quiet: false, // Optionally suppress output to standard out (defaults to false)
					clearRequireCache: false, // Optionally clear the require cache before running tests (defaults to false)
					noFail: false, // Optionally set to not fail on failed tests (will still fail on other errors)
					require: 'mocha-traceur'
				},
				src: ['test/test.js']
			}
		},
		jsdoc2md: {
			oneOutputFile: {
				src: ['Arr.js', 'Obj.js', 'Date.js', 'Str.js', 'Type.js'],
				dest: 'Api.md'
			}

		}
	});
	grunt.loadNpmTasks('grunt-jsdoc-to-markdown');
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.registerTask('default', ['mochaTest', 'jsdoc2md']);
};
