---
id: text-transform
title: Text Transform
description: Utilities for sets the capitalization of text.
topic: Typography
variant: responsive
layout: default
---

> Typography

# Text Transform

Utilities for sets the capitalization of text.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for texttransform in variants.texttransform %}{% for item in texttransform.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> | |
|:--|:--|:-:|
| text-normal-case | text-transform: none | <div class="text-lg text-normal-case">text</div> |
| text-uppercase | text-transform: uppercase | <div class="text-lg text-uppercase">text</div> |
| text-lowercase | text-transform: lowercase | <div class="text-lg text-lowercase">TEXT</div> |
| text-capitalize | text-transform: capitalize | <div class="text-lg text-capitalize">text</div> |

---

## Usage

{% from "misc/console.njk" import console %}

{{ console('html',
'<div class="text-uppercase">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .text-uppercase;
}
') }}

