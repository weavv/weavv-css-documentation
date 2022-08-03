---
id: scroll-snap
title: Scroll Snap
description: Utilities for sets viewport lock to certain elements or locations after finished scrolling.
topic: Interactivity
relate: scroll-padding, scroll-margin
variant: responsive
layout: default
---

> Interactivity

# Scroll Snap

Utilities for sets viewport lock to certain elements or locations after finished scrolling.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for scrollsnap in variants.scrollsnap %}{% for item in scrollsnap.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| scroll-snap `{type}` `{align}` | scroll-snap-type: `{type}`; <br> scroll-snap-align: `{align}` |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| x-mandatory | scroll-snap-type: x mandatory |
| y-mandatory | scroll-snap-type: y mandatory |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| x-proximity | scroll-snap-type: x proximity |
| y-proximity | scroll-snap-type: y proximity |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| block-mandatory | scroll-snap-type: block mandatory |
| block-proximity | scroll-snap-type: block proximity |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| inline-mandatory | scroll-snap-type: inline mandatory |
| inline-proximity | scroll-snap-type: inline proximity |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| both-mandatory | scroll-snap-type: both mandatory |
| both-proximity | scroll-snap-type: both proximity |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| align-start | scroll-snap-align: start |
| align-center | scroll-snap-align: center |
| align-end | scroll-snap-align: end |
| align-none | scroll-snap-align: none |

---

## Usage

{% from "misc/console.njk" import console %}

Set the `horizontal` scroll image gallery. The image snaps to the `left` container after scrolling.

<div class="margin-y-2 margin-x-auto scroll-snap x-mandatory align-start flex height-48 overflow-x-scroll (xs)max-width-full (sm)max-width-full (md)max-width-md (lg)max-width-md (expand)margin-1 (expand)width-auto (expand)curve-border-lg">
  <img class="object-cover object-center" src="https://picsum.photos/300?=1">
  <img class="object-cover object-center" src="https://picsum.photos/300?=2">
  <img class="object-cover object-center" src="https://picsum.photos/300?=3">
  <img class="object-cover object-center" src="https://picsum.photos/300?=4">
  <img class="object-cover object-center" src="https://picsum.photos/300?=5">
  <img class="object-cover object-center" src="https://picsum.photos/300?=6">
  <img class="object-cover object-center" src="https://picsum.photos/300?=7">
  <img class="object-cover object-center" src="https://picsum.photos/300?=8">
  <img class="object-cover object-center" src="https://picsum.photos/300?=9">
  <img class="object-cover object-center" src="https://picsum.photos/300?=10">
</div>

{{ console('html',
'<div class="scroll-snap x-mandatory align-start ... flex overflow-x-scroll">
    <img src="...">
    <img src="...">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .scroll-snap,
      .x-mandatory,
      .align-start,
      .flex,
      .overflow-x-scroll;
}
') }}

Set the `vertical` scroll image gallery. The image snaps to the `top` container after scrolling.

<div class="margin-y-2 margin-x-auto scroll-snap y-mandatory align-start height-88 overflow-y-scroll (xs)max-width-full (sm)max-width-full (md)max-width-md (lg)max-width-md (expand)margin-1 (expand)height-32 (expand)curve-border-lg">
  <img class="object-cover object-center" src="https://picsum.photos/300?=1">
  <img class="object-cover object-center" src="https://picsum.photos/300?=2">
  <img class="object-cover object-center" src="https://picsum.photos/300?=3">
  <img class="object-cover object-center" src="https://picsum.photos/300?=4">
  <img class="object-cover object-center" src="https://picsum.photos/300?=5">
  <img class="object-cover object-center" src="https://picsum.photos/300?=6">
  <img class="object-cover object-center" src="https://picsum.photos/300?=7">
  <img class="object-cover object-center" src="https://picsum.photos/300?=8">
  <img class="object-cover object-center" src="https://picsum.photos/300?=9">
  <img class="object-cover object-center" src="https://picsum.photos/300?=10">
</div>

{{ console('html',
'<div class="scroll-snap y-mandatory align-start ... overflow-y-scroll">
    <img src="...">
    <img src="...">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .scroll-snap,
      .y-mandatory,
      .align-start,
      .overflow-y-scroll;
}
') }}

Set the `horizontal` and `vertical` scroll image gallery. The image snaps to the `center` container after scrolling.

{{ console('html',
'<div class="scroll-snap x-mandatory y-mandatory align-center ... flex flex-wrap overflow-scroll">
    <img src="...">
    <img src="...">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .scroll-snap,
      .x-mandatory,
      .y-mandatory,
      .align-center,
      .flex,
      .flex-wrap,
      .overflow-scroll;
}
') }}


