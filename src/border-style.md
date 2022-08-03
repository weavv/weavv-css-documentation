---
id: border-style
title: Border Style
description: Utilities for sets border style.
topic: Borders
relate: border-color, border-radius, border-width, curve-object
variant: focus
layout: default
---

> Borders

# Border Style

Utilities for sets border style.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for borderstyle in variants.borderstyle %}{% for item in borderstyle.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> | |
|:--|:--|:-:|
| border-solid | border-style: solid | <div class="width-16 height-8 curve-border bg-gray-3 border-2 border-solid"></div> |
| border-dashed | border-style: dashed | <div class="width-16 height-8 curve-border bg-gray-3 border-2 border-dashed"></div> |
| border-dotted | border-style: dotted | <div class="width-16 height-8 curve-border bg-gray-3 border-2 border-dotted"></div> |
| border-double | border-style: double | <div class="width-16 height-8 curve-border bg-gray-3 border-2 border-double"></div> |
| border-none | border-style: none | <div class="width-16 height-8 curve-border bg-gray-3 border-2 border-none"></div> |

---

## Usage

{% from "misc/console.njk" import console %}

<div class="padding-x-4 margin-y-4 margin-x-auto width-56">
  <div class="padding-4 bg-tint-granite-3 border-8 border-dashed">
    <div class="width-full height-24 bg-tint-granite-5"></div>
  </div>
</div>

{{ console('html',
'<div class="border-8 border-dashed">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .border-8,
      .border-dashed;
}
') }}

