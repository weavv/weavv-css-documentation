---
id: animationsoverview
title: Introduction of Animations Utilities
description:
topic: Getting Started > Features
relate:
layout: default
---

> Getting Started

<div class="-margin-t-4 padding-t-4 (xs)text-xl-3 (lg)text-xl-5 font-semibold gap-tight-1">
  Animations
</div>

Utilities for sets the animation control with [delays](/animation-delay/), [Duration](/animation-duration/) and [Looping](/animation-looping/) with [Fade](/animation-fade/), [Roll](/animation-roll/), [Slide](/animation-slide/) and [Blur](/animation-blur/) animation utilities.

---

<div class="flex flex-gap-8 flex-wrap justify-around items-stretch">{% for data in animation.presets %}{% for item in data.items %}<div class="flex flex-column justify-center items-center"><div class="flex justify-center items-center bg-tint-onyx-5 border border-tint-onyx-1 curve-border-lg width-20 height-20 overflow-hidden"><div class="animation {{ item.class }} width-8 height-8 bg-shade-onyx-1 curve-border-full"></div></div><div class="padding-t-3 text-sm font-mono gap-tight-1">{{ item.title }}</div></div>{% endfor %}{% endfor %}</div>

---

{% include "button-getting-started.njk" %}