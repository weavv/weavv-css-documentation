---
id: background-gradient
title: Background Gradient
description: Utilities for sets the background gradient color to an element with flexible control over color, color space and angles.
topic: Backgrounds
relate: background-attachment, background-blend, background-border, background-color, background-opacity, background-position, background-repeat, background-size
variant: hover, focus-visible, focus-within
layout: default
---

> Backgrounds

# Background Gradient

Utilities for sets the background gradient color to an element with flexible control over color, color space, and angles.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for backgroundgradient in variants.backgroundgradient %}{% for item in backgroundgradient.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| bg-gradient `{start-color}` `{start-space}` `{stop-color}` `{stop-space}` `{angle}` | linear-gradient(var(--bg-gradient-angle), var(--bg-gradient-start-color) var(--bg-gradient-primary), var(--bg-gradient-stop-color) var(--bg-gradient-secondary)) |

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

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| start-10 | --bg-gradient-primary: 10% |
| start-20 | --bg-gradient-primary: 20% |
| start-30 | --bg-gradient-primary: 30% |
| start-40 | --bg-gradient-primary: 40% |
| start-50 | --bg-gradient-primary: 50% |
| start-60 | --bg-gradient-primary: 60% |
| start-70 | --bg-gradient-primary: 70% |
| start-80 | --bg-gradient-primary: 80% |
| start-90 | --bg-gradient-primary: 90% |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| stop-10 | --bg-gradient-secondary: 10% |
| stop-20 | --bg-gradient-secondary: 20% |
| stop-30 | --bg-gradient-secondary: 30% |
| stop-40 | --bg-gradient-secondary: 40% |
| stop-50 | --bg-gradient-secondary: 50% |
| stop-60 | --bg-gradient-secondary: 60% |
| stop-70 | --bg-gradient-secondary: 70% |
| stop-80 | --bg-gradient-secondary: 80% |
| stop-90 | --bg-gradient-secondary: 90% |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| angle-0 | --bg-gradient-angle: 0deg |
| angle-45 | --bg-gradient-angle: 45deg |
| angle-90 | --bg-gradient-angle: 90deg |
| angle-180 | --bg-gradient-angle: 180deg |
| -angle-45 | --bg-gradient-angle: -45deg |
| -angle-90 | --bg-gradient-angle: -90deg |
| -angle-180 | --bg-gradient-angle: -180deg |

---

## Usage

{% from "misc/console.njk" import console %}

Set basic background gradient to an element, start color is `start-{color}` with 10% space `start-{value}`, stop color is `stop-{color}` with 90% space `stop-{value}`, last rotate the gradient in 45 degree `angel-45`.

<div class="padding-x-4 margin-y-4 margin-x-auto width-56">
  <div class="height-32 bg-gradient start-shade-amber-1 start-10 stop-shade-lava-1 stop-90 angle-45"></div>
</div>

{{ console('html',
'<div class="bg-gradient start-shade-amber-1 start-10 stop-shade-lava-1 stop-90 angle-45 ... width-32 height-32">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-gradient,
      .start-shade-amber-1,
      .start-10,
      .stop-shade-lava-1,
      .stop-90,
      .angle-45,
      .width-32,
      .height-32;
}
') }}

Set background gradient to `<body>` tag.

{{ console('html',
'<body class="bg-gradient start-shade-amber-1 start-10 stop-shade-lava-1 stop-90 angle-45">
    ...
  </body>
') }}

{{ console('scss',
'body {
    @extend
      .bg-gradient,
      .start-shade-amber-1,
      .start-10,
      .stop-shade-lava-1,
      .stop-90,
      .angle-45;
}
') }}

Set background gradient clipping as text color by adding `clip-text`.

<div class="margin-y-2 margin-x-auto width-56">
  <div class="height-32 bg-gradient start-shade-amber-1 start-10 stop-shade-lava-1 stop-90 angle-45 clip-text inline-block text-xl-8 font-extrabold">
    TEXT
  </div>
</div>

{{ console('html',
'<div class="bg-gradient start-shade-amber-1 start-10 stop-shade-lava-1 stop-90 angle-45 clip-text ... inline-block ... font-extrabold">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-gradient,
      .start-shade-amber-1,
      .start-10,
      .stop-shade-lava-1,
      .stop-90,
      .angle-45,
      .clip-text,
      .inline-block,
      .font-extrabold;
}
') }}

