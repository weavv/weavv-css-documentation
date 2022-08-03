---
id: stroke-linecap
title: Stroke LineCap
description: Utilities for sets the outline shape of an SVG.
topic: SVG
layout: default
---

> SVG

# Stroke Line Cap

Utilities for sets the outline shape of an SVG.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for svgstrokelinecap in variants.svgstrokelinecap %}{% for item in svgstrokelinecap.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| stroke-butt | stroke-linecap: butt |
| stroke-round | stroke-linecap: round |
| stroke-square | stroke-linecap: square |

---

## Usage

{% from "misc/console.njk" import console %}

Set a SVG image with stroke linecap property.

<style>
  .stroke-width { stroke-width: 30 }
</style>

`stroke-butt` ends the stroke with a sharp 90-degree angle.

<div class="padding-x-4 margin-y-2 margin-x-auto flex justify-center items-center">
  <svg class="margin-y-4 height-10" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <line class="fill-current text-shade-amber-4 stroke-current stroke-width stroke-butt" x1="40" x2="250" y1="20" y2="20"/>
  </svg>
</div>

{{ console('html',
'<svg class="stroke-butt ... stroke-current stroke-2 ... text-amber-4">
    ...
  </svg>
') }}

{{ console('scss',
'svg {
    @extend
      .stroke-butt,
      .stroke-current,
      .stroke-2,
      .text-amber-4;
}
') }}

`stroke-round` adds a radius that smooths out the start and end points.

<div class="padding-x-4 margin-y-2 margin-x-auto flex justify-center items-center">
  <svg class="margin-y-4 height-10" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <line class="fill-current text-shade-amber-4 stroke-current stroke-width stroke-round" x1="40" x2="250" y1="20" y2="20"/>
  </svg>
</div>

{{ console('html',
'<svg class="stroke-round ... stroke-current stroke-2 ... text-amber-4">
    ...
  </svg>
') }}

{{ console('scss',
'svg {
    @extend
      .stroke-round,
      .stroke-current,
      .stroke-2,
      .text-amber-4;
}
') }}

`stroke-square` similar to butt except that it extends the stroke beyond the length of the path.

<div class="padding-x-4 margin-y-2 margin-x-auto flex justify-center items-center">
  <svg class="margin-y-4 height-10" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <line class="fill-current text-shade-amber-4 stroke-current stroke-width stroke-square" x1="40" x2="250" y1="20" y2="20"/>
  </svg>
</div>

{{ console('html',
'<svg class="stroke-square ... stroke-current stroke-2 ... text-amber-4">
    ...
  </svg>
') }}

{{ console('scss',
'svg {
    @extend
      .stroke-square,
      .stroke-current,
      .stroke-2,
      .text-amber-4;
}
') }}

