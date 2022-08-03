---
id: height
title: Height
description: Utilities for sets the height of an element.
topic: Sizing
relate: width, min-width, max-width, min-height, max-height
variant: responsive, hover
layout: default
---

> Sizing

# Height

Utilities for sets the height of an element.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for height in variants.height %}{% for item in height.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| height-auto | height: auto |
| height-full | height: 100% |
| height-screen | height: 100vh |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| height-px | height: 1px |
| height-0 | height: 0 |
| height-1 | height: 0.25rem |
| height-2 | height: 0.5rem |
| height-3 | height: 0.75rem |
| height-4 | height: 1rem |
| height-5 | height: 1.25rem |
| height-6 | height: 1.5rem |
| height-8 | height: 2rem |
| height-10 | height: 2.5rem |
| height-12 | height: 3rem |
| height-16 | height: 4rem |
| height-20 | height: 5rem |
| height-24 | height: 6rem |
| height-32 | height: 8rem |
| height-40 | height: 10rem |
| height-48 | height: 12rem |
| height-56 | height: 14rem |
| height-64 | height: 16rem |
| height-72  | height: 18rem |
| height-80  | height: 20rem |
| height-88  | height: 22rem |
| height-96  | height: 24rem |
| height-104  | height: 26rem |
| height-112  | height: 28rem |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| height-1/2 | width: 50% |
| height-1/3 | width: 33.333333% |
| height-2/3 | width: 66.666667% |
| height-1/4 | width: 25% |
| height-2/4 | width: 50% |
| height-3/4 | width: 75% |
| height-1/5 | width: 20% |
| height-2/5 | width: 40% |
| height-3/5 | width: 60% |
| height-4/5 | width: 80% |
| height-1/6 | width: 16.666667% |
| height-2/6 | width: 33.333333% |
| height-3/6 | width: 50% |
| height-4/6 | width: 66.666667% |
| height-5/6 | width: 83.333333% |
| height-1/12 | width: 8.333333% |
| height-2/12 | width: 16.666667% |
| height-3/12 | width: 25% |
| height-4/12 | width: 33.333333% |
| height-5/12 | width: 41.666667% |
| height-6/12 | width: 50% |
| height-7/12 | width: 58.333333% |
| height-8/12 | width: 66.666667% |
| height-9/12 | width: 75% |
| height-10/12 | width: 83.333333% |
| height-11/12 | width: 91.666667% |

---

## Usage

{% from "misc/console.njk" import console %}

<div class="padding-x-4 margin-y-4 margin-x-auto">
  <div class="max-width-xs-1 padding-4 flex flex-column justify-center items-center">
    <div class="(expand)padding-4 (expand)margin-2 (expand)bg-tint-granite-5 (expand)bg-opacity-25 (expand)curve-border-lg (expand)text-center text-xl-1 text-shade-granite-1 flex">
      <div class="height-24">
        height-24
      </div>
      <div class="height-32">
        height-32
      </div>
      <div class="height-48">
        height-48
      </div>
    </div>
  </div>
</div>

Set basic height to an element.

{{ console('html',
'<div class="height-4">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .height-4;
}
') }}

Set full height to an element.

{{ console('html',
'<div class="height-full">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .height-full;
}
') }}

Set full height in viewport screen to an element.

{{ console('html',
'<div class="height-screen">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .height-screen;
}
') }}

Set a different height in vertical formation to an element.

{{ console('html',
'<div class="height-screen">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .height-screen;
}
') }}

Use `(expand)` variant to apply height to all child elements.

<div class="padding-4 margin-y-2 margin-x-auto flex justify-center items-center">
  <div class="inline-block">
    <div class="flex justify-center items-center (expand)margin-4 (expand)height-32 (expand)width-24">
      <div class="bg-tint-granite-5"></div>
      <div class="bg-tint-granite-1"></div>
      <div class="bg-tint-granite-5"></div>
    </div>
  </div>
</div>

{{ console('html',
'<div class="(expand)height-24">
    <div class="width-24">...</div>
    <div class="width-24">...</div>
    <div class="width-24">...</div>
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .\(expand\)height-24;
}
') }}

{{ console('html',
'<div class="height-screen (expand)height-1/3">
    <div>...</div>
    <div>...</div>
    <div>...</div>
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .height-screen,
      .\(expand\)height-1\/3;
}
') }}
