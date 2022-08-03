---
id: font-weight
title: Font Weight
description: Utilities for sets the font weight.
topic: Typography
variant: responsive, hover, group-hover, focus
layout: default
---

> Typography

# Font Weight

Utilities for sets the font weight.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for fontweight in variants.fontweight %}{% for item in fontweight.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> | |
|:--|:--|:-:|
| font-hairline | font-weight: 100 | <div class="font-serif text-lg font-hairline">Text</div> |
| font-thin | font-weight: 200 | <div class="text-lg font-thin">Text</div> |
| font-light | font-weight: 300 | <div class="text-lg font-light">Text</div> |
| font-normal | font-weight: 400 | <div class="text-lg font-normal">Text</div> |
| font-medium | font-weight: 500 | <div class="text-lg font-medium">Text</div> |
| font-semibold | font-weight: 600 | <div class="text-lg font-semibold">Text</div> |
| font-bold | font-weight: 700 | <div class="text-lg font-bold">Text</div> |
| font-extrabold | font-weight: 800 | <div class="text-lg font-extrabold">Text</div> |
| font-black | font-weight: 900 | <div class="text-lg font-black">Text</div> |

---

## Usage

{% from "misc/console.njk" import console %}

Set font-weight to an element.

{{ console('html',
'<div class="font-light">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .font-light;
}
') }}

Set font-weight with `Google Fonts`. (See [Font Family](/font-family/#google-fonts)).

{{ console('html',
'<div class="font-roboto font-light">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .font-roboto,
      .font-light;
}
') }}



