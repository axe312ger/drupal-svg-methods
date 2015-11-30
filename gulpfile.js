var gulp = require('gulp')
var path = require('path')
var svgSprite = require('gulp-svg-sprite')

gulp.task('default', function () {
  return gulp.src(path.join('icons', '*.svg'))
    .pipe(svgSprite({
      mode: {
        view: {
          dest: '.',
          sprite: 'sprite-view.svg'
        },
        defs: {
          dest: '.',
          sprite: 'sprite-defs.svg'
        },
        symbol: {
          dest: '.',
          sprite: 'sprite-symbol.svg'
        },
        stack: {
          dest: '.',
          sprite: 'sprite-stack.svg'
        }
      }
    }))
    .pipe(gulp.dest('stacks'));
});
