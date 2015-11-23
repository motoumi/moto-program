'use strict';

// serves the build
//
var gulp = require('gulp')
var browser = require('browser-sync');
var concat = require('gulp-concat');
var source = require('vinyl-source-stream');
var browserify = require('browserify');

gulp.task('demo', ['demo-build'], function() {

  gulp.watch([
    'lib/css/**/*.scss'
  ], ['demo-css']);

  gulp.watch([
    'lib/**/*.js'
  ] , ['demo-build'])

  var bs = browser.create();

  bs.watch([
    "demo/**.*",
    "gulp/**.*",
    "demo/index.html",
  ], function() {
    bs.reload();
  });

  bs = browser.init({
    server: {
      baseDir: ['demo'],
    }
  });
});

