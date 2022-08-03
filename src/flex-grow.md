---
id: flex-grow
title: Flex Grow
description: Utilities for controls how flex items grow.
topic: Flexbox
relate: flex, flex-gap, flex-direction, flex-shrink, flex-wrap, flex-basis, align-content, align-items, align-self, justify-content
variant: responsive
layout: default
---

> Flexbox

# Flex Grow

Utilities for controls how flex items grow.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for flexgrow in variants.flexgrow %}{% for item in flexgrow.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| flex-grow-0 | flex-grow: 0 |
| flex-grow-1 | flex-grow: 1 |
| flex-grow-2 | flex-grow: 2 |
| flex-grow-3 | flex-grow: 3 |
| flex-grow-4 | flex-grow: 4 |
| flex-grow-5 | flex-grow: 5 |
| flex-grow-6 | flex-grow: 6 |

---

## Usage

{% from "misc/console.njk" import console %}

<div class="padding-4 margin-y-4 margin-x-auto">
  <div class="max-width-xl-3 flex text-gray-4 (expand)width-20 (expand)height-20 (expand)bg-tint-granite-5">
    <div class="flex-grow-1 flex justify-center items-center">1</div>
    <div class="flex-grow-4 text-gray-1 bg-tint-granite-5 flex justify-center items-center">2</div>
    <div class="flex-grow-1 flex justify-center items-center">3</div>
  </div>
</div>

{{ console('html',
'<div class="flex">
    <div class="flex-grow-1">
      ...
    </div>
    <div class="flex-grow-4">
      ...
    </div>
    <div class="flex-grow-1">
      ...
    </div>
  </div>
') }}

{{ console('html',
'.dummy-parent {
    @extend
      .flex;
}
.dummy-child {
    @extend
      .flex-grow-1;
}
.dummy-child-grow {
    @extend
      .flex-grow-P4;
}
') }}

