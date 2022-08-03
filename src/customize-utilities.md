---
id: customize-utilities
title: Customize Utilities
description: Include or exclude the utility modules or components in the framework.
topic: Customization
layout: default
---

{% from "misc/console.njk" import console %}

# Customize Utilities

First download the {{ site.productname }} CSS framework repository,

{{ console('bash',
'$ git clone https://github.com/weavv/weavv-css.git
$ cd weavv-css
') }}

To customize the {{ site.productname }} CSS framework by `enable` or `disable` the utility modules in the `.scss` files. The final build file size will be smaller or bigger depends on how much utility you need.

## Configure Utility Components

File location: `.src/configs/components/_full.scss`.
File location: `.src/configs/components/_minimal.scss`.

## Configure Variants

File location: `.src/configs/_variants.scss`

## Configure Modifiers

You can customize the {{ site.productname }} CSS default configuration file `./src/configs/_modifiers.scss` by adding or removing the `modifier` values that you don't need. If you find a utility that is not included in the build, you can create your utility using the [Plugin API](/plugin-api).

{{ console('scss',
'$screens: (
    xs: 320px,
    sm: 640px,
    md: 768px,
    lg: 1024px,
    xl: 1280px,
    2k: 1920px,
    //3k: 2560px,
    //4k: 3840px
    //5k: 5120px,
    //6k: 5760px,
    //7k: 7000px,
    //8k: 7680px
);
') }}

<div class="margin-y-2 margin-x-4 padding-3 border-l-8 text-sm">
  <span class="padding-r-1 font-semibold">
    Note:
  </span>
  The most recommended and effective way to strip down unused CSS classes is using
  <a
    href="https://purgecss.com/"
    target="_blank"
    title="Visit PurgeCSS website">
    PurgeCSS
  </a>
  or using
  <a href="/installation/#using-{{ site.smallproductname }}-via-cli">
    {{ site.productname }} CLI tool
  </a>
  (See also,
  <a href="/reduce-file-size/">
    Purge Unused Classes
  </a>).
</div>
