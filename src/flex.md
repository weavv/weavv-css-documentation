---
id: flex
title: Flex
description: Utilities for controls how flex items grow, shrink and basis.
topic: Flexbox
relate: flex-gap, flex-direction, flex-grow, flex-shrink, flex-wrap, flex-basis, align-content, align-items, align-self, justify-content
variant: responsive
layout: default
---

> Flexbox

# Flex

Utilities for controls how flex items grow, shrink and basis.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for flex in variants.flex %}{% for item in flex.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| flex-initial | flex: 0 1 auto |
| flex-zero | flex: 1 1 0% |
| flex-full | flex: 1 100% |
| flex-auto | flex: 1 1 auto |
| flex-none | flex: none |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| flex-1 | flex: 1 |
| flex-2 | flex: 2 |
| flex-3 | flex: 3 |
| flex-4 | flex: 4 |
| flex-5 | flex: 5 |
| flex-6 | flex: 6 |
| flex-7 | flex: 7 |
| flex-8 | flex: 8 |
| flex-9 | flex: 9 |
| flex-10 | flex: 10 |
| flex-11 | flex: 11 |
| flex-12 | flex: 12 |

---

## Usage

{% from "misc/console.njk" import console %}

<div class="padding-x-4 margin-y-4 margin-x-auto">
  <div class="max-width-xs-1 padding-4 flex flex-column justify-center items-center">
    <div class="(expand)margin-2 (expand)width-20 (expand)height-20 (expand)bg-tint-granite-5 (expand)curve-border-lg (expand)text-center text-xl-1 text-shade-granite-5 ">
      <div class="border-2 border-shade-granite-3 border-dashed flex justify-center items-center">1</div>
      <div class="border-2 border-shade-granite-3 border-dashed flex justify-center items-center">2</div>
      <div class="border-2 border-shade-granite-3 border-dashed flex justify-center items-center">3</div>
    </div>
    <div class="padding-t-2 text-sm text-center">
      flex: OFF
    </div>
  </div>
</div>

<div class="padding-x-4 margin-y-4 margin-x-auto">
  <div class="max-width-xs-1 padding-4 flex flex-column justify-center items-center">
    <div class="(expand)margin-2 (expand)width-20 (expand)height-20 (expand)bg-tint-granite-5 (expand)curve-border-lg (expand)text-center text-xl-1 text-shade-granite-5 flex">
      <div class="border-2 border-shade-granite-3 border-dashed flex justify-center items-center">1</div>
      <div class="border-2 border-shade-granite-3 border-dashed flex justify-center items-center">2</div>
      <div class="border-2 border-shade-granite-3 border-dashed flex justify-center items-center">3</div>
    </div>
    <div class="padding-t-2 text-sm text-center">
      flex: OFF
    </div>
  </div>
</div>

{{ console('html',
'<div class="flex">
    <div> ... </div>
    <div> ... </div>
    <div> ... </div>
  </div>
') }}

{{ console('scss',
'.dummy-parent {
    @extend
      .flex;
}
') }}

