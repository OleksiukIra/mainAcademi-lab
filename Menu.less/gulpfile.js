const gulp = require('gulp');
const webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  gulp.src('/')
    .pipe(webserver({
      livereload: false,
      port:8000,
      open: true
    }));
});


gulp.task(
  'default',
  gulp.series([
    'webserver'
  ])
);
