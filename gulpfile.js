/* eslint-disable no-undef */
const gulp              = require('gulp');
const livereload        = require('gulp-livereload');
const babel             = require('gulp-babel');
const rename            = require('gulp-rename');
const vueComponent      = require('gulp-vue-single-file-component');

const FolderMain       = './modulos'; 
const FolderFrom        = 'src';
const FolderTo          = 'public';


gulp.task('scripts', () => gulp.src(`${FolderMain}/**/${FolderFrom}/**/*.js`)
    .pipe(babel({ plugins: ['@babel/plugin-transform-modules-amd'] }))
    .pipe(rename(function(file) {
        file.dirname = file.dirname.replace(new RegExp( FolderFrom, 'g' ), FolderTo);
    }))
    .pipe(gulp.dest(FolderMain))
    // .on('end', function() {
    //     console.log('.....end scripts');
    // })
);

gulp.task('vue', () => gulp.src(`${FolderMain}/**/${FolderFrom}/**/*.vue`)
    .pipe(vueComponent({ debug: true, loadCssMethod: 'loadCss' }))
    .pipe(babel({ plugins: ['@babel/plugin-transform-modules-amd'] }))
    .pipe(rename(function(file) {
        file.dirname = file.dirname.replace(new RegExp( FolderFrom, 'g' ), FolderTo);
        file.extname = '.js';
    }))
    .pipe(gulp.dest(FolderMain))
);

gulp.task('watch', () => {

    livereload.listen();
    
    gulp.watch(`${FolderMain}/**/${FolderFrom}/**/*.js`, gulp.parallel('scripts'));
    gulp.watch(`${FolderMain}/**/${FolderFrom}/**/*.vue`, gulp.parallel('vue'));

    gulp.watch(`${FolderMain}/**/${FolderTo}/**/*.*`).on('change', function(path) {
        gulp.src(path).pipe(livereload());
    });
    
});

gulp.task('default', gulp.parallel( 'scripts','vue'));










