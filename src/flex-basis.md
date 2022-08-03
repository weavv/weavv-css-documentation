---
id: flex-basis
title: Flex Basis
description: Utilities to specify the initial size of the flex element before any free space is distributed based on flex factors.
topic: Flexbox
relate: flex, flex-gap, flex-grow, flex-shrink, flex-wrap, align-content, align-items, align-self, justify-content
variant: responsive
layout: default
---

> Flexbox

# Flex Basis

Utilities to specify the initial size of the flex element before any free space is distributed based on flex factors.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for flexbasis in variants.flexbasis %}{% for item in flexbasis.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| flex-basis-fill | flex-basis: fill |
| flex-basis-content | flex-basis: content |
| flex-basis-max-content | flex-basis: max-content |
| flex-basis-min-content | flex-basis: min-content |
| flex-basis-fit-content | flex-basis: fit-content |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| flex-basis-1 | flex-basis: 0.25em |
| flex-basis-2 | flex-basis: 0.5em |
| flex-basis-3 | flex-basis: 0.75em |
| flex-basis-4 | flex-basis: 1em |
| flex-basis-5 | flex-basis: 1.25em |
| flex-basis-6 | flex-basis: 1.5em |
| flex-basis-8 | flex-basis: 2em |
| flex-basis-10 | flex-basis: 2.5em |
| flex-basis-12 | flex-basis: 3em |
| flex-basis-16 | flex-basis: 4em |
| flex-basis-20 | flex-basis: 5em |
| flex-basis-24 | flex-basis: 6em |
| flex-basis-32 | flex-basis: 8em |
| flex-basis-40 | flex-basis: 10em |
| flex-basis-48 | flex-basis: 12em |
| flex-basis-56 | flex-basis: 14em |
| flex-basis-64 | flex-basis: 16em |
| flex-basis-72  | flex-basis: 18em |
| flex-basis-80  | flex-basis: 20em |
| flex-basis-88  | flex-basis: 22em |
| flex-basis-96  | flex-basis: 24em |
| flex-basis-104  | flex-basis: 26em |
| flex-basis-112  | flex-basis: 28em |

---

## Usage

{% from "misc/console.njk" import console %}

<div class="padding-4 margin-y-4 margin-x-auto">
  <div class="max-width-xl-2 flex justify-center items-center">
    <div class="(expand)padding-2 (expand)bg-tint-amber-5 (expand)text-center text-xl-1 text-shade-granite-5 flex">
      <div class="flex flex-basis-auto">flex-basis: auto</div>
      <div class="flex flex-basis-fit-content bg-tint-granite-1">flex-basis: fit-content</div>
      <div class="flex flex-basis-max-content">flex-basis: max-content</div>
      <div class="flex flex-basis-min-content bg-tint-granite-1">flex-basis: min-content</div>
      <div class="flex flex-basis-content">flex-basis: content</div>
    </div>
  </div>
</div>

{{ console('html',
'<div class="flex flex-basis-auto">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .flex,
      .flex-basis-auto;
}
') }}

<div class="padding-4 margin-y-4 margin-x-auto">
  <div class="max-width-xl-2 flex justify-center items-center">
    <div class="(expand)padding-2 (expand)text-center (expand)bg-tint-amber-5 text-xl-1 text-tint-granite-5 flex">
      <div class="bg-tint-granite-3 flex flex-basis-4">flex-basis: 4em</div>
      <div class="bg-tint-granite-1 flex flex-basis-32">flex-basis: 32em</div>
      <div class="bg-tint-granite-3 flex flex-64">flex-basis: 64em</div>
    </div>
  </div>
</div>

{{ console('html',
'<div class="flex flex-basis-32">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .flex,
      .flex-basis-32;
}
') }}

