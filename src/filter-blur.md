---
id: blur-filter
title: Blur Filter
description: Utilities for sets filter blur effect to an element.
topic: Filters
relate: filter-brightness, filter-contrast, filter-saturate, filter-invert, filter-drop-shadow, filter-smooth
layout: default
---

> Filters

# Blur Filter

Utility applies a Gaussian blur to the element.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for filterblur in variants.filterblur %}{% for item in filterblur.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| filter `{blur}` | filter: brightness(var(--brightness)) contrast(var(--contrast)) saturate(var(--saturate)) blur(var(--blur)) drop-shadow(var(--drop-shadow)); transition: filter var(--extra-smooth) linear, transform var(--extra-smooth) linear; |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| blur-0 | --blur: 0px |
| blur-1 | --blur: 2px |
| blur-2 | --blur: 4px |
| blur-3 | --blur: 6px |
| blur-4 | --blur: 8px |
| blur-5 | --blur: 10px |
| blur-6 | --blur: 12px |
| blur-7 | --blur: 14px |
| blur-8 | --blur: 16px |
| blur-9 | --blur: 18px |
| blur-10 | --blur: 20px |

---

## Usage

{% from "misc/console.njk" import console %}

<div class="margin-y-2 margin-x-auto flex">
  <div class="padding-2 max-width-sm">
    <img
      class="width-56 height-48 object-cover object-center overflow-hidden curve-border-lg shadow"
      src="https://picsum.photos/500?=4"
    >
    <div class="padding-t-2 text-sm text-center">
      Filter: OFF
    </div>
  </div>
  <div class="margin-2 max-width-sm">
    <img
      class="filter blur-2 width-56 height-48 object-cover object-center overflow-hidden curve-border-lg"
      src="https://picsum.photos/500?=4"
    >
    <div class="padding-t-2 text-sm text-center">
      Filter: ON
    </div>
  </div>
</div>

Apply the `filter` class first, and then set the filter in any order when with other filters.

{{ console('html',
'<img class="filter blur-2 ..." src="...">
<div class="filter blur-2 ..." style="background-image:url(...)"> ... </div>
') }}

{{ console('scss',
'.dummy-first-image {
    @extend
      .filter,
      .blur-2;
}
.dummy-second-image {
    @extend
      .filter,
      .blur-2;
}
') }}

Mix with other filters, such as [Brightness](/filter-brightness/), [Contrast](/filter-contrast/), [Saturate](/filter-saturate/) and [Drop Shadow](/filter-drop-shadow/).

{{ console('html',
'<img class="filter blur-2 brightness-10 contrast-5 saturate-5 drop-shadow-md ..." src="...">
<div class="filter blur-2 brightness-10 contrast-5 saturate-5 ..." style="background-image:url(...)"> ... </div>
') }}

{{ console('scss',
'.dummy-first-image {
    @extend
      .filter,
      .blur-2,
      .brightness-10,
      .contrast-5,
      .saturate-5,
      .drop-shadow-md;
}
.dummy-second-image {
    @extend
      .filter,
      .blur-2,
      .brightness-10,
      .contrast-5,
      .saturate-5;
}
') }}


