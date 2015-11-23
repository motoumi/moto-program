'use strict';
/*
 * test
 *
 * This task lints both source and test code, builds
 * all image, css and font assets, generates the test
 * suite and connects to the server with live reloading
 * and finally opens the test suite in a browser.
 *
 * In order to speed up the build process dependencies
 * (backbone, underscore, etc.) are loaded from a bundle
 * created by the vendor task.
 *
 * Please make sure you have run gulp vendor at least once
 * before running this task.
 *
 */
var gulp = require('gulp');
var browser = require('browser-sync');

gulp.task('test', ['lint', 'test-build'], function(){

  gulp.watch(['lib/**/*.js'], ['test-build']);
  gulp.watch(['test/**/*.spec.js'], ['test-build']);

  var bs = browser.create();

  bs.watch([
    "gulp/**/*.js",
    "test/spec-manifest.js"
  ], function() {
    bs.reload();
  })

  bs = browser.init({
    server: ['./', 'test']
  });
});

