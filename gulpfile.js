var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass' ,function(){
    return gulp.src('./sass/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'));
  });

function run(){
    sass();
}

gulp.task('watch', function(){
    gulp.watch('./sass/*.scss', gulp.parallel('sass'));
});

exports.default = gulp.parallel('sass', "watch", run);