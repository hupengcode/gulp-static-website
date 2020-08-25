const { parallel, series, src, dest, watch } = require('gulp');
const less = require('gulp-less');
const plumber = require('gulp-plumber');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const gulpServer = require('gulp-webserver');
const cleanCss = require('gulp-clean-css');
// const clean = require('gulp-clean');

function lessTask() {
  return src('src/css/less/*.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(dest('src/css'));
}

function cssTask() {
  return src('src/css/*.css')
    .pipe(cleanCss())
    .pipe(concat('all.min.css'))
    .pipe(dest('build/css'));
}

function jsTask() {
  return src('src/js/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(dest('build/js'));
}

function copyHtml() {
  return src(['src/view/*.html', 'src/*.ico'])
    .pipe(dest('build'))
}

function copyFile() {
  return src("src/assets/**")
    .pipe(dest("build/assets"))
}

function copyImage() {
  return src("src/images/**")
    .pipe(dest("build/images"))
}

function serveTask() {
  return src('build')
    .pipe(gulpServer({
      port: '8086',
      livereload: true,
      open: true
    }))
}

function watchFile() {
  watch('src/css/less/*.less', series(lessTask, cssTask));
  watch('src/js/*.js', jsTask);
  watch('src/assets/**/*.*', copyFile);
  watch('src/images/**/*.*', copyImage);
  watch('src/view/*.html', copyHtml);
}

exports.default = series(parallel(copyFile, copyHtml, copyImage, jsTask, series(lessTask, cssTask)), serveTask, watchFile);
