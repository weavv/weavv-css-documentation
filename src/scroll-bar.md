---
id: scrollbar
title: Scroll Bar
description: Utilities for sets scrollbar styling such as thumb size, track color, thumb color, thumb radius and thumb hover color.
topic: Interactivity
layout: default
---

> Interactivity

# Scroll Bar

Utilities for sets scrollbar styling such as thumb size, track color, thumb color, thumb radius and thumb hover color.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for scrollbar in variants.scrollbar %}{% for item in scrollbar.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| scrollbar `{bar-size}` `{track-color}` `{thumb-color}` `{thumb-radius}` `{thumb-hover-color}` | ::-webkit-scrollbar { width: var(--scrollbar-size); height: var(--scrollbar-size) } <br><br> ::-webkit-scrollbar-track { background-color: var(--scrollbar-track-color) } <br><br> ::-webkit-scrollbar-thumb { background-color: var(--scrollbar-thumb-bgcolor); border-radius: var(--scrollbar-radius); border: var(--scrollbar-width) solid var(--scrollbar-thumb-color); background-clip: content-box } <br><br> ::-webkit-scrollbar-thumb:hover { background-color: var(--scrollbar-hover-bgcolor) } &nbsp; |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| bar-xs | --scrollbar-size: 4px |
| bar-sm | --scrollbar-size: 8px |
| bar-md | --scrollbar-size: 12px |
| bar-lg | --scrollbar-size: 16px |
| bar-xl | --scrollbar-size: 20px |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| thumb-rad-sm | --scrollbar-radius: 0.125rem |
| thumb-rad-md | --scrollbar-radius: 0.375rem |
| thumb-rad-lg | --scrollbar-radius: 0.5rem |
| thumb-rad-xl | --scrollbar-radius: 9999px |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | |
|:--|:--|
| track-shade-`{palette}`-`{modifier}` | <div class="padding-2 border-l-8 text-xs font-thin depth-tight-1"><span class="padding-r-1">See:</span><a class="text-underline font-semibold text-shade-teal-1 (hover)text-tont-teal-1" href="/getting-started-palette/">Palette</a> page to find more about the color options (Shades, Tones, Tints), color manipulations (saturation, brightness, contrast), and transparency.</div> |
| track-tone-`{palette}`-`{modifier}` | |
| track-tint-`{palette}`-`{modifier}` | |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | |
|:--|:--|
| thumb-shade-`{palette}`-`{modifier}` | <div class="padding-2 border-l-8 text-xs font-thin depth-tight-1"><span class="padding-r-1">See:</span><a class="text-underline font-semibold text-shade-teal-1 (hover)text-tont-teal-1" href="/getting-started-palette/">Palette</a> page to find more about the color options (Shades, Tones, Tints), color manipulations (saturation, brightness, contrast), and transparency.</div> |
| thumb-tone-`{palette}`-`{modifier}` | |
| thumb-tint-`{palette}`-`{modifier}` | |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | |
|:--|:--|
| thumb-hover-shade-`{palette}`-`{modifier}` | <div class="padding-2 border-l-8 text-xs font-thin depth-tight-1"><span class="padding-r-1">See:</span><a class="text-underline font-semibold text-shade-teal-1 (hover)text-tont-teal-1" href="/getting-started-palette/">Palette</a> page to find more about the color options (Shades, Tones, Tints), color manipulations (saturation, brightness, contrast), and transparency.</div> |
| thumb-hover-tone-`{palette}`-`{modifier}` | |
| thumb-hover-tint-`{palette}`-`{modifier}` | |

## Usage

{% from "misc/console.njk" import console %}

{{ console('html',
'<body class="scrollbar bar-sm track-tint-amber-2 thumb-rad-md thumb-tint-amber-5 thumb-hover-tint-amber-3">
    ...
  </body>
') }}

{{ console('scss',
'body {
    @extend
      .scrollbar,
      .bar-sm,
      .track-tint-amber-2,
      .thumb-rad-md,
      .thumb-tint-amber-5,
      .thumb-hover-tint-amber-3;
}
') }}
