---
id: flex-direction
title: Flex Direction
description: Utilities for sets direction of flex items.
topic: Flexbox
relate: flex, flex-gap, flex-grow, flex-shrink, flex-wrap, flex-basis, align-content, align-items, align-self, justify-content
variant: responsive, portrait, landscape
layout: default
---

> Flexbox

# Flex Direction

Utilities for sets direction of flex items.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for flexdirection in variants.flexdirection %}{% for item in flexdirection.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| flex-row | flex-direction: row |
| flex-row-reverse | flex-direction: row-reverse |
| flex-column | flex-direction: column |
| flex-column-reverse | flex-direction: column-reverse |

---

## Usage

{% from "misc/console.njk" import console %}

Set child elements in `flex-column` direction.

<div class="padding-4 margin-y-4 margin-x-auto">
  <div class="flex justify-center items-center">
    <div class="(expand)margin-2 (expand)width-20 (expand)height-20 (expand)bg-tint-granite-5 (expand)curve-border-lg (expand)text-center text-xl-1 text-shade-granite-1 flex flex-column">
      <div class="border-2 border-tint-granite-3 border-dashed flex justify-center items-center">1</div>
      <div class="border-2 border-tint-granite-3 border-dashed flex justify-center items-center">2</div>
      <div class="border-2 border-tint-granite-3 border-dashed bg-tint-granite-5 flex justify-center items-center">3</div>
    </div>
  </div>
</div>

{{ console('html',
'<!-- parent -->
  <div class="flex ... flex-column">
    <!-- child -->
    <div>...</div>
    <div>...</div>
    <div>...</div>
  </div>
') }}

{{ console('scss',
'.dummy-parent {
    .flex,
    .flex-column;
}
') }}

Set child elements in `flex-row` direction.

<div class="padding-4 margin-y-4 margin-x-auto">
  <div class="flex justify-center items-center">
    <div class="(expand)margin-2 (expand)width-20 (expand)height-20 (expand)bg-tint-granite-5 (expand)curve-border-lg (expand)text-center text-xl-1 text-shade-granite-1 flex flex-row">
      <div class="border-2 border-tint-granite-3 border-dashed flex justify-center items-center">1</div>
      <div class="border-2 border-tint-granite-3 border-dashed flex justify-center items-center">2</div>
      <div class="border-2 border-tint-granite-3 border-dashed bg-tint-granite-5 flex justify-center items-center">3</div>
    </div>
  </div>
</div>

{{ console('scss',
'.dummy-parent {
    .flex,
    .flex-column;
}
') }}

Set child elements in `flex-row-reverse` direction.

<div class="padding-4 margin-y-4 margin-x-auto">
  <div class="flex justify-center items-center">
    <div class="(expand)margin-2 (expand)width-20 (expand)height-20 (expand)bg-tint-granite-5 (expand)curve-border-lg (expand)text-center text-xl-1 text-shade-granite-1 flex flex-row-reverse">
      <div class="border-2 border-tint-granite-3 border-dashed flex justify-center items-center">1</div>
      <div class="border-2 border-tint-granite-3 border-dashed flex justify-center items-center">2</div>
      <div class="border-2 border-tint-granite-3 border-dashed bg-tint-granite-5 flex justify-center items-center">3</div>
    </div>
  </div>
</div>

{{ console('scss',
'.dummy-parent {
    .flex,
    .flex-column;
}
') }}

Set child elements in `flex-column-reverse` direction.

<div class="padding-4 margin-y-4 margin-x-auto">
  <div class="flex justify-center items-center">
    <div class="(expand)margin-2 (expand)width-20 (expand)height-20 (expand)bg-tint-granite-5 (expand)curve-border-lg (expand)text-center text-xl-1 text-shade-granite-1 flex flex-column-reverse">
      <div class="border-2 border-tint-granite-3 border-dashed flex justify-center items-center">1</div>
      <div class="border-2 border-tint-granite-3 border-dashed flex justify-center items-center">2</div>
      <div class="border-2 border-tint-granite-3 border-dashed bg-tint-granite-5 flex justify-center items-center">3</div>
    </div>
  </div>
</div>

{{ console('scss',
'.dummy-parent {
    .flex,
    .flex-column;
}
') }}

