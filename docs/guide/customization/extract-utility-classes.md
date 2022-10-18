---
footer: false
---

# Extract Utility Classes

Weavv CSS is purely built on top of the [Sassy CSS](https://sass-lang.com/documentation/at-rules/extend). By using the existing SASS `@extend` directive allows you to expose any Weavv utility classes into your custom CSS.

> **Note:** Require SASS preprocessor to use the **@extend** directive. (See [Using Weavv via CLI]() or [Create Empty Project](/guide/customization/create-empty-project).)

## Setup Sass Preprocessor

```bash
$ mkdir new-weavv-sass-project
$ cd new-weavv-sass-project
```

```bash
$ touch style.scss
```

```bash
$ npm init -y
$ npm i gulp sass gulp-sass gulp-sass-glob gulp-postcss autoprefixer --save-dev
```

```bash
$ touch gulpfile.js
```

```js
// @file: `gulpfile.js`
const gulp = require('gulp')
const sass = require('gulp-sass')(require('node-sass'))
const sassGlob = require('gulp-sass-glob')
const postCss = require('gulp-postcss')
const autoPrefixer = require('autoprefixer')

gulp.task('build-sass', () => {
  return gulp.src('./style.scss')
    .pipe(sassGlob())
    .pipe(sass({ outputStyle: 'compressed' })
      .on('error', sass.logError))
    .pipe(postCss([autoPrefixer()]))
    .pipe(gulp.dest('dist/')) // output as `style.css`
})
```

```scss
// @file: `style.scss`
import '../../node_modules/weavvcss/weavv.scss';

.test {
  @extend
    .margin-4,
    .padding-4,
    .text-xl-4;
}
```

```bash
$ gulp build-sass
```

> **Note:** See also the [Reduce File Size](/guide/customization/reduce-file-size), a method to remove unused CSS classes from your project.

## The `@extend` Directive

Below are examples of how to use the **@extend `<selector ...>`** directive to extract Weavv CSS utilities into your custom CSS.

- prefix parenthesis `()` is written as `\(\)`.
- utility class `text-shade-amber-1` is written as `.text-shade-amber-1`.
- pseudo class `(hover)text-shade-amber-1` is written as `.\(hover\)text-shade-amber-1`.
- pseudo class with responsive `.(md)(hover)text-shade-amber-1` is written as `.\(md\)\(hover\)text-shade-amber-1`.
- responsive `(md)text-shade-amber-1` is written as `.\(md\)text-shade-amber-1`.

```scss
// @file: `style.scss`
.btn {
  @extend
    // Weavv Utility Classes
    .\(expand\)margin-4,
    .padding-x-2,
    .padding-y-1,
    .text-lg,
    .text-white,
    .font-semibold,
    .bg-tint-granite-1,
    .\(hover\)bg-shade-amber-1,
    .border,
    .border-shade-amber-3,
    .curve-border,
    .shadow,
    .cursor-pointer;
}
```

## Mix `@extend` with Native CSS

```scss
// @file: `style.scss`
.btn-large {
  // SASS/SCSS
  @extend
    // Weavv utility classes
    .font-semibold,
    .text-shade-amber-1,
    .bg-tint-amber-5,
    .curve-border-lg;
  // Normal CSS
  font-size: 2em;
  padding: 1rem 1rem;
}
```

## Mix `@extend` with Variants,

```scss
// @file: `style.scss`
.btn-large:hover {
  @extend
    .text-white,
    .bg-tint-amber-1,
    .shadow;
  }
```

## Use `@extend` the Sassy Way

```scss
// @file: `style.scss`
.btn {
  @extend
    .bg-shade-amber-1;

  &:hover {
    @extend
      .bg-tint-amber-1,
      .shadow-lg;
  }
}
```

You can use above method for refactoring exiting style sheets or migrating to use the Weavv. See [CSS Migration](/guide/customization/css-migration).
