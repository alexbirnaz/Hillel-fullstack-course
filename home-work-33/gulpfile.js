const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const browserSync = require("browser-sync").create();

// Compile SCSS to CSS
function styles() {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        cascade: false,
      }),
    )
    .pipe(gulp.dest("assets/css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest("assets/css"))
    .pipe(browserSync.stream());
}

// Watch files
function watch() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });

  gulp.watch("src/scss/**/*.scss", styles);
  gulp.watch("./*.html").on("change", browserSync.reload);
}

// Build task
function build(done) {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        cascade: false,
      }),
    )
    .pipe(cleanCSS())
    .pipe(gulp.dest("assets/css"));
}

exports.styles = styles;
exports.watch = watch;
exports.build = build;
exports.default = gulp.series(styles, watch);
