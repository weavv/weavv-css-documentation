---
id: animation-delay
title: Animation Delay
description: Utilities for sets the animation control with delays.
topic: Animations
relate: animation, animation-blur, animation-duration, animation-fade, animation-loop, animation-roll, animation-slide
layout: default
---

> Animations

# Animation Delay

Utilities for sets the animation control with delays.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for animationdelay in variants.animationdelay %}{% for item in animationdelay.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| delay-2 | animation-delay: 2s |
| delay-3 | animation-delay: 3s |
| delay-4 | animation-delay: 4s |
| delay-5 | animation-delay: 5s |

---

## Usage

{% from "misc/console.njk" import console %}

{{ console('html',
'<div class="morph blur-in ... delay-2">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .morph,
      .blur-in,
      .delay-2;
}
') }}



