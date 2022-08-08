---
id: proportion-scale
title: Proportion Scale
description: Utilities for resizing width and height in the proportion of an element.
topic: Flexbox
relate: width, height
variant: responsive
layout: default
---

> Flexbox

# Flex Basis

Utilities for resizing width and height in the proportion of an element.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for proportionscale in variants.proportionscale %}{% for item in proportionscale.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| proportion-scale-2 | scale: 2 |
| proportion-scale-3 | scale: 3 |
| proportion-scale-4 | scale: 4 |
| proportion-scale-5 | scale: 5 |
| proportion-scale-6 | scale: 6 |
| proportion-scale-7 | scale: 7 |
| proportion-scale-8 | scale: 8 |
| proportion-scale-9 | scale: 9 |
| proportion-scale-10 | scale: 10 |

---

## Usage

{% from "misc/console.njk" import console %}

Proportion scale set to `2`, `3` and `4` for `width-4` and `height-4` utilities.

    <div class="padding-4 margin-y-4 margin-x-auto">
      <div class="max-width-xl-3 flex justify-center items-center">
        <div class="(expand)margin-r-8 (expand)bg-tint-granite-4 flex (expand)padding-4">
          <div class="width-24 height-24">
            Scale 2x
          </div>
          <div class="width-48 height-48 bg-tint-onyx-5">
            Scale 3x
          </div>
          <div class="width-64 height-64">
            Scale 4x
          </div>
        </div>
      </div>
    </div>

{{ console('html',
'<div class="proportion-scale-3 ... width-4 height-4">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .proportion-scale-3,
      .width-4,
      .height-4;
}
') }}

