---
id: max-width
title: Max Width
description: Utilities for sets the maximum width of an element.
topic: Sizing
relate: width, min-width, height, min-height, max-height
variant: responsive
layout: default
---

> Sizing

# Max Width

Utilities for sets the maximum width of an element.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for maxwidth in variants.maxwidth %}{% for item in maxwidth.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| max-width-none | max-width: none |
| max-width-full | max-width: 100% |
| max-width-xxxs | max-width: 12rem |
| max-width-xxs | max-width: 16rem |
| max-width-xs | max-width: 20rem |
| max-width-sm | max-width: 24rem |
| max-width-md | max-width: 28rem |
| max-width-lg | max-width: 32rem |
| max-width-xl-1 | max-width: 36rem |
| max-width-xl-2 | max-width: 42rem |
| max-width-xl-3 | max-width: 48rem |
| max-width-xl-4 | max-width: 56rem |
| max-width-xl-5 | 	max-width: 64rem |
| max-width-xl-6 | max-width: 72rem |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| max-width-screen-sm | max-width: 640px |
| max-width-screen-md | max-width: 768px |
| max-width-screen-lg | max-width: 1024px |
| max-width-screen-1k | max-width: 1280px |
| max-width-screen-2k | max-width: 1920px |
| max-width-screen-4k | max-width: 3840px |
| max-width-screen-8k | max-width: 7680px |

---

## Usage

{% from "misc/console.njk" import console %}

{{ console('html',
'<div class="max-width-lg">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .max-width-lg;
}
') }}

