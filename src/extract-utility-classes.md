---
id: extract-utility-classes
title: Extract Utility Classes
description: Exposes WEAVV CSS utility classes to your custom CSS with SASS @extend directive.
topic: Core Concepts
layout: default
---

{% from "misc/console.njk" import console %}

# Extract Utility Classes

{{ site.productname }} is purely built on top of the [Sassy CSS](https://sass-lang.com/documentation/at-rules/extend). By using the existing SASS `@extend` directive allows you to expose any {{ site.productname }} utility classes into your custom CSS.

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
  </a> or
  <a href="/create-empty-project/">
    Create Empty Project
  </a>. )
</div>

## Using the SASS `@extend` Directive

Below are examples of how to use the **@extend `<selector ...>`** directive to extract {{ site.productname }} CSS utilities into your custom CSS.

- prefix parenthesis `()` is written as `\(\)`.
- utility class `text-shade-amber-1` is written as `.text-shade-amber-1`.
- pseudo class `(hover)text-shade-amber-1` is written as `.\(hover\)text-shade-amber-1`.
- pseudo class with responsive `.(md)(hover)text-shade-amber-1` is written as `.\(md\)\(hover\)text-shade-amber-1`.
- responsive `(md)text-shade-amber-1` is written as `.\(md\)text-shade-amber-1`.

### Examples

{{ console('scss',
'// @file: `src/_plugins.scss` in .scss
.btn {
    @extend
      // WEAVV utility classes
      .\\(expand\\)margin-4,
      .padding-x-2,
      .padding-y-1,
      .text-lg,
      .text-white,
      .font-semibold,
      .bg-tint-granite-1,
      .\\(hover\\)bg-shade-amber-1,
      .border,
      .border-shade-amber-3,
      .curve-border,
      .shadow,
      .cursor-pointer;
  }
') }}

You can mix `@extend` with normal CSS,

{{ console('scss',
'.btn-large {
    // SASS/SCSS
    @extend
      // WEAVV utility classes
      .font-semibold,
      .text-shade-amber-1,
      .bg-tint-amber-5,
      .curve-border-lg;
    // Normal CSS
    font-size: 2em;
    padding: 1rem 1rem;
  }
') }}

You can mix `@extend` with CSS Pseudo Variants,

{{ console('scss',
'.btn-large:hover {
    @extend
      .text-white,
      .bg-tint-amber-1,
      .shadow;
  }
') }}

You can write in full `SASSy` way, if you prefer the best practice,

{{ console('scss',
'.btn {
    @extend
      .bg-shade-amber-1;

    &:hover {
      @extend
        .bg-tint-amber-1,
        .shadow-lg;
    }
  }
') }}

You can use above method for refactoring exiting style sheets or migrating to use the {{ site.productname }}. (See [CSS Migration](/css-migration/)).
