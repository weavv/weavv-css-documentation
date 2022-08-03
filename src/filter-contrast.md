---
id: contrast-filter
title: Contrast Filter
description: Utilities for sets contrast filter to an element.
topic: Filters
relate: filter-blur, filter-brightness, filter-saturate, filter-invert, filter-drop-shadow, filter-smooth
layout: default
---

> Filters

# Contrast Filter

Utilities for sets contrast filter to an element.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for filtercontrast in variants.filtercontrast %}{% for item in filtercontrast.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| filter `{contrast}` | filter: brightness(var(--brightness)) contrast(var(--contrast)) saturate(var(--saturate)) blur(var(--blur)) drop-shadow(var(--drop-shadow)); transition: filter var(--extra-smooth) linear, transform var(--extra-smooth) linear; |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| contrast-0 | --contrast: 0 |
| contrast-1 | --contrast: 1 |
| contrast-2 | --contrast: 1.10 |
| contrast-3 | --contrast: 1.20 |
| contrast-4 | --contrast: 1.30 |
| contrast-5 | --contrast: 1.40 |
| contrast-6 | --contrast: 1.50 |
| contrast-7 | --contrast: 1.60 |
| contrast-8 | --contrast: 1.70 |
| contrast-9 | --contrast: 1.80 |
| contrast-10 | --contrast: 1.90 |

---

## Usage

{% from "misc/console.njk" import console %}

<div class="margin-y-2 margin-x-auto flex">
  <div class="padding-2 max-width-sm">
    <img
      class="width-56 height-48 object-cover object-center overflow-hidden curve-border-lg shadow"
      src="https://picsum.photos/500?=2"
    >
    <div class="padding-t-2 text-sm text-center">
      Filter: OFF
    </div>
  </div>
  <div class="padding-2 max-width-sm">
    <img
      class="filter contrast-10 width-56 height-48 object-cover object-center overflow-hidden curve-border-lg shadow"
      src="https://picsum.photos/500?=2"
    >
    <div class="padding-t-2 text-sm text-center">
      Filter: ON
    </div>
  </div>
</div>

Apply the `filter` class first, and then set the filter in any order when with other filters.

{{ console('html',
'<img class="filter contrast-10 ..." src="...">
<div class="filter contrast-10 ..." style="background-image:url(...)"> ... </div>
') }}

{{ console('scss',
'.dummy-first-image {
    @extend
      .filter,
      .contrast-10;
}
.dummy-second-image {
    @extend
      .filter,
      .contrast-10;
}
') }}

Mix with other filters, such as [Brightness](/filter-brightness/), [Saturate](/filter-saturate/), [Blur](/filter-blur/) and [Drop Shadow](/filter-drop-shadow/).

{{ console('html',
'<img class="filter contrast-10 brightness-10 saturate-5 blur-5 drop-shadow-md ..." src="...">
<div class="filter contrast-10 brightness-10 saturate-5 blur-5 ..." style="background-image:url(...)"> ... </div>
') }}

{{ console('scss',
'.dummy-first-image {
    @extend
      .filter,
      .contrast-10,
      .brightness-10,
      .saturate-5,
      .blur-5,
      .drop-shadow-md;
}
.dummy-second-image {
    @extend
      .filter,
      .contrast-10,
      .brightness-10,
      .saturate-5,
      blur-5;
}
') }}