---
id: background-blend
title: Background Blend
description: Utilities for sets the blending mode of each background layer (color or image).
topic: Backgrounds
relate: background-attachment, background-border, background-color, background-gradient, background-opacity, background-position, background-repeat, background-size
variant: focus-visible, focus-within
layout: default
---

> Backgrounds

# Background Blend

Utilities for sets the blending mode of each background layer (color or image).

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for backgroundblend in variants.backgroundblend %}{% for item in backgroundblend.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| bg-blend-normal | background-blend-mode: normal |
| bg-blend-multiply | background-blend-mode: multiply |
| bg-blend-screen | background-blend-mode: screen |
| bg-blend-overlay | background-blend-mode: overlay |
| bg-blend-darken | background-blend-mode: darken |
| bg-blend-lighten | background-blend-mode: lighten |
| bg-blend-color | background-blend-mode: color |
| bg-blend-color-dodge | background-blend-mode: color-dodge |
| bg-blend-color-burn | background-blend-mode: color-burn |
| bg-blend-hard-light | background-blend-mode: hard-light |
| bg-blend-soft-light | background-blend-mode: soft-light |
| bg-blend-difference | background-blend-mode: difference |
| bg-blend-exclusion | background-blend-mode: exclusion |
| bg-blend-hue | background-blend-mode: hue |
| bg-blend-saturation | background-blend-mode: saturation |
| bg-blend-luminosity | Wbackground-blend-mode: luminosity |

---

## Usage

{% from "misc/console.njk" import console %}

Set `normal` blending mode background image with HTML inline attribute `style="..."` and a CSS property `background-image: url(...)` to an element.

<div class="margin-y-2 margin-x-auto width-64">
  <div
    class="bg-shade-amber-1 bg-blend-normal bg-auto bg-center bg-no-repeat height-48 width-full"
    style="background-image:url(https://picsum.photos/400?=1)">
  </div>
</div>

{{ console('html',
'<div class="bg-blend-normal bg-shade-amber-1 ... bg-auto bg-center bg-no-repeat ... height-48 width-full" style="background-image:url(...)">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-blend-normal,
      .bg-shade-amber-1,
      .bg-auto,
      .bg-center,
      .bg-no-repeat,
      .height-48,
      .width-full;
}
') }}

Set `multiply` blending mode to background image.

<div class="margin-y-2 margin-x-auto width-64">
  <div
    class="bg-shade-amber-1 bg-blend-multiply bg-auto bg-center bg-no-repeat height-48 width-full"
    style="background-image:url(https://picsum.photos/400?=1)">
  </div>
</div>

{{ console('html',
'<div class="bg-blend-multiply bg-shade-amber-1 ... bg-auto bg-center bg-no-repeat ... height-48 width-full" style="background-image:url(...)">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-blend-multiply,
      .bg-shade-amber-1,
      .bg-auto,
      .bg-center,
      .bg-no-repeat,
      .height-48,
      .width-full;
}
') }}

Set `screen` blending mode to background image.

<div class="margin-y-2 margin-x-auto width-64">
  <div
    class="bg-shade-amber-1 bg-blend-screen bg-auto bg-center bg-no-repeat height-48 width-full"
    style="background-image:url(https://picsum.photos/400?=1)">
  </div>
</div>

{{ console('html',
'<div class="bg-blend-screen bg-shade-amber-1 ... bg-auto bg-center bg-no-repeat ... height-48 width-full" style="background-image:url(...)">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-blend-screen,
      .bg-shade-amber-1,
      .bg-auto,
      .bg-center,
      .bg-no-repeat,
      .height-48,
      .width-full;
}
') }}

Set `overlay` blending mode to background image.

<div class="margin-y-2 margin-x-auto width-64">
  <div
    class="bg-shade-amber-1 bg-blend-overlay bg-auto bg-center bg-no-repeat height-48 width-full"
    style="background-image:url(https://picsum.photos/400?=1)">
  </div>
</div>

{{ console('html',
'<div class="bg-blend-overlay bg-shade-amber-1 ... bg-auto bg-center bg-no-repeat ... height-48 width-full" style="background-image:url(...)">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-blend-overlay,
      .bg-shade-amber-1,
      .bg-auto,
      .bg-center,
      .bg-no-repeat,
      .height-48,
      .width-full;
}
') }}

Set `darken` blending mode to background image.

<div class="margin-y-2 margin-x-auto width-64">
  <div
    class="bg-shade-amber-1 bg-blend-darken bg-auto bg-center bg-no-repeat height-48 width-full"
    style="background-image:url(https://picsum.photos/400?=1)">
  </div>
</div>

{{ console('html',
'<div class="bg-blend-darken bg-shade-amber-1 ... bg-auto bg-center bg-no-repeat ... height-48 width-full" style="background-image:url(...)">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-blend-darken,
      .bg-shade-amber-1,
      .bg-auto,
      .bg-center,
      .bg-no-repeat,
      .height-48,
      .width-full;
}
') }}

Set `lighten` blending mode to background image.

<div class="margin-y-2 margin-x-auto width-64">
  <div
    class="bg-shade-amber-1 bg-blend-lighten bg-auto bg-center bg-no-repeat height-48 width-full"
    style="background-image:url(https://picsum.photos/400?=1)">
  </div>
</div>

{{ console('html',
'<div class="bg-blend-lighten bg-shade-amber-1 ... bg-auto bg-center bg-no-repeat ... height-48 width-full" style="background-image:url(...)">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-blend-lighten,
      .bg-shade-amber-1,
      .bg-auto,
      .bg-center,
      .bg-no-repeat,
      .height-48,
      .width-full;
}
') }}

Set `color` blending mode to background image.

<div class="margin-y-2 margin-x-auto width-64">
  <div
    class="bg-shade-amber-1 bg-blend-color bg-auto bg-center bg-no-repeat height-48 width-full"
    style="background-image:url(https://picsum.photos/400?=1)">
  </div>
</div>

{{ console('html',
'<div class="bg-blend-color bg-shade-amber-1 ... bg-auto bg-center bg-no-repeat ... height-48 width-full" style="background-image:url(...)">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-blend-color,
      .bg-shade-amber-1,
      .bg-auto,
      .bg-center,
      .bg-no-repeat,
      .height-48,
      .width-full;
}
') }}

Set `color-dodge` blending mode to background image.

<div class="margin-y-2 margin-x-auto width-64">
  <div
    class="bg-shade-amber-1 bg-blend-color-dodge bg-auto bg-center bg-no-repeat height-48 width-full"
    style="background-image:url(https://picsum.photos/400?=1)">
  </div>
</div>

{{ console('html',
'<div class="bg-blend-color-dodge bg-shade-amber-1 ... bg-auto bg-center bg-no-repeat ... height-48 width-full" style="background-image:url(...)">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-blend-color-dodge,
      .bg-shade-amber-1,
      .bg-auto,
      .bg-center,
      .bg-no-repeat,
      .height-48,
      .width-full;
}
') }}

Set `color-burn` blending mode to background image.

<div class="margin-y-2 margin-x-auto width-64">
  <div
    class="bg-shade-amber-1 bg-blend-color-burn bg-auto bg-center bg-no-repeat height-48 width-full"
    style="background-image:url(https://picsum.photos/400?=1)">
  </div>
</div>

{{ console('html',
'<div class="bg-blend-color-burn bg-shade-amber-1 ... bg-auto bg-center bg-no-repeat ... height-48 width-full" style="background-image:url(...)">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-blend-color-burn,
      .bg-shade-amber-1,
      .bg-auto,
      .bg-center,
      .bg-no-repeat,
      .height-48,
      .width-full;
}
') }}

Set `hard-light` blending mode to background image.

<div class="margin-y-2 margin-x-auto width-64">
  <div
    class="bg-shade-amber-1 bg-blend-hard-light bg-auto bg-center bg-no-repeat height-48 width-full"
    style="background-image:url(https://picsum.photos/400?=1)">
  </div>
</div>

{{ console('html',
'<div class="bg-blend-hard-light bg-shade-amber-1 ... bg-auto bg-center bg-no-repeat ... height-48 width-full" style="background-image:url(...)">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-blend-hard-light,
      .bg-shade-amber-1,
      .bg-auto,
      .bg-center,
      .bg-no-repeat,
      .height-48,
      .width-full;
}
') }}

Set `soft-light` blending mode to background image.

<div class="margin-y-2 margin-x-auto width-64">
  <div
    class="bg-shade-amber-1 bg-blend-soft-light bg-auto bg-center bg-no-repeat height-48 width-full"
    style="background-image:url(https://picsum.photos/400?=1)">
  </div>
</div>

{{ console('html',
'<div class="bg-blend-soft-light bg-shade-amber-1 ... bg-auto bg-center bg-no-repeat ... height-48 width-full" style="background-image:url(...)">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-blend-soft-light,
      .bg-shade-amber-1,
      .bg-auto,
      .bg-center,
      .bg-no-repeat,
      .height-48,
      .width-full;
}
') }}


Set `different` blending mode to background image.

<div class="margin-y-2 margin-x-auto width-64">
  <div
    class="bg-shade-amber-1 bg-blend-different bg-auto bg-center bg-no-repeat height-48 width-full"
    style="background-image:url(https://picsum.photos/400?=1)">
  </div>
</div>

{{ console('html',
'<div class="bg-blend-different bg-shade-amber-1 ... bg-auto bg-center bg-no-repeat ... height-48 width-full" style="background-image:url(...)">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-blend-different,
      .bg-shade-amber-1,
      .bg-auto,
      .bg-center,
      .bg-no-repeat,
      .height-48,
      .width-full;
}
') }}


Set `exclusion` blending mode to background image.

<div class="margin-y-2 margin-x-auto width-64">
  <div
    class="bg-shade-amber-1 bg-blend-exclusion bg-auto bg-center bg-no-repeat height-48 width-full"
    style="background-image:url(https://picsum.photos/400?=1)">
  </div>
</div>

{{ console('html',
'<div class="bg-blend-exclusion bg-shade-amber-1 ... bg-auto bg-center bg-no-repeat ... height-48 width-full" style="background-image:url(...)">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-blend-exclusion,
      .bg-shade-amber-1,
      .bg-auto,
      .bg-center,
      .bg-no-repeat,
      .height-48,
      .width-full;
}
') }}

Set `hue` blending mode to background image.

<div class="margin-y-2 margin-x-auto width-64">
  <div
    class="bg-shade-amber-1 bg-blend-hue bg-auto bg-center bg-no-repeat height-48 width-full"
    style="background-image:url(https://picsum.photos/400?=1)">
  </div>
</div>

{{ console('html',
'<div class="bg-blend-hue bg-shade-amber-1 ... bg-auto bg-center bg-no-repeat ... height-48 width-full" style="background-image:url(...)">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-blend-hue,
      .bg-shade-amber-1,
      .bg-auto,
      .bg-center,
      .bg-no-repeat,
      .height-48,
      .width-full;
}
') }}


Set `saturation` blending mode to background image.

<div class="margin-y-2 margin-x-auto width-64">
  <div
    class="bg-shade-amber-1 bg-blend-saturation bg-auto bg-center bg-no-repeat height-48 width-full"
    style="background-image:url(https://picsum.photos/400?=1)">
  </div>
</div>

{{ console('html',
'<div class="bg-blend-saturation bg-shade-amber-1 ... bg-auto bg-center bg-no-repeat ... height-48 width-full" style="background-image:url(...)">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-blend-saturation
      .bg-shade-amber-1,
      .bg-auto,
      .bg-center,
      .bg-no-repeat,
      .height-48,
      .width-full;
}
') }}

Set `luminosity` blending mode to background image.

<div class="margin-y-2 margin-x-auto width-64">
  <div
    class="bg-shade-amber-1 bg-blend-luminosity bg-auto bg-center bg-no-repeat height-48 width-full"
    style="background-image:url(https://picsum.photos/400?=1)">
  </div>
</div>

{{ console('html',
'<div class="bg-blend-luminosity bg-shade-amber-1 ... bg-auto bg-center bg-no-repeat ... height-48 width-full" style="background-image:url(...)">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-blend-luminosity,
      .bg-shade-amber-1,
      .bg-auto,
      .bg-center,
      .bg-no-repeat,
      .height-48,
      .width-full;
}
') }}