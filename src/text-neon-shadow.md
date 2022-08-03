---
id: text-neon-shadow
title: Text Neon Shadow
description: Utilities for sets text shadow with multiple stepping glowing shadow colors to an element.
relate: text-offset-shadow
topic: Effects
layout: default
---

> Effects

# Text Neon Shadow

Utilities for sets text shadow with multiple stepping glowing shadow colors to an element.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for textneonshadow in variants.textneonshadow %}{% for item in textneonshadow.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| text-neon-shadow `{start-color}` `{stop-color}` | text-shadow: 0 0 7px var(--text-neon-shadow-start-color), 0 0 10px var(--text-neon-shadow-start-color), 0 0 21px var(--text-neon-shadow-start-color), 0 0 42px var(--text-neon-shadow-stop-color),  0 0 82px var(--text-neon-shadow-stop-color),  0 0 92px var(--text-neon-shadow-stop-color); |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | |
|:--|:--|
| start-shade-`{palette}`-`{modifier}` | <div class="padding-2 border-l-8 text-xs font-thin depth-tight-1"><span class="padding-r-1">See:</span><a class="text-underline font-semibold text-shade-teal-1 (hover)text-tont-teal-1" href="/getting-started-palette/">Palette</a> page to find more about the color options (Shades, Tones, Tints), color manipulations (saturation, brightness, contrast), and transparency.</div> |
| start-tone-`{palette}`-`{modifier}` | |
| start-tint-`{palette}`-`{modifier}` | |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | |
|:--|:--|
| stop-shade-`{palette}`-`{modifier}` | <div class="padding-2 border-l-8 text-xs font-thin depth-tight-1"><span class="padding-r-1">See:</span><a class="text-underline font-semibold text-shade-teal-1 (hover)text-tont-teal-1" href="/getting-started-palette/">Palette</a> page to find more about the color options (Shades, Tones, Tints), color manipulations (saturation, brightness, contrast), and transparency.</div> |
| stop-tone-`{palette}`-`{modifier}` | |
| stop-tint-`{palette}`-`{modifier}` | |

---

## Usage

{% from "misc/console.njk" import console %}

Positive glowing neon effect.

<div class="padding-x-4 margin-y-2 margin-x-auto flex justify-center items-center height-80 width-full bg-tint-charcoal-2 curve-border-lg">
  <div class="font-sans depth-tight-2 text-shade-teal-2 text-xl-7 font-semibold text-neon-shadow start-tint-teal-3 stop-shade-teal-3">
    neon <br>
    <span class="font-thin">
      lights
    </span>
  </div>
</div>

{{ console('html',
'<div class="text-shade-teal-2 ... text-neon-shadow start-tint-teal-3 stop-shade-teal-3">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .text-shade-teal-2,
      .text-neon-shadow,
      .start-tint-teal-3,
      .stop-shade-teal-3;
') }}

Negative glowing neon effect.

<div class="padding-x-4 margin-y-2 margin-x-auto flex justify-center items-center height-80 width-full bg-transparent">
  <div class="font-sans depth-tight-2 text-shade-teal-1 text-xl-7 font-semibold text-neon-shadow start-tint-teal-5 stop-shade-teal-5">
    neon <br>
    <span class="font-thin">
      lights
    </span>
  </div>
</div>

{{ console('html',
'<div class="text-shade-teal-1 ... text-neon-shadow start-tint-teal-5 stop-shade-teal-5">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .text-shade-teal-1,
      .text-neon-shadow,
      .start-tint-teal-5,
      .stop-shade-teal-5;
}
') }}



