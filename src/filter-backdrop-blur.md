---
id: backdrop-blur-filter
title: Backdrop Blur Filter
description: Utilities for sets filter backdrop blur effect to an element.
topic: Filters
relate: filter-backdrop-brightness, filter-backdrop-contrast, filter-backdrop-saturate
layout: default
---

> Filters

# Backdrop Blur Filter

Utilities for sets filter backdrop blur effect to an element.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for filterbackdropblur in variants.filterbackdropblur %}{% for item in filterbackdropblur.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| backdrop-filter `{blur}` | backdrop-filter: brightness(var(--brightness)) contrast(var(--contrast)) saturate(var(--saturate)) blur(var(--blur)) |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| blur-0 | --backdrop-blur: 0px |
| blur-1 | --backdrop-blur: 2px |
| blur-2 | --backdrop-blur: 4px |
| blur-3 | --backdrop-blur: 6px |
| blur-4 | --backdrop-blur: 8px |
| blur-5 | --backdrop-blur: 10px |
| blur-6 | --backdrop-blur: 12px |
| blur-7 | --backdrop-blur: 14px |
| blur-8 | --backdrop-blur: 16px |
| blur-9 | --backdrop-blur: 18px |
| blur-10 | --backdrop-blur: 20px |

---

## Usage

{% from "misc/console.njk" import console %}

<div class="padding-4 margin-y-2 margin-x-auto">
  <div class="flex flex-gap-4 justify-center items-center">
    <div class="width-1/2 flex flex-column justfiy-center items-center">
      <div class="flex justify-center items-center width-56 height-48 bg-auto bg-center bg-no-repeat curve-border-lg"
        style="background-image:url('https://picsum.photos/256')">
        <div class="width-48 height-32 bg-tint-granite-5 bg-opacity-50"></div>
      </div>
      <div class="padding-t-2 text-sm text-center">
        Filter: OFF
      </div>
    </div>
    <div class="width-1/2 flex flex-column justfiy-center items-center">
      <div class="flex justify-center items-center width-56 height-48 bg-auto bg-center bg-no-repeat curve-border-lg"
        style="background-image:url('https://picsum.photos/256')">
        <div class="backdrop-filter blur-3 width-48 height-32 bg-tint-granite-5 bg-opacity-50"></div>
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
    <div class="backdrop-filter blur-2 ... bg-tint-granite-1 bg-opacity-50 ... width-32 height-32">
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
      .blur-2,
      .bg-tint-granite-1,
      .bg-opacity-50,
      .width-32,
      .height-32;
}
') }}

Mix with other filters, such as [Backdrop Brightness](/filter-backdrop-brightness/), [Backdrop Contrast](/filter-backdrop-contrast/), and [Backdrop Saturate](/filter-backdrop-saturate/).

{{ console('html',
'<div class="width-48 height-48" style="background-image:url(...)">
    <div class="backdrop-filter blur-2 brightness-1 contrast-1 saturate-1 ... bg-tint-granite-1 bg-opacity-50 ... width-32 height-32">
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
      .blur-2,
      .brightness-1,
      .contrast-1,
      .saturate-1,
      .bg-tint-granite-1,
      .bg-opacity-50,
      .width-32,
      .height-32;
}
') }}



