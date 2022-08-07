---
id: create-empty-project
title: Create Empty Project
description: Get your hands dirty by creating an empty WEAVV CSS project from scratch.
topic:  Customization
layout: default
---

{% from "misc/console.njk" import console %}

# Create Empty Project

These steps will help you understand how to install and configure the [SASS]() preprocessor and [PurgeCSS](https://purgecss.com/plugins/gulp.html) postprocessor to remove unused CSS classes from {{ site.productname }}.

<div class="margin-t-4 margin-b-2 margin-x-4 padding-3 border-l-8 text-sm">
  <span class="padding-r-1 font-semibold">
    Note:
  </span>
  Just to be sure you have
  <a
    href="https://nodejs.org/en/"
    target="_blank"
    rel="noopener"
    title="Download NodeJS"
  >
    NodeJS
  </a> installed.
</div>

<div class="margin-t-0 margin-b-4 margin-x-4 padding-3 border-l-8 text-sm">
  <span class="padding-r-1 font-semibold">
    Note:
  </span>
  Require SASS preprocessor to use the
  <strong>
    @extend
  </strong>
  directive. (See
  <a href="/installation/#using-{{ site.smallproductname }}-via-cli">
    Using {{ site.productname }} via CLI
  </a> without doing it yourself.)
</div>

## Let's Get Started

Create a new empty project directory.

{{ console('bash',
'$ mkdir new-project
$ cd new-project
# YARN
$ yarn init -y
# NPM
$ npm init -y
') }}

Install mandatory `gulp` node modules.

{{ console('bash',
'# YARN
$ yarn add gulp node-sass gulp-sass gulp-sass-glob gulp-postcss gulp-purgecss gulp-rename autoprefixer --dev
# NPM
$ npm i gulp node-sass gulp-sass gulp-sass-glob gulp-postcss gulp-purgecss gulp-rename autoprefixer --save-dev
') }}

Create an empty `gulpfile.js` task file.

{{ console('bash',
'$ nano gulpfile.js
') }}

In the `gulpfile.js`, add these lines below to the file.

{{ console('js',
"const gulp = require('gulp')
const sass = require('gulp-sass')(require('node-sass'))
const sassGlob = require('gulp-sass-glob')
const postCss = require('gulp-postcss')
const purgeCss = require('gulp-purgecss')
const autoPrefixer = require('autoprefixer')
const rename = require('gulp-rename')

// SASS Preprocessor
gulp.task('sass', () => {
return gulp.src('node_modules/weavv-css/weavv.scss')
  .pipe(sassGlob())
  .pipe(sass({ outputStyle: 'compressed' })
    .on('error', sass.logError))
  .pipe(postCss([autoPrefixer()]))
  // export `.scss` to `.css` in directory `css/`
  .pipe(rename('style.css'))
  .pipe(gulp.dest('css'))
})

// Remove unused CSS Classes
gulp.task('purge-css', () => {
return gulp.src('css/style.css')
  .pipe(purgeCss({
      content: [
        'index.html'
      ],
      defaultExtractor: content => content.match(/[\w-/:()]+(?<!:)/g) || [],
      // add whitelisting e.g. '/-webkit-scrollbar-thumb$/'
      whitelistPatterns: [],
      keyframes: true
  }))
  // export new CSS in directory `css/`
  .pipe(rename('style.css'))
  .pipe(gulp.dest('css'))
})
") }}

Install `{{ site.smallproductname }}-css` module.

{{ console('bash',
'# YARN
$ yarn add weavvcss
# NPM
$ npm i weavvcss
') }}

Create a new directory for exported or preprocessed CSS.

{{ console('bash',
'$ mkdir css
') }}

Create an empty `index.html` file.

{{ console('bash',
'$ nano index.html
') }}

Add the basic HTML template below to the `index.html`. And import the final build CSS file `css/styles.css` with `<link>` tag.

{{ console('bash',
'<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content=" width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <link defer href="css/style.css" rel="stylesheet" rel="preload" as="style" media="all">
  </head>
  <body></body>
</html>
') }}

Your new project setup is now ready for `SASS` preprocessing and purging unused CSS with the `PurgeCSS`.

Run the command below and check the CSS file located in `css/style.css` has only a few CSS classes that take a few couple hundred bytes of file size. The rest has stripped down by the `PurgeCSS` that refers to the target `.html` files.

{{ console('bash',
'# build WEAVV CSS
$ gulp sass
# create new `style.css` and remove
# unused CSS classes from `index.html`
$ gulp purge-css
') }}

Try to add a new line in the `<body>` tag.

{{ console('bash',
'<div class="text-xl-2">
    TEXT
  </div>
') }}

Try run the build command again. This time the `css/style.css` file has added more CSS classes that `index.html` is being used.

{{ console('bash',
'# build WEAVV CSS
$ gulp sass
# create new `style.css` and remove
# unused CSS classes from `index.html`
$ gulp purge-css
') }}
