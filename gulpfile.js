/* eslint-disable no-undef */
var gulp            = require('gulp');
var livereload      = require('gulp-livereload');
var babel           = require('gulp-babel');
var rename          = require('gulp-rename');
var vueComponent    = require('gulp-vue-single-file-component');


gulp.task('scripts', () => gulp.src('./js/**/*.js')
    .pipe(babel({ plugins: ['@babel/plugin-transform-modules-amd'] }))
    .pipe(gulp.dest('./public/js'))
);

gulp.task('vue', () => gulp.src('./modulos/**/*.vue')
    .pipe(vueComponent({ debug: true, loadCssMethod: 'loadCss' }))
    .pipe(babel({ plugins: ['@babel/plugin-transform-modules-amd'] }))
    .pipe(rename({ extname: '.js' }))
    .pipe(gulp.dest('./public/js'))
);

gulp.task('watch', () => {

    livereload.listen();
    
    gulp.watch('./js/**/*.js', gulp.parallel('scripts'));
    gulp.watch('./js/**/*.vue', gulp.parallel('vue'));

    gulp.watch('./public/**/*.*', { delay: 2000 }).on('change', function(path) {
        gulp.src(path).pipe(livereload());
        // console.log(path); 
    });
    
});

gulp.task('default', gulp.parallel( 'scripts','vue'));










