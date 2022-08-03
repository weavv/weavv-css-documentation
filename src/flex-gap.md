---
id: flex-gap
title: Flex Gap
description: Utilities for set inner spacing in between the flex child elements.
topic: Flexbox
relate: flex, flex-direction, flex-grow, flex-shrink, flex-wrap, flex-basis, align-content, align-items, align-self, justify-content
variant: responsive
layout: default
---

> Flexbox

# Flex Gap

Utilities for set inner spacing in between the flex child elements.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for flexgap in variants.flexgap %}{% for item in flexgap.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| flex-gap-0 | margin: calc(-1 * 0rem) 0 0 calc(-1 * 0rem); <br> width: calc(100% + 0rem) |
| flex-gap-1 | margin: calc(-1 * 0.25rem) 0 0 calc(-1 * 0.25rem); <br> width: calc(100% + 0.25rem) |
| flex-gap-2 | margin: calc(-1 * 0.5rem) 0 0 calc(-1 * 0.5rem); <br> width: calc(100% + 0.5rem) |
| flex-gap-3 | margin: calc(-1 * 0.75rem) 0 0 calc(-1 * 0.75rem); <br> width: calc(100% + 0.75rem) |
| flex-gap-4 | margin: calc(-1 * 1rem) 0 0 calc(-1 * 1rem); <br> width: calc(100% + 1rem) |
| flex-gap-5 | margin: calc(-1 * 1.25rem) 0 0 calc(-1 * 1.25rem); <br> width: calc(100% + 1.25rem) |
| flex-gap-6 | margin: calc(-1 * 1.5rem) 0 0 calc(-1 * 1.5rem); <br> width: calc(100% + 1.5rem) |
| flex-gap-8 | margin: calc(-1 * 2rem) 0 0 calc(-1 * 2rem); <br> width: calc(100% + 2rem) |
| flex-gap-10 | margin: calc(-1 * 2.5rem) 0 0 calc(-1 * 2.5rem); <br> width: calc(100% + 2.5rem) |
| flex-gap-12 | margin: calc(-1 * 3rem) 0 0 calc(-1 * 3rem); <br> width: calc(100% + 3rem) |
| flex-gap-16 | margin: calc(-1 * 4rem) 0 0 calc(-1 * 4rem); <br> width: calc(100% + 4rem) |
| flex-gap-20 | margin: calc(-1 * 5rem) 0 0 calc(-1 * 5rem); <br> width: calc(100% + 5rem) |
| flex-gap-24 | margin: calc(-1 * 6rem) 0 0 calc(-1 * 6rem); <br> width: calc(100% + 6rem) |
| flex-gap-32 | margin: calc(-1 * 8rem) 0 0 calc(-1 * 8rem); <br> width: calc(100% + 8rem) |
| flex-gap-40 | margin: calc(-1 * 10rem) 0 0 calc(-1 * 10rem); <br> width: calc(100% + 10rem) |
| flex-gap-48 | margin: calc(-1 * 12rem) 0 0 calc(-1 * 12rem); <br> width: calc(100% + 12rem) |
| flex-gap-56 | margin: calc(-1 * 14rem) 0 0 calc(-1 * 14rem); <br> width: calc(100% + 14rem) |
| flex-gap-64 | margin: calc(-1 * 16rem) 0 0 calc(-1 * 16rem); <br> width: calc(100% + 16rem) |

---

## Usage

{% from "misc/console.njk" import console %}

<div class="padding-4 margin-y-4 margin-x-auto flex justify-center items-center">
  <div class="max-width-sm (expand)width-20 (expand)height-20 (expand)bg-tint-granite-2 flex flex-wrap flex-gap-4">
    <div></div>
    <div class="bg-tint-granite-5"></div>
    <div></div>
    <div class="bg-tint-granite-5"></div>
    <div></div>
    <div class="bg-tint-granite-5"></div>
    <div></div>
    <div class="bg-tint-granite-5"></div>
  </div>
</div>

{{ console('html',
'<div class="flex flex-wrap flex-gap-4">
    <div> ... </div>
    <div> ... </div>
    <div> ... </div>
  </div>
') }}

{{ console('html',
'.dummy-parent {
    @extend
      .flex,
      .flex-wrap,
      .flex-gap-4;
}
') }}

