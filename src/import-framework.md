---
id: import-framework
title: Import Framework
description: Import WEAVV CSS into your project via, CDN, Package Manager or CLI.
topic: Core Concepts
layout: default
---

# Import Framework

{% from "misc/console.njk" import console %}

<div class="margin-y-4 margin-x-4 padding-3 border-l-8 text-sm">
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

Install {{ site.productname }} CSS via the package manager (Yarn or NPM),

{{ console('bash',
'# YARN
$ yarn add {{ site.smallproductname }}-css
# NPM
$ npm i {{ site.smallproductname }}-css
') }}

Import the {{ site.productname }} `.scss` file from the `node_modules` directory,

{{ console('scss',
'// @file: `main-style.scss`
@import "node_modules/{{ site.smallproductname }}-css/{{ site.smallproductname }}";
') }}

Expose the {{ site.productname }} CSS utility classes using SASS's `@extend` directive. (See [Extract Utility Classes](/extract-utility-classes/), [CSS Migration](/css-migration/)).

{{ console('scss',
'// @file: `main-style.scss`

html {
  @extend
    .font-default,
    .antialiased,
    .text-lg,
    .text-shade-granite-1;
}

body {
  @extend
    .bg-tint-granite-1;
}

p {
  @extend
    .text-md,
    .depth-relaxed;
}

a {
  @extend
    .text-orange-5,
    .\(hover\)text-shade-orange-1,
    .\(hover\)text-underline;
}

h1 {
  @extend
    .text-xl-2,
    .font-semibold;
}
') }}

