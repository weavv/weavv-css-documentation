---
id: text-color
title: Text Color
description: Utilities for sets the text color.
topic: Typography
variant: dark-mode, hover, group-hover, focus, group-focus, focus-visible, focus-within, active, visited
layout: default
---

> Typography

# Text Color

Utilities for sets the text color.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for textcolor in variants.textcolor %}{% for item in textcolor.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |  |
|:--|:--|:-:|
| text-transparent | color: transparent | <div class="padding-x-2 text-lg text-transparent font-semibold">Text</div> |
| text-white | color: #fff | <div class="padding-x-2 text-lg text-white font-semibold">Text</div> |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | |
|:--|:--|
| text-shade-`{palette}`-`{modifier}` | <div class="padding-2 border-l-8 text-xs font-thin depth-tight-1"><span class="padding-r-1">See:</span><a class="text-underline font-semibold text-shade-teal-1 (hover)text-tont-teal-1" href="/getting-started-palette/">Palette</a> page to find more about the color options (Shades, Tones, Tints), color manipulations (saturation, brightness, contrast), and transparency.</div> |
| text-tone-`{palette}`-`{modifier}` | |
| text-tint-`{palette}`-`{modifier}` | |

---

## Usage

{% from "misc/console.njk" import console %}

Set basic text color to an element.

{{ console('html',
'<div class="text-shade-amber-5">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .text-shade-amber-5;
}
') }}

Set default text color to `<body>` tag.

{{ console('html',
'<body class="text-shade-amber-5">
    ...
  </body>
') }}

{{ console('scss',
'body {
    @extend
      .text-shade-amber-5;
}
') }}

Set auto dark theme enabled to an element with added `(dark)` prefix.

{{ console('html',
'<div class="text-shade-granite-1 ... (dark)text-shade-charcoal-1">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .text-shade-granite-1,
      .\(dark\)text-shade-charcoal-1;
}
') }}