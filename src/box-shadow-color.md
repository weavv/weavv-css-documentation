---
id: box-shadow-color
title: Box Shadow Color
description: Utilities for sets the shadow color.
topic: Effects
variant: dark-mode, expand, focus-visible, focus-within
layout: default
---

> Effects

# Box Shadow Color

Utilities for sets the shadow color to an element.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for boxshadowcolor in variants.boxshadowcolor %}{% for item in boxshadowcolor.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | |
|:--|:--|
| shadow-md-shade-`{palette}`-`{modifier}` | <div class="padding-2 border-l-8 text-xs font-thin depth-tight-1"><span class="padding-r-1">See:</span><a class="text-underline font-semibold text-shade-teal-1 (hover)text-tont-teal-1" href="/getting-started-palette/">Palette</a> page to find more about the color options (Shades, Tones, Tints), color manipulations (saturation, brightness, contrast), and transparency.</div> |
| shadow-lg-shade-`{palette}`-`{modifier}` | |
| shadow-xl-shade-`{palette}`-`{modifier}` | |
| shadow-xl-shade-`{palette}`-`{modifier}` | |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | |
|:--|:--|
| shadow-md-tone-`{palette}`-`{modifier}` | <div class="padding-2 border-l-8 text-xs font-thin depth-tight-1"><span class="padding-r-1">See:</span><a class="text-underline font-semibold text-shade-teal-1 (hover)text-tont-teal-1" href="/getting-started-palette/">Palette</a> page to find more about the color options (Shades, Tones, Tints), color manipulations (saturation, brightness, contrast), and transparency.</div> |
| shadow-lg-tone-`{palette}`-`{modifier}` | |
| shadow-xl-tone-`{palette}`-`{modifier}` | |
| shadow-xl-tone-`{palette}`-`{modifier}` | |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | |
|:--|:--|
| shadow-md-tint-`{palette}`-`{modifier}` | <div class="padding-2 border-l-8 text-xs font-thin depth-tight-1"><span class="padding-r-1">See:</span><a class="text-underline font-semibold text-shade-teal-1 (hover)text-tont-teal-1" href="/getting-started-palette/">Palette</a> page to find more about the color options (Shades, Tones, Tints), color manipulations (saturation, brightness, contrast), and transparency.</div> |
| shadow-lg-tint-`{palette}`-`{modifier}` | |
| shadow-xl-tint-`{palette}`-`{modifier}` | |
| shadow-xl-tint-`{palette}`-`{modifier}` | |

---

## Usage

{% from "misc/console.njk" import console %}

<div class="padding-x-4 margin-y-2 margin-x-auto width-64">
  <div class="height-32 bg-white shadow-lg-shade-lava-1"></div>
</div>

{{ console('html',
'<div class="shadow-lg-shade-lava-1 ... bg-white ... width-32 height-32">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .shadow-lg-shade-lava-1,
      .bg-white,
      .width-32,
      .height-32;
}
') }}

 Set auto dark theme enabled to an element with added `(dark)` prefix.

{{ console('html',
'<!-- parent -->
  <div class="shadow-lg-shade-lava-1 ... (dark)shadow-lg-shade-amber-1 ... bg-white ... width-32 height-32">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .shadow-lg-shade-lava-1,
      .\(dark\)shadow-lg-shade-amber-1,
      .bg-white,
      .width-32,
      .height-32;
}
') }}

Use `(expand)` variant to apply box shadow color to all child elements.

<div class="margin-y-2 margin-x-auto flex justify-center items-center">
  <div class="inline-block">
    <div class="flex justify-center items-center (expand)margin-4 (expand)height-32 (expand)width-32 (expand)shadow-lg-shade-lava-1">
      <div class="bg-tint-granite-2"></div>
      <div class="bg-tint-granite-5"></div>
      <div class="bg-tint-granite-2"></div>
    </div>
  </div>
</div>

{{ console('html',
'<!-- parent -->
  <div class="(expand)shadow-lg-shade-lava-1">
    <!-- child -->
    <div> ... </div>
    <div> ... </div>
    <div> ... </div>
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .\(expand\)shadow-lg-shade-lava-1;
') }}

