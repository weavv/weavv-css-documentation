---
id: skew
title: Skew
description: Utilities for skews an element that has transform applied.
topic: Transforms
relate: translate, transform, rotate, scale
variant: hover, group-hover, focus, focus-visible
layout: default
---

> Transforms

# Skew Transform

Utilities for skews an element that has transform applied.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for skew in variants.skew %}{% for item in skew.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| skew-x-0 | --transform-skew-x: 0 |
| skew-x-3 | --transform-skew-x: 3deg |
| skew-x-6 | --transform-skew-x: 6deg |
| skew-x-12 | --transform-skew-x: 12deg |
| -skew-x-12 | --transform-skew-x: -12deg |
| -skew-x-6 | --transform-skew-x: -6deg |
| -skew-x-3 | --transform-skew-x: -3deg |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| skew-y-0 | --transform-skew-y: 0 |
| skew-y-3 | --transform-skew-y: 3deg |
| skew-y-6 | --transform-skew-y: 6deg |
| skew-y-12 | --transform-skew-y: 12deg |
| -skew-y-12 | --transform-skew-y: -12deg |
| -skew-y-6 | --transform-skew-y: -6deg |
| -skew-y-3 | --transform-skew-y: -3deg |

---

## Usage

{% from "misc/console.njk" import console %}

Set basic [Transform Origin](/transform-origin/) with [Skew](/skew/) utility. (See [Scale](/scale/), [Rotate](/rotate/)).

Set the element skew `horizontal`.

<div class="margin-y-6 margin-x-auto width-32">
  <div class="padding-16 height-48 width-48 bg-tint-granite-5 flex justify-center items-center curve-border-lg">
    <img class="height-32 width-32 transform skew-x-12 curve-border shadow" src="https://picsum.photos/200?=1">
  </div>
</div>

{{ console('html',
'<img class="transform skew-x-12 ... height-32 width-24" src="...">

  <div class="transform skew-x-12 ... height-32 width-24" style="background-image:utl(...)">
    ...
  </div>
') }}

{{ console('scss',
'img {
    @extend
      .transform,
      .skew-x-12,
      .height-32,
      .width-24;
}
.dummy {
    @extend
      .transform,
      .skew-x-12,
      .height-32,
      .width-24;
}
') }}

Set the element skew `vertical`.

<div class="margin-y-6 margin-x-auto width-32">
  <div class="padding-16 height-48 width-48 bg-tint-granite-5 flex justify-center items-center curve-border-lg">
    <img class="height-32 width-32 transform skew-y-12 curve-border shadow" src="https://picsum.photos/200?=1">
  </div>
</div>

Set the element skew reverse `horizontal`.

<div class="margin-y-6 margin-x-auto width-32">
  <div class="padding-16 height-48 width-48 bg-tint-granite-5 flex justify-center items-center curve-border-lg">
    <img class="height-32 width-32 transform -skew-x-12 curve-border shadow" src="https://picsum.photos/200?=1">
  </div>
</div>

{{ console('html',
'<img class="transform -skew-x-12 ... height-32 width-24" src="...">

  <div class="transform -skew-x-12 ... height-32 width-24" style="background-image:utl(...)">
    ...
  </div>
') }}

{{ console('scss',
'img {
    @extend
      .transform,
      .-skew-x-12,
      .height-32,
      .width-24;
}
.dummy {
    @extend
      .transform,
      .-skew-x-12,
      .height-32,
      .width-24;
}
') }}

Set the element skew reverse `vertical`.

<div class="margin-y-6 margin-x-auto width-32">
  <div class="padding-16 height-48 width-48 bg-tint-granite-5 flex justify-center items-center curve-border-lg">
    <img class="height-32 width-32 transform -skew-y-12 curve-border shadow" src="https://picsum.photos/80?=1">
  </div>
</div>

{{ console('html',
'<img class="transform -skew-y-12 ... height-32 width-24" src="...">

  <div class="transform -skew-y-12 ... height-32 width-24" style="background-image:utl(...)">
    ...
  </div>
') }}

{{ console('scss',
'img {
    @extend
      .transform,
      .-skew-y-12,
      .height-32,
      .width-24;
}
.dummy {
    @extend
      .transform,
      .-skew-y-12,
      .height-32,
      .width-24;
}
') }}


