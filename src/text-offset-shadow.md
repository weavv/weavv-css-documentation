---
id: text-offset-shadow
title: Text Offset Shadow
description: Utilities for sets text shadow with offset x or y coordinates, offset blur and offset color to an element.
relate: depth-text-shadow, neon-text-shadow
topic: Effects
layout: default
---

> Effects

# Text Offset Shadow

Utilities for sets text shadow with offset x or y coordinates, offset blur and offset color to an element.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for textoffsetshadow in variants.textoffsetshadow %}{% for item in textoffsetshadow.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| text-offset-shadow `{offset-x}` `{offset-y}` `{offset-blur}` `{offset-color}`  | text-shadow: var(`--text-offset-shadow-x`) var(`--text-offset-shadow-y`) var(`--text-offset-shadow-blur`) var(`--text-offset-shadow-color`); |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> | |
|:--|:--|:-:|
| offset-x-1 | --text-offset-shadow-x: 1px | <div class="padding-x-2 text-lg text-offset-shadow offset-x-1 offset-y-1 offset-blur-4 offset-charcoal-1 bg-white font-semibold">Text</div> |
| offset-x-2 | --text-offset-shadow-x: 2px | <div class="padding-x-2 text-lg text-offset-shadow offset-x-2 offset-y-1 offset-blur-4 offset-charcoal-1 bg-white font-semibold">Text</div> |
| offset-x-3 | --text-offset-shadow-x: 3px | <div class="padding-x-2 text-lg text-offset-shadow offset-x-3 offset-y-1 offset-blur-4 offset-charcoal-1 bg-white font-semibold">Text</div> |
| offset-x-4 | --text-offset-shadow-x: 4px | <div class="padding-x-2 text-lg text-offset-shadow offset-x-4 offset-y-1 offset-blur-4 offset-charcoal-1 bg-white font-semibold">Text</div> |
| offset-x-5 | --text-offset-shadow-x: 5px | <div class="padding-x-2 text-lg text-offset-shadow offset-x-5 offset-y-1 offset-blur-4 offset-charcoal-1 bg-white font-semibold">Text</div> |
| offset-x-6 | --text-offset-shadow-x: 6px | <div class="padding-x-2 text-lg text-offset-shadow offset-x-6 offset-y-1 offset-blur-4 offset-charcoal-1 bg-white font-semibold">Text</div> |
| offset-x-7 | --text-offset-shadow-x: 7px | <div class="padding-x-2 text-lg text-offset-shadow offset-x-7 offset-y-1 offset-blur-4 offset-charcoal-1 bg-white font-semibold">Text</div> |
| offset-x-8 | --text-offset-shadow-x: 8px | <div class="padding-x-2 text-lg text-offset-shadow offset-x-8 offset-y-1 offset-blur-4 offset-charcoal-1 bg-white font-semibold">Text</div> |
| offset-x-9 | --text-offset-shadow-x: 9px | <div class="padding-x-2 text-lg text-offset-shadow offset-x-9 offset-y-1 offset-blur-4 offset-charcoal-1 bg-white font-semibold">Text</div> |
| offset-x-10 | --text-offset-shadow-x: 10px | <div class="padding-x-2 text-lg text-offset-shadow offset-x-10 offset-y-1 offset-blur-4 offset-charcoal-1 bg-white font-semibold">Text</div> |
| offset-x-11 | --text-offset-shadow-x: 11px | <div class="padding-x-2 text-lg text-offset-shadow offset-x-11 offset-y-1 offset-blur-4 offset-charcoal-1 bg-white font-semibold">Text</div> |
| offset-x-12 | --text-offset-shadow-x: 12px | <div class="padding-x-2 text-lg text-offset-shadow offset-x-12 offset-y-1 offset-blur-4 offset-charcoal-1 bg-white font-semibold">Text</div> |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> | |
|:--|:--|:-:|
| offset-y-1 | --text-offset-shadow-y: 1px | <div class="padding-x-2 text-lg text-offset-shadow offset-x-1 offset-y-1 offset-blur-4 offset-charcoal-1 bg-white font-semibold">Text</div> |
| offset-y-2 | --text-offset-shadow-y: 2px | <div class="padding-x-2 text-lg text-offset-shadow offset-x-1 offset-y-2 offset-blur-4 offset-charcoal-1 bg-white font-semibold">Text</div> |
| offset-y-3 | --text-offset-shadow-y: 3px | <div class="padding-x-2 text-lg text-offset-shadow offset-x-1 offset-y-3 offset-blur-4 offset-charcoal-1 bg-white font-semibold">Text</div> |
| offset-y-4 | --text-offset-shadow-y: 4px | <div class="padding-x-2 text-lg text-offset-shadow offset-x-1 offset-y-4 offset-blur-4 offset-charcoal-1 bg-white font-semibold">Text</div> |
| offset-y-5 | --text-offset-shadow-y: 5px | <div class="padding-x-2 text-lg text-offset-shadow offset-x-1 offset-y-5 offset-blur-4 offset-charcoal-1 bg-white font-semibold">Text</div> |
| offset-y-6 | --text-offset-shadow-y: 6px | <div class="padding-x-2 text-lg text-offset-shadow offset-x-1 offset-y-6 offset-blur-4 offset-charcoal-1 bg-white font-semibold">Text</div> |
| offset-y-7 | --text-offset-shadow-y: 7px | <div class="padding-x-2 text-lg text-offset-shadow offset-x-1 offset-y-7 offset-blur-4 offset-charcoal-1 bg-white font-semibold">Text</div> |
| offset-y-8 | --text-offset-shadow-y: 8px | <div class="padding-x-2 text-lg text-offset-shadow offset-x-1 offset-y-8 offset-blur-4 offset-charcoal-1 bg-white font-semibold">Text</div> |
| offset-y-9 | --text-offset-shadow-y: 9px | <div class="padding-x-2 text-lg text-offset-shadow offset-x-1 offset-y-9 offset-blur-4 offset-charcoal-1 bg-white font-semibold">Text</div> |
| offset-y-10 | --text-offset-shadow-y: 10px | <div class="padding-x-2 text-lg text-offset-shadow offset-x-1 offset-y-10 offset-blur-4 offset-charcoal-1 bg-white font-semibold">Text</div> |
| offset-y-11 | --text-offset-shadow-y: 11px | <div class="padding-x-2 text-lg text-offset-shadow offset-x-1 offset-y-11 offset-blur-4 offset-charcoal-1 bg-white font-semibold">Text</div> |
| offset-y-12 | --text-offset-shadow-y: 12px | <div class="padding-x-2 text-lg text-offset-shadow offset-x-1 offset-y-12 offset-blur-4 offset-charcoal-1 bg-white font-semibold">Text</div> |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> | |
|:--|:--|:-:|
| offset-blur-0 | --text-offset-shadow-blur: 0px | <div class="padding-x-2 text-lg text-offset-shadow offset-x-1 offset-y-1 offset-blur-0 offset-charcoal-1 bg-white font-semibold">Text</div> |
| offset-blur-1 | --text-offset-shadow-blur: 1px | <div class="padding-x-2 text-lg text-offset-shadow offset-x-1 offset-y-1 offset-blur-1 offset-charcoal-1 bg-white font-semibold">Text</div> |
| offset-blur-2 | --text-offset-shadow-blur: 2px | <div class="padding-x-2 text-lg text-offset-shadow offset-x-1 offset-y-1 offset-blur-2 offset-charcoal-1 bg-white font-semibold">Text</div> |
| offset-blur-3 | --text-offset-shadow-blur: 3px | <div class="padding-x-2 text-lg text-offset-shadow offset-x-1 offset-y-1 offset-blur-3 offset-charcoal-1 bg-white font-semibold">Text</div> |
| offset-blur-4 | --text-offset-shadow-blur: 4px | <div class="padding-x-2 text-lg text-offset-shadow offset-x-1 offset-y-1 offset-blur-4 offset-charcoal-1 bg-white font-semibold">Text</div> |
| offset-blur-5 | --text-offset-shadow-blur: 5px | <div class="padding-x-2 text-lg text-offset-shadow offset-x-1 offset-y-1 offset-blur-5 offset-charcoal-1 bg-white font-semibold">Text</div> |
| offset-blur-6 | --text-offset-shadow-blur: 6px | <div class="padding-x-2 text-lg text-offset-shadow offset-x-1 offset-y-1 offset-blur-6 offset-charcoal-1 bg-white font-semibold">Text</div> |
| offset-blur-7 | --text-offset-shadow-blur: 7px | <div class="padding-x-2 text-lg text-offset-shadow offset-x-1 offset-y-1 offset-blur-7 offset-charcoal-1 bg-white font-semibold">Text</div> |
| offset-blur-8 | --text-offset-shadow-blur: 8px | <div class="padding-x-2 text-lg text-offset-shadow offset-x-1 offset-y-1 offset-blur-8 offset-charcoal-1 bg-white font-semibold">Text</div> |
| offset-blur-9 | --text-offset-shadow-blur: 9px | <div class="padding-x-2 text-lg text-offset-shadow offset-x-1 offset-y-1 offset-blur-9 offset-charcoal-1 bg-white font-semibold">Text</div> |
| offset-blur-10 | --text-offset-shadow-blur: 10px | <div class="padding-x-2 text-lg text-offset-shadow offset-x-1 offset-y-1 offset-blur-10 offset-charcoal-1 bg-white font-semibold">Text</div> |
| offset-blur-11 | --text-offset-shadow-blur: 11px | <div class="padding-x-2 text-lg text-offset-shadow offset-x-1 offset-y-1 offset-blur-11 offset-charcoal-1 bg-white font-semibold">Text</div> |
| offset-blur-12 | --text-offset-shadow-blur: 12px | <div class="padding-x-2 text-lg text-offset-shadow offset-x-1 offset-y-1 offset-blur-12 offset-charcoal-1 bg-white font-semibold">Text</div> |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | |
|:--|:--|
| offset-shade-`{palette}`-`{modifier}` | <div class="padding-2 border-l-8 text-xs font-thin depth-tight-1"><span class="padding-r-1">See:</span><a class="text-underline font-semibold text-shade-teal-1 (hover)text-tont-teal-1" href="/getting-started-palette/">Palette</a> page to find more about the color options (Shades, Tones, Tints), color manipulations (saturation, brightness, contrast), and transparency.</div> |
| offset-tone-`{palette}`-`{modifier}` | |
| offset-tint-`{palette}`-`{modifier}` | |

---

## Usage

{% from "misc/console.njk" import console %}

Solid text shadow.

<div class="padding-x-4 margin-y-2 margin-x-auto width-64">
  <div class="text-xl-8 font-semibold text-offset-shadow offset-x-0 offset-y-10 offset-tint-lava-4">
    TEXT
  </div>
</div>

{{ console('html',
'<div class="text-offset-shadow offset-x-0 offset-y-10 offset-tint-lava-4">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .text-offset-shadow,
      .offset-x-0,
      .offset-y-10,
      .offset-tint-lava-4;
}
') }}

Blurred text shadow with added `offset-blur-{value}`.

<div class="padding-x-4 margin-y-2 margin-x-auto width-64">
  <div class="text-xl-8 font-semibold text-offset-shadow offset-x-0 offset-y-10 offset-blur-12 offset-shade-lava-4">
    TEXT
  </div>
</div>

{{ console('html',
'<div class="text-offset-shadow offset-x-0 offset-y-10 offset-blur-12 offset-tint-lava-4">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .text-offset-shadow,
      .offset-x-0,
      .offset-y-10,
      .offset-blur-12,
      .offset-tint-lava-4;
}
') }}

