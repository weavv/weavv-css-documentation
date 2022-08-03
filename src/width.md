---
id: width
title: Width
description: Utilities for sets the width of an element.
topic: Sizing
relate: min-width, max-width, height, min-height, max-height
variant: responsive, hover
layout: default
---

> Sizing

# Width

Utilities for sets the width of an element.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for width in variants.width %}{% for item in width.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| width-auto | width: auto |
| width-full | width: 100% |
| width-screen | width: 100vw |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| width-px | width: 1px |
| width-0 | width: 0 |
| width-1 | width: 0.25rem |
| width-2 | width: 0.5rem |
| width-3 | width: 0.75rem |
| width-4 | width: 1rem |
| width-5 | width: 1.25rem |
| width-6 | width: 1.5rem |
| width-8 | width: 2rem |
| width-10 | width: 2.5rem |
| width-12 | width: 3rem |
| width-16 | width: 4rem |
| width-20 | width: 5rem |
| width-24 | width: 6rem |
| width-32 | width: 8rem |
| width-40 | width: 10rem |
| width-48 | width: 12rem |
| width-56 | width: 14rem |
| width-64 | width: 16rem |
| width-72  | width: 18rem |
| width-80  | width: 20rem |
| width-88  | width: 22rem |
| width-96  | width: 24rem |
| width-104  | width: 26rem |
| width-112  | width: 28rem |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| width-1/2 | width: 50% |
| width-1/3 | width: 33.333333% |
| width-2/3 | width: 66.666667% |
| width-1/4 | width: 25% |
| width-2/4 | width: 50% |
| width-3/4 | width: 75% |
| width-1/5 | width: 20% |
| width-2/5 | width: 40% |
| width-3/5 | width: 60% |
| width-4/5 | width: 80% |
| width-1/6 | width: 16.666667% |
| width-2/6 | width: 33.333333% |
| width-3/6 | width: 50% |
| width-4/6 | width: 66.666667% |
| width-5/6 | width: 83.333333% |
| width-1/12 | width: 8.333333% |
| width-2/12 | width: 16.666667% |
| width-3/12 | width: 25% |
| width-4/12 | width: 33.333333% |
| width-5/12 | width: 41.666667% |
| width-6/12 | width: 50% |
| width-7/12 | width: 58.333333% |
| width-8/12 | width: 66.666667% |
| width-9/12 | width: 75% |
| width-10/12 | width: 83.333333% |
| width-11/12 | width: 91.666667% |

---

## Usage

{% from "misc/console.njk" import console %}

Set basic width to an element.

{{ console('html',
'<div class="width-4">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .width-4;
}
') }}

Set full width to an element.

{{ console('html',
'<div class="width-full">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .width-full;
}
') }}

Set full width in viewport screen to an element.

{{ console('html',
'<div class="width-screen">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .width-screen;
}
') }}

Set 2-column width `1/2` to an element companion with `flex` utility (See [Flex](/flex/)).

<div class="padding-4 margin-y-4 margin-x-auto width-64 bg-tint-granite-5 flex (expand)width-1/2 (expand)height-16">
  <div class="bg-tint-granite-2 flex justify-center items-center"></div>
  <div class="bg-tint-granite-3 flex justify-center items-center"></div>
</div>

{{ console('html',
'<div class="flex (expand)width-1/2">
    <div> ... </div>
    <div> ... </div>
  </div>
') }}

{{ console('scss',
'.dummy-parrent {
    @extend
      .flex,
      .\(expand\)width-1\/2;
}
') }}

Set 3-column width `1/3` to an element.

<div class="padding-y-4 margin-y-4 margin-x-auto width-64 bg-tint-granite-5 flex (expand)width-1/3 (expand)height-16">
  <div class="bg-tint-granite-2 flex justify-center items-center"></div>
  <div class="bg-tint-granite-3 flex justify-center items-center"></div>
  <div class="text-shade-granite-1 bg-tint-granite-4 flex justify-center items-center"></div>
</div>

{{ console('html',
'<div class="flex (expand)width-1/3">
    <div> ... </div>
    <div> ... </div>
    <div> ... </div>
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .flex,
      .\(expand\)width-1\/3;
}
') }}

...mixed 3-column widths.

{{ console('html',
'<div class="flex">
    <div class="width-2/3">
      ...
    </div>
    <div class="width-1/3">
      ...
    </div>
  </div>
') }}

{{ console('scss',
'.dummy-parent {
    @extend
      .flex;
}
.dummy-child {
    @extend
      .width-2\/3;
}
') }}

Set 4-column width `1/4` to an element.

<div class="padding-y-4 margin-y-4 margin-x-auto width-64 bg-tint-granite-5 flex (expand)width-1/4 (expand)height-16">
  <div class="bg-tint-granite-2 flex justify-center items-center"></div>
  <div class="bg-tint-granite-3 flex justify-center items-center"></div>
  <div class="text-shade-granite-1 bg-tint-granite-4 flex justify-center items-center"></div>
  <div class="text-shade-granite-1 bg-tint-granite-1 flex justify-center items-center"></div>
</div>

{{ console('html',
'<div class="flex (expand)width-1/4">
  <div> ... </div>
  <div> ... </div>
  <div> ... </div>
  <div> ... </div>
</div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .flex,
      .\(expand\)width-1\/4;
}
') }}

...mixed 4-column widths.

{{ console('html',
'<div class="flex">
  <div class="width-2/4"> ... </div>
  <div class="width-3/4"> ... </div>
</div>
') }}

{{ console('scss',
'.dummy-parent {
    @extend
      .flex;
}
.dummy-child {
   @extend
      .width-2\/4;
}
') }}

Set 5-column width `1/5` to an element.

<div class="padding-y-4 margin-y-4 margin-x-auto width-64 bg-tint-granite-5 flex (expand)width-1/5 (expand)height-16">
  <div class="bg-tint-granite-2 flex justify-center items-center"></div>
  <div class="bg-tint-granite-3 flex justify-center items-center"></div>
  <div class="text-shade-granite-1 bg-tint-granite-4 flex justify-center items-center"></div>
  <div class="text-shade-granite-1 bg-shade-granite-1 flex justify-center items-center"></div>
  <div class="text-shade-granite-1 bg-tint-granite-1 flex justify-center items-center"></div>
</div>

{{ console('html',
'<div class="flex (expand)width-1/5">
  <div> ... </div>
  <div> ... </div>
  <div> ... </div>
  <div> ... </div>
  <div> ... </div>
</div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .flex,
      .\(expand\)width-1\/5;
}
') }}

...mixed 5-column widths.

{{ console('html',
'<div class="flex">
  <div class="width-3/5"> ... </div>
  <div class="width-2/5"> ... </div>
</div>
') }}

{{ console('scss',
'.dummy-parent {
    @extend
      .flex;
}
.dummy-child {
    @extend
      .width-3\/5;
}
') }}

Set 6-column width `1/6` to an element.

<div class="padding-y-4 margin-y-4 margin-x-auto width-64 bg-tint-granite-5 flex (expand)width-1/6 (expand)height-16">
  <div class="bg-tint-granite-1 flex justify-center items-center"></div>
  <div class="bg-tint-granite-2 flex justify-center items-center"></div>
  <div class="text-gray-1 bg-tint-granite-3 flex justify-center items-center"></div>
  <div class="text-gray-1 bg-tint-granite-4 flex justify-center items-center"></div>
  <div class="text-gray-1 bg-shade-granite-1 flex justify-center items-center"></div>
  <div class="text-gray-1 bg-shade-granite-2 flex justify-center items-center"></div>
</div>

{{ console('html',
'<div class="flex (expand)width-1/6">
  <div> ... </div>
  <div> ... </div>
  <div> ... </div>
  <div> ... </div>
  <div> ... </div>
  <div> ... </div>
</div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .flex,
      .\(expand\)width-1\/6;
}
') }}

...mixed 6-column widths.

{{ console('html',
'<div class="flex">
  <div class="width-4/6"> ... </div>
  <div class="width-2/6"> ... </div>
</div>
') }}

{{ console('scss',
'.dummy-parent {
    @extend
      .flex;
}
.dummy-child {
    @extend
      .width-4\/6;
}
') }}

Set 12-column width `1/12` to an element.

<div class="padding-y-4 margin-y-4 margin-x-auto width-64 bg-tint-granite-5 gray-3 flex (expand)width-1/2 (expand)height-16">
  <div class="bg-tint-granite-1 flex justify-center items-center"></div>
  <div class="bg-tint-granite-2 flex justify-center items-center"></div>
  <div class="bg-tint-granite-3 flex justify-center items-center"></div>
  <div class="bg-tint-granite-4 flex justify-center items-center"></div>
  <div class="bg-shade-granite-1 flex justify-center items-center"></div>
  <div class="bg-shade-granite-2 flex justify-center items-center"></div>
  <div class="bg-shade-granite-3 flex justify-center items-center"></div>
  <div class="bg-shade-granite-4 flex justify-center items-center"></div>
  <div class="bg-tint-granite-4flex justify-center items-center"></div>
  <div class="bg-tint-granite-3 flex justify-center items-center"></div>
  <div class="bg-tint-granite-2 flex justify-center items-center"></div>
  <div class="bg-tint-granite-1 flex justify-center items-center"></div>
</div>

{{ console('html',
'<div class="flex (expand)width-1/12">
  <div> ... </div>
  <div> ... </div>
  <div> ... </div>
  <div> ... </div>
  <div> ... </div>
  <div> ... </div>
  <div> ... </div>
  <div> ... </div>
  <div> ... </div>
  <div> ... </div>
  <div> ... </div>
  <div> ... </div>
</div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .flex,
      .\(expand\)width-1\/12;
}
') }}

...mixed 12-column widths.

{{ console('html',
'<div class="flex">
  <div class="width-4/12"> ... </div>
  <div class="width-6/12"> ... </div>
  <div class="width-2/12"> ... </div>
</div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .flex;
}
.dummy {
    @extend
      .width-4\/12;
}
') }}

Use `(expand)` variant to apply width to all child elements.

<div class="margin-y-2 margin-x-auto flex justify-center items-center">
  <div class="inline-block">
    <div class="flex justify-center items-center (expand)margin-4 (expand)height-24 (expand)width-32">
      <div class="bg-tint-granite-4"></div>
      <div class="bg-tint-granite-1"></div>
      <div class="bg-tint-granite-4"></div>
    </div>
  </div>
</div>

{{ console('html',
'<!-- Parent -->
<div class="(expand)width-24">
  <!-- Child -->
  <div>...</div>
  <div>...</div>
  <div>...</div>
</div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .\(expand\)width-24;
}
') }}


