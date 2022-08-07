---
id: invert-filter
title: Invert Filter
description: Utilities for sets filter invert effect to an element.
topic: Filters
relate: filter-blur, filter-brightness, filter-contrast, filter-saturate, filter-drop-shadow
layout: default
---

> Filters

# Invert Filter

Utilities for sets filter inverts effect to an element.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for filterinvert in variants.filterinvert %}{% for item in filterinvert.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| invert-0 | filter: invert(0) |
| invert-1 | filter: invert(1.0) |

---

## Usage

{% from "misc/console.njk" import console %}

<div class="margin-y-2 margin-x-auto flex">
  <div class="padding-2 max-width-sm">
    <img
      class="width-56 height-48 object-cover object-center overflow-hidden curve-border-lg shadow"
      src="https://picsum.photos/500?=5"
    >
    <div class="padding-t-2 text-sm text-center">
      Filter: OFF
    </div>
  </div>
  <div class="margin-2 max-width-sm">
    <img
      class="invert-1 width-56 height-48 object-cover object-center overflow-hidden curve-border-lg"
      src="https://picsum.photos/500?=5"
    >
    <div class="padding-t-2 text-sm text-center">
      Filter: ON
    </div>
  </div>
</div>

{{ console('html',
'<img class="invert-1 ..." src="...">

<div class="invert-1 ..." style="background-image:url(...)"> ... </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .invert-1;
}
') }}

 Set auto dark theme enabled to an element with added `(dark)` prefix.

{{ console('html',
'<img class="invert-1 (dark)invert-0 ..." src="...">

<div class="invert-1 (dark)invert-0 ..." style="background-image:url(...)"> ... </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .invert-1,
      .\\(dark\\)invert-0;
}
') }}
