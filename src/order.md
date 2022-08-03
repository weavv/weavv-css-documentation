---
id: order
title: Order
description: Utilities for controls how flex items are ordered.
topic: Flexbox
variant: responsive
layout: default
---

> Flexbox

# Order

Utilities for controls how flex items are ordered.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for order in variants.order %}{% for item in order.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| order-first | order: -9999 |
| order-last | order: 9999 |
| order-none | order: 0 |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| order-1 | order: 1 |
| order-2 | order: 2 |
| order-3 | order: 3 |
| order-4 | order: 4 |
| order-5 | order: 5 |
| order-6 | order: 6 |
| order-7 | order: 7 |
| order-8 | order: 8 |
| order-9 | order: 9 |
| order-10 | order: 10 |
| order-11 | order: 11 |
| order-12 | order: 12 |

---

## Usage

{% from "misc/console.njk" import console %}

<div class="padding-4 margin-y-4 margin-x-auto">
  <div class="flex flex-column justify-center items-center">
    <div class="(expand)margin-2 (expand)width-16 (expand)height-16 (expand)bg-tint-granite-5 (expand)curve-border-lg (expand)text-center text-xl-1 text-shade-granite-5 flex flex-row">
      <div class="flex justify-center items-center">1</div>
      <div class="flex justify-center items-center">2</div>
      <div class="flex justify-center items-center">3</div>
      <div class="flex justify-center items-center">4</div>
      <div class="flex justify-center items-center">5</div>
    </div>
    <div class="padding-y-4 text-sm text-center">
      Original
    </div>
  </div>
  <div class="flex justify-center items-center">
    <div class="text-xl-1 flex flex-row flex-gap-4">
      <div class="order-5">
        <div class="text-shade-granite-1 flex justify-center items-center bg-tint-granite-5 width-16 height-16 curve-border-lg">1</div>
        <div class="padding-t-2 text-sm text-center">
          order-5
        </div>
      </div>
      <div class="order-1">
        <div class="text-shade-granite-1 flex justify-center items-center bg-tint-granite-5 width-16 height-16 curve-border-lg">2</div>
        <div class="padding-t-2 text-sm text-center">
          order-1
        </div>
      </div>
      <div class="order-4">
        <div class="text-shade-granite-1 flex justify-center items-center bg-tint-granite-5 width-16 height-16 curve-border-lg">3</div>
        <div class="padding-t-2 text-sm text-center">
          order-4
        </div>
      </div>
      <div class="order-3">
        <div class="text-shade-granite-1 flex justify-center items-center bg-tint-granite-5 width-16 height-16 curve-border-lg">4</div>
        <div class="padding-t-2 text-sm text-center">
          order-3
        </div>
      </div>
      <div class="order-2">
        <div class="text-shade-granite-1 flex justify-center items-center bg-tint-granite-5 width-16 height-16 curve-border-lg">5</div>
        <div class="padding-t-2 text-sm text-center">
          order-2
        </div>
      </div>
    </div>
  </div>
  <div class="padding-t-8 flex justify-center items-center">
    <div class="text-xl-1 flex flex-row flex-gap-4">
      <div class="order-last">
        <div class="text-shade-granite-1 flex justify-center items-center bg-tint-granite-5 width-16 height-16 curve-border-lg">1</div>
        <div class="padding-t-2 text-sm text-center">
          order-last
        </div>
      </div>
      <div class="order-1">
        <div class="text-shade-granite-1 flex justify-center items-center bg-tint-granite-5 width-16 height-16 curve-border-lg">2</div>
      </div>
      <div class="order-4">
        <div class="text-shade-granite-1 flex justify-center items-center bg-tint-granite-5 width-16 height-16 curve-border-lg">3</div>
      </div>
      <div class="order-first">
        <div class="text-shade-granite-1 flex justify-center items-center bg-tint-granite-5 width-16 height-16 curve-border-lg">4</div>
        <div class="padding-t-2 text-sm text-center">
          order-first
        </div>
      </div>
      <div class="order-2">
        <div class="text-shade-granite-1 flex justify-center items-center bg-tint-granite-5 width-16 height-16 curve-border-lg">5</div>
      </div>
    </div>
  </div>
</div>

{{ console('html',
'<div class="flex">
    <div class="order-4">
      ...
    </div>
    <div class="order-1">
      ...
    </div>
  </div>
') }}

{{ console('scss',
'.dummy-parent {
    @extend
      .flex;
}
.dummy-child-4 {
    @extend
      .order-4;
}
.dummy-child-1 {
    @extend
      .order-1;
}
') }}



