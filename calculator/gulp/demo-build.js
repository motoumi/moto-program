'use strict';

var _ = require('underscore');
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('demo-build', ['demo-vendor', 'demo-css'], function() {
  var bundle = browserify('./lib/Calculator.js', {
    standalone: 'Calculator',
  });

  var dependencies = _.keys(require('../package.json').dependencies);
  _.each(dependencies, function(dependency) {
    this.external(dependency)
  }, bundle);

  return bundle.bundle()
    .pipe(source('Calculator.js'))
    .pipe(gulp.dest('demo'));
});


