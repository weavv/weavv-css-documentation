---
id: installation
title: Installation
description: Ways to install WEAVV CSS framework for your project.
topic: Installation
layout: default
---

# CDN

{% from "misc/console.njk" import console %}

{{ console('html',
'<link href="https://unpkg.com/weavvcss@1.0.3/dist/weavv-1.0.3.min.css" rel="stylesheet" rel="preload" as="style" media="all" defer>
') }}

{{ console('css',
'@import "https://unpkg.com/weavvcss@1.0.3/dist/weavv-1.0.3.min.css";
') }}

<div class="margin-t-4 margin-x-4 padding-3 border-l-8 text-sm">
  <span class="padding-r-1 font-semibold">
    Note:
  </span>
    The
  <strong>
    CDN
  </strong>
    build is a published version and always behind the latest update at the Github repository. (See
    <a href="/utility-map/">
      Utility Map
    </a> for new changes.)
</div>

<div class="margin-y-2 margin-x-4 padding-3 border-l-8">
  <span class="padding-r-1 font-semibold">
    Note:
  </span>
    The
  <strong>
    CDN
  </strong>
    build file size is huge, ideal for prototyping. Unrecommended to use in production. Learn more about how to reduce the framework size efficiently. (See
    <a href="/reduce-file-size/">
      Reduce File Size
    </a>)
</div>

<div class="margin-b-4 margin-x-4 padding-3 border-l-8">
  <span class="padding-r-1 font-semibold">
    Note:
  </span>
    Using
  <strong>
    CDN
  </strong>
    does not have the benefit to use the
  <strong>
    @extend
  </strong>
    directive. (See
    <a href="/extract-utility-classes/">
      Extract Utility Classes
    </a>)
</div>

# Package Manager

{{ console('bash',
'# YARN
  $ yarn add weavvcss
  # NPM
  $ npm i weavvcss
') }}

You can include the {{ site.productname }} CSS file from the `node_modules` directory with an HTML `<link>` tag or import the `{{ site.smallproductname }}.scss` into `.scss` file with `@import` directive.

{{ console('js',
"import 'weavvcss';
") }}

{{ console('scss',
"@import 'node_modules/weavvcss/weavv';
") }}

{{ console('html',
'<link href="node_modules/weavvcss/dist/weavv-1.0.3.min.css" rel="stylesheet" rel="preload" as="style" media="all" defer>
') }}

<div class="margin-t-4 margin-x-4 padding-3 border-l-8">
  <span class="padding-r-1 font-semibold">
    Note:
  </span>
    The
  <strong>
    node_modules
  </strong>
    is a published version and always behind the latest update at the Github repository.
</div>

<div class="margin-t-2 margin-x-4 padding-3 border-l-8">
  <span class="padding-r-1 font-semibold">
    Note:
  </span>
    The
  <strong>
    CDN
  </strong>
    build file size is huge, ideal for prototyping. Unrecommended to use in production. Learn more about how to reduce the framework size efficiently. (See
  <a href="/reduce-file-size/">
    Reduce File Size
  </a>)
</div>

# CLI

Create an empty project on the go with an example template, written with the Vanilla JS web component. Optional to use HTML inline CSS class or to use SASS with `@extend` directive to extract WEAVV CSS classes semantically.

To create a new project, run:

{{ console('bash',
'# YARN
  $ yarn create weavv-cli my-new-project
  # NPM
  $ npx weavv-cli my-new-project
') }}

The CLI gives you an optional tool to quickly installs and sets up a new frontend project with essential build tools such as preprocessors, postprocessors, etc. Use the tool for the production-ready build.

If you install the `{{ site.smallproductname }}-cli` package to run locally, simply run `{{ site.smallproductname }} <project_name>`,

{{ console('bash',
'# YARN
  $ yarn global add weavv-cli
  # NPM
  $ npm i -g weavv-cli
  # USAGE
  $ weavv my-new-project
') }}

<div class="margin-y-4 margin-x-4 padding-3 border-l-8">
  <span class="padding-r-1 font-semibold">
    Note:
  </span>
    The
  <strong>
    CLI
  </strong>
    always comes with the latest build, including the unpublished changes.
</div>

