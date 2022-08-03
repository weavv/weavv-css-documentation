---
id: text-stroke-width
title: Text Stroke
description: Utilities for set text with outer stroke width.
topic: Typography
relate: text-stroke-color
variant: responsive
layout: default
---

> Typography

# Text Stroke

Utilities for set text with outer stroke width.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for textstrokewidth in variants.textstrokewidth %}{% for item in textstrokewidth.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> | |
|:--|:--|:-:|
| text-stroke-1 | -webkit-text-stroke: 1px | <div class="text-white text-lg text-stroke-1">text</div> |
| text-stroke-2 | -webkit-text-stroke: 2px | <div class="text-white text-lg text-stroke-2">text</div> |
| text-stroke-3 | -webkit-text-stroke: 3px | <div class="text-white text-lg text-stroke-3">text</div> |
| text-stroke-4 | -webkit-text-stroke: 4px | <div class="text-white text-lg text-stroke-4">text</div> |
| text-stroke-5 | -webkit-text-stroke: 5px | <div class="text-white text-lg text-stroke-5">text</div> |
| text-stroke-6 | -webkit-text-stroke: 6px | <div class="text-white text-lg text-stroke-6">text</div> |
| text-stroke-7 | -webkit-text-stroke: 7px | <div class="text-white text-lg text-stroke-7">text</div> |
| text-stroke-8 | -webkit-text-stroke: 8px | <div class="text-white text-lg text-stroke-8">text</div> |
| text-stroke-9 | -webkit-text-stroke: 9px | <div class="text-white text-lg text-stroke-">text</div> |
| text-stroke-10 | -webkit-text-stroke: 10px | <div class="text-white text-lg text-stroke-10">text</div> |
| text-stroke-12 | -webkit-text-stroke: 12px | <div class="text-white text-lg text-stroke-12">text</div> |
| text-stroke-14 | -webkit-text-stroke: 14px | <div class="text-white text-lg text-stroke-14">text</div> |
| text-stroke-16 | -webkit-text-stroke: 16px | <div class="text-white text-lg text-stroke-16">text</div> |
| text-stroke-18 | -webkit-text-stroke: 18px | <div class="text-white text-lg text-stroke-18">text</div> |
| text-stroke-20 | -webkit-text-stroke: 20px | <div class="text-white text-lg text-stroke-20">text</div> |
| text-stroke-24 | -webkit-text-stroke: 24px | <div class="text-white text-lg text-stroke-24">text</div> |
| text-stroke-28 | -webkit-text-stroke: 28px | <div class="text-white text-lg text-stroke-28">text</div> |
| text-stroke-32 | -webkit-text-stroke: 32px | <div class="text-white text-lg text-stroke-32">text</div> |
| text-stroke-36 | -webkit-text-stroke: 36px | <div class="text-white text-lg text-stroke-36">text</div> |
| text-stroke-40 | -webkit-text-stroke: 40px | <div class="text-white text-lg text-stroke-40">text</div> |

---

## Usage

{% from "misc/console.njk" import console %}

<div class="padding-x-4 margin-y-2 margin-x-auto width-full">
  <div class="text-white text-xl-8 text-center text-stroke-4 text-stroke-tint-granite-5">
    TEXT
  </div>
</div>

{{ console('html',
'<div class="text-white text-xl-8 text-stroke-4 ... text-stroke-tint-granite-5">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .text-white,
      .text-xl-8,
      .text-stroke-4,
      .text-stroke-tint-granite-5;
}
') }}





