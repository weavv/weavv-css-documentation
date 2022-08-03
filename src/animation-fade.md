---
id: animation-fade
title: Fade Animation
description: Utilities for sets the fading animation to an element.
topic: Animations
relate: animation, animation-blur, animation-delay, animation-duration, animation-loop, animation-roll, animation-slide
variant: hover
layout: default
---

> Animations

# Animation Fade

Utilities for sets the fading animation to an element.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for animationfade in variants.animationfade %}{% for item in animationfade.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> | |
|:--|:--|:-:|
| fade-in | @keyframes fade-in { from { opacity: 0 } to { opacity: 1 }} | <div class="text-lg animation fade-in duration-800 delay-2 loop-infinite">Text</div> |
| fade-in-bottom-left | @keyframes fade-in-bottom-left { from { opacity: 0; transform: translate3d(-100%, 100%, 0) } to { opacity: 1; transform: translate3d(0, 0, 0) }} | <div class="text-lg animation fade-in-bottom-left duration-800 delay-2 loop-infinite">Text</div> |
| fade-in-bottom-right | @keyframes fade-in-bottom-right { from { opacity: 0; transform: translate3d(100%, 100%, 0) } to { opacity: 1; transform: translate3d(0, 0, 0) }} | <div class="text-lg animation fade-in-bottom-right duration-800 delay-2 loop-infinite">Text</div> |
| fade-in-up | @keyframes fade-in-up { from { opacity: 0; transform: translate3d(0, 100%, 0) } to { opacity: 1; transform: translate3d(0, 0, 0) }} | <div class="text-lg animation fade-in-up duration-800 delay-2 loop-infinite">Text</div> |
| fade-in-down | @keyframes fade-in-down { from { opacity: 0; transform: translate3d(0, -100%, 0) } to { opacity: 1; transform: translate3d(0, 0, 0) }} | <div class="text-lg animation fade-in-down duration-800 delay-2 loop-infinite">Text</div> |
| fade-in-left | @keyframes fade-in-left { from { opacity: 0; transform: translate3d(-100%, 0, 0) } to { opacity: 1; transform: translate3d(0, 0, 0) }} | <div class="text-lg animation fade-in-left duration-800 delay-2 loop-infinite">Text</div> |
| fade-in-right | @keyframes fade-in-right { from { opacity: 0; transform: translate3d(100%, 0, 0) } to { opacity: 1; transform: translate3d(0, 0, 0) }} | <div class="text-lg animation fade-in-right duration-800 delay-2 loop-infinite">Text</div> |
| fade-in-top-left | @keyframes fade-in-top-left { from { opacity: 0; transform: translate3d(-100%, -100%, 0) } to { opacity: 1; transform: translate3d(0, 0, 0) }} | <div class="text-lg animation fade-in-top-left duration-800 delay-2 loop-infinite">Text</div> |
| fade-in-top-right | @keyframes fade-in-top-right { from { opacity: 0; transform: translate3d(100%, -100%, 0) } to { opacity: 1; transform: translate3d(0, 0, 0) }} | <div class="text-lg animation fade-in-top-right duration-800 delay-2 loop-infinite">Text</div> |
| fade-out | @keyframes fade-in-down { from { opacity: 1 } to { opacity: 0 }} | <div class="text-lg animation fade-out duration-800 delay-2 loop-infinite">Text</div> |
| fade-out-bottom-left | @keyframes fade-out-bottom-left { from { opacity: 1; transform: translate3d(0, 0, 0) } to { opacity: 1; transform: translate3d(-100%, 100%, 0) }} | <div class="text-lg animation fade-out-bottom-left duration-800 delay-2 loop-infinite">Text</div> |
| fade-out-bottom-right | @keyframes fade-out-bottom-right { from { opacity: 1; transform: translate3d(0, 0, 0) } to { opacity: 1; transform: translate3d(100%, 100%, 0) }} | <div class="text-lg animation fade-out-bottom-right duration-800 delay-2 loop-infinite">Text</div> |
| fade-out-down | @keyframes fade-out-down { from { opacity: 1; transform: translate3d(0, 0, 0) } to { opacity: 1; transform: translate3d(0, 100%, 0) }} | <div class="text-lg animation fade-out-down duration-800 delay-2 loop-infinite">Text</div> |
| fade-out-left | @keyframes fade-out-left { from { opacity: 1; transform: translate3d(0, 0, 0) } to { opacity: 0; transform: translate3d(-100%, 0, 0) }} | <div class="text-lg animation fade-out-left duration-800 delay-2 loop-infinite">Text</div> |
| fade-out-right | @keyframes fade-out-right { from { opacity: 1; transform: translate3d(0, 0, 0) } to { opacity: 0; transform: translate3d(100%, 0, 0) }} | <div class="text-lg animation fade-out-right duration-800 delay-2 loop-infinite">Text</div> |
| fade-out-top-left | @keyframes fade-out-top-left { from { opacity: 1; transform: translate3d(0, 0, 0) } to { opacity: 0; transform: translate3d(-100%, -100%, 0) }} | <div class="text-lg animation fade-out-top-left duration-800 delay-2 loop-infinite">Text</div> |
| fade-out-top-right | @keyframes fade-out-top-right { from { opacity: 1; transform: translate3d(0, 0, 0) } to { opacity: 0; transform: translate3d(100%, -100%, 0) }} | <div class="text-lg animation fade-out-top-right duration-800 delay-2 loop-infinite">Text</div> |
| fade-out-top-up | @keyframes fade-out-top-up { from { opacity: 1; transform: translate3d(0, 0, 0) } to { opacity: 0; transform: translate3d(0, -100%, 0) }} | <div class="text-lg animation fade-out-top-up duration-800 delay-2 loop-infinite">Text</div> |

---

## Usage

{% from "misc/console.njk" import console %}

Set basic fade animation.

{{ console('html',
'<div class="animation fade-in">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .animation,
      .fade-in;
}
') }}

Mix with duration.

{{ console('html',
'<div class="animation fade-in duration-2000">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .animation,
      .fade-in,
      .duration-2000;
}
') }}

Mix with duration and delay.

{{ console('html',
'<div class="animation fade-in duration-2000 delay-2">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .animation,
      .fade-in,
      .duration-2000,
      .delay-2;
}
') }}

Mix with duration, delay and infinite looping.

{{ console('html',
'<div class="animation fade-in duration-2000 loop-infinite">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .animation,
      .fade-in,
      .duration-2000,
      .loop-infinite;
}
') }}

Apply `(hover)` variant.

{{ console('html',
'<div class="animation (hover)fade-in">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .animation,
      .\(hover\)fade-in;
}
') }}