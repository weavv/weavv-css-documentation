---
id: backdrop-saturate-filter
title: Backdrop Saturate Filter
description: Utilities for sets filter backdrop saturate effect to an element.
topic: Filters
relate: filter-backdrop-blur, filter-backdrop-brightness, filter-backdrop-contrast
layout: default
---

> Filters

# Backdrop Saturate Filter

Utilities for sets filter backdrop saturate effect to an element.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for filterbackdropsaturate in variants.filterbackdropsaturate %}{% for item in filterbackdropsaturate.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| backdrop-filter `{saturate}` | backdrop-filter: brightness(var(--brightness)) contrast(var(--contrast)) saturate(var(--saturate)) blur(var(--blur)) |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| saturate-0 | --backdrop-saturate: 0 |
| saturate-1 | --backdrop-saturate: 1 |
| saturate-2 | --backdrop-saturate: 1.10 |
| saturate-3 | --backdrop-saturate: 1.20 |
| saturate-4 | --backdrop-saturate: 1.30 |
| saturate-5 | --backdrop-saturate: 1.40 |
| saturate-6 | --backdrop-saturate: 1.50 |
| saturate-7 | --backdrop-saturate: 1.60 |
| saturate-8 | --backdrop-saturate: 1.70 |
| saturate-9 | --backdrop-saturate: 1.80 |
| saturate-10 | --backdrop-saturate: 1.90 |

---

## Usage

{% from "misc/console.njk" import console %}

<div class="padding-4 margin-y-2 margin-x-auto">
  <div class="flex flex-gap-4 justify-center items-center">
    <div class="width-1/2 flex flex-column justfiy-center items-center">
      <div class="flex justify-center items-center width-56 height-48 bg-auto bg-center bg-no-repeat curve-border-lg"
        style="background-image:url('https://picsum.photos/256')">
        <div class="width-48 height-32 bg-tint-granite-1 bg-opacity-50"></div>
      </div>
      <div class="padding-t-2 text-sm text-center">
        Filter: OFF
      </div>
    </div>
    <div class="width-1/2 flex flex-column justfiy-center items-center">
      <div class="flex justify-center items-center width-56 height-48 bg-auto bg-center bg-no-repeat curve-border-lg"
        style="background-image:url('https://picsum.photos/256')">
        <div class="backdrop-filter saturate-10 width-48 height-32 bg-tint-granite-1 bg-opacity-50"></div>
      </div>
      <div class="padding-t-2 text-sm text-center">
        Filter: ON
      </div>
    </div>
  </div>
</div>

Apply the `backdrop-filter` class first, and then set the filter in any order when with other filters.

{{ console('html',
'<div class="width-48 height-48" style="background-image:url(...)">
    <div class="backdrop-filter saturate-10 ... bg-tint-granite-1 bg-opacity-50 ... width-32 height-32">
      ...
    </div>
  </div>
') }}

{{ console('scss',
'.dummy-image {
    @extend
      .width-48,
      .height-48;
}
.dummy-backdrop-blur {
    @extend
      .backdrop-filter,
      .saturate-10,
      .bg-tint-granite-5,
      .bg-opacity-50,
      .width-32,
      .height-32;
}
') }}

Mix with other filters, such as [Backdrop Brightness](/filter-backdrop-brightness/), [Backdrop Contrast](/filter-backdrop-contrast/), and [Backdrop Blur](/filter-backdrop-blur).

{{ console('html',
'<div class="width-48 height-48" style="background-image:url(...)">
    <div class="backdrop-filter saturate-10 contrast-1 brightness-1 blur-2 ... bg-tint-granite-1 bg-opacity-50 ... width-32 height-32">
      ...
    </div>
  </div>
') }}

{{ console('scss',
'.dummy-image {
    @extend
      .width-48,
      .height-48;
}
.dummy-backdrop-blur {
    @extend
      .backdrop-filter,
      .saturate-10,
      .contrast-1,
      .brightness-1,
      .blur-2,
      .bg-tint-granite-5,
      .bg-opacity-50,
      .width-32,
      .height-32;
}
') }}





