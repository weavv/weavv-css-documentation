---
id: animation-slide
title: Slide Animation
description: Utilities for sets the sliding animation to an element.
topic: Animations
relate: animation, animation-blur, animation-delay, animation-duration, animation-fade, animation-loop, animation-roll
variant: hover
layout: default
---

> Animations

# Animation Slide

Utilities for sets the sliding animation to an element.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for animationslide in variants.animationslide %}{% for item in animationslide.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> | |
|:--|:--|:-:|
| slide-in-up | @keyframes slide-in-up { from { transform: translate3d(0, 100%, 0); visibility: visible } to { transform: translate3d(0, 0, 0) }} | <div class="text-lg animation slide-in-up duration-800 delay-2 loop-infinite">Text</div> |
| slide-in-down | @keyframes slide-in-down { from { transform: translate3d(0, -100%, 0); visibility: visible } to { transform: translate3d(0, 0, 0) }} | <div class="text-lg animation slide-in-down duration-800 delay-2 loop-infinite">Text</div> |
| slide-in-left | @keyframes slide-in-left { from { transform: translate3d(-100%, 0, 0); visibility: visible } to { transform: translate3d(0, 0, 0) }} | <div class="text-lg animation slide-in-left duration-800 delay-2 loop-infinite">Text</div> |
| slide-in-right | @keyframes slide-in-right { from { transform: translate3d(100%, 0, 0); visibility: visible } to { transform: translate3d(0, 0, 0) }} | <div class="text-lg animation slide-in-right duration-800 delay-2 loop-infinite">Text</div> |
| slide-out-up | @keyframes slide-out-up { from { transform: translate3d(0, 0, 0) } to { visibility: hidden; transform: translate3d(0, -100%, 0) }} | <div class="text-lg animation slide-out-up duration-800 delay-2 loop-infinite">Text</div> |
| slide-out-down | @keyframes slide-out-down { from { transform: translate3d(0, 0, 0) } to { visibility: hidden; transform: translate3d(0, 100%, 0) }} | <div class="text-lg animation slide-out-down duration-800 delay-2 loop-infinite">Text</div> |
| slide-out-left | @keyframes slide-out-left { from { transform: translate3d(0, 0, 0) } to { visibility: hidden; transform: translate3d(-100%, 0, 0) }} | <div class="text-lg animation slide-out-left duration-800 delay-2 loop-infinite">Text</div> |
| slide-out-right | @keyframes slide-out-right { from { transform: translate3d(0, 0, 0) } to { visibility: hidden; transform: translate3d(100%, 0, 0) }} | <div class="text-lg animation slide-out-right duration-800 delay-2 loop-infinite">Text</div> |

---

## Usage

{% from "misc/console.njk" import console %}

Set basic slide animation.

{{ console('html',
'<div class="animation slide-in-up">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .animation,
      .slide-in-up;
}
') }}

Mix with duration.

{{ console('html',
'<div class="animation slide-in-up duration-2000">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .animation,
      .slide-in-up,
      .duration-2000;
}
') }}

Mix with duration and delay.

{{ console('html',
'<div class="animation slide-in-up duration-2000 delay-2">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .animation,
      .slide-in-up,
      .duration-2000,
      .delay-2;
}
') }}

Mix with duration, delay and infinite looping.

{{ console('html',
'<div class="animation slide-in-up duration-2000 delay-2 loop-infinite">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .animation,
      .slide-in-up,
      .duration-2000,
      .loop-infinite;
}
') }}

Apply `(hover)` variant,

{{ console('html',
'<div class="animation (hover)slide-in-up">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .animation,
      .\(hover\)slide-in-up;
}
') }}