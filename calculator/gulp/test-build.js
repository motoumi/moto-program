'use strict';
/*
 * build-test
 *
 * usage: gulp build-test
 *
 * This task bundles all of the test scripts
 */

var gulp = require('gulp');
var glob = require('glob');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

var _ = require('underscore');

gulp.task('test-build', ['test-vendor'], function() {
  var specs = glob.sync('./test/*.spec.js');
  var dependencies = _.keys(require('../package.json').dependencies);

  var bundle = browserify({debug: false});

  _.each(dependencies, function(dependency) {
    this.external(dependency)
  }, bundle);

  bundle.add(specs);

  return bundle.bundle()
    .pipe(source('spec-manifest.js'))
    .pipe(gulp.dest('test'));
});


