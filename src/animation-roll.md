---
id: animation-roll
title: Roll Animation
description: Utilities for sets the rolling animation to an element.
topic: Animations
relate: animation, animation-blur, animation-delay, animation-duration, animation-fade, animation-loop, animation-slide
variant: hover
layout: default
---

> Animations

# Animation Roll

Utilities for sets the rolling animation to an element.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for animationroll in variants.animationroll %}{% for item in animationroll.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> | |
|:--|:--|:-:|
| roll-in-left | @keyframes roll-in-left { from { opacity: 0; transform: translate3d(-100%, 0, 0) } to { opacity: 1; transform: translate3d(0, 0, 0) }} | <div class="text-lg animation roll-in-left duration-800 delay-2 loop-infinite">Text</div> |
| roll-in-right | @keyframes roll-in-right { from { opacity: 0; transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg) } to { opacity: 1; transform: translate3d(0, 0, 0); }} | <div class="text-lg animation roll-in-right duration-800 delay-2 loop-infinite">Text</div> |
| roll-out-left | @keyframes roll-out-left { from { opacity: 1 } to { opacity: 0; transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg) }} | <div class="text-lg animation roll-out-left duration-800 delay-2 loop-infinite">Text</div> |
| roll-out-right | @keyframes roll-out-right { from { opacity: 1 } to { opacity: 0; transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg) }} | <div class="text-lg animation roll-out-right duration-800 delay-2 loop-infinite">Text</div> |

---

## Usage

{% from "misc/console.njk" import console %}

Set basic roll animation.

{{ console('html',
'<div class="animation roll-in-left">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .animation,
      .roll-in-left;
}
') }}

Mix with duration.

{{ console('html',
'<div class="animation roll-in-left duration-2000">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .animation,
      .roll-in-left,
      .duration-2000;
}
') }}

Mix with duration and delay.

{{ console('html',
'<div class="animation roll-in-left duration-2000 delay-2">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .animation,
      .roll-in-left,
      .duration-2000,
      .delay-2;
}
') }}

Mix with duration, delay and infinite looping.

{{ console('html',
'<div class="animation roll-in-left duration-2000 delay-2 loop-infinite">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .animation,
      .roll-in-left,
      .duration-2000,
      .loop-infinite;
}
') }}

Apply `(hover)` variant,

{{ console('html',
'<div class="animation (hover)roll-in-left">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .animation,
      .\(hover\)roll-in-left;
}
') }}

