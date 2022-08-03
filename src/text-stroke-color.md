---
id: text-stroke-color
title: Text Stroke Color
description: Utilities for set text with outer stroke color.
topic: Typography
relate: text-stroke-width
variant: responsive
layout: default
---

> Typography

# Text Stroke

Utilities for set text with outer stroke color.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for textstrokecolor in variants.textstrokecolor %}{% for item in textstrokecolor.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | |
|:--|:--|
| text-stroke-shade-`{palette}`-`{modifier}` | <div class="padding-2 border-l-8 text-xs font-thin depth-tight-1"><span class="padding-r-1">See:</span><a class="text-underline font-semibold text-shade-teal-1 (hover)text-tont-teal-1" href="/getting-started-palette/">Palette</a> page to find more about the color options (Shades, Tones, Tints), color manipulations (saturation, brightness, contrast), and transparency.</div> |
| text-stroke-tone-`{palette}`-`{modifier}` | |
| text-stroke-tint-`{palette}`-`{modifier}` | |

---

## Usage

{% from "misc/console.njk" import console %}

<div class="padding-x-4 margin-y-2 margin-x-auto width-full">
  <div class="text-white text-center text-xl-8 text-stroke-4 text-stroke-tint-teal-5">
    TEXT
  </div>
</div>

{{ console('html',
'<div class="text-white text-xl-8 text-stroke-4 ... text-stroke-tint-teal-5">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .text-white,
      .text-xl-8,
      .text-stroke-4,
      .text-stroke-tint-teal-5;
}
') }}



