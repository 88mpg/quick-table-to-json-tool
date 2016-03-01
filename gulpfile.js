'use strict';

// REQUIRE VARIOUS
var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// LAUNCH BROWSERSYNC
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: '.'
    },
    port: 3030,
    open: false,
    injectChanges: true
  });
});

gulp.task('watch', ['browser-sync']);
