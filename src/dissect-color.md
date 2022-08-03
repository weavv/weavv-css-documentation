---
id: dissect-color
title: Dissect Color
description: Utilities for sets bottom border color on each child elements of its parent.
topic: Borders
relate: dissect, dissect-opacity
layout: default
---

> Borders

# Dissect Color

Utilities for sets bottom border color on each child elements of its parent.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for dissectcolor in variants.dissectcolor %}{% for item in dissectcolor.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> | |
|:--|:--|:-:|
| dissect-transparent | border-color: transparent | <div class="padding-x-2 padding-y-1 dissect-y-2 dissect-y dissect-transparent"><div>Text</div><div>Text</div></div> |
| dissect-current | border-color: currentColor | <div class="padding-x-2 padding-y-1 dissect-y-2 dissect-y dissect-current"><div>Text</div><div>Text</div></div> |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | |
|:--|:--|
| dissect-shade-`{palette}`-`{modifier}` | <div class="padding-2 border-l-8 text-xs font-thin depth-tight-1"><span class="padding-r-1">See:</span><a class="text-underline font-semibold text-shade-teal-1 (hover)text-tont-teal-1" href="/getting-started-palette/">Palette</a> page to find more about the color options (Shades, Tones, Tints), color manipulations (saturation, brightness, contrast), and transparency.</div> |
| dissect-tone-`{palette}`-`{modifier}` | |
| dissect-tint-`{palette}`-`{modifier}` | |

---

## Usage

{% from "misc/console.njk" import console %}

Set `dissect-x-{value}` and `dissect-y-{value}` borders with colors.

  <div class="padding-y-4">
    <div class="padding-x-4 padding-y-4 margin-x-auto max-width-sm bg-tint-granite-5">
      <div class="dissect-y-4 dissect-tint-lava-1 (expand)text-center text-shade-granite-5 (expand)width-full (expand)height-8 (expand)bg-tint-granite-5">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  </div>

{{ console('html',
'<div class="dissect-y-4 dissect-tint-lava-1">
    <div>...</div>
    <div>...</div>
    <div>...</div>
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .dissect-y-4,
      .dissect-tint-lava-1;
}
') }}


