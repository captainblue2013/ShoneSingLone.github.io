'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass');
// autoprefixer = require('gulp-autoprefixer'),
// cleanCss = require('gulp-clean-css'),
// rename = require('gulp-rename'),
// concat = require('gulp-concat'),
// sourcemaps = require('gulp-sourcemaps'),
// uglify = require('gulp-uglify'),
// replace = require('gulp-replace');



// function buildjs() {
//     var js_src_dir = 'assets/javascripts/bootstrap/';
//     var js_src = [
//         js_src_dir + 'transition.js',
//         js_src_dir + 'alert.js',
//         js_src_dir + 'button.js',
//         js_src_dir + 'carousel.js',
//         js_src_dir + 'collapse.js',
//         js_src_dir + 'dropdown.js',
//         js_src_dir + 'modal.js',
//         js_src_dir + 'tab.js',
//         js_src_dir + 'affix.js',
//         js_src_dir + 'scrollspy.js',
//         js_src_dir + 'tooltip.js',
//         js_src_dir + 'popover.js'
//     ];

//     return gulp.src(js_src)
//         .pipe(concat('bootstrap.js'))
//         .pipe(sourcemaps.init()) // 创建sourcemaps
//         .pipe(uglify())
//         .pipe(rename({ basename: 'bootstrap', suffix: '.min' }))
//         .pipe(sourcemaps.write('maps')) // sourcemaps输出路径（存放位置）
//         .pipe(gulp.dest('dist/js/'));
// }

gulp.task('css', function () {
    return gulp.src(['assets/stylesheets/bootstrap-Shone.scss'])
        .pipe(sass())
        .pipe(gulp.dest('public/bootstrap/css'));
});


var bs = require('browser-sync').create();

gulp.task('serve', [], () => {
    bs.init({
        server: {
            baseDir: "./",
        },
        port: 5000
        // reloadOnRestart: true,
        // browser: "google chrome"
    });
    gulp.watch('./*.html', ['', bs.reload]);
});

