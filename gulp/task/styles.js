var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
cssnested = require('postcss-nested'),
cssimport = require('postcss-import');

gulp.task('styles', function(){
  return gulp.src('./app/assets/styles/styles.css')
             .pipe(postcss([cssimport,autoprefixer,cssvars,cssnested]))
             .on('error', function(errorInfo){
               console.log(errorInfo.toString());
               this.emit('end');
             })
             .pipe(gulp.dest('./app/temp/styles'));

})
