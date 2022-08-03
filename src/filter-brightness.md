---
id: brightness-filter
title: Brightness Filter
description: Utilities for sets brightness filter to an element.
topic: Filters
relate: filter-blur, filter-contrast, filter-saturate, filter-invert, filter-drop-shadow, filter-smooth
layout: default
---

> Filters

# Brightness Filter

Utilities for sets brightness filter to an element.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for filterbrightness in variants.filterbrightness %}{% for item in filterbrightness.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| filter `{brightness}` | filter: brightness(var(--brightness)) contrast(var(--contrast)) saturate(var(--saturate)) blur(var(--blur)) drop-shadow(var(--drop-shadow)); transition: filter var(--extra-smooth) linear, transform var(--extra-smooth) linear; |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| brightness-0 | --brightness: 0 |
| brightness-1 | --brightness: 1 |
| brightness-2 | --brightness: 1.10 |
| brightness-3 | --brightness: 1.20 |
| brightness-4 | --brightness: 1.30 |
| brightness-5 | --brightness: 1.40 |
| brightness-6 | --brightness: 1.50 |
| brightness-7 | --brightness: 1.60 |
| brightness-8 | --brightness: 1.70 |
| brightness-9 | --brightness: 1.80 |
| brightness-10 | --brightness: 1.90 |

---

## Usage

{% from "misc/console.njk" import console %}

<div class="margin-y-2 margin-x-auto flex">
  <div class="padding-2 max-width-sm">
    <img
      class="width-56 height-48 object-cover object-center overflow-hidden curve-border-lg shadow"
      src="https://picsum.photos/500?=1"
    >
    <div class="padding-t-2 text-sm text-center">
      Filter: OFF
    </div>
  </div>
  <div class="padding-2 max-width-sm">
    <img
      class="filter brightness-10 width-56 height-48 object-cover object-center overflow-hidden curve-border-lg shadow"
      src="https://picsum.photos/500?=1"
    >
    <div class="padding-t-2 text-sm text-center">
      Filter: ON
    </div>
  </div>
</div>

Apply the `filter` class first, and then set the filter in any order when with other filters.

{{ console('html',
'<img class="filter brightness-10 ..." src="...">
<div class="filter brightness-10 ..." style="background-image:url(...)"> ... </div>
') }}

{{ console('scss',
'.dummy-first-image {
    @extend
      .filter,
      .brightness-10;
}
.dummy-second-image {
    @extend
      .filter,
      .brightness-10;
}
') }}

Mix with other filters, such as [Contrast](/filter-contrast/), [Saturate](/filter-saturate/), [Blur](/filter-blur/) and [Drop Shadow](/filter-drop-shadow/).

{{ console('html',
'<img class="filter brightness-10 contrast-5 saturate-5 blur-5 ..." src="...">
<div class="filter brightness-10 contrast-5 saturate-5 blur-5 ..." style="background-image:url(...)"> ... </div>
') }}

{{ console('scss',
'.dummy-first-image {
    @extend
      .filter,
      .brightness-10,
      .contrast-5,
      .saturate-5,
      .blur-5;
}
.dummy-second-image {
    @extend
      .filter,
      .brightness-10,
      .contrast-5,
      .saturate-5,
      .blur-5;
}
') }}

