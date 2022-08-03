---
id: transition-duration
title: Transition Duration
description: Utilities for sets the length of time for a transition animations to complete.
relate: transition-property, transition-timing
topic: Transitions
layout: default
---

> Transitions

# Transition Duration

Utilities for sets the length of time for a transition animations to complete.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for transitionduration in variants.transitionduration %}{% for item in transitionduration.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| duration-75 | transition-duration: 75ms |
| duration-100 | transition-duration: 100ms |
| duration-150 | transition-duration: 150ms |
| duration-200 | transition-duration: 200ms |
| duration-300 | transition-duration: 300ms |
| duration-500 | transition-duration: 500ms |
| duration-700 | transition-duration: 700ms |
| duration-1000 | transition-duration: 1000ms |

---

## Usage

{% from "misc/console.njk" import console %}

Set basic [Transition](/transition-property/) with [Duration](/transition-duration/) and [Timing](/transition-timing/), apply with pseudo class variants `hover`, `focus`, `active`.

Set transition duration `75ms` to an element.

<div class="margin-y-2 margin-x-auto width-64">
  <div class="padding-4 width-56 text-center text-shade-granite-1 bg-tint-granite-5 transition duration-75 ease-in-out (hover)shadow-lg cursor-pointer">
  	Hover duration-75
  </div>
</div>

{{ console('html',
'<div class="transition duration-75 ease-in-out ... (hover)shadow-lg ... width-32 height-24">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .transition,
      .duration-75,
      .ease-in-out,
      .\(hover\)shadow-lg,
      .width-32,
      .height-24;
}
') }}

Set transition duration `100ms`.

<div class="margin-y-2 margin-x-auto width-64">
  <div class="padding-4 width-56 text-center text-shade-granite-1 bg-tint-granite-5 transition duration-100 ease-in-out (hover)shadow-lg cursor-pointer">
  	Hover duration-100
  </div>
</div>

{{ console('html',
'<div class="transition duration-100 ease-in-out ... (hover)shadow-lg ... width-32 height-24">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .transition,
      .duration-100,
      .ease-in-out,
      .\(hover\)shadow-lg,
      .width-32,
      .height-24;
}
') }}

Set transition duration `150ms`.

<div class="margin-y-2 margin-x-auto width-64">
  <div class="padding-4 width-56 text-center text-shade-granite-1 bg-tint-granite-5 transition duration-150 ease-in-out (hover)shadow-lg cursor-pointer">
  	Hover duration-150
  </div>
</div>

{{ console('html',
'<div class="transition duration-150 ease-in-out ... (hover)shadow-lg ... width-32 height-24">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .transition,
      .duration-150,
      .ease-in-out,
      .\(hover\)shadow-lg,
      .width-32,
      .height-24;
}
') }}

Set transition duration `200ms`.

<div class="margin-y-2 margin-x-auto width-64">
  <div class="padding-4 width-56 text-center text-shade-granite-1 bg-tint-granite-5 transition duration-200 ease-in-out (hover)shadow-lg cursor-pointer">
  	Hover duration-200
  </div>
</div>

{{ console('html',
'<div class="transition duration-200 ease-in-out ... (hover)shadow-lg ... width-32 height-24">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .transition,
      .duration-200,
      .ease-in-out,
      .\(hover\)shadow-lg,
      .width-32,
      .height-24;
}
') }}

Set transition duration `300ms`.

<div class="margin-y-2 margin-x-auto width-64">
  <div class="padding-4 width-56 text-center text-shade-granite-1 bg-tint-granite-5 transition duration-300 ease-in-out (hover)shadow-lg cursor-pointer">
  	Hover duration-300
  </div>
</div>

{{ console('html',
'<div class="transition duration-300 ease-in-out ... (hover)shadow-lg ... width-32 height-24">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .transition,
      .duration-300,
      .ease-in-out,
      .\(hover\)shadow-lg,
      .width-32,
      .height-24;
}
') }}

Set transition duration `500ms`.

<div class="margin-y-2 margin-x-auto width-64">
  <div class="padding-4 width-56 text-center text-shade-granite-1 bg-tint-granite-5 transition duration-500 ease-in-out (hover)shadow-lg cursor-pointer">
  	Hover duration-500
  </div>
</div>

{{ console('html',
'<div class="transition duration-500 ease-in-out ... (hover)shadow-lg ... width-32 height-24">
  ...
</div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .transition,
      .duration-500,
      .ease-in-out,
      .\(hover\)shadow-lg,
      .width-32,
      .height-24;
}
') }}

Set transition duration `1000ms`.

<div class="margin-y-2 margin-x-auto width-64">
  <div class="padding-4 width-56 text-center text-shade-granite-1 bg-tint-granite-5 transition duration-1000 ease-in-out (hover)shadow-lg cursor-pointer">
  	Hover duration-1000
  </div>
</div>

{{ console('html',
'<div class="transition duration-1000 ease-in-out ... (hover)shadow-lg ... width-32 height-24">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .transition,
      .duration-1000,
      .ease-in-out,
      .\(hover\)shadow-lg,
      .width-32,
      .height-24;
}
') }}

