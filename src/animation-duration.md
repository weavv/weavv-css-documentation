---
id: animation-duration
title: Animation Duration
description: Utilities for sets the animation control with durations.
topic: Animations
relate: animation, animation-blur, animation-delay, animation-fade, animation-loop, animation-roll, animation-slide
layout: default
---

> Animations

# Animation Duration

Utilities for sets the animation control with durations.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for animationduration in variants.animationduration %}{% for item in animationduration.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:-:|
| duration-300 | animation-duration: 300ms |
| duration-500 | animation-duration: 500ms |
| duration-800 | animation-duration: 800ms |
| duration-2000 | animation-duration: 2000ms |
| duration-3000 | animation-duration: 3000ms |
| duration-4000 | animation-duration: 4000ms |

---

## Usage

{% from "misc/console.njk" import console %}

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

