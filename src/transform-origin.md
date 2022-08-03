---
id: transform-origin
title: Transform Origin
description: Utilities for sets the origin of an element's transforms.
topic: Transforms
relate: translate, rotate, scale, skew
variant: hover, focus-visible, focus-within
layout: default
---

> Transforms

# Transform Origin

Utilities for sets the origin of an element's transforms.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for transformorigin in variants.transformorigin %}{% for item in transformorigin.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| origin-top | transform-origin: top |
| origin-bottom | transform-origin: bottom |
| origin-left | transform-origin: left |
| origin-right | transform-origin: right |
| origin-center | transform-origin: center |
| origin-top-left | transform-origin: top left |
| origin-top-right | transform-origin: top right |
| origin-bottom-left | transform-origin: bottom left |
| origin-bottom-right | transform-origin: bottom right |

---

## Usage

{% from "misc/console.njk" import console %}

Set basic transform-origin with [Rotate](/rotate/), [Skew](/skew/), and [Scale](/scale/) utilities.

Set the element origin to `center`.

<div class="margin-y-16 margin-x-auto width-32">
  <div class="height-32 width-32 bg-tint-granite-5">
    <img class="height-32 width-32 origin-center transform rotate-45 curve-border-lg shadow" src="https://picsum.photos/200?=1">
  </div>
</div>

{{ console('html',
'<img class="origin-center ... transform rotate-45 ... height-32 width-24" src="...">
') }}

{{ console('scss',
'img {
    @extend
      .origin-center,
      .transform,
      .rotate-45,
      .height-32,
      .width-24;
}
') }}

Set the element origin to `top-left`.

<div class="margin-y-16 margin-x-auto width-32">
  <div class="height-32 width-32 bg-tint-granite-5">
    <img class="height-32 width-32 origin-top-left transform rotate-45 curve-border shadow" src="https://picsum.photos/200?=1">
  </div>
</div>

{{ console('html',
'<img class="origin-top-left ... transform rotate-45 ... height-32 width-24" src="...">
') }}

{{ console('scss',
'img {
    @extend
      .origin-top-left,
      .transform,
      .rotate-45,
      .height-32,
      .width-24;
}
') }}

Set the element origin to `bottom-right`.

<div class="margin-y-16 margin-x-auto width-32">
  <div class="height-32 width-32 bg-tint-granite-5">
    <img class="height-32 width-32 origin-bottom-right transform rotate-45 curve-border shadow" src="https://picsum.photos/200?=1">
  </div>
</div>

{{ console('html',
'<img class="origin-bottom-right ... transform rotate-45 ... height-32 width-24" src="...">
') }}

{{ console('scss',
'img {
    @extend
      .origin-bottom-right,
      .transform,
      .rotate-45,
      .height-32,
      .width-24;
}
') }}

Set the element origin to `right`.

<div class="margin-y-16 margin-x-auto width-32">
  <div class="height-32 width-32 bg-tint-granite-5">
    <img class="height-32 width-32 origin-right transform rotate-45 curve-border shadow" src="https://picsum.photos/200?=1">
  </div>
</div>

{{ console('html',
'<img class="origin-right ... transform rotate-45 ... height-32 width-24" src="...">
') }}

{{ console('scss',
'img {
    @extend
      .origin-right,
      .transform,
      .rotate-45,
      .height-32,
      .width-24;
}
') }}

Set the element origin to `bottom-right`.

<div class="margin-y-16 margin-x-auto width-32">
  <div class="height-32 width-32 bg-tint-granite-5">
    <img class="height-32 width-32 origin-bottom-right transform rotate-45 curve-border shadow" src="https://picsum.photos/200?=1">
  </div>
</div>

{{ console('html',
'<img class="origin-center ... transform rotate-45 ... height-32 width-24" src="...">
') }}

{{ console('scss',
'img {
    @extend
      .origin-center,
      .transform,
      .rotate-45,
      .height-32,
      .width-24;
}
') }}

Set the element origin to `bottom-left`.

<div class="margin-t-16 margin-b-20 margin-x-auto width-32">
  <div class="height-32 width-32 bg-tint-granite-5">
    <img class="height-32 width-32 origin-bottom-left transform rotate-45 curve-border shadow" src="https://picsum.photos/200?=1">
  </div>
</div>

{{ console('html',
'<img class="origin-bottom-left ... transform rotate-45 ... height-32 width-24" src="...">
') }}

{{ console('scss',
'img {
    @extend
      .origin-bottom-left,
      .transform,
      .rotate-45,
      .height-32,
      .width-24;
}
') }}

Set the element origin to `left`.

<div class="margin-t-16 margin-b-20 margin-x-auto width-32">
  <div class="height-32 width-32 bg-tint-granite-5">
    <img class="height-32 width-32 origin-left transform rotate-45 curve-border shadow" src="https://picsum.photos/200?=1">
  </div>
</div>

{{ console('html',
'<img class="origin-left ... transform rotate-45 ... height-32 width-24" src="...">
') }}

{{ console('scss',
'img {
    @extend
      .origin-left,
      .transform,
      .rotate-45,
      .height-32,
      .width-24;
}
') }}

Set the element origin to `top-left`.

<div class="margin-t-16 margin-b-20 margin-x-auto width-32">
  <div class="height-32 width-32 bg-tint-granite-5">
    <img class="height-32 width-32 origin-top-left transform rotate-45 curve-border shadow" src="https://picsum.photos/200?=1">
  </div>
</div>

{{ console('html',
'<img class="origin-top-left ... transform rotate-45 ... height-32 width-24" src="...">
') }}

{{ console('scss',
'img {
    @extend
      .origin-top-left,
      .transform,
      .rotate-45,
      .height-32,
      .width-24;
}
') }}
