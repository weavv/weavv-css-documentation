---
id: border-color
title: Border Color
description: Utilities for sets border color.
topic: Borders
relate: border-radius, border-style, border-width, curve-object
variant: dark-mode, hover, focus-visible, focus-within
layout: default
---

> Borders

# Border Color

Utilities for sets border color.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for bordercolor in variants.bordercolor %}{% for item in bordercolor.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |  |
|:--|:--|:-:|
| border-transparent | border-color: transparent | <div class="width-16 height-8 curve-border border-2 border-transparent"></div> |
| border-current | border-color: currentColor | <div class="width-16 height-8 curve-border border-2 border-current"></div> |
| border-white | border-color: #fff | <div class="width-16 height-8 curve-border border-2 border-white shadow"></div> |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | |
|:--|:--|
| border-shade-`{palette}`-`{modifier}` | <div class="padding-2 border-l-8 text-xs font-thin depth-tight-1"><span class="padding-r-1">See:</span><a class="text-underline font-semibold text-shade-teal-1 (hover)text-tont-teal-1" href="/getting-started-palette/">Palette</a> page to find more about the color options (Shades, Tones, Tints), color manipulations (saturation, brightness, contrast), and transparency.</div> |
| border-tone-`{palette}`-`{modifier}` | |
| border-tint-`{palette}`-`{modifier}` | |

---

## Usage

{% from "misc/console.njk" import console %}

<div class="padding-x-4 margin-y-4 margin-x-auto width-56">
  <div class="padding-4 bg-tint-granite-5 border-8 border-shade-amber-1">
    <div class="width-full height-24 bg-shade-granite-1"></div>
  </div>
</div>

{{ console('html',
'<div class="border-8 ... border-shade-amber-1">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .border-8,
      .border-shade-amber-1;
}
') }}

 Set auto dark theme enabled to an element with added `(dark)` prefix.

{{ console('html',
'<div class="border-8 ... border-shade-lava-1 ... (dark)border-8 (dark)border-tint-granite-5">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .border-8,
      .border-shade-lava-1,
      .\(dark\)border-8,
      .\(dark\)border-tint-granite-5;
}
') }}

