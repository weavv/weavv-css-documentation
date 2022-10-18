---
footer: false
---

# Reduce File Size

Weavv CSS file includes all CSS classes which increasing the file size estimate up to **8 (megabytes)** after being generated with the below command. This giving a full experience when prototyping new UI. For production-ready the best idea is to shrink the CSS file size down and left only CSS classes that are used by the project, thus vastly increasing the load time performance on the web browser.

```bash
# Full Version
$ npm run build-full
# Minimal Version
$ npm run build-min
```

## Setup PostCSS

Using [PurgeCSS](https://purgecss.com/) to strip down unused CSS classes in Weavv without worrying about the file size. Below is an example setting of [PurgeCSS using Gulp](https://purgecss.com/plugins/gulp.html) in the `gulpfile.js` file.

```js
// @file: `gulpfile.js`
const purgeCss = require('gulp-purgecss')

gulp.task('purge-css', () => {
  return gulp.src('./dist/style.css')
    .pipe(purgeCss({
        content: [
          'src/views/**/**/*.html',
          'src/views/**/**/*.js',
          'src/views/**/**/*.vue'
        ],
        defaultExtractor: content => content.match(/[\w-/:()]+(?<!:)/g) || [],
        // add whitelisting e.g. '/-webkit-scrollbar-thumb$/'
        whitelistPatterns: []
    }))
    .pipe(rename('style.trimmed.css'))
    .pipe(gulp.dest('dist/')) // output as `style-trimmed.css`
})
```

## Weavv CLI

Optionally to use the dedicated scaffolding app to create a new project with [PurgeCSS](https://purgecss.com/) on the go.

```bash
$ npx weavv-cli my-new-project
```

Read guide to [Create Empty Project](/guide/customization/create-empty-project) yourself without using the [Weavv CLI](/installation/#using-weavv-via-cli).

