---
footer: false
---

# Create Empty Project

These steps will help you understand how to install and configure the [SASS](https://sass-lang.com) preprocessor and [PurgeCSS](https://purgecss.com/plugins/gulp.html) postprocessor to remove unused CSS classes from Weavv.

## Let's Get Started

Create a new empty project directory.

```bash
$ mkdir new-project
$ cd new-project
$ npm init -y
```

Install mandatory `Gulp` node modules.

```bash
$ npm i gulp node-sass gulp-sass gulp-sass-glob gulp-postcss gulp-purgecss gulp-rename autoprefixer --save-dev
```

Create an empty `gulpfile.js` task file in the root directory.

```bash
$ nano gulpfile.js
```

In the `gulpfile.js`, add these lines below to the file.

```js
const gulp = require('gulp')
const sass = require('gulp-sass')(require('node-sass'))
const sassGlob = require('gulp-sass-glob')
const postCss = require('gulp-postcss')
const purgeCss = require('gulp-purgecss')
const autoPrefixer = require('autoprefixer')
const rename = require('gulp-rename')

// SASS Preprocessor
gulp.task('sass', () => {
return gulp.src('./node_modules/weavv-css/weavv.scss')
  .pipe(sassGlob())
  .pipe(sass({ outputStyle: 'compressed' })
    .on('error', sass.logError))
  .pipe(postCss([autoPrefixer()]))
  // export `.scss` to `.css` in directory `css/`
  .pipe(rename('style.bigfile.css'))
  .pipe(gulp.dest('css/'))
})

// Remove unused CSS Classes
gulp.task('purge-css', () => {
return gulp.src('css/style.bigfile.css')
  .pipe(purgeCss({
      content: [
        // look for CSS classes
        'index.html',
      ],
      defaultExtractor: content => content.match(/[\w-/:()]+(?<!:)/g) || [],
      // add whitelisting e.g. '/-webkit-scrollbar-thumb$/'
      whitelistPatterns: [],
      keyframes: true
  }))
  // export new CSS in directory `css/`
  .pipe(rename('style.css'))
  .pipe(gulp.dest('css/'))
})
```

Install `weavvcss` module.

```bash
$ npm i weavvcss
```

Create a new directory for preprocessed CSS file.

```bash
$ mkdir css
```

Create an empty `index.html` file.

```bash
$ nano index.html
```

Add the basic HTML template below to the `index.html`. And import the final build CSS file `css/style.css` with `<link>` tag.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content=" width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <link href="./css/style.css" rel="stylesheet" rel="preload" as="style" media="all">
  </head>
  <body></body>
</html>
```

Your new project setup is now ready for `SASS` preprocessing and purging unused CSS with the `PurgeCSS`.

## Trimming Unused CSS

Run the command below and check the CSS file located in `css/style.css` has only a few CSS classes that take a few couple hundred bytes of file size. The rest has stripped down by the `PurgeCSS` that refers to the target `.html` files.

```bash
# Build CSS
$ gulp sass
# Create new `style.css` and remove
# Unused CSS classes from `index.html`
$ gulp purge-css
```

Try to add a new line in the `<body>` tag.

```html
<div class="text-xl-2">
  TEXT
</div>
```

Try run the build command again. This time the `css/style.css` file has added more CSS classes that `index.html` is being used.

```bash
$ gulp sass purge-css
```

