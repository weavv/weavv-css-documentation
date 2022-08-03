---
id: flex-shrink
title: Flex Shrink
description: Utilities for controls how flex items shrink.
topic: Flexbox
relate: flex, flex-gap, flex-direction, flex-grow, flex-wrap, flex-basis, align-content, align-items, align-self, justify-content
variant: responsive
layout: default
---

> Flexbox

# Flex Shrink

Utilities for controls how flex items shrink.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for flexshrink in variants.flexshrink %}{% for item in flexshrink.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| flex-shrink-0 | flex-shrink: 0 |
| flex-shrink-1 | flex-shrink: 1 |
| flex-shrink-2 | flex-shrink: 2 |
| flex-shrink-3 | flex-shrink: 3 |
| flex-shrink-4 | flex-shrink: 4 |
| flex-shrink-5 | flex-shrink: 5 |
| flex-shrink-6 | flex-shrink: 6 |

---

## Usage

{% from "misc/console.njk" import console %}

<div class="padding-4 margin-y-4 margin-x-auto">
  <div class="max-width-screen-sm flex justify-center items-center">
    <div class="flex text-xs text-shade-granite-1">
      <div class="flex-shrink-0 flex-basis-32">
        <div class="padding-2 height-40 bg-tint-granite-5 overflow-hidden">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis praesentium fugit iusto fuga sint deserunt expedita deleniti ex! Iste consequatur, deleniti cumque vitae explicabo esse. Consequatur quam reprehenderit aperiam dolores.
        </div>
      </div>
      <div class="flex-shrink-1">
        <div class="padding-2 height-40 bg-tint-granite-5 overflow-hidden">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis praesentium fugit iusto fuga sint deserunt expedita deleniti ex! Iste consequatur, deleniti cumque vitae explicabo esse. Consequatur quam reprehenderit aperiam dolores.
        </div>
        <div class="padding-t-2 text-shade-granite-5 text-sm text-center">
          flex-shrink-1
        </div>
      </div>
      <div class="flex-shrink-0 flex-basis-32">
        <div class="padding-2 height-40 bg-tint-granite-5 overflow-hidden">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis praesentium fugit iusto fuga sint deserunt expedita deleniti ex! Iste consequatur, deleniti cumque vitae explicabo esse. Consequatur quam reprehenderit aperiam dolores.
        </div>
      </div>
    </div>
  </div>
</div>

<div class="padding-4 margin-y-4 margin-x-auto">
  <div class="max-width-screen-sm flex justify-center items-center">
    <div class="flex text-xs text-shade-granite-5">
      <div class="flex-shrink-0 flex-basis-32">
        <div class="padding-2 height-40 bg-tint-granite-5 overflow-hidden">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis praesentium fugit iusto fuga sint deserunt expedita deleniti ex! Iste consequatur, deleniti cumque vitae explicabo esse. Consequatur quam reprehenderit aperiam dolores.
        </div>
      </div>
      <div class="flex-shrink-0">
        <div class="padding-2 height-40 bg-tint-granite-5 overflow-hidden">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis praesentium.
        </div>
        <div class="padding-t-2 text-shade-granite-5 text-sm text-center">
          flex-shrink-0
        </div>
      </div>
      <div class="flex-shrink-0 flex-basis-32">
        <div class="padding-2 height-40 bg-tint-granite-5 overflow-hidden">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis praesentium fugit iusto fuga sint deserunt expedita deleniti ex! Iste consequatur, deleniti cumque vitae explicabo esse. Consequatur quam reprehenderit aperiam dolores.
        </div>
      </div>
    </div>
  </div>
</div>

{{ console('html',
'<div class="flex">
    <div class="flex-shrink-0 ... flex-basis-32">
      ...
    </div>
    <div class="flex-shrink-1">
      ...
    </div>
    <div class="flex-shrink-0 ... flex-basis-32">
      ...
    </div>
  </div>
') }}

{{ console('scss',
'.dummy-parent {
    @extend
      .flex;
}
.dummy-shrink-basis {
    @extend
      .flex-shrink-0,
      .flex-basis-32;
}
.dummy-shrink-1 {
    @extend
      .flex-shrink-1;
}
') }}

