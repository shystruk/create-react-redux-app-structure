const gulp = require('gulp');
const gutil = require('gulp-util');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const clean = require('gulp-clean');
const gulpif = require('gulp-if');
const cssmin = require('gulp-cssmin');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const autoprefixer = require('autoprefixer');
const htmlreplace = require('gulp-html-replace');
const config = require('./app/config.json');
const TARGET = process.env.npm_lifecycle_event;


// Clean build folder
gulp.task('clean', function () {
    return gulp.src(config.PATHS.build, {read: false}).pipe(clean());
});

// HTML build replacer
gulp.task('html-build', function() {
    if (!gutil.env.production) {
        return gulp.src(`${config.PATHS.app}/index.html`).pipe(gulp.dest('./'));
    }

    return gulp.src(`${config.PATHS.app}/index.html`)
        .pipe(htmlreplace({
            'css': `${config[TARGET].assetHost}/build/styles.min.css`,
            'js': [
                `${config[TARGET].assetHost}/build/vendor.js`,
                `${config[TARGET].assetHost}/build/libs.js`,
                `${config[TARGET].assetHost}/build/index.js`
            ]
        }))
        .pipe(gulp.dest('./'));
});

// Concat/Uglify libs depends on jQuery
gulp.task('jquery', function() {
    return gulp.src([
        `${config.PATHS.vendor}/jquery.js`,
        `${config.PATHS.app}/helpers/appGlobal.js`
    ])
    .pipe(gulpif(!gutil.env.production, sourcemaps.init()))
    .pipe(concat('libs.js'))
    .pipe(uglify())
      .on('error', err => { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    .pipe(gulpif(!gutil.env.production, sourcemaps.write('.')))
    .pipe(gulp.dest(config.PATHS.build));
});

// CSS
gulp.task('css', function () {
    return gulp.src(config.PATHS.sass_index)
        .pipe(sass().on('error', sass.logError))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(config.PATHS.build))
        .pipe(postcss([autoprefixer]))
        .pipe(gulp.dest(config.PATHS.build))
        .pipe(cssmin())
        .pipe(gulp.dest(config.PATHS.build));
});

// WATCH
gulp.task('watch', function() {
    gulp.watch(config.PATHS.sass, ['css']);
    gulp.watch(config.PATHS.external, ['jquery']);
});

gulp.task('default', ['html-build', 'watch', 'css', 'jquery']);
gulp.task('prod', ['html-build', 'css', 'jquery']);
gulp.task('clean-build', ['clean']);
