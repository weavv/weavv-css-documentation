---
id: min-height
title: Min Height
description: Utilities for sets the miminum height of an element.
topic: Sizing
relate: width, min-width, max-width, height, max-height
variant: responsive
layout: default
---

> Sizing

# Min Height

Utilities for sets the miminum height of an element.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for minheight in variants.minheight %}{% for item in minheight.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| min-height-0 | min-height: 0 |
| min-height-full | min-height: 100% |
| min-height-screen | min-height: 100vh |

---

## Usage

{% from "misc/console.njk" import console %}

{{ console('html',
'<div class="min-height-full">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .min-height-full;
}
') }}



