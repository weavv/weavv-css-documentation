---
id: object-position
title: Object Position
description: Utilities for sets the alignment of the selected replaced element.
topic: Layouts
relate: clear, render, display, float, object-fit, overflow, position, top/bottom/left/right, visibility, z-index
variant: responsive
layout: default
---

> Layouts

# Object Position

Utilities for sets the alignment of the selected replaced element.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for objectposition in variants.objectposition %}{% for item in objectposition.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| object-top | object-position: top |
| object-bottom | object-position: bottom |
| object-center | object-position: center |
| object-left | object-position: left |
| object-left-bottom | object-position: left bottom |
| object-left-top | object-position: left top |
| object-right | object-position: right |
| object-right-bottom | object-position: right bottom |
| object-right-top | object-position: right top |

---

## Usage

{% from "misc/console.njk" import console %}

<div class="padding-4 margin-y-2 margin-x-auto">
  <div class="max-width-lg flex justify-center items-center">
    <div class="text-center">
      <img class="inline-block width-32 height-auto object-contain bg-tint-granite-5 curve-border-lg" src="https://picsum.photos/256?=1" alt="">
      <div class="padding-t-2 text-sm text-center">
        Original
      </div>
    </div>
  </div>
</div>

<div class="padding-4 margin-y-2 margin-x-auto">
  <div class="max-width-lg flex justify-center items-center">
    <div class="flex flex-gap-6 flex-wrap justify-center items-center">
      <div class="text-center">
        <img class="inline-block bg-tint-granite-5 curve-border-lg width-24 height-24 object-none object-top" src="https://picsum.photos/256?=1">
        <div class="padding-t-2 text-sm text-center">
          object-top
        </div>
      </div>
      <div class="text-center">
        <img class="inline-block bg-tint-granite-5 curve-border-lg width-24 height-24 object-none object-left" src="https://picsum.photos/256?=1">
        <div class="padding-t-2 text-sm text-center">
          object-left
        </div>
      </div>
      <div class="text-center">
        <img class="inline-block bg-tint-granite-5 curve-border-lg width-24 height-24 object-none object-left-bottom" src="https://picsum.photos/256?=1">
        <div class="padding-t-2 text-sm text-center">
          object-left-bottom
        </div>
      </div>
      <div class="text-center">
        <img class="inline-block bg-tint-granite-5 curve-border-lg width-24 height24 object-none object-left-top" src="https://picsum.photos/256?=1">
        <div class="padding-t-2 text-sm text-center">
          object-left-top
        </div>
      </div>
      <div class="text-center">
        <img class="inline-block bg-tint-granite-5 curve-border-lg width-24 height-24 object-none object-right" src="https://picsum.photos/256?=1">
        <div class="padding-t-2 text-sm text-center">
          object-right
        </div>
      </div>
      <div class="text-center">
        <img class="inline-block bg-tint-granite-5 curve-border-lg width-24 height-24 object-none object-right-bottom" src="https://picsum.photos/256?=1">
        <div class="padding-t-2 text-sm text-center">
          object-right-bottom
        </div>
      </div>
      <div class="text-center">
        <img class="inline-block bg-tint-granite-5 curve-border-lg width-24 height-24 object-none object-right-top" src="https://picsum.photos/256?=1">
        <div class="padding-t-2 text-sm text-center">
          object-right-top
        </div>
      </div>
    </div>
  </div>
</div>

{{ console('html',
'<img class="object-top ... object-none ... width-24 height-24" src="...">
') }}

{{ console('scss',
'img {
    @extend
      .object-top,
      .object-none,
      .width-24,
      .height-24;
}
') }}

