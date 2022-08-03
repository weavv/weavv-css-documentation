---
id: min-width
title: Min Width
description: Utilities for sets the minimum width of an element.
topic: Sizing
relate: width, max-width, height, min-height, max-height
variant: responsive
layout: default
---

> Sizing

# Min Width

Utilities for sets the minimum width of an element.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for minwidth in variants.minwidth %}{% for item in minwidth.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| min-width-0 | min-width: 0 |
| min-width-full | min-width: 100% |

---

## Usage

{% from "misc/console.njk" import console %}

{{ console('html',
'<div class="min-width-full">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .min-width-full;
}
') }}


