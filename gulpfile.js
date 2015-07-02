'use strict';

var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var react = require('reactify');
var watchify = require('watchify');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');
var htmlreplace = require('gulp-html-replace');
var sass = require('gulp-sass');


var path = {
  HTML: 'src/index.html',
  CSS: 'src/styles/site.scss',
  MINIFIED_OUT: 'build.min.js',
  OUT: 'build.js',
  DEST: 'dist',
  DEST_BUILD: './dist/build',
  DEST_SRC: './dist/src',
  ENTRY_POINT: './src/js/app.js'
};


//basic browserify build with reactify transform
gulp.task('build', function() {
  // set up the browserify instance on a task basis
  browserify({
      entries: path.ENTRY_POINT,
      transform: [react]
    })
    .bundle()
    .pipe(source(path.MINIFIED_OUT))
    .pipe(streamify(uglify(path.MINIFIED_OUT)))
    .pipe(gulp.dest(path.DEST_BUILD));
});


//watch with browserify and reactify
gulp.task('watch', function() {
  //regular gulp watch on our HTML
  gulp.watch([path.HTML, 'src/styles/**/*.scss'], ['sass', 'copy']);

  //use watchify on our browserify bundle to handle changes in JS
  var watcher = watchify(browserify({
    entries: [path.ENTRY_POINT],
    transform: [react],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }));

  return watcher.on('update', function() {
      watcher.bundle()
        .pipe(source(path.OUT))
        .pipe(gulp.dest(path.DEST_SRC));
      console.log('Updated');
    })
    .bundle()
    .pipe(source(path.OUT))
    .pipe(gulp.dest(path.DEST_SRC));
});

//change the javascript src when building for production
gulp.task('replaceHTML', function() {
  gulp.src(path.HTML)
    .pipe(htmlreplace({
      'js': 'build/' + path.MINIFIED_OUT
    }))
    .pipe(gulp.dest(path.DEST));
});

//plain copy of the HTML to the destination with no replace
gulp.task('copy', function() {
  gulp.src([path.HTML])
    .pipe(gulp.dest(path.DEST));
    gulp.src(['lib/**/*.js'])
      .pipe(gulp.dest(path.DEST + '/lib'));
});

//sass compilation
gulp.task('sass', function() {
  gulp.src('src/styles/site.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('production', ['replaceHTML', 'build', 'sass']);
gulp.task('default', ['copy', 'watch', 'sass']);
