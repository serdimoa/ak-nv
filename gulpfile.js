'use strict';

/**
 * Created by serdimoa on 24.02.16.
 */

var gulp = require('gulp');
var typescript = require('typescript');
var ts = require('gulp-typescript');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync').create();
var watchify = require('watchify');
var reload = browserSync.reload;
var del = require('del');
var b = browserify('.tmp/index/index.js');
var project = ts.createProject('tsconfig.json', {typescript: typescript});
var result;

gulp.task('js', function() {
  result = gulp.src('js/**/*{ts,tsx}')
      .pipe(ts(project));
  return result.js.pipe(gulp.dest('.tmp'));
});

gulp.task('html', function() {
  return gulp
      .src(['index.html'])
      .pipe(gulp.dest('dist'));
});

gulp.task('js-watch', ['bundle'], browserSync.reload);
gulp.task('bundle', ['js'], function() {
  //noinspection JSUnresolvedFunction
  return b.bundle()
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('dist'));
});

gulp.task('bundlereload', ['js'], function() {
  //noinspection JSUnresolvedFunction
  return b.bundle()
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('dist'))
      .pipe(reload({stream: true}));
});

gulp.task('csscopy', function() {
  return gulp
      .src(['style/*.*'])
      .pipe(gulp.dest('dist'));
});

gulp.task('csscopyreload', function() {
  return gulp
      .src(['style/*.*'])
      .pipe(gulp.dest('dist'))
      .pipe(reload({
        stream: true
      }));

});

function htmlChange() {
  gulp.start('html');
  reload();
}

gulp.task('browser-sync', ['html', 'bundle', 'csscopy'], function() {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });
  gulp.watch('*.html').on('change', htmlChange);

  gulp.watch('js/**/*{ts,tsx}').on('change', function() {
    gulp.start('bundlereload');
  });

  gulp.watch('style/*.css').on('change', function() {
    gulp.start('csscopyreload');
  });
});

gulp.task('clean', function(done) {
  del(['.tmp'], done.bind(this));
});
