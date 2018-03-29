'use strict';

var gulp = require('gulp');
var bs = require('browser-sync').create();

gulp.task('server', [], () => {
    bs.init({
        server: {
            baseDir: "./",
        },
        port: 5000
        // reloadOnRestart: true,
        // browser: "google chrome"
    });
    gulp.watch('./public/**/*', ['', bs.reload]);
    gulp.watch('./*.html', ['', bs.reload]);
});