---
id: placeholder-color
title: Placeholder Color
description: Utilities for sets the placeholder color using the ::placeholder pseudo element.
topic: Typography
variant: dark-mode, focus
layout: default
---

> Typography

# Placeholder Color

Utilities for sets the placeholder color using the ::placeholder pseudo element.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for placeholdercolor in variants.placeholdercolor %}{% for item in placeholdercolor.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |  |
|:--|:--|:-:|
| placeholder-transparent | color: transparent | <div class="border-2 border-gray-4 curve-border padding-x-2 text-lg text-transparent font-semibold">Text</div> |
| placeholder-white | color: #fff | <div class="border-2 border-gray-4 curve-border padding-x-2 text-lg text-white font-semibold">Text</div> |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | |
|:--|:--|
| placeholder-shade-`{palette}`-`{modifier}` | <div class="padding-2 border-l-8 text-xs font-thin depth-tight-1"><span class="padding-r-1">See:</span><a class="text-underline font-semibold text-shade-teal-1 (hover)text-tont-teal-1" href="/getting-started-palette/">Palette</a> page to find more about the color options (Shades, Tones, Tints), color manipulations (saturation, brightness, contrast), and transparency.</div> |
| placeholder-tone-`{palette}`-`{modifier}` | |
| placeholder-tint-`{palette}`-`{modifier}` | |

---

## Usage

{% from "misc/console.njk" import console %}

{{ console('html',
'<input class="placeholder-tint-lava-1 ..." placeholder="...">
') }}

{{ console('scss',
'input {
    @extend
      .placeholder-tint-lava-1;
}
') }}

Set auto dark theme enabled to an element with added `(dark)` prefix.

{{ console('html',
'<input class="placeholder-tint-lava-1 ... (dark)placeholder-tint-lava-5" placeholder="...">
') }}

{{ console('scss',
'input {
    @extend
      .placeholder-tint-lava-1,
      .\\(dark\\)placeholder-tint-lava-5;
}
') }}

