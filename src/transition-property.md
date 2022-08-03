---
id: transition-property
title: Transition Property
description: Utilities for sets the css properties affected by transition animations.
topic: Transitions
relate: transition-duration, transition-timing
variant: reduce-motion
layout: default
---

> Transitions

# Transition Property

Utilities for sets the css properties affected by transition animations.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for transitionproperty in variants.transitionproperty %}{% for item in transitionproperty.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| transition | transition-property: all |
| transition-none | transition-property: none |
| transition-colors | transition-property: background-color, border-color, color, fill, stroke |
| transition-opacity | transition-property: opacity |
| transition-shadow | transition-property: box-shadow |
| transition-transform | transition-property: transform |

---

## Usage

{% from "misc/console.njk" import console %}

Set basic transition with [Duration](/transition-duration/) and [Timing](/transform-timing/), apply with pseudo class variants `hover`, `focus`, `active`.

An example of transitioning an element with [Border Width](/border-width/) and [Box Shadow](/box-shadow/) utilities.

<div class="margin-y-2 margin-x-auto width-64">
  <div class="padding-4 width-48 text-center text-shade-granite-1 font-semibold bg-tint-granite-5 transition duration-300 ease-in-out border-4 border-tint-granite-2 (hover)border-tint-granite-4 (hover)shadow-lg curve-border-lg cursor-pointer">
  	Hover
  </div>
</div>

{{ console('html',
'<div class="transition duration-300 ease-in-out border-4 border-tint-granite-2 (hover)border-tint-granite-4 (hover)shadow-lg ... width-32 height-24">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .transition,
      .duration-300,
      .ease-in-out,
      .border-4,
      .border-tint-granite-2,
      .\(hover\)border-tint-granite-4,
      .\(hover\)shadow-lg,
      .width-32,
      .height-24;
}
') }}

