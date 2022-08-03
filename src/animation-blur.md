---
id: animation-blur
title: Blur Animation
description: Utilities for sets the blur animation to an element.
topic: Animations
relate: animation, animation-delay, animation-duration, animation-fade, animation-loop, animation-roll, animation-slide
variant: hover
layout: default
---

> Animations

# Animation Blur

Utilities for sets the blur animation to an element.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for animationblur in variants.animationblur %}{% for item in animationblur.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1  text-white (dark)text-charcoal-1 bg-gray-7 (dark)bg-gray-6 curve-border-full">class</span> | <span class="padding-x-3 padding-y-1  text-white (dark)text-charcoal-1 bg-gray-7 (dark)bg-gray-6 curve-border-full">css</span> | |
|:--|:--|:-:|
| blur-in | @keyframes blur-in { from { opacity: 0; filter: blur(4px) } to { opacity: 1; filter: blur(0) }} | <div class="text-lg animation blur-in duration-800 delay-2 loop-infinite">Text</div> |
| blur-out | @keyframes blur-out { from { opacity: 1; filter: blur(0) } to { opacity: 1; filter: blur(4px) }} | <div class="text-lg animation blur-out duration-800 delay-2 loop-infinite">Text</div> |

---

## Usage

{% from "misc/console.njk" import console %}

Set basic blur animation.

{{ console('html',
'<div class="animation blur-in">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .animation,
      .blur-in;
}
') }}

Mix with duration.

{{ console('html',
'<div class="animation blur-in duration-2000">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .animation,
      .blur-in,
      .duration-2000;
}
') }}

Mix with duration and delay.

{{ console('html',
'<div class="animation blur-in duration-2000 delay-2">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .animation,
      .blur-in,
      .duration-2000,
      .delay-2;
}
') }}

Mix with duration, delay and infinite looping.

{{ console('html',
'<div class="animation blur-in duration-2000 delay-2 loop-infinite">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .animation,
      .blur-in,
      .duration-2000,
      .delay-2,
      .loop-infinite;
}
') }}

Apply `(hover)` variant,

{{ console('html',
'<div class="animation (hover)blur-in">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .animation,
      .\(hover\)blur-in;
}
') }}