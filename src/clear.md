---
id: clear
title: Clear
description: Utilities for set whether an element is moved below preceding floated elements.
topic: Layouts
relate: render, display, float, object-fit, object-position, overflow, position, top/bottom/left/right, visibility, z-index
variant: responsive
layout: default
---

> Layouts

# Clear

Utilities for set whether an element is moved below preceding floated elements.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for clear in variants.clear %}{% for item in clear.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| clear-left | clear: left |
| clear-right | clear: right |
| clear-both | clear: both |
| clear-none | clear: none |

## Usage

{% from "misc/console.njk" import console %}

Set image to `float-left` against text `clear-none`.

<div class="padding-x-4 padding-y-2 margin-x-auto width-88">
  <img class="width-32 margin-4 float-left curve-border-lg shadow" src="https://picsum.photos/256">
  <div class="padding-4 clear-none text-sm">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, repellat nostrum? Dolore fugit excepturi suscipit, eveniet fuga soluta corporis libero impedit maiores officiis aliquid obcaecati ex voluptatibus ipsum! Veniam, ratione.
  </div>
</div>

{{ console('html',
'<img class="float-left" src="...">

  <div class="clear-none">
    ...
  </div>
') }}

{{ console('scss',
'.dummy-image {
    @extend
      .float-left;
}
.dummy-text {
   @extend
     .clear-none;
}
') }}

Set image to `float-left` against text `clear-left`.

<div class="padding-x-4 padding-y-2 margin-x-auto width-88">
  <img class="width-32 margin-4 float-left curve-border-lg shadow" src="https://picsum.photos/256">
  <div class="padding-4 clear-left text-sm">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, repellat nostrum? Dolore fugit excepturi suscipit, eveniet fuga soluta corporis libero impedit maiores officiis aliquid obcaecati ex voluptatibus ipsum! Veniam, ratione.
  </div>
</div>

{{ console('html',
'<img class="float-left" src="...">

  <div class="clear-left">
    ...
  </div>
') }}

{{ console('scss',
'.dummy-image {
    @extend
      .float-left;
}
.dummy-text {
   @extend
     .clear-left;
}
') }}

Set image to `float-right` against text `clear-right`.

<div class="padding-x-4 padding-y-2 margin-x-auto width-88">
  <img class="width-32 margin-4 float-right curve-border-lg shadow" src="https://picsum.photos/256">
  <div class="padding-4 clear-right text-sm">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, repellat nostrum? Dolore fugit excepturi suscipit, eveniet fuga soluta corporis libero impedit maiores officiis aliquid obcaecati ex voluptatibus ipsum! Veniam, ratione.
  </div>
</div>

{{ console('html',
'<img class="float-right" src="...">

  <div class="clear-right">
    ...
  </div>
') }}

{{ console('scss',
'.dummy-image {
    @extend
      .float-right;
}
.dummy-text {
   @extend
     .clear-right;
}
') }}
