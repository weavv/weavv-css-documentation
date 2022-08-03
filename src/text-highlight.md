---
id: text-highlight
title: Text Highlight
description: Utilities for overrides browser-level or system-level text highlight color to an elements.
topic: Typography
relate: text-color, background-color
layout: default
---

> Interactivity

# Text Highlight

Utilities for overrides browser-level or system-level text highlight color to an elements.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for texthighlight in variants.texthighlight %}{% for item in texthighlight.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| hightlight-`{color}`| ::selection { background: `{color}`; |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | |
|:--|:--|
| fore-shade-`{palette}`-`modifier` | <div class="padding-2 border-l-8 text-xs font-thin depth-tight-1"><span class="padding-r-1">See:</span><a class="text-underline font-semibold text-shade-teal-1 (hover)text-tont-teal-1" href="/getting-started-palette/">Palette</a> page to find more about the color options (Shades, Tones, Tints), color manipulations (saturation, brightness, contrast), and transparency.</div> |
| fore-tone-`{palette}`-`modifier` | |
| fore-tint-`{palette}`-`modifier` | |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | |
|:--|:--|
| rear-shade-`{palette}`-`modifier` | <div class="padding-2 border-l-8 text-xs font-thin depth-tight-1"><span class="padding-r-1">See:</span><a class="text-underline font-semibold text-shade-teal-1 (hover)text-tont-teal-1" href="/getting-started-palette/">Palette</a> page to find more about the color options (Shades, Tones, Tints), color manipulations (saturation, brightness, contrast), and transparency.</div> |
| rear-tone-`{palette}`-`modifier` | |
| rear-tint-`{palette}`-`modifier` | |

---

## Usage

{% from "misc/console.njk" import console %}

Try to drag and highlight all the text below to see different colors highlighted.

<div class="padding-x-4 margin-y-2 margin-x-auto width-full">
  <div class="flex flex-column justify-center items-center">
    <div class="highlight fore-tint-teal-7 rear-teal-4 text-xl-3">
      Lorem ipsum dolor sit amet
    </div>
    <div class="highlight fore-tint-amber-5 rear-shade-amber-4 text-xl-3">
      Lorem ipsum dolor sit amet
    </div>
    <div class="highlight fore-tint-granite-1 rear-shade-lava-4 text-xl-3">
      Lorem ipsum dolor sit amet
    </div>
    <div class="highlight fore-tint-lava-5 rear-shade-teal-4 text-xl-3">
      Lorem ipsum dolor sit amet
    </div>
  </div>
</div>

{{ console('html',
'<div class="highlight fore-shade-teal-1 rear-tint-teal-4">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .highlight,
      .fore-shade-teal-1,
      .rear-tint-teal-4;
}
') }}

