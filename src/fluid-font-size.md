---
id: fluid-font-size
title: Fluid Font Size
description: Utilities for sets min and max font sizes for screen size without breakpoints.
topic: Effects
relate: fluid-margin, fluid-padding, font-size
layout: default
---

> Effects

# Fluid Font Size

Utilities for sets min and max font sizes for screen size without breakpoints.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for fluidfontsize in variants.fluidfontsize %}{% for item in fluidfontsize.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| fluid text-min-`{value}` text-max-`{value}` | @media screen and (min-width: 20rem) { .fluid.text-min-{modifier}.text-max-{modifier} { font-size: calc({min} + 0 * ((100vw - 20rem) / 30)) } } @media screen and (min-width: 50rem) {  .fluid.text-min-{modifier}.text-max-{modifier} { font-size: {max} } } |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> | |
|:--|:--|:-:|
| xs | font-size: .75rem | <span class="text-xs">Text</span> |
| sm | font-size: .875rem | <span class="text-sm">Text</span> |
| md | font-size: 1rem | <span class="text-md">Text</span> |
| lg | font-size: 1.125rem | <span class="text-lg">Text</span> |
| xl-1 | font-size: 1.25rem | <span class="text-xl-1">Text</span> |
| xl-2 | font-size: 1.5rem | <span class="text-xl-2">Text</span> |
| xl-3 | font-size: 1.875rem | <span class="text-xl-3">Text</span> |
| xl-4 | font-size: 2.25rem | <span class="text-xl-4">Text</span> |
| xl-5 | font-size: 3rem | <span class="text-xl-5">Text</span> |
| xl-6 | font-size: 4rem | <span class="text-xl-6">Text</span> |
| xl-7 | font-size: 5rem | <span class="text-xl-7">Text</span> |
| xl-8 | font-size: 6rem | <span class="text-xl-8">Text</span> |

---

## Usage

{% from "misc/console.njk" import console %}

Set font size adaptively to the width of the screen size. When the smaller screen size, the text size is `text-lg` at min. Meanwhile, when the screen size is getting bigger, the text size is `text-md` at max.

{{ console('html',
'<div class="fluid text-min-lg text-max-md">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .fluid,
      .text-min-lg,
      .text-max-md;
}
') }}

Mix with other fluid utilities, such as [Fluid Margin](/fluid-margin/), [Fluid Padding](/fluid-padding/).

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
