---
id: position
title: Position
description: Utilities for sets an element's position.
topic: Layouts
relate: clear, render, display, float, object-fit, object-position, overflow, top/bottom/left/right, visibility, z-index
variant: responsive, hover
layout: default
---

> Layouts

# Position

Utilities for sets an element's position.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for position in variants.position %}{% for item in position.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| static | position: static |
| fixed | position: fixed |
| absolute | position: absolute |
| relative | position: relative |
| sticky | position: sticky |

---

## Usage

{% from "misc/console.njk" import console %}

{{ console('html',
'<div class="relative">
    ...
    <div class="absolute ... top-0 left-0">
      ...
    </div>
  </div>
') }}

{{ console('scss',
'.dummy-parent {
    @extend
      .relative;
}
.dummy-child {
    @extend
      .absolute,
      .top-0,
      .left-0;
}
') }}
