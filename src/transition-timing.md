---
id: transition-timing
title: Transition Timing
description: Utilities for sets the easing function of transition animations.
topic: Transitions
relate: transition-property, transition-duration
layout: default
---

> Transitions

# Transition Timing

Utilities for sets the easing function of transition animations.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for transitiontiming in variants.transitiontiming %}{% for item in transitiontiming.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| ease-linear | transition-timing-function: linear |
| ease-in | transition-timing-function: cubic-bezier(0.4, 0, 1, 1) |
| ease-out | transition-timing-function: cubic-bezier(0, 0, 0.2, 1) |
| ease-in-out | transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) |

---

## Usage

{% from "misc/console.njk" import console %}

Set basic [Transition](/transition-property/) with [Duration](/transition-duration/) and [Timing](/transition-timing/), apply with pseudo class variants `hover`, `focus`, `active`.

Set transition timing `ease-linear` to an element.

<div class="margin-y-2 margin-x-auto">
  <div class="padding-4 width-56 text-center text-shade-granite-1 bg-tint-granite-5 border border-tint-granite-2 transition duration-300 ease-linear (hover)shadow-dreamy-lg curve-border-lg cursor-pointer">
    Hover
  </div>
  <div class="padding-t-4 text-sm text-center">
    ease-linear
  </div>
</div>

{{ console('html',
'<div class="transition ease-linear ... duration-300 ... (hover)shadow-dreamy-lg width-32 height-24">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .transition,
      .ease-linear,
      .duration-300,
      .\(hover\)shadow-dreamy-lg,
      .width-32,
      .height-24;
}
') }}

Set transition timing `ease-in`.

<div class="margin-y-2 margin-x-auto">
  <div class="padding-4 width-56 text-center text-shade-granite-1 bg-tint-granite-5 border border-tint-granite-2 transition duration-300 ease-in (hover)shadow-dreamy-lg curve-border-lg cursor-pointer">
    Hover
  </div>
  <div class="padding-t-4 text-sm text-center">
    ease-linear
  </div>
</div>

{{ console('html',
'<div class="transition ease-in ... duration-300 ... (hover)shadow-dreamy-lg width-32 height-24">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .transition,
      .ease-in,
      .duration-300,
      .\(hover\)shadow-dreamy-lg,
      .width-32,
      .height-24;
}
') }}

Set transition timing `ease-out`.

<div class="margin-y-2 margin-x-auto">
  <div class="padding-4 width-56 text-center text-shade-granite-1 bg-tint-granite-5 border border-tint-granite-2 transition duration-300 ease-out (hover)shadow-dreamy-lg curve-border-lg cursor-pointer">
    Hover
  </div>
  <div class="padding-t-4 text-sm text-center">
    ease-linear
  </div>
</div>

{{ console('html',
'<div class="transition ease-out ... duration-300 ... (hover)shadow-dreamy-lg width-32 height-24">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .transition,
      .ease-out,
      .duration-300,
      .\(hover\)shadow-dreamy-lg,
      .width-32,
      .height-24;
}
') }}

Set transition timing `ease-in-out`.

<div class="margin-y-2 margin-x-auto">
  <div class="padding-4 width-56 text-center text-shade-granite-1 bg-tint-granite-5 border border-tint-granite-2 transition duration-300 ease-in-out (hover)shadow-dreamy-lg curve-border-lg cursor-pointer">
    Hover
  </div>
  <div class="padding-t-4 text-sm text-center">
    ease-linear
  </div>
</div>

{{ console('html',
'<div class="transition ease-in-out ... duration-300 ... (hover)shadow-dreamy-lg width-32 height-24">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .transition,
      .ease-in-out,
      .duration-300,
      .\(hover\)shadow-dreamy-lg,
      .width-32,
      .height-24;
}
') }}

