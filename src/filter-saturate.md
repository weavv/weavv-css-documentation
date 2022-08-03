---
id: saturate-filter
title: Saturate Filter
description: Utilities for sets saturate filter to an element.
topic: Filters
relate: filter-blur, filter-brightness, filter-contrast, filter-invert, filter-drop-shadow, filter-smooth
layout: default
---

> Filters

# Saturate Filter

Utility for sets saturates or desaturates to an element.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for filtersaturate in variants.filtersaturate %}{% for item in filtersaturate.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| filter `{saturate}` | filter: brightness(var(--brightness)) contrast(var(--contrast)) saturate(var(--saturate)) blur(var(--blur)) drop-shadow(var(--drop-shadow)); transition: filter var(--extra-smooth) linear, transform var(--extra-smooth) linear; |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| saturate-0 | --saturate: 0 |
| saturate-1 | --saturate: 1 |
| saturate-2 | --saturate: 1.10 |
| saturate-3 | --saturate: 1.20 |
| saturate-4 | --saturate: 1.30 |
| saturate-5 | --saturate: 1.40 |
| saturate-6 | --saturate: 1.50 |
| saturate-7 | --saturate: 1.60 |
| saturate-8 | --saturate: 1.70 |
| saturate-9 | --saturate: 1.80 |
| saturate-10 | --saturate: 1.90 |

---

## Usage

{% from "misc/console.njk" import console %}

<div class="margin-y-2 margin-x-auto flex">
  <div class="padding-2 max-width-sm">
    <img
      class="width-56 height-48 object-cover object-center overflow-hidden curve-border-lg shadow"
      src="https://picsum.photos/500?=3"
    >
    <div class="padding-t-2 text-sm text-center">
      Filter: OFF
    </div>
  </div>
  <div class="padding-2 max-width-sm">
    <img
      class="filter saturate-10 width-56 height-48 object-cover object-center overflow-hidden curve-border-lg shadow"
      src="https://picsum.photos/500?=3"
    >
    <div class="padding-t-2 text-sm text-center">
      Filter: ON
    </div>
  </div>
</div>

Apply the `filter` class first, and then set the filter in any order when with other filters.

{{ console('html',
'<img class="filter saturate-10 ..." src="...">

<div class="filter saturate-10 ..." style="background-image:url(...)"> ... </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .filter,
      .saturate-10;
}
') }}

Mix with other filters, such as [Brightness](/filter-brightness/), [Contrast](/filter-contrast/), [Blur](/filter-blur/) and [Drop Shadow](/filter-drop-shadow/).

{{ console('html',
'<img class="filter saturate-10 brightness-10 contrast-5 blur-5 drop-shadow-md ..." src="...">

<div class="filter saturate-10 brightness-10 contrast-5 blur-5 ..." style="background-image:url(...)"> ... </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .filter,
      .saturate-10,
      .brightness-10,
      .contrast-5,
      .blur-5,
      .drop-shadow-md;
}
') }}



