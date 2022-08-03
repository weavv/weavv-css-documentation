---
id: fluid-margin
title: Fluid Margin
description: Utilities for sets min and max margins for screen size without breakpoints.
topic: Effects
relate: fluid-font-size, fluid-padding, margin, padding
layout: default
---

> Effects

# Fluid Margin

Utilities for sets min and max margins for screen size without breakpoints.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for fluidmargin in variants.fluidmargin %}{% for item in fluidmargin.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| fluid m-min-`{value}` m-max-`{value}` | @media screen and (min-width: 20rem) { .fluid.m-min-{modifier}.m-max-{modifier} { margin: calc({min} + 0 * ((100vw - 20rem) / 30)) } } @media screen and (min-width: 50rem) {  .fluid.m-min-{modifier}.m-max-{modifier} { margin: {max} } } |

| <span class="padding-x-3 padding-y-1 text-white (dark)text-charcoal-1 bg-gray-7 (dark)bg-gray-6 font-semibold curve-border-full">value</span> | <span class="padding-x-3 padding-y-1 text-white (dark)text-charcoal-1 bg-gray-7 (dark)bg-gray-6 font-semibold curve-border-full">modifier</span> | |
|:--|:--|:-:|
| 0 | 0 |
| 1 | 0.25rem |
| 2 | 0.5rem |
| 3 | 0.75rem |
| 4 | 1rem |
| 5 | 1.25rem |
| 6 | 1.5rem |
| 8 | 2rem |
| 10 | 2.5rem |
| 12 | 3rem |
| 16 | 4rem |
| 20 | 5rem |
| 24 | 6rem |
| 32 | 8rem |
| 40 | 10rem |
| 48 | 12rem |
| 56 | 14rem |
| 64 | 16rem |
| 72  | 18rem |
| 80  | 20rem |
| 88  | 22rem |
| 96  | 24rem |
| 104  | 26rem |
| 112  | 28rem |

---

## Usage

{% from "misc/console.njk" import console %}

Set margin spacing adaptively to the width of the screen size. When the smaller screen size, the margin is `margin-10` at min. Meanwhile, when the screen size is getting bigger, the margin is `margin-4` at max.

{{ console('html',
'<div class="fluid margin-min-10 margin-max-4">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .fluid,
      .margin-min-10,
      .margin-max-4;
}
') }}

Mix with other fluid utilities, such as [Fluid Font Size](/fluid-font-size/), [Fluid Padding](/fluid-padding/).

{{ console('html',
'<div class="fluid margin-min-4 margin-max-2 padding-min-8 padding-max-4 text-min-lg text-max-md">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .fluid,
      .margin-min-4,
      .margin-max-2,
      .padding-min-8,
      .padding-max-4,
      .text-min-lg,
      .text-max-md;
}
') }}

