---
id: reduce-file-size
title: Reduce File Size
description: Ways to reduce the use of {{ site.productname }} CSS utilities.
topic: Customization
layout: default
---

# Reduce File Size

{% from "misc/console.njk" import console %}

{{ site.productname }} CSS file includes all CSS classes which increasing the file size estimate up to 8MB after being generated with the below command. This giving a full experience when prototyping new UI. For production-ready the best idea is to shrink the CSS file size down and left only CSS classes that are used by the project, thus vastly increasing the load time performance on the web browser.

{{ console('bash',
'# full version
  $ npm run build-full
  # minimal version
  $ npm run build-min
') }}

Using [PurgeCSS](https://purgecss.com/) to strip down unused CSS classes in {{ site.productname }} without worrying about the file size. Below is an example setting of [PurgeCSS using Gulp](https://purgecss.com/plugins/gulp.html) in the `gulpfile.js` file.

{{ console('js',
"// Example Snippet
const purgeCss = require('gulp-purgecss')
gulp.task('purge-css', () => {
  return gulp.src('./node-modules/weavvcss/dist/weavv-x.x.x.min.css')
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
    .pipe(rename('style.css'))
    .pipe(gulp.dest('dist/assets/css'))
})
") }}

Optionally to use the dedicated scaffolding app to create a new project with [PurgeCSS](https://purgecss.com/) on the go.

{{ console('bash',
'$ npx weavv-cli my-new-project
') }}

Read guide to [Create Empty Project](/create-empty-project/) yourself without using the [{{ site.productname }} CLI](/installation/#using-{{ site.smallproductname }}-via-cli).

