---
id: backdrop-contrast-filter
title: Backdrop Contrast Filter
description: Utilities for sets filter backdrop contrast effect to an element.
topic: Filters
relate: filter-backdrop-blur, filter-backdrop-brightness, filter-backdrop-saturate
layout: default
---

> Filters

# Backdrop Contrast Filter

Utilities for sets filter backdrop contrast effect to an element.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for filterbackdropcontrast in variants.filterbackdropcontrast %}{% for item in filterbackdropcontrast.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| backdrop-filter `{contrast}` | backdrop-filter: brightness(var(--brightness)) contrast(var(--contrast)) saturate(var(--saturate)) blur(var(--blur)) |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| contrast-0 | --backdrop-contrast: 0 |
| contrast-1 | --backdrop-contrast: 1 |
| contrast-2 | --backdrop-contrast: 1.10 |
| contrast-3 | --backdrop-contrast: 1.20 |
| contrast-4 | --backdrop-contrast: 1.30 |
| contrast-5 | --backdrop-contrast: 1.40 |
| contrast-6 | --backdrop-contrast: 1.50 |
| contrast-7 | --backdrop-contrast: 1.60 |
| contrast-8 | --backdrop-contrast: 1.70 |
| contrast-9 | --backdrop-contrast: 1.80 |
| contrast-10 | --backdrop-contrast: 1.90 |

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
        <div class="backdrop-filter contrast-10 width-48 height-32 bg-tint-granite-1 bg-opacity-50"></div>
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
    <div class="backdrop-filter contrast-10 ... bg-tint-granite-1 bg-opacity-50 ... width-32 height-32">
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
      .contrast-10,
      .bg-tint-granite-5,
      .bg-opacity-50,
      .width-32,
      .height-32;
}
') }}

Mix with other filters, such as [Backdrop Brightness](/filter-backdrop-brightness/), [Backdrop Saturate](/filter-backdrop-saturate/), and [Backdrop Blur](/filter-backdrop-blur).

{{ console('html',
'<div class="width-48 height-48" style="background-image:url(...)">
    <div class="backdrop-filter contrast-10 saturate-1 brightness-1 blur-2 ... bg-tint-granite-1 bg-opacity-50 ... width-32 height-32">
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
      .contrast-10,
      .brightness-1,
      .saturate-1,
      .blur-2
      .bg-tint-granite-5,
      .bg-opacity-50,
      .width-32,
      .height-32;
}
') }}

