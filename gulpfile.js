var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
cssnested = require('postcss-nested'),
cssimport = require('postcss-import'),
browserSync = require('browser-sync').create();

gulp.task('default', function(){
  console.log("Hello World from Gulp!");
});

gulp.task('html', function(){
  console.log("Hello from HTML Hoo-Ray");
})

gulp.task('styles', function(){
  return gulp.src('./app/assets/styles/styles.css')
             .pipe(postcss([cssimport,autoprefixer,cssvars,cssnested]))
             .pipe(gulp.dest('./app/temp/styles'));

})

gulp.task('watch', function(){

  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', function(){
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('cssInject');
  })
})

gulp.task('cssInject', ['styles'], function(){
  return gulp.src('./app/temp/styles/styles.css')
      .pipe(browserSync.stream());
})
