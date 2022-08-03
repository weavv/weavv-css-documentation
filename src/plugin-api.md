---
id: plugin-api
title: Plugin API
description: Using plugin API to create your utility module and use it right away without modifying any of the WEAVV core files.
topic: Customization
layout: default
---

# Plugin API

{% from "misc/console.njk" import console %}

Using plugin API to create your utility module and use it right away without modifying any of the {{ site.productname }} core files. {{ site.productname }} will generate after you run the build. All you need is to write your plugins in the `src/_plugins.scss` file or make a separate one.

First, clone the {{ site.productname }} CSS framework repository,

{{ console('bash',
'$ git clone https://github.com/weavv/weavv-css.git
  $ cd weavv-css
') }}

Locate and edit the `plugins.scss` in `/src/` directory at the root of `{{ site.smallproductname }}-css` directory.

## Usage

{{ console('scss',
"// enable or disable plugins
$plugins: (
  'component-name': false,
);

@if (map-get($plugins, 'component-name')) {
// PLUGIN API
  // @param: {String}  $class
  // @param: {String}  $property
  // @param: {List}    $modifier [()]
  // @param: {List}    $variant [()]
  // @param: {Bool}    $negative [null]
  // @param: {String}  $option [null]

  @include utility(
    // CSS Classname
    $class: 'text', // (output: .text-)
    // CSS Property
    $property: font-size,
    // Utility Modifier
    $modifier: (
      // (output: .text-xs { font-size: 0.75rem })
      xs: 0.75rem,
      // (output: .text-sm { font-size: 0.875rem })
      sm: 0.875rem
    ),
    // Negative Value (true|false)
    $negative: true,
    // Custom Value
    $option: '',
    // Variants Settings
    $variant: (
      'responsive',
      'dark-mode', 'light-mode',
      'reduce-motion',
      'selection-hover',
      'expand',
      'first-of-type',
      'last-of-type',
      'portrait', 'landscape',
      'hover', 'group-hover',
      'focus', 'group-focus', 'focus-visible', 'focus-within',
      'active',
      'visited',
      'checked',
      'disabled'
    )
  );
}
") }}

Create basic utility.

{{ console('scss',
"// EXAMPLE
  // @file: `src/_plugins.scss`
  @include utility(
    $class: 'text',
    $property: font-size,
    $modifier: (
      xs: 0.75rem,
      sm: 0.875rem
    )
  );
") }}

Create responsive utility.

{{ console('scss',
"// EXAMPLE
  // @file: `src/_plugins.scss`
  @include utility(
    $class: 'text',
    $property: font-size,
    $modifier: (
      xs: 0.75rem,
      sm: 0.875rem
    ),
    $variant: (
      'responsive'
    )
  );
") }}

Create responsive utility with variants.

{{ console('scss',
"// EXAMPLE
  // @file: `src/_plugins.scss`
  @include utility(
    $class: 'text',
    $property: font-size,
    $modifier: (
      xs: 0.75rem,
      sm: 0.875rem
    ),
    $variant: (
      'responsive',
      'hover', 'group-hover'
    )
  );
") }}

Create utility with negative values.

{{ console('scss',
"// EXAMPLE
  // @file: `src/_plugins.scss`
  @include utility(
    $class: 'margin',
    $property: margin,
    $modifier: (
      1: 1rem,
      2: 2rem
    ),
    $negative: true
  );
") }}

## Custom Plugin In A Separate File

If you prefer to separate your custom plugins and organize them into different files, use `@import` to include external modules into `src/_plugins.scss`.

{{ console('scss',
"// EXAMPLE
  // @file: `src/_plugins.scss`
  @import 'new_dir_name/new_plugin_file_name.scss';
  ...
") }}

## Final Build

After you finished the editing, run one of these commands every time you make changes to the {{ site.productname }} files, after that, the new build of {{ site.productname }} CSS will be located in a proprietary directory. And pretty much it is done, you can try out your new utility modules in your project.

{{ console('bash',
"# YARN
  $ yarn build
  # NPM
  $ npm run build
") }}

New outputs are located in:

- **CSS** output directory `./dist/`.
- **SCSS** output directory (root) `./`.

{{ console('bash',
"(root directory, default: `weavv-css`)
  ├── dist
  │   └── (CSS files output)
  └── (SCSS file output)
") }}