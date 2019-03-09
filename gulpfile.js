var gulp            = require('gulp');
var babel           = require('gulp-babel');
var browserSync     = require('browser-sync');
var rename          = require('gulp-rename');
var vueComponent    = require('gulp-vue-single-file-component');

gulp.task('scripts', () => gulp.src('./js/**/*.js')
    .pipe(babel({ plugins: ['@babel/plugin-transform-modules-amd'] }))
    .pipe(gulp.dest('./public/js'))
    .pipe(browserSync.stream())
);

gulp.task('vue', () => gulp.src('./js/**/*.vue')
    .pipe(vueComponent({ debug: true, loadCssMethod: 'loadCss' }))
    .pipe(babel({ plugins: ['@babel/plugin-transform-modules-amd'] }))
    .pipe(rename({ extname: '.js' }))
    .pipe(gulp.dest('./public/js'))
    .pipe(browserSync.stream())
);

gulp.task('watch', () => {
    browserSync.init({
        server: {
            baseDir: './public'
        }
    });

    gulp.watch('./js/**/*.js', gulp.parallel('scripts'));
    gulp.watch('./js/**/*.vue', gulp.parallel('vue'));
});

gulp.task('default', gulp.parallel('scripts', 'vue', 'watch'));
