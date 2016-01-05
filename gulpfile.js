var gulp = require("gulp");
var webpack = require("webpack");
var gutil     = require('gulp-util');
var clean = require('gulp-clean');
var connect = require('gulp-connect');
var webpackConfig = require('./webpack.config.js');
var livereload = require('gulp-livereload');

// process.env.NODE_ENV  product or dev
gulp.task('clean', function(){
    return gulp.src('build/', {read: false})
        .pipe(clean());
});

gulp.task('webpack', function(){
	webpack(webpackConfig, function(err, stats){
		if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
    }));
	})
});

gulp.task("connect", function(){
  connect.server({
      port: 8000,
      livereload: true
    });
})

gulp.task("watch", function(){
  livereload.listen();
  gulp.watch('components/**/*.js', ['webpack']).on('change', livereload.changed);
});

gulp.task('default',['clean', 'webpack'], function () {
  gulp.start(['connect', 'watch']);
});
