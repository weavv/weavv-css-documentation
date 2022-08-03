---
id: top-bottom-left-right
title: Top / Right / Bottom / Left
description: Utilities for sets the placement of a positioned element.
topic: Layouts
relate: clear, render, display, float, object-fit, object-position, overflow, position, visibility, z-index
variant: responsive
layout: default
---

> Layouts

# Top / Right / Bottom / Left

Utilities for sets the placement of a positioned element.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for topbottomleftright in variants.topbottomleftright %}{% for item in topbottomleftright.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| inset-0 | top: 0; <br> right: 0; <br> bottom: 0; <br> left: 0 |
| inset-y-0 | top: 0; <br> bottom: 0 |
| inset-x-0 | right: 0; <br> left: 0 |
| inset-auto | top: auto; <br> right: auto; <br> bottom: auto; <br> left: auto |
| inset-y-auto | top: auto; <br> bottom: auto |
| inset-x-auto | left: auto; <br> right: auto |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| top-auto | top: auto |
| top-0 | top: 0 |
| top-px | top: 1px |
| top-1 | top: 0.25rem |
| top-2 | top: 0.5rem |
| top-3 | top: 0.75rem |
| top-4 | top: 1rem |
| top-5 | top: 1.25rem |
| top-6 | top: 1.5rem |
| top-8 | top: 2rem |
| top-10 | top: 2.5rem |
| top-12 | top: 3rem |
| top-16 | top: 4rem |
| top-20 | top: 5rem |
| top-24 | top: 6rem |
| top-32 | top: 8rem |
| top-40 | top: 10rem |
| top-48 | top: 12rem |
| top-56 | top: 14rem |
| top-64 | top: 16rem |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| bottom-auto | bottom: auto |
| bottom-0 | bottom: 0 |
| bottom-px | bottom: 1px |
| bottom-1 | bottom: 0.25rem |
| bottom-2 | bottom: 0.5rem |
| bottom-3 | bottom: 0.75rem |
| bottom-4 | bottom: 1rem |
| bottom-5 | bottom: 1.25rem |
| bottom-6 | bottom: 1.5rem |
| bottom-8 | bottom: 2rem |
| bottom-10 | bottom: 2.5rem |
| bottom-12 | bottom: 3rem |
| bottom-16 | bottom: 4rem |
| bottom-20 | bottom: 5rem |
| bottom-24 | bottom: 6rem |
| bottom-32 | bottom: 8rem |
| bottom-40 | bottom: 10rem |
| bottom-48 | bottom: 12rem |
| bottom-56 | bottom: 14rem |
| bottom-64 | bottom: 16rem |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| left-auto | left: auto |
| left-0 | left: 0 |
| left-px | left: 1px |
| left-1 | left: 0.25rem |
| left-2 | left: 0.5rem |
| left-3 | left: 0.75rem |
| left-4 | left: 1rem |
| left-5 | left: 1.25rem |
| left-6 | left: 1.5rem |
| left-8 | left: 2rem |
| left-10 | left: 2.5rem |
| left-12 | left: 3rem |
| left-16 | left: 4rem |
| left-20 | left: 5rem |
| left-24 | left: 6rem |
| left-32 | left: 8rem |
| left-40 | left: 10rem |
| left-48 | left: 12rem |
| left-56 | left: 14rem |
| left-64 | left: 16rem |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| right-auto | right: auto |
| right-0 | right: 0 |
| right-px | right: 1px |
| right-1 | right: 0.25rem |
| right-2 | right: 0.5rem |
| right-3 | right: 0.75rem |
| right-4 | right: 1rem |
| right-5 | right: 1.25rem |
| right-6 | right: 1.5rem |
| right-8 | right: 2rem |
| right-10 | right: 2.5rem |
| right-12 | right: 3rem |
| right-16 | right: 4rem |
| right-20 | right: 5rem |
| right-24 | right: 6rem |
| right-32 | right: 8rem |
| right-40 | right: 10rem |
| right-48 | right: 12rem |
| right-56 | right: 14rem |
| right-64 | right: 16rem |

---

## Usage

{% from "misc/console.njk" import console %}

<div class="padding-x-4 margin-y-4 margin-x-auto width-48">
  <div class="relative">
    <div class="absolute top-0 left-0 height-48 width-48 bg-gray-1 border-2 border-tint-1 border-dashed curve-border-lg"></div>
    <div class="absolute top-2 left-2 height-32 width-32 padding-2 text-md text-shade-granite-1 bg-tint-granite-5 curve-border-lg">top-0, <br> left-0</div>
  </div>
</div>

{{ console('html',
'<div class="relative">
    <div class="top-2 left-2 ... absolute">
      ...
    </div>
  </div>
') }}

{{ console('scss',
'.dummy-parent {
    @extend
      .relative;
}
.dummy-child {
    @extend
      .top-2,
      .left-2,
      .absolute;
}
') }}

<div class="padding-x-4 margin-y-4 margin-x-auto width-48">
  <div class="relative">
    <div class="absolute top-0 right-0 height-48 width-48 bg-gray-1 border-2 border-tint-1 border-dashed curve-border-lg"></div>
    <div class="absolute top-2 right-2 height-32 width-32 padding-2 text-md text-shade-granite-1 bg-tint-granite-5 curve-border-lg">top-0, <br> left-0</div>
  </div>
</div>

{{ console('html',
'<div class="relative">
    <div class="top-2 right-2 ... absolute">
      ...
    </div>
  </div>
') }}

{{ console('scss',
'.dummy-parent {
    @extend
      .relative;
}
.dummy-child {
    @extend
      .top-2,
      .right-2,
      .absolute;
}
') }}

<div class="padding-x-4 margin-y-4 margin-x-auto width-48">
  <div class="relative">
    <div class="absolute top-0 right-0 height-48 width-48 bg-gray-1 border-2 border-tint-1 border-dashed curve-border-lg"></div>
    <div class="absolute bottom-2 left-2 height-32 width-32 padding-2 text-md text-shade-granite-1 bg-tint-granite-5 curve-border-lg">top-0, <br> left-0</div>
  </div>
</div>

{{ console('html',
'<div class="relative">
    <div class="bottom-2 left-2 ... absolute">
      ...
    </div>
  </div>
') }}

{{ console('scss',
'.dummy-relative {
    @extend
      .relative;
}
.dummy-child {
    @extend
      .bottom-2,
      .left-2,
      .absolute;
}
') }}

<div class="padding-x-4 margin-y-4 margin-x-auto width-48">
  <div class="relative">
    <div class="absolute top-0 right-0 height-48 width-48 bg-gray-1 border-2 border-tint-1 border-dashed curve-border-lg"></div>
    <div class="absolute bottom-2 right-2 height-32 width-32 padding-2 text-md text-shade-granite-1 bg-tint-granite-5 curve-border-lg">top-0, <br> left-0</div>
  </div>
</div>

{{ console('html',
'<div class="relative">
    <div class="bottom-2 right-2 ... absolute">
      ...
    </div>
  </div>
') }}

{{ console('html',
'.dummy-parent {
    @extend
      .relative;
}
.dummy {
    @extend
      .bottom-2,
      .right-2,
      .absolute;
}
') }}
