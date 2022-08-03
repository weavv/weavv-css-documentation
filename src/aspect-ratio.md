---
id: aspect-ratio
title: Aspect Ratio
description: Utilities for set dimension of aspect ratio to an element.
topic: Layouts
relate: width
variant: responsive
layout: default
---

> Layouts

<style>
  .supports { display: block }
  @supports (aspect-ratio: 1/1) { .supports { display: none } }
</style>

<div class="supports margin-y-4 padding-3 border-l-8 border-orange-6 text-sm text-orange-6 (dark)text-orange-5 bg-orange-2 (dark)bg-orange-9">
  <span class="padding-r-1 font-semibold">Note:</span>
  This web browser does not currently support the utilities.
</div>

# Aspect Ratio

Utilities for set dimension of aspect ratio to an element.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for aspectratio in variants.aspectratio %}{% for item in aspectratio.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| aspect-ratio-1/1 | aspect-ratio: 1/1 |
| aspect-ratio-1/2 | aspect-ratio: 1/2 |
| aspect-ratio-2/1 | aspect-ratio: 2/1 |
| aspect-ratio-4/3 | aspect-ratio: auto 4/3 |
| aspect-ratio-16/9 | aspect-ratio: 16/9 |
| aspect-ratio-21/9 | aspect-ratio: 21/9 |

## Usage

{% from "misc/console.njk" import console %}

<div class="padding-x-4 margin-y-2 margin-x-auto flex flex-wrap flex-gap-4 justify-start items-start (expand)bg-tint-granite-5">
  <div class="aspect-ratio-1/1 width-32 flex justify-center items-center border border-tint-granite-1">
    Ratio 1:1
  </div>
  <div class="aspect-ratio-1/2 width-32 flex justify-center items-center border border-tint-granite-1">
    Ratio 1:2
  </div>
  <div class="aspect-ratio-2/1 width-32 flex justify-center items-center border border-tint-granite-1">
    Ratio 2:1
  </div>
  <div class="aspect-ratio-4/3 width-32 flex justify-center items-center border border-tint-granite-1">
    Ratio 4:3
  </div>
  <div class="aspect-ratio-16/9 width-32 flex justify-center items-center border border-tint-granite-1">
    Ratio 16:9
  </div>
  <div class="aspect-ratio-21/9 width-32 flex justify-center items-center border border-tint-granite-1">
    Ratio 21:9
  </div>
</div>

{{ console('html',
'<div class="aspect-ratio-21/9 ... width-32 ... bg-tint-granite-5">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .aspect-ratio-21\/9,
      .width-32,
      .bg-tint-granite-5;
}
') }}

<div class="padding-x-4 margin-y-2 margin-x-auto flex flex-wrap flex-gap-4 justify-start items-start">
  <img class="aspect-ratio-1/1 object-cover object-center width-32 flex justify-center items-center bg-tint-granite-5 border border-tint-granite-1" src="https://picsum.photos/400?=1">
  <img class="aspect-ratio-1/2 object-cover object-center width-32 flex justify-center items-center bg-tint-granite-5 border border-tint-granite-1" src="https://picsum.photos/400?=1">
  <img class="aspect-ratio-2/1 object-cover object-center width-32 flex justify-center items-center bg-tint-granite-5 border border-tint-granite-1" src="https://picsum.photos/400?=1">
  <img class="aspect-ratio-4/3 object-cover object-center width-32 flex justify-center items-center bg-tint-granite-5 border border-gtint-granite-1" src="https://picsum.photos/400?=1">
  <img class="aspect-ratio-16/9 object-cover object-center width-32 flex justify-center items-center bg-tint-granite-5 border border-gtint-granite-1" src="https://picsum.photos/400?=1">
  <img class="aspect-ratio-21/9 object-cover object-center width-32 flex justify-center items-center bg-tint-granite-5 border border-tint-granite-1" src="https://picsum.photos/400?=1">
</div>

{{ console('html',
'<div class="aspect-ration-21/9 ... width-32 ... object-cover object-center ... flex justify-center items-center ... bg-tint-granite-5 ... border border-tint-granite-1">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .aspect-ratio-21\/9,
      .width-32,
      .object-cover,
      .object-center,
      .flex,
      .justify-center,
      .items-center,
      .bg-tint-granite-5,
      .border border-tint-granite-1
}
') }}
