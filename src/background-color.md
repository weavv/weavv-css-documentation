---
id: background-color
title: Background Color
description: Utilities for sets background color.
topic: Backgrounds
relate: background-attachment, background-blend, background-border, background-gradient, background-opacity, background-position, background-repeat, background-size
variant: responsive, dark-mode, hover, group-hover, focus-visible, focus-within, active,visited
layout: default
---

> Backgrounds

# Background Color

Utilities for sets background color.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for backgroundcolor in variants.backgroundcolor %}{% for item in backgroundcolor.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> | |
|:--|:--|:-:|
| bg-transparent | background-color: transparent | |
| bg-white | background-color: #fff | |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">CSS</span> | |
|:--|:--|
| bg-shade-`{palettes}`-`{modifier}` | <div class="padding-2 border-l-8 text-xs font-thin depth-tight-1"><span class="padding-r-1">See:</span><a class="text-underline font-semibold text-shade-teal-1 (hover)text-tont-teal-1" href="/getting-started-palette/">Palette</a> page to find more about the color options (Shades, Tones, Tints), color manipulations (saturation, brightness, contrast), and transparency.</div> |
| bg-tone-`{palettes}`-`{modifier}` | |
| bg-tint-`{palettes}`-`{modifier}` | |

---

# Usage

{% from "misc/console.njk" import console %}

Set basic background color to an element.

<div class="padding-x-4 margin-y-4 margin-x-auto width-56">
  <div class="height-32 bg-shade-amber-1"></div>
</div>

{{ console('html',
'<div class="bg-shade-amber-4 ... width-32 height-32">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-shade-amber-4,
      .width-32,
      .height-32;
}
') }}

Set default background color to `<body>` tag.

{{ console('html',
'<body class="bg-shade-amber-4">
    ...
  </body>
') }}

{{ console('scss',
'body {
    @extend
      .bg-shade-amber-4;
}
') }}

 Set auto dark theme enabled to an element with added `(dark)` prefix.

{{ console('html',
'<div class="bg-gray-2 (dark)bg-charcoal-1 ... width-32 height-32">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-gray-2,
      .\(dark\)bg-charcoal-1,
      .width-32,
      .height-32;
}
') }}

