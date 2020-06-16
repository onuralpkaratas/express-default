const {task, src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');

task('sass', () =>
  src('./public/css/design.scss')
  .pipe(sass({ outputStyle: 'expanded' }))
  .pipe(dest('./build/css'))
);

task('pug', () =>
  src('./views/*.pug')
  .pipe(pug())
  .pipe(dest('./build'))
);

task('watch', () => {
  watch('./public/css/design.scss', series('sass'));
  watch('./views/*.pug', series('pug'));
});