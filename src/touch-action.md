---
id: touch-action
title: Touch Action
description: Utilities for set control over the effect of touchscreen interactions to an element.
topic: Interactivity
variant: responsive
layout: default
---

> Interactivity

# Touch Action

Utilities for set control over the effect of touchscreen interactions to an element.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for touchaction in variants.touchaction %}{% for item in touchaction.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| touch-auto | touch-action: auto |
| touch-none | touch-action: none |
| touch-pan-x | touch-action: pan-x |
| touch-pan-left | touch-action: pan-left |
| touch-pan-right | touch-action: pan-right |
| touch-pan-y | touch-action: pan-y |
| touch-pan-up | touch-action: pan-up |
| touch-pan-down | touch-action: pan-down |
| touch-pinch-zoom | touch-action: pinch-zoom |
| touch-manipulation | touch-action: manipulation |

---

## Usage

{% from "misc/console.njk" import console %}

Set an element with touch limit to `pan-left`, no `pan-right` is allowed.

<div class="padding-y-2 margin-x-auto width-48 height-48 touch-pan-left overflow-auto overscroll-contain">
  <div class="width-64 height-64">
    <img src="https://picsum.photos/500">
  </div>
</div>

{{ console('html',
'<div class="touch-pan-left ... overflow-scroll overscroll-contain">
    <div class="width-64 height-64">
      <img src="...">
    </div>
  </div>
') }}

{{ console('scss',
'.dummy-parent {
    @extend
      .touch-pan-left,
      .overflow-scroll,
      .overscroll-contain;
}
.dummy-child {
    @extend
      .width-64,
      .height-64;
}
') }}

Set an element with touch limit to `pan-none`, `x` and `y` panning is disabled.

<div class="padding-y-2 margin-x-auto width-48 height-48 touch-none overflow-auto overscroll-contain">
  <div class="width-64 height-64">
    <img src="https://picsum.photos/500">
  </div>
</div>

{{ console('html',
'<div class="touch-none ... overflow-scroll overscroll-contain">
    <div class="width-64 height-64">
      <img src="...">
    </div>
  </div>
') }}

{{ console('scss',
'.dummy-parent {
    @extend
      .touch-none,
      .overflow-scroll,
      .overscroll-contain;
}
.dummy-child {
    @extend
      .width-64,
      .height-64;
}
') }}

Set an element with full touch manipulation, `x` and `y` panning is enabled.

<div class="padding-y-2 margin-x-auto width-48 height-48 touch-manipulation overflow-auto overscroll-contain">
  <div class="margin-1 width-64 height-64">
    <img src="https://picsum.photos/800?=1">
  </div>
</div>

{{ console('html',
'<div class="touch-manipulation ... overflow-scroll overscroll-contain">
    <div class="width-64 height-64">
      <img src="...">
    </div>
  </div>
') }}

{{ console('scss',
'.dummy-parent {
    @extend
      .touch-manipulation,
      .overflow-scroll,
      .overscroll-contain;
}
.dummy-child {
    @extend
      .width-64,
      .height-64;
}
') }}
