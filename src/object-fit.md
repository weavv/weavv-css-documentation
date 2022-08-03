---
id: object-fit
title: Object Fit
description: Utilities for sets how the content of a replaced element (img or video tag) should be resized.
topic: Layouts
relate: clear, render, display, float, object-position, overflow, position, top/bottom/left/right, visibility, z-index
variant: responsive
layout: default
---

> Layouts

# Object Fit

Utilities for sets how the content of a replaced element (img or video tag) should be resized.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for objectfit in variants.objectfit %}{% for item in objectfit.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| object-contain | object-fit: contain |
| object-cover | object-fit: cover |
| object-fill | object-fit: fill |
| object-none | object-fit: none |
| object-scale-down | object-fit: scale-down |

---

## Usage

{% from "misc/console.njk" import console %}

Set object-fit for image.

<div class="padding-4 margin-y-2 margin-x-auto">
  <div class="max-width-lg flex flex-row flex-gap-4 justify-center items-center">
    <div class="flex-shrink-0">
      <div class="bg-tint-granite-5 overflow-hidden curve-border-lg">
        <img class="width-32 height-48 bg-gray-2 object-cover" src="https://picsum.photos/600?=1">
      </div>
      <div class="padding-t-2 text-sm text-center">
        object-cover
      </div>
    </div>
    <div class="flex-shrink-0">
      <div class="bg-tint-granite-5 overflow-hidden curve-border-lg">
        <img class="width-32 height-48 object-fill" src="https://picsum.photos/600?=1">
      </div>
      <div class="padding-t-2 text-sm text-center">
        object-fill
      </div>
    </div>
    <div class="flex-shrink-0">
      <div class="bg-tint-granite-5 overflow-hidden curve-border-lg">
        <img class="width-32 height-48 object-scale-down" src="https://picsum.photos/600?=1">
      </div>
      <div class="padding-t-2 text-sm text-center">
        object-scale-down
      </div>
    </div>
    <div class="flex-shrink-0">
      <div class="bg-tint-granite-5 overflow-hidden curve-border-lg">
        <img class="width-32 height-48 object-none" src="https://picsum.photos/600?=1">
      </div>
      <div class="padding-t-2 text-sm text-center">
        object-none
      </div>
    </div>
  </div>
</div>

{{ console('html',
'<img class="object-none ... width-32 height-48" src="...">
') }}

{{ console('scss',
'.dummy {
    @extend
      .object-none,
      .width-32,
      .height-48;
}
') }}

Set object-fit for video.

<div class="padding-4 margin-y-2 margin-x-auto">
  <div class="max-width-lg flex flex-row flex-gap-4 justify-center items-center">
    <div class="flex-shrink-0">
      <div class="bg-tint-granite-5 overflow-hidden curve-border-lg">
        <video class="width-64 height-32 bg-tint-granite-5 object-cover" controls>
          <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4">
        </video>
      </div>
      <div class="padding-t-2 text-sm text-center">
        object-cover
      </div>
    </div>
    <div class="flex-shrink-0">
      <div class="bg-tint-granite-5 overflow-hidden curve-border-lg">
        <video class="width-64 height-32 bg-tint-granite-5 object-fill" controls>
          <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4">
        </video>
      </div>
      <div class="padding-t-2 text-sm text-center">
        object-fill
      </div>
    </div>
  </div>
</div>

{{ console('html',
'<video class="object-cover ... width-64 height-40" controls>
    <source src="..." type="video/mp4">
  </video>
') }}

{{ console('scss',
'video {
    @extend
      .object-cover,
      .width-64,
      .height-40;
}
') }}
