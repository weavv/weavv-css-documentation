---
id: orientationoverview
title: Introduction of Orientation Variants
description: Utilities to sets screen orientation with other utilities.
topic: Getting Started > Features
relate: pseudo-class-variants, flex-direction
layout: default
---

> Getting Started

{% from "misc/console.njk" import console %}

<div class="-margin-t-4 padding-t-4 (xs)text-xl-3 (lg)text-xl-5 font-semibold gap-tight-1">
  Orientation
</div>

Utilities to sets screen orientation with other utilities such as [flex-direction](/flex-direction/). Find more about the usage [Pseudo-Class Variants](http://localhost:8080/pseudo-class-variants/#orientation).

---

<div class="flex flex-wrap justify-between items-stretch">
  <div class="relative height-80 width-72 bg-tint-granite-5 bg-opacity-25 border border-tint-granite-1 curve-border-lg">
    <div class="absolute top-4 left-5 flex flex-column flex-gap-4 flex-wrap">
      <div class="height-12 width-12 bg-tint-lime-5 border border-tint-lime-1 curve-border"></div>
      <div class="height-12 width-12 bg-tint-lime-5 border border-tint-lime-1 curve-border"></div>
      <div class="height-12 width-12 bg-tint-lime-5 border border-tint-lime-1 curve-border"></div>
    </div>
    <div class="absolute top-4 right-5">
      <div class="text-md font-mono">
        (portrait)flex-column
      </div>
    </div>
    <div class="absolute bottom-4 left-5">
      <div class="text-xl-2 font-mono gap-tight-1">
        Portrait
      </div>
      <div class="text-sm">
        @media (orientation: portrait){...}
      </div>
    </div>
  </div>
  <div class="relative height-72 width-96 bg-tint-granite-5 bg-opacity-25 border border-tint-granite-1 curve-border-lg">
    <div class="absolute top-4 left-5 flex flex-row flex-gap-4 flex-wrap">
      <div class="height-12 width-12 bg-tint-lime-5 border border-tint-lime-1 curve-border"></div>
      <div class="height-12 width-12 bg-tint-lime-5 border border-tint-lime-1 curve-border"></div>
      <div class="height-12 width-12 bg-tint-lime-5 border border-tint-lime-1 curve-border"></div>
    </div>
    <div class="absolute top-24 left-5">
      <div class="text-md font-mono">
        (landscape)flex-row
      </div>
    </div>
    <div class="absolute bottom-4 left-5">
      <div class="text-xl-2 font-mono gap-tight-1">
        Landscape
      </div>
      <div class="text-sm">
        @media (orientation: landscape){...}
      </div>
    </div>
  </div>
</div>

---

Set `flex-direction` to arrange containing items in a `column` when screen orientation set to `portrait`.

{{ console('html',
'<!-- Example -->
<div class="flex (portrait)flex-column">
  <div>...</div>
  <div>...</div>
  <div>...</div>
</div>
') }}


Set `flex-direction` to arrange containing items in a `row` when screen orientation set to `landscape`.

{{ console('html',
'<!-- Example -->
<div class="flex (landscape)flex-row">
  <div>...</div>
  <div>...</div>
  <div>...</div>
</div>
') }}

---

{% include "button-getting-started.njk" %}