---
id: flex-wrap
title: Flex Wrap
description: Utilities for creates how flex items wrap.
topic: Flexbox
relate: flex, flex-gap, flex-direction, flex-grow, flex-shrink, flex-basis, align-content, align-items, align-self, justify-content
variant: responsive
layout: default
---

> Flexbox

# Flex Wrap

Utilities for creates how flex items wrap.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for flexwrap in variants.flexwrap %}{% for item in flexwrap.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| flex-no-wrap | flex-wrap: nowrap |
| flex-wrap | flex-wrap: wrap |
| flex-wrap-reverse | flex-wrap: wrap-reverse  |

---

## Usage

{% from "misc/console.njk" import console %}

<div class="padding-x-4 margin-y-4 margin-x-auto">
  <div class="max-width-xs-1 padding-4 flex flex-column justify-center items-center">
    <div class="(expand)margin-2 (expand)width-20 (expand)height-20 (expand)bg-tint-granite-5 (expand)curve-border-lg (expand)text-center text-xl-1 text-shade-granite-1 flex bg-tint-granite-5">
      <div class="border-2 border-shade-granite-3 border-dashed flex justify-center items-center">1</div>
      <div class="border-2 border-shade-granite-3 border-dashed flex justify-center items-center">2</div>
      <div class="border-2 border-shade-granite-3 border-dashed flex justify-center items-center">3</div>
      <div class="border-2 border-shade-granite-3 border-dashed flex justify-center items-center">4</div>
      <div class="border-2 border-shade-granite-3 border-dashed flex justify-center items-center">5</div>
    </div>
    <div class="padding-t-2 text-sm text-center">
      flex-wrap: OFF
    </div>
  </div>
</div>

<div class="padding-x-4 margin-y-4 margin-x-auto">
  <div class="max-width-xs-1 padding-4 flex flex-column justify-center items-center">
    <div class="(expand)margin-2 (expand)width-20 (expand)height-20 (expand)bg-tint-granite-5 (expand)curve-border-lg (expand)text-center text-xl-1 text-shade-granite-1 flex flex-wrap bg-tint-granite-5">
      <div class="border-2 border-shade-granite-3 border-dashed flex justify-center items-center">1</div>
      <div class="border-2 border-shade-granite-3 border-dashed flex justify-center items-center">2</div>
      <div class="border-2 border-shade-granite-3 border-dashed flex justify-center items-center">3</div>
      <div class="border-2 border-shade-granite-3 border-dashed flex justify-center items-center">4</div>
      <div class="border-2 border-shade-granite-3 border-dashed flex justify-center items-center">5</div>
    </div>
    <div class="padding-t-2 text-sm text-center">
      flex-wrap: OFF
    </div>
  </div>
</div>

{{ console('html',
'<div class="flex flex-wrap">
    <div> ... </div>
    <div> ... </div>
    <div> ... </div>
  </div>
') }}

{{ console('scss',
'.dummy-parent {
    @extend
      .flex,
      .flex-wrap;
}
') }}

