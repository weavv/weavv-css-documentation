---
id: border-gradient
title: Border Gradient
description: Utilities for sets border color with two transition colors, gradient angle, and border-radius.
topic: Borders
relate: border-color, border-radius, border-style, border-width, curve-object
variant: dark-mode, hover, focus-visible, focus-within
layout: default
---

> Borders

# Border Gradient

Utilities for sets border color with two transition colors, gradient angle, and border-radius.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for bordergradient in variants.bordergradient %}{% for item in bordergradient.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white (dark)text-charcoal-1 bg-gray-7 (dark)bg-gray-6 curve-border-full">class</span> | <span class="padding-x-3 padding-y-1 text-white (dark)text-charcoal-1 bg-gray-7 (dark)bg-gray-6 curve-border-full">css</span> |
|:--|:--|
| border-gradient `{width}`, `{inner-color}`, `{start-color}`, `{stop-color}`, `{angle}`, `{border-radius}`| --border-gradient-width: `{width}`; --border-gradient-inner-color: `{inner-color}`; --border-gradient-start-color: `{start-color}`; --border-gradient-stop-color: `{stop-color}`; --border-gradient-angle: `{angle}`; --border-gradient-radius: `{border-radius}`; border: var(--border-gradient-width) solid transparent; border-radius: var(--border-gradient-radius); background: linear-gradient(var(--border-gradient-inner-color), var(--border-gradient-inner-color)) padding-box, linear-gradient(var(--border-gradient-angle), var(--border-gradient-start-color), var(--border-gradient-stop-color)) border-box |

| <span class="padding-x-3 padding-y-1 text-white (dark)text-charcoal-1 bg-gray-7 (dark)bg-gray-6 curve-border-full">class</span> | <span class="padding-x-3 padding-y-1 text-white (dark)text-charcoal-1 bg-gray-7 (dark)bg-gray-6 curve-border-full">css</span> | |
|:--|:--|:-:|
| size-0 | --border-gradient-width: 0 | |
| size-2 | --border-gradient-width: 0.125em | |
| size-4 | --border-gradient-width: 0.25em | |
| size-8 | --border-gradient-width: 0.5em | |

| <span class="padding-x-3 padding-y-1 text-white (dark)text-charcoal-1 bg-gray-7 (dark)bg-gray-6 curve-border-full">class</span> | |
|:--|:--|
| inner-shade-`{palette}`-`{modifier}` | <div class="padding-2 border-l-8 text-xs font-thin depth-tight-1"><span class="padding-r-1">See:</span><a class="text-underline font-semibold text-shade-teal-1 (hover)text-tont-teal-1" href="/getting-started-palette/">Palette</a> page to find more about the color options (Shades, Tones, Tints), color manipulations (saturation, brightness, contrast), and transparency.</div> |
| inner-tone-`{palette}`-`{modifier}` | |
| inner-tint-`{palette}`-`{modifier}` | |

| <span class="padding-x-3 padding-y-1 text-white (dark)text-charcoal-1 bg-gray-7 (dark)bg-gray-6 curve-border-full">class</span> | |
|:--|:--|
| start-shade-`{palette}`-`{modifier}` | <div class="padding-2 border-l-8 text-xs font-thin depth-tight-1"><span class="padding-r-1">See:</span><a class="text-underline font-semibold text-shade-teal-1 (hover)text-tont-teal-1" href="/getting-started-palette/">Palette</a> page to find more about the color options (Shades, Tones, Tints), color manipulations (saturation, brightness, contrast), and transparency.</div> |
| start-shade-`{palette}`-`{modifier}` | |
| start-shade-`{palette}`-`{modifier}` | |

| <span class="padding-x-3 padding-y-1 text-white (dark)text-charcoal-1 bg-gray-7 (dark)bg-gray-6 curve-border-full">class</span> | |
|:--|:--|
| stop-shade-`{palette}`-`{modifier}` | <div class="padding-2 border-l-8 text-xs font-thin depth-tight-1"><span class="padding-r-1">See:</span><a class="text-underline font-semibold text-shade-teal-1 (hover)text-tont-teal-1" href="/getting-started-palette/">Palette</a> page to find more about the color options (Shades, Tones, Tints), color manipulations (saturation, brightness, contrast), and transparency.</div> |
| stop-shade-`{palette}`-`{modifier}` | |
| stop-shade-`{palette}`-`{modifier}` | |

| <span class="padding-x-3 padding-y-1 text-white (dark)text-charcoal-1 bg-gray-7 (dark)bg-gray-6 curve-border-full">class</span> | <span class="padding-x-3 padding-y-1 text-white (dark)text-charcoal-1 bg-gray-7 (dark)bg-gray-6 curve-border-full">css</span> | |
|:--|:--|:-:|
| angle-0 | --border-gradient-angle: 0deg | |
| angle-45 | --border-gradient-angle: 45deg | |
| angle-90 | --border-gradient-angle: 90deg | |
| angle-108 | --border-gradient-angle: 180deg | |

| <span class="padding-x-3 padding-y-1 text-white (dark)text-charcoal-1 bg-gray-7 (dark)bg-gray-6 curve-border-full">class</span> | <span class="padding-x-3 padding-y-1 text-white (dark)text-charcoal-1 bg-gray-7 (dark)bg-gray-6 curve-border-full">css</span> | |
|:--|:--|:-:|
| curve-border-none | --border-gradient-radius: none | |
| curve-border-sm | --border-gradient-radius: 0.125rem | |
| curve-border-md | --border-gradient-radius: 0.375rem | |
| curve-border-lg | --border-gradient-radius: 0.5rem | |
| curve-border-full | --border-gradient-radius: 9999px | |

---

## Usage

{% from "misc/console.njk" import console %}

<div class="padding-x-4 margin-y-4 margin-x-auto width-56">
  <div class="padding-8 border-gradient size-4 inner-white start-shade-lime-1 stop-shade-lava-1 angle-45 curve-border-lg"></div>
</div>

{{ console('html',
'<div class="border-gradient size-4 inner-white start-shade-lime-1 stop-shade-lava-1 angle-45 curve-border-lg ... padding-8">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .border-gradient,
      .size-4,
      .inner-white,
      .start-shade-lime-1,
      .stop-shade-lava-1,
      .angle-45,
      .curve-border-lg,
      .padding-8;
}
') }}

