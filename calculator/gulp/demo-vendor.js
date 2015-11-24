'use strict';

// we want to load all of our dependencies, as well as all the dependencies for our
// dependencies.
//
var _ = require('underscore');
var gulp = require('gulp');
var nodeResolve = require('resolve');
var browserify = require('browserify');
var source = require('vinyl-source-stream');


gulp.task('demo-vendor', function() {

  var bundle = browserify({debug: false})
  var dependencies = _.keys(require('../package.json').dependencies);

  _.each(dependencies, function(dependency) {
    this.require(nodeResolve.sync(dependency), {expose: dependency});
  }, bundle);

  return bundle.bundle()
    .pipe(source('vendor.js'))
    .pipe(gulp.dest('demo'));
});


