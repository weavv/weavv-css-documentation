---
id: background-size
title: Background Size
description: Utilities for sets background size of a background image.
topic: Backgrounds
relate: background-attachment, background-blend, background-border, background-color, background-gradient, background-opacity, background-position, background-repeat
layout: default
---

> Backgrounds

# Background Size

Utilities for sets background size of a background image.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for backgroundsize in variants.backgroundsize %}{% for item in backgroundsize.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| bg-auto | background-size: auto |
| bg-cover | background-size: cover |
| bg-contain | background-size: contain |

---

## Usage

{% from "misc/console.njk" import console %}

Set default background image size with HTML inline attribute `style="..."` and a CSS property `background-image: url(...)` to an element.

<div class="margin-y-2 margin-x-auto width-64 bg-tint-lava-5">
  <div
    class="height-48 width-full bg-auto bg-center bg-no-repeat"
    style="background-image:url(https://picsum.photos/400?=1)">
  </div>
</div>

{{ console('html',
'<div class="bg-auto ... bg-center bg-no-repeat ... height-48 width-full" style="background-image:url(...)">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-auto,
      .bg-center,
      .bg-no-repeat,
      .height-48,
      .width-full;
}
') }}

Set cropped and stretched background image to an element.

<div class="margin-y-2 margin-x-auto width-64 bg-tint-lava-5">
  <div
    class="height-48 width-full bg-cover bg-center bg-no-repeat"
    style="background-image:url(https://picsum.photos/400?=1)">
  </div>
</div>

{{ console('html',
'<div class="bg-cover ... bg-center bg-no-repeat ... height-48 width-full" style="background-image:url(...)">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-cover,
      .bg-center,
      .bg-no-repeat,
      .height-48,
      .width-full;
}
') }}

Set background image contains an element with cropped and stretched.

<div class="margin-y-2 margin-x-auto width-64 bg-tint-lava-5">
  <div
    class="height-48 width-full bg-contain bg-center bg-no-repeat"
    style="background-image:url(https://picsum.photos/400?=1)">
  </div>
</div>

{{ console('html',
'<div class="bg-contain ... bg-center bg-no-repeat ... height-48 width-full" style="background-image:url(...)">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-contain,
      .bg-center,
      .bg-no-repeat,
      .height-48,
      .width-full;
}
') }}

