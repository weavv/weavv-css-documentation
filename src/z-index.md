---
id: z-index
title: Z-Index
description: Utilities for sets the z order (stack order) of a positioned element.
topic: Layouts
relate: clear, render, display, float, object-fit, object-position, overflow, position, top/bottom/left/right, visibility
variant: hover, focus-visible, focus-within
layout: default
---

> Layouts

# Z-Index

Utilities for sets the z order (stack order) of a positioned element.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for zindex in variants.zindex %}{% for item in zindex.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| stack-auto | z-index: auto |
| stack-0 | z-index: 0 |
| stack-1 | z-index: 10 |
| stack-2 | z-index: 20 |
| stack-3 | z-index: 30 |
| stack-4 | z-index: 40 |
| stack-5 | z-index: 50 |

---

## Usage

{% from "misc/console.njk" import console %}

<div class="margin-y-2 margin-x-auto max-width-sm (expand)height-32 (expand)padding-x-2 (expand)padding-y-1">
  <div class="stack-1 text-white bg-tint-granite-2">
    stack-1
  </div>
  <div class="-margin-t-24 margin-l-8 stack-2 text-white bg-tint-granite-1">
    stack-2
  </div>
  <div class="-margin-t-24 margin-l-16 stack-3 text-white bg-tint-granite-2">
    stack-3
  </div>
  <div class="-margin-t-24 margin-l-24 stack-4 text-white bg-tint-granite-1">
    stack-4
  </div>
  <div class="-margin-t-24 margin-l-32 stack-5 text-white bg-tint-granite-2">
    stack-5
  </div>
</div>

{{ console('html',
'<div class="stack-1">
  ...
</div>
')}}

{{ console('scss',
'.dummy {
    @extend
      .stack-1;
}
')}}


