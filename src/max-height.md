---
id: max-height
title: Max Height
description: Utilities for sets the maximum height of an element.
topic: Sizing
relate: width, min-width, max-width, height, min-height
variant: responsive
layout: default
---

> Sizing

# Max Height

Utilities for sets the maximum height of an element.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for maxheight in variants.maxheight %}{% for item in maxheight.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| max-height-full | max-height: 100% |
| max-height-screen | max-height: 100vh |

---

## Usage

{% from "misc/console.njk" import console %}

{{ console('html',
'<div class="max-height-full">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .max-height-full;
}
') }}


