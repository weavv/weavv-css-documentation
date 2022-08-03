---
id: counter
title: Counter
description: Utilities for sets automatically counter to an element can be grouped separately with a counter reset option.
topic: Typography
layout: default
---

> Typography

# Counter

Utilities for sets automatically counter to an element can be grouped separately with a counter reset option.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for counter in variants.counter %}{% for item in counter.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| counter `{options}` | counter-increment: lists; |
| counter-reset | counter-reset: lists, mini-step; |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| upper-alpha | content: counter(lists, upper-alpha); |
| lower-alpha | content: counter(lists, lower-alpha); |
| upper-roman | content: counter(lists, upper-roman); |
| lower-roman | content: counter(lists, lower-roman); |
| number | content: counter(lists, number); |

---

## Usage

{% from "misc/console.njk" import console %}

<div class="padding-x-4 margin-y-8 margin-x-auto width-full height-32">
  <div class="counter-reset ... -margin-l-64 flex flex-gap-32 justify-center items-center">
    <div class="counter upper-roman ... relative height-8 width-8 bg-gray-2 curve-border-full flex justify-center items-center">
      <div class="absolute top-8 left-8 width-32 bg-tint-granite-5 padding-4 curve-border-lg">
        <div>...</div>
        <div>...</div>
        <div>...</div>
      </div>
    </div>
    <div class="counter upper-roman ... relative height-8 width-8 bg-gray-2 curve-border-full flex justify-center items-center">
      <div class="absolute top-8 left-8 width-32 bg-tint-granite-5 padding-4 curve-border-lg">
        <div>...</div>
        <div>...</div>
        <div>...</div>
      </div>
    </div>
    <div class="counter upper-roman ... relative height-8 width-8 bg-gray-2 curve-border-full flex justify-center items-center">
      <div class="absolute top-8 left-8 width-32 bg-tint-granite-5 padding-4 curve-border-lg">
        <div>...</div>
        <div>...</div>
        <div>...</div>
      </div>
    </div>
  </div>
</div>

{{ console('html',
'<div class="counter-reset">
    <div class="counter upper-roman">
      <div>...</div>
      <div>...</div>
      <div>...</div>
    </div>
  </div>
') }}

{{ console('scss',
'.dummy-parent {
    @extend
      .counter-reset;
}
.dummy-child {
    @extend
      .counter,
      .upper-roman;
}
') }}
