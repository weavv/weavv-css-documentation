---
id: patternoverview
title: Introduction of Patterns Utilities
description: Utilities for sets an element's background filled with patterns.
topic: Getting Started > Features
layout: default
---

> Getting Started

<div class="-margin-t-4 padding-t-4 (xs)text-xl-3 (lg)text-xl-5 font-semibold gap-tight-1">
  Patterns
</div>

Utilities for sets an element's background filled with patterns. Find more about the usage of patterns: [Checks](/pattern-checks/), [Circle](/pattern-circle/), [Cross Dots](/pattern-cross-dots/), [Diagonal Lines](/pattern-diagonal-lines/), [Diagonal Stripes](/pattern-diagonal-stripes/), [Dots](/pattern-dots/), [Grid](/pattern-grid/), [Horizontal Lines](/pattern-horizontal-lines/), [Horizontal Stripes](/pattern-horizontal-stripes/), [Rhombus](/pattern-rhombus/), [Ripple](/pattern-ripple/), [Triangles](/pattern-triangles/), [Vertical Lines](/pattern-vertical-lines/), [Vertical Stripes](/pattern-vertical-stripes/), [Zigzag](/pattern-zigzag/).

---

{% for data in patterns.cssdrawing %}<div class="flex flex-gap-4 flex-wrap justify-between items-stretch opacity-75 text-teal-7">{% for item in data.items %}<div class="text-center"><div class="pattern {{ item.class }} height-32 width-40"></div><div class="padding-t-4 font-mono text-gray-6">{{ item.title }}</div></div>{% endfor %}</div>{% endfor %}

---

{% include "button-getting-started.njk" %}