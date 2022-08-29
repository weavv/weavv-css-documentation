---
id: animation-loop
title: Animation Loop
description: Utilities for sets the animation control with limited loop or infinite.
topic: Animations
relate: animation, animation-blur, animation-delay, animation-duration, animation-fade, animation-roll, animation-slide
layout: default
---

> Animations

# Animation Loop

Utilities for sets the animation control with limited loop or infinite.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for animationloop in variants.animationloop %}{% for item in animationloop.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| loop-2 | animation-iteration-count: 2 |
| loop-3 | animation-iteration-count: 3 |
| loop-4 | animation-iteration-count: 4 |
| loop-5 | animation-iteration-count: 5|
| loop-infinite | animation-iteration-count: infinite |

---

## Usage

{% from "misc/console.njk" import console %}

{{ console('html',
'<div class="morph blur-in loop-infinite">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .morph,
      .blur-in,
      .loop-infinite;
}
') }}

