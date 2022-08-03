---
id: accent-color
title: Accent Color
description: Utilities for re-tinting the accented color of form controls including checkbox, radio button and, range.
topic: Interactivity
variant: hover
layout: default
---

> Interactivity

# Accent Color

Utilities for re-tinting the accented color of form controls including checkbox, radio button and, range.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for column in variants.column %}{% for item in column.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">CSS</span> | |
|:--|:--|
| accent-shade-`{palettes}` | <div class="padding-2 border-l-8 text-xs font-thin depth-tight-1"><span class="padding-r-1">See:</span><a class="text-underline font-semibold text-shade-teal-1 (hover)text-tont-teal-1" href="/getting-started-palette/">Palette</a> page to find more about the color options (Shades, Tones, Tints), color manipulations (saturation, brightness, contrast), and transparency.</div> |
| accent-tone-`{palettes}` | |
| accent-tint-`{palettes}` | |

---

## Usage

{% from "misc/console.njk" import console %}

Override the `checkboxes` and `radio-buttons` browser default style.

<div class="margin-auto flex flex-gap-6 flex-center">
  <div class="flex flex-column flex-center">
    <input class="accent-tint-teal-1 ... width-24 height-24" type="checkbox">
    <div class="padding-t-4">
      Checkbox
    </div>
  </div>
  <div class="flex flex-column flex-center">
    <input class="accent-tint-teal-1 ... width-24 height-24" type="radio">
    <div class="padding-t-4">
      Radio
    </div>
  </div>
</div>

{{ console('html',
'<input class="accent-tint-teal-1 ... width-24 height-24" type="checkbox">
  <input class="accent-tint-teal-1 ... width-24 height-24" type="radio">
') }}

{{ console('scss',
'.dummy {
    @extend
      .accent-tint-teal-1,
      .width-24,
      .height-24;
}
') }}
