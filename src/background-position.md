---
id: background-position
title: Background Position
description: Utilities for sets position of a background image.
topic: Backgrounds
relate: background-attachment, background-blend, background-border, background-color, background-gradient, background-opacity, background-repeat, background-size
layout: default
---

> Backgrounds

# Background Position

Utilities for sets position of a background image.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for backgroundposition in variants.backgroundposition %}{% for item in backgroundposition.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| bg-top | background-position: top |
| bg-bottom | background-position: bottom |
| bg-center | background-position: center |
| bg-left | background-position: left |
| bg-left-bottom | background-position: left bottom |
| bg-left-top | background-position: left top |
| bg-right | background-position: right |
| bg-right-bottom | background-position: right bottom |
| bg-right-top | background-position: right top |

---

## Usage

{% from "misc/console.njk" import console %}

Set `left-top` position background image with HTML inline attribute `style="..."` and a CSS property `background-image: url(...)` to an element.

<div class="margin-y-2 margin-x-auto width-64 bg-tint-lava-5 border-2 border-dashed border-tint-lava-1">
  <div
    class="height-32 width-64 bg-left-top bg-no-repeat"
    style="background-image:url(https://picsum.photos/90?=1)">
  </div>
</div>

{{ console('html',
'<div class="bg-left-top ... bg-no-repeat ... height-32 width-64" style="background-image:url(...)">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-left-top,
      .bg-no-repeat,
      .height-32,
      .width-64;
}
') }}

Set `top` position background image.

<div class="margin-y-2 margin-x-auto width-64 bg-tint-lava-5 border-2 border-dashed border-tint-lava-1">
  <div
    class="height-32 width-64 bg-top bg-no-repeat"
    style="background-image:url(https://picsum.photos/90?=1)">
  </div>
</div>

{{ console('html',
'<div class="bg-top ... bg-no-repeat ... height-32 width-64" style="background-image:url(...)">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-top,
      .bg-no-repeat,
      .height-32,
      .width-64;
}
') }}

Set `right-top` position background image.

<div class="margin-y-2 margin-x-auto width-64 bg-tint-lava-5 border-2 border-dashed border-tint-lava-1">
  <div
    class="height-32 width-64 bg-right-top bg-no-repeat"
    style="background-image:url(https://picsum.photos/90?=1)">
  </div>
</div>

{{ console('html',
'<div class="bg-right-top ... bg-no-repeat ... height-32 width-64" style="background-image:url(...)">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-right-top,
      .bg-no-repeat,
      .height-32,
      .width-64;
}
') }}

Set `right` position background image.

<div class="margin-y-2 margin-x-auto width-64 bg-tint-lava-5 border-2 border-dashed border-tint-lava-1">
  <div
    class="height-32 width-64 bg-right bg-no-repeat"
    style="background-image:url(https://picsum.photos/90?=1)">
  </div>
</div>

{{ console('html',
'<div class="bg-right ... bg-no-repeat ... height-32 width-64" style="background-image:url(...)">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-right,
      .bg-no-repeat,
      .height-32,
      .width-64;
}
') }}

Set `right bottom` position background image.

<div class="margin-y-2 margin-x-auto width-64 bg-tint-lava-5 border-2 border-dashed border-tint-lava-1">
  <div
    class="height-32 width-64 bg-right-bottom bg-no-repeat"
    style="background-image:url(https://picsum.photos/90?=1)">
  </div>
</div>

{{ console('html',
'<div class="bg-right-bottom ... bg-no-repeat ... height-32 width-64" style="background-image:url(...)">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-right-bottom,
      .bg-no-repeat,
      .height-32,
      .width-64;
}
') }}

Set `bottom` position background image.

<div class="margin-y-2 margin-x-auto width-64 bg-tint-lava-5 border-2 border-dashed border-tint-lava-1">
  <div
    class="height-32 width-64 bg-bottom bg-no-repeat"
    style="background-image:url(https://picsum.photos/90?=1)">
  </div>
</div>

{{ console('html',
'<div class="bg-bottom ... bg-no-repeat ... height-32 width-64" style="background-image:url(...)">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-bottom,
      .bg-no-repeat,
      .height-32,
      .width-64;
}
') }}

Set `left-bottom` position background image.

<div class="margin-y-2 margin-x-auto width-64 bg-tint-lava-5 border-2 border-dashed border-tint-lava-1">
  <div
    class="height-32 width-64 bg-left-bottom bg-no-repeat"
    style="background-image:url(https://picsum.photos/90?=1)">
  </div>
</div>

{{ console('html',
'<div class="bg-left-bottom ... bg-no-repeat ... height-32 width-64" style="background-image:url(...)">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-left-bottom,
      .bg-no-repeat,
      .height-32,
      .width-64;
}
') }}

Set `left` position background image.

<div class="margin-y-2 margin-x-auto width-64 bg-tint-lava-5 border-2 border-dashed border-tint-lava-1">
  <div
    class="height-32 width-64 bg-left bg-no-repeat"
    style="background-image:url(https://picsum.photos/90?=1)">
  </div>
</div>

{{ console('html',
'<div class="bg-left ... bg-no-repeat ... height-32 width-64" style="background-image:url(...)">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-left,
      .bg-no-repeat,
      .height-32,
      .width-64;
}
') }}

Set `center` position background image.

<div class="margin-y-2 margin-x-auto width-64 bg-tint-lava-5 border-2 border-dashed border-tint-lava-1">
  <div
    class="height-32 width-64 bg-center bg-no-repeat"
    style="background-image:url(https://picsum.photos/90?=1)">
  </div>
</div>

{{ console('html',
'<div class="bg-center ... bg-no-repeat ... height-32 width-64" style="background-image:url(...)">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-center,
      .bg-no-repeat,
      .height-32,
      .width-64;
}
') }}


