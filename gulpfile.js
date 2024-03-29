var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');


function swallowError (error) {
    console.log(error);
    this.emit('end')
}


gulp.task('sass', function() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .on('error', swallowError)
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'));
});


gulp.task('watch', function() {
    gulp.watch('src/scss/**/*.scss', ['sass'])
});


gulp.task('default', ['sass', 'watch']);
