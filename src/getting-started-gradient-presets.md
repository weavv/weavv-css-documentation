---
id: gradientsoverview
title: Introduction of Background Gradient Presets Utilities
description: Utilities for sets the gradient preset diagonally to an element.
topic: Getting Started > Features
relate: bg-gradient
layout: default
---

> Getting Started

<div class="-margin-t-4 padding-t-4 (xs)text-xl-3 (lg)text-xl-5 font-semibold gap-tight-1">
  Background Gradient Presets
</div>

Utilities for sets the gradient preset diagonally to an element. Find more about the usage at [Gradient](/background-gradient-presets/).

---

<div class="(group) flex flex-gap-4 flex-wrap justify-between items-stretch curve-border-lg cursor-pointer">{% for data in gradient.presets %}{% for item in data.items %}<div class="flex flex-column justify-center items-center"><div class="width-16 height-16 {{ item.class }} curve-border-full shadow-dreamy-sm border-4 border-gray-1 (group-hover)border-charcoal-1 transition duration-100 ease-in-out"></div><div class="padding-t-3 text-sm text-gray-6 font-mono gap-tight-1">{{ item.title }}</div></div>{% endfor %}{% endfor %}</div>

---

## Overlay with Image

<div class="margin-t-4 margin-b-5 padding-3 border-l-8 border-gray-6 text-sm text-gray-6 bg-gray-1 (dark)bg-gray-8">
  <div class="flex items-center">
    Press
    <div class="margin-x-1 padding-x-1 padding-y-0 border border-gray-4 curve-border">
      CTRL
    </div>
    <div>+</div>
    <div class="margin-x-1 padding-x-1 padding-y-0 border border-gray-4 curve-border">
      SHIFT
    </div>
    <div>+</div>
    <div class="margin-x-1 padding-x-1 padding-y-0 border border-gray-4 curve-border">
      R
    </div>
		to change the image samples.
  </div>
</div>

<div class="(group) flex flex-gap-4 flex-wrap justify-between items-stretch">{% for data in gradient.presets %}{% for item in data.items %}<div class="relative (group) width-32 bg-tint-granite-1 curve-border-lg shadow-dreamy-sm transition duration-100 ease-in-out transform (xs)(group-hover)scale-100 (sm)(group-hover)scale-110 (md)(group-hover)scale-110 (lg)(group-hover)scale-110 cursor-pointer select-none"><div class="stack-1 absolute top-0 left-0"><div class="{{ item.class }} filter-saturate-5 width-32 height-32 opacity-50 (group-hover)opacity-0 transition duration-100 ease-in-out curve-border-md"></div></div><img class="width-32 height-32 object-cover object-center overflow-hidden curve-border-md" src="https://picsum.photos/500?random=1" alt="{{ item.title }}"><div class="absolute top-2 left-2 height-10 width-10 {{ item.class }} curve-border-full shadow-dreamy-md"></div><div class="stack-2 absolute bottom-2 left-2 flex justify-center items-center height-8 width-8 font-default (xs)text-sm (sm)text-sm (md)text-sm (lg)text-sm font-mono text-center text-white (group-hover)text-tint-granite-5 bg-tint-granite-5 (group-hover)bg-tint-granite-1 curve-border-full shadow-dreamy-sm">{{ item.title }}</div></div>{% endfor %}{% endfor %}</div>

---

## Color Enhancement

{% from "misc/console.njk" import console %}

Saturate the gradient with `filter` utilities. Find more about the usage [Saturate](/filter-saturate/), [Contrast](/filter-contrast) and [Brightness](/filter-brightness).

{{ console('html',
'<!-- Example -->
<div class="bg-gradient-preset-1 ... filter saturate-5">
  ...
</div>
') }}

---

{% include "button-getting-started.njk" %}