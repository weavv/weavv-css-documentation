---
id: background-opacity
title: Background Opacity
description: Utilities for sets opacity of background color.
topic: Backgrounds
relate: background-attachment, background-blend, background-border, background-color, background-gradient, background-position, background-repeat, background-size
layout: default
---

> Backgrounds

# Background Opacity

Utilities for sets opacity of background color.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for backgroundopacity in variants.backgroundopacity %}{% for item in backgroundopacity.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| bg-opacity-0 | --bg-opacity: 0 |
| bg-opacity-25 | --bg-opacity: .25 |
| bg-opacity-50 | --bg-opacity: .5 |
| bg-opacity-75 | --bg-opacity: .75 |
| bg-opacity-100 | --bg-opacity: 1 |

---

## Usage

{% from "misc/console.njk" import console %}

Set background-color with `100%` opacity to an element.

<div class="margin-y-2 margin-x-auto width-64">
  <div class="height-32 bg-shade-amber-1 bg-opacity-100 border border-tint-granite-1"></div>
</div>

{{ console('html',
'<div class="bg-shade-amber-1 bg-opacity-100 ... height-32 width-64">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-shade-amber-1,
      .bg-opacity-100,
      .height-32,
      .width-64;
}
') }}

Set background-color with `75%` opacity to an element.

<div class="margin-y-2 margin-x-auto width-64">
  <div class="height-32 bg-shade-amber-1 bg-opacity-75 border border-tint-granite-1"></div>
</div>

{{ console('html',
'<div class="bg-shade-amber-1 bg-opacity-75 ... height-32 width-64">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-shade-amber-1,
      .bg-opacity-75,
      .height-32,
      .width-64;
}
') }}

Set background-color with `50%` opacity to an element.

<div class="margin-y-2 margin-x-auto width-64">
  <div class="height-32 bg-shade-amber-1 bg-opacity-50 border border-tint-granite-1"></div>
</div>

{{ console('html',
'<div class="bg-shade-amber-1 bg-opacity-50 ... height-32 width-64">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-shade-amber-1,
      .bg-opacity-50,
      .height-32,
      .width-64;
}
') }}

Set background-color with `25%` opacity to an element.

<div class="margin-y-2 margin-x-auto width-64">
  <div class="height-32 bg-shade-amber-1 bg-opacity-25 border border-tint-granite-1"></div>
</div>

{{ console('html',
'<div class="bg-shade-amber-1 bg-opacity-25 ... height-32 width-64">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-shade-amber-1,
      .bg-opacity-25,
      .height-32,
      .width-64;
}
') }}

Set background-color with `0%` opacity to an element.

<div class="margin-y-2 margin-x-auto width-64">
  <div class="height-32 bg-shade-amber-1 bg-opacity-0 border border-tint-granite-1"></div>
</div>

{{ console('html',
'<div class="bg-shade-amber-1 bg-opacity-0 ... height-32 width-64">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-shade-amber-1,
      .bg-opacity-0,
      .height-32,
      .width-64;
}
') }}

