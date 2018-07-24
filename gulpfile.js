// sudo npm i gulp gulp-sass gulp-clean-css gulp-uglify gulp-rename gulp-changed --save-dev


'use strict';

// dependecies
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');

// scss/css
var SCSS_SRC = './src/Assets/scss/**/*.scss';
var SCSS_DEST = './src/Assets/css';

// compile scss
gulp.task('compile_scss', function(){
    gulp.src(SCSS_SRC)
    // pipe allows us to chain funtions togther
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(changed(SCSS_DEST))
        .pipe(gulp.dest(SCSS_DEST));

});

// detect changes in scss to watch and detect a change 
gulp.task('watch_scss', function(){
    gulp.watch(SCSS_SRC, ['compile_scss']);
});

// run tasks
gulp.task('default', ['watch_scss']);