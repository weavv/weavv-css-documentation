const autoPrefixer = require('autoprefixer')
const clean = require('gulp-clean')
const concat = require('gulp-concat')
const gulp = require('gulp')
const postcss = require('gulp-postcss')
const purgeCss = require('gulp-purgecss')
const rename = require('gulp-rename')
const sass = require('gulp-sass')
const webpack = require('webpack-stream')

gulp.task('js', () => gulp.src(['js/main.js'])
  .pipe(webpack({
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    performance: {
      hints: false
    },
    resolve: {
      modules: [
        'js',
        'node_modules'
      ]
    },
    module: {
      rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      }]
    }
  }))
  .pipe(rename('pre.js'))
  .pipe(gulp.dest('./dist'))
)

gulp.task('js-bundle', () => {
  return gulp.src([
    'pwa/cache.min.js',
    'pwa/utility.js',
    'pwa/config.js',
    'dist/pre.js'
  ])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('css', () => gulp.src(['css/main.scss'])
  .pipe(sass())
  .pipe(postcss([autoPrefixer()]))
  .pipe(rename('pre.css'))
  .pipe(gulp.dest('./dist'))
)
// (development)
gulp.task('move-css', () => {
  return gulp.src('./dist/pre.css')
    .pipe(rename('main.css'))
    .pipe(gulp.dest('./dist'))
})
// (production)
gulp.task('purge-css', () => {
  return gulp.src('./dist/pre.css')
    .pipe(purgeCss({
      content: [
        'dist/**/**/*.html',
        'dist/**/**/*.js'
      ],
      defaultExtractor: content => content.match(/[\w-/:()]+(?<!:)/g) || [],
      whitelistPatterns: [/-webkit-scrollbar-thumb$/],
      keyframes: true
    }))
    .pipe(rename('main.css'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('service-worker', () => {
  return gulp.src([
    'pwa/init.min.js',
    'pwa/sw.min.js'
  ])
    .pipe(gulp.dest('./dist'))
})

gulp.task('app-manifest', () => {
  return gulp.src([
    'pwa/manifest.json'
  ])
    .pipe(gulp.dest('./dist'))
})

gulp.task('monaco-editor', () => {
  return gulp.src('./monaco-editor/**/**/*')
    .pipe(gulp.dest('./dist/monaco-editor'))
})

gulp.task('playground', () => {
  return gulp.src('./playground/**/**/*')
    .pipe(gulp.dest('./dist/playground'))
})
gulp.task('embed-playground', () => {
  return gulp.src('./playground/index.html')
    .pipe(rename('playground.njk'))
    .pipe(gulp.dest('./src/_layouts'))
})

gulp.task('remove-residual-files', () => {
  return gulp.src([
    'dist/pre.css',
    'dist/pre.js'
  ], {
    read: false,
    allowEmpty: true
  })
    .pipe(clean())
})

gulp.task('build',
  gulp.series(
    'js',
    'js-bundle',
    'css',
    'service-worker',
    'app-manifest',
    // 'monaco-editor',
    'playground'
  )
)

gulp.task('default', () => {

  gulp.watch([
    'js/**.*',
    'js/*/**.*'
  ], gulp.series('js'))

  gulp.watch([
    'css/**.*'
  ], gulp.series('css'))

  gulp.series(
    'js',
    'js-bundle',
    'css',
    'service-worker',
    'app-manifest'
  )()
})
