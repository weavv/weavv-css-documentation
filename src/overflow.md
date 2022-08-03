---
id: overflow
title: Overflow
description: Utilities for sets how to handle content that's too big for it's container.
topic: Layouts
relate: clear, render, display, float, object-fit, object-position, position, top/bottom/left/right, visibility, z-index
variant: responsive, hover
layout: default
---

> Layouts

# Overflow

Utilities for sets how to handle content that's too big for it's container.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for overflow in variants.overflow %}{% for item in overflow.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| overflow-auto | overflow: auto |
| overflow-hidden | overflow: hidden |
| overflow-visible | overflow: visible |
| overflow-scroll | overflow: scroll |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| overflow-x-auto | overflow-x: auto |
| overflow-y-auto | overflow-y: auto |
| overflow-x-hidden | overflow-x: hidden |
| overflow-y-hidden | overflow-y: hidden |
| overflow-x-visible | overflow-x: visible |
| overflow-y-visible | overflow-y: visible |
| overflow-x-scroll | overflow-x: scroll |
| overflow-y-scroll | overflow-y: scroll |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| scrolling-touch | -webkit-overflow-scrolling: touch |
| scrolling-auto | -webkit-overflow-scrolling: auto |

## Usage

{% from "misc/console.njk" import console %}

<div class="padding-x-4 margin-y-16 margin-x-auto">
  <div class="width-64 height-64">
    <img class="width-32 height-32 ... bg-tint-granide-5 overflow-hidden" src="https://picsum.photos/500?=1">
  </div>
</div>

{{ console('html',
'<div class="width-64 height-64">
    <img class="width-32 height-32 ... bg-tint-granite-5 overflow-hidden" src="...">
  </div>
') }}

{{ console('scss',
'.dummy-parent {
    @extend
      .width-64,
      .height-64;
}
.dummy-image {
    @extend
      .width-32,
      .height-32,
      .bg-tint-granite-5,
      .overflow-hidden;
}
') }}

Use `(expand)` variant to apply overflow to all child elements.

{{ console('html',
'<div class="(expand)overflow-hidden">
    <div>...</div>
    <div>...</div>
    <div>...</div>
  </div>
') }}

{{ console('scss',
'.dummy-parent {
    @extend
      .\(expand\)overflow-hidden;
}
') }}

