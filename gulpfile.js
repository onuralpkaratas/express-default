const {task, src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass');

task('sass', () => src('./public/css/design.scss')
  .pipe(sass({ outputStyle: 'expanded' }))
  .pipe(dest('./build/css')))

task('watch', () => watch('./public/css/design.scss', series('sass')))