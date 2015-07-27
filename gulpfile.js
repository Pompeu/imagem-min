var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngmin = require('imagemin-pngquant'); 

gulp.task('img-min',  function (){
  return gulp.src('./imagens/**/*')
    .pipe(imagemin({
      progressive :  true,
      svgPlugins : [{removeViewsBox : false}],
      use: [pngmin()]
    }))
    .pipe(gulp.dest('./imagens-min'));
});
