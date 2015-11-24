'use strict';

var gulp = require('gulp');
var compass = require('gulp-compass');

var compileSass = function(source, sassPath) {
  return gulp.src(source)
    .pipe(compass({
      debug: true,
      relative: false,
      css: 'demo',
      sass: sassPath,
      image: 'images',
      font: 'fonts',
      require: 'susy',
      bundleExec: true,
    }))
    .on('error', function(error) {
      console.log(error);
      this.emit('end');
    });
}

gulp.task('demo-css', function() {
  return compileSass('lib/css/calculator.scss', 'lib/css');
});
