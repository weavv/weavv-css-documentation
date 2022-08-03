---
id: background-repeat
title: Background Repeat
description: Utilities for sets repetition of a background image.
topic: Backgrounds
relate: background-attachment, background-blend, background-border, background-color, background-gradient, background-opacity, background-position, background-size
layout: default
---

> Backgrounds

# Background Repeat

Utilities for sets repetition of a background image.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for backgroundrepeat in variants.backgroundrepeat %}{% for item in backgroundrepeat.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| bg-repeat | background-repeat: repeat |
| bg-no-repeat | background-repeat: no-repeat |
| bg-repeat-x | background-repeat: repeat-x |
| bg-repeat-y | background-repeat: repeat-y |
| bg-repeat-round | background-repeat: round |
| bg-repeat-space | background-repeat: space |

---

## Usage

{% from "misc/console.njk" import console %}

Set repeating background image with HTML inline attribute `style="..."` and a CSS property `background-image: url(...)` to an element.

<div class="margin-y-2 margin-x-auto width-64 bg-tint-lava-5">
  <div
    class="height-48 width-64 bg-repeat"
    style="background-image:url(https://picsum.photos/80?=1)">
  </div>
</div>

{{ console('html',
'<div class="bg-repeat ... height-48 width-64" style="background-image:url(...)">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-repeat,
      .height-48,
      .width-64;
}
') }}

Set no-repeating background image.

<div class="margin-y-2 margin-x-auto width-64 bg-tint-lava-5">
  <div
    class="height-48 width-64 bg-no-repeat"
    style="background-image:url(https://picsum.photos/80?=1)">
  </div>
</div>

{{ console('html',
'<div class="bg-no-repeat ... height-48 width-64" style="background-image:url(...)">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-no-repeat,
      .height-48,
      .width-64;
}
') }}

Set repeating background image horizontally.

<div class="margin-y-2 margin-x-auto width-64 bg-tint-lava-5">
  <div
    class="height-48 width-64 bg-repeat-x"
    style="background-image:url(https://picsum.photos/80?=1)">
  </div>
</div>

{{ console('html',
'<div class="bg-repeat-x ... height-48 width-64" style="background-image:url(...)">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-repeat-x,
      .height-48,
      .width-64;
}
') }}

Set repeating background image vertically.

<div class="margin-y-2 margin-x-auto width-64 bg-tint-lava-5">
  <div
    class="height-48 width-64 bg-repeat-y"
    style="background-image:url(https://picsum.photos/80?=1)">
  </div>
</div>

{{ console('html',
'<div class="bg-repeat-y ... height-48 width-64" style="background-image:url(...)">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-repeat-y,
      .height-48,
      .width-64;
}
') }}

Set repeating resized background image horizontally and vertically.

<div class="margin-y-2 margin-x-auto width-64 bg-tint-lava-5">
  <div
    class="height-48 width-64 bg-repeat-round"
    style="background-image:url(https://picsum.photos/80?=1)">
  </div>
</div>

{{ console('html',
'<div class="bg-repeat-round ... height-48 width-64" style="background-image:url(...)">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-repeat-round,
      .height-48,
      .width-64;
}
') }}

Set repeating no-resized background image horizontally and vertically.

<div class="margin-y-2 margin-x-auto width-64 bg-tint-lava-5">
  <div
    class="height-48 width-64 bg-repeat-space"
    style="background-image:url(https://picsum.photos/80?=1)">
  </div>
</div>

{{ console('html',
'<div class="bg-repeat-space ... height-48 width-64" style="background-image:url(...)">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-repeat-space,
      .height-48,
      .width-64;
}
') }}



