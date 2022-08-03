---
id: responsive
title: Responsive
description: Craft an adaptive user interface with responsive utility variants.
topic: Core Concepts
layout: default
---

# Responsive Utilities

{% from "misc/console.njk" import console %}

Craft an adaptive user interface with responsive utility variants.

Every utility class in {{ site.productname }} can be configured instantly with different breakpoints without leaving your HTML and without even using the `@media` in your CSS.

Any of the breakpoints that are prefixed with a utility, the utility value can be inherited from the smaller width to the maximum width. It means, the smaller-breakpoint-first, the rest follows it. Take an example below.

{{ console('html',
'<!-- Example -->
<div class="(xs)text-lg (2k)text-xl-4">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .\(xs\)text-lg,
      .\(2k\)text-xl-4;
}
') }}

We have text size is `(lg)` at `(xs)` breakpoint, and text size is `(xl-4)` at `(2k)` breakpoint. The rest of the breakpoints that are not defined are `(sm)`, `(md)`, `(lg)` and `(1k)` will inherit the `(xs)`'s utility value, at the same time `(4k)`, `(8k)` will inherit the `(2k)`'s utility value.

## Supported Breakpoints

These are the default breakpoints covering for almost all common devices.

{{ console('css',
'/* Extra Small (xs) */
@media (min-width: 320px) { ... }

/* Small (sm) */
@media (min-width: 640px) { ... }

/* Medium (md) */
@media (min-width: 768px) { ... }

/* Large (lg) */
@media (min-width: 1024px) { ... }

/* Extra Large (1k) */
@media (min-width: 1280px) { ... }

/* 3k */
@media (min-width: 2560px) { ... }

/* 4k */
@media (min-width: 3840px) { ... }

/* 5k */
@media (min-width: 5120px) { ... }

/* 6k */
@media (min-width: 5760px) { ... }

/* 7k */
@media (min-width: 7000px) { ... }

/* 8k */
@media (min-width: 7680px) { ... }
') }}

To prefix the breakpoint name (e.g. `(xs)`, `(sm)`, `(md)`, `(lg)` and so on) wrapped with the `()` parenthesis characters, before the `class name`.

{{ console('html',
'<!-- Examples -->

<!-- font size is text-xl-1 on (sm) small screen, while text-md on (lg) large screen -->
<div class="(sm)text-xl-1 (lg)text-md">
    ...
  </div>

<!-- background color is charcoal on (sm) small screen, red on (lg) large screen -->
<div class="(sm)bg-shade-amber-1 (lg)bg-shade-amber-5">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .\(sm\)text-xl-1,
      .\(lg\)text-md;
}
.dummy {
    @extend
      .\(sm\)bg-shade-amber-1,
      .\(lg\)bg-shade-amber-5;
}
') }}

## Customize Breakpoints

To add or remove breakpoints, look for `$screens` variables in the `src/configs/_modifiers.scss`.

{{ console('scss',
'// @file `src/configs/_modifiers.scss`
$screens: (
    xs: 320px,
    sm: 640px,
    md: 768px,
    lg: 1024px,
    1k: 1280px,
    2k: 1920px,
    3k: 2560px,
    4k: 3840px,
    5k: 5120px,
    6k: 5760px,
    7k: 7000px,
    8k: 7680px
  );
') }}
