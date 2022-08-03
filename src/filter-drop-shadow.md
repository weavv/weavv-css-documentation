---
id: drop-shadow-filter
title: Drop Shadow Filter
description: Utilities for sets shadow filter to transparency image (SVG, PNG).
topic: Filters
relate: filter-blur, filter-brightness, filter-contrast, filter-saturate, filter-invert
layout: default
---

> Filters

# Drop Shadow Filter

Utilities for sets shadow filter to transparency image (SVG, PNG).

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for filterdropshadow in variants.filterdropshadow %}{% for item in filterdropshadow.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| filter `{drop-shadow}` | filter: brightness(var(--brightness)) contrast(var(--contrast)) saturate(var(--saturate)) blur(var(--blur)) drop-shadow(var(--drop-shadow)); transition: filter var(--extra-smooth) linear, transform var(--extra-smooth) linear; |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| drop-shadow-xs | --drop-shadow: 0px 0px 1px rgba(0, 0, 0, 0.8) |
| drop-shadow-sm | --drop-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5) |
| drop-shadow-md | --drop-shadow: 0px 4px 3px rgba(0, 0, 0, 0.5) |
| drop-shadow-lg | --drop-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5) |
| drop-shadow-xl | --drop-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5) |

<div class="margin-t-2 margin-b-4 margin-x-4 padding-3 border-l-8 border-orange-6 text-sm text-orange-6 (dark)text-orange-5 bg-orange-2 (dark)bg-orange-9">
  <span class="padding-r-1 font-semibold">
    Note:
  </span>
  This utility does not support the inline property
  <strong>
    background-image:url()
  </strong>.
</div>

---

## Usage

{% from "misc/console.njk" import console %}

<div class="margin-y-2 margin-x-auto flex">
  <div class="max-width-sm">
    <img
      class="width-56 height-48 object-contain object-center overflow-hidden"
      src="https://images.vexels.com/media/users/3/196998/isolated/preview/3421fa2cd778f85dfc33c72728b57d1e-tyrannosaurus-dino-cute-by-vexels.png"
    >
    <div class="padding-t-2 text-sm text-center">
      Filter: OFF
    </div>
  </div>
  <div class="padding-2 max-width-sm">
    <img
      class="filter drop-shadow-md width-56 height-48 object-contain object-center overflow-hidden"
      src="https://images.vexels.com/media/users/3/196998/isolated/preview/3421fa2cd778f85dfc33c72728b57d1e-tyrannosaurus-dino-cute-by-vexels.png"
    >
    <div class="padding-t-2 text-sm text-center">
      Filter: ON
    </div>
  </div>
</div>

Apply the `filter` class first, and then set the filter in any order when with other filters.

{{ console('html',
'<img class="filter drop-shadow-md ..." src="...">
') }}

{{ console('scss',
'.dummy {
    @extend
      .filter,
      .drop-shadow-md;
}
') }}

Mix with other filters, such as [Brightness](/filter-brightness/), [Contrast](/filter-contrast/), [Saturate](/filter/saturate) and [Blur](/filter-blur/).

{{ console('html',
'<img class="filter drop-shadow-md brightness-10 contrast-5 saturate-4 blur-5 ..." src="...">
') }}

{{ console('scss',
'.dummy {
    @extend
      .filter,
      .drop-shadow-md,
      .brightness-10,
      .contrast-5,
      .saturate-4,
      .blur-5;
}
') }}

