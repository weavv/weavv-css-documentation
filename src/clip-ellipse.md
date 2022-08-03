---
id: clip-ellipse
title: Clip Ellipse
description: Utilities for sets outside clipping ellipse path of image or element invisible, inside the clipping path are visible by moving plot x or y and focus area.
topic: Clipping
relate: clip-polygon, clip-circle
layout: default
---

> Clipping

# Clip Ellipse

Utilities for sets outside clipping ellipse path of image or element invisible, inside the clipping path are visible by moving plot x or y and focus area.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for clipellipse in variants.clipellipse %}{% for item in clipellipse.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| clip-ellipse `{focus-x}` `{focus-y}` `{plot-x}` `{plot-y}` | clip-path: ellipse(var(--clip-ellipse-focus-x) var(--clip-ellipse-focus-y) at var(--clip-ellipse-plot-x) var(--clip-ellipse-plot-y)); |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| focus-x-0 | --clip-ellipse-focus-x: 0% |
| focus-x-10 | --clip-ellipse-focus-x: 10% |
| focus-x-20 | --clip-ellipse-focus-x: 20% |
| focus-x-30 | --clip-ellipse-focus-x: 30% |
| focus-x-40 | --clip-ellipse-focus-x: 40% |
| focus-x-50 | --clip-ellipse-focus-x: 50% |
| focus-x-60 | --clip-ellipse-focus-x: 60% |
| focus-x-70 | --clip-ellipse-focus-x: 70% |
| focus-x-80 | --clip-ellipse-focus-x: 80% |
| focus-x-90 | --clip-ellipse-focus-x: 90% |
| focus-x-100 | --clip-ellipse-focus-x: 100% |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| focus-y-0 | --clip-ellipse-focus-y 0% |
| focus-y-10 | --clip-ellipse-focus-y: 10% |
| focus-y-20 | --clip-ellipse-focus-y: 20% |
| focus-y-30 | --clip-ellipse-focus-y: 30% |
| focus-y-40 | --clip-ellipse-focus-y: 40% |
| focus-y-50 | --clip-ellipse-focus-y: 50% |
| focus-y-60 | --clip-ellipse-focus-y: 60% |
| focus-y-70 | --clip-ellipse-focus-y: 70% |
| focus-y-80 | --clip-ellipse-focus-y: 80% |
| focus-y-90 | --clip-ellipse-focus-y: 90% |
| focus-y-100 | --clip-ellipse-focus-y 100% |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| plot-x-0 | --clip-ellipse-plot-x: 0% |
| plot-x-10 | --clip-ellipse-plot-x: 10% |
| plot-x-20 | --clip-ellipse-plot-x: 20% |
| plot-x-30 | --clip-ellipse-plot-x: 30% |
| plot-x-40 | --clip-ellipse-plot-x: 40% |
| plot-x-50 | --clip-ellipse-plot-x: 50% |
| plot-x-60 | --clip-ellipse-plot-x: 60% |
| plot-x-70 | --clip-ellipse-plot-x: 70% |
| plot-x-80 | --clip-ellipse-plot-x: 80% |
| plot-x-90 | --clip-ellipse-plot-x: 90% |
| plot-x-100 | --clip-ellipse-plot-x: 100% |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| plot-y-0 | --clip-ellipse-plot-y 0% |
| plot-y-10 | --clip-ellipse-plot-y: 10% |
| plot-y-20 | --clip-ellipse-plot-y: 20% |
| plot-y-30 | --clip-ellipse-plot-y: 30% |
| plot-y-40 | --clip-ellipse-plot-y: 40% |
| plot-y-50 | --clip-ellipse-plot-y: 50% |
| plot-y-60 | --clip-ellipse-plot-y: 60% |
| plot-y-70 | --clip-ellipse-plot-y: 70% |
| plot-y-80 | --clip-ellipse-plot-y: 80% |
| plot-y-90 | --clip-ellipse-plot-y: 90% |
| plot-y-100 | --clip-ellipse-plot-y 100% |

---

## Usage

{% from "misc/console.njk" import console %}

### Clipping Image

<div class="padding-x-4 margin-y-2 margin-x-auto width-full">
  <div class="flex flex-gap-10 flex-row flex-wrap justify-center items-center">
    <div class="height-48 width-48 bg-gray-1 border-2 border-dashed border-gray-3 curve-border-lg overflow-hidden">
      <div>
        <img
          class="height-full width-48 object-cover object-center overflow-hidden curve-border-lg shadow"
          src="https://picsum.photos/256"
        >
      </div>
    </div>
    <div class="height-48 width-48 bg-gray-1 border-2 border-dashed border-gray-3 curve-border-lg">
      <div class="clip-ellipse focus-x-50 focus-y-30 plot-x-40 plot-y-50">
        <img
          class="height-48 width-48 object-cover object-center curve-border-lg"
          src="https://picsum.photos/256"
        >
      </div>
    </div>
    <div class="height-48 width-48 bg-gray-1 border-2 border-dashed border-gray-3 curve-border-lg">
      <div class="clip-ellipse focus-x-50 focus-y-70 plot-x-10 plot-y-20">
        <img
          class="height-48 width-48 object-cover object-center curve-border-lg"
          src="https://picsum.photos/256"
        >
      </div>
    </div>
  </div>
</div>

{{ console('html',
'<div class="clip-ellipse focus-x-50 focus-y-30 plot-x-40 plot-y-50">
    <img class="height-48 width-48 .. object-cover object-center" src="...">
  </div>
') }}

{{ console('scss',
'.dummy-clip {
    @extend
      .clip-circle,
      .focus-x-50,
      .focus-y-30,
      .plot-x-40
      .plot-y-50;
}
.dummy-image {
    @extend
      .height-48,
      .width-48,
      .object-cover,
      .object-center;
}
') }}

### Clipping Background

<div class="padding-x-4 margin-y-2 margin-x-auto width-full">
  <div class="flex flex-gap-10 flex-row flex-wrap justify-center items-center">
    <div class="height-48 width-48 bg-gray-1 border-2 border-dashed border-gray-3 curve-border-lg overflow-hidden">
      <div>
        <div class="height-48 width-48 bg-gradient-preset-12 curve-border-lg"></div>
      </div>
    </div>
    <div class="height-48 width-48 bg-gray-1 border-2 border-dashed border-gray-3 curve-border-lg">
      <div class="clip-ellipse focus-x-50 focus-y-30 plot-x-40 plot-y-50">
        <div class="height-48 width-48 bg-gradient-preset-12 curve-border-lg"></div>
      </div>
    </div>
    <div class="height-48 width-48 bg-gray-1 border-2 border-dashed border-gray-3 curve-border-lg">
      <div class="clip-ellipse focus-x-50 focus-y-70 plot-x-10 plot-y-20">
        <div class="height-48 width-48 bg-gradient-preset-12 curve-border-lg"></div>
      </div>
    </div>
  </div>
</div>

{{ console('html',
'<div class="clip-ellipse focus-x-50 focus-y-70 plot-x-10 plot-y-20">
    <div class="height-48 width-48 ... bg-gradient-preset-19"></div>
  </div>
') }}

{{ console('scss',
'.dummy-clip {
    @extend
      .clip-circle,
      .focus-x-50,
      .focus-y-70,
      .plot-x-10
      .plot-y-20;
}
.dummy-image {
    @extend
      .height-48,
      .width-48,
      .bg-gradient-preset-19;
}
') }}

### Clipping text

<div class="padding-x-4 margin-y-2 margin-x-auto width-full">
  <div class="flex flex-gap-10 flex-row flex-wrap justify-center items-center">
    <div class="height-48 width-48 bg-tint-granite-5 border-2 border-dashed border-tint-granite-1 curve-border-lg overflow-hidden">
      <div>
        <div class="height-48 width-48 text-xs overflow-hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at nunc scelerisque, pretium arcu nec, convallis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec fermentum magna turpis, nec facilisis justo dapibus volutpat. Mauris sagittis pretium sem et consequat. Curabitur a tellus sem. Morbi non auctor elit. Donec tortor nunc, auctor vel sem ac, aliquam cursus nisi. Praesent lobortis urna ex, ut iaculis nulla porttitor in. Curabitur orci augue, pellentesque sed orci et, ultrices tempor dolor. Aenean tincidunt posuere lobortis. In ac tortor quis lorem lacinia gravida quis tincidunt lorem. Nunc ac ultrices leo. Ut sodales, nibh ut consequat fermentum, mi justo cursus quam, eget sodales dui risus ac odio. Proin efficitur lacinia lobortis. Integer efficitur ligula non ultricies sollicitudin. Praesent efficitur augue justo, sit amet dignissim nunc mollis vel.
        </div>
      </div>
    </div>
    <div class="height-48 width-48 bg-tint-granite-5 border-2 border-dashed border-tint-granite-1 curve-border-lg">
      <div class="clip-ellipse focus-x-50 focus-y-30 plot-x-40 plot-y-50">
        <div class="height-48 width-48 text-xs overflow-hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at nunc scelerisque, pretium arcu nec, convallis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec fermentum magna turpis, nec facilisis justo dapibus volutpat. Mauris sagittis pretium sem et consequat. Curabitur a tellus sem. Morbi non auctor elit. Donec tortor nunc, auctor vel sem ac, aliquam cursus nisi. Praesent lobortis urna ex, ut iaculis nulla porttitor in. Curabitur orci augue, pellentesque sed orci et, ultrices tempor dolor. Aenean tincidunt posuere lobortis. In ac tortor quis lorem lacinia gravida quis tincidunt lorem. Nunc ac ultrices leo. Ut sodales, nibh ut consequat fermentum, mi justo cursus quam, eget sodales dui risus ac odio. Proin efficitur lacinia lobortis. Integer efficitur ligula non ultricies sollicitudin. Praesent efficitur augue justo, sit amet dignissim nunc mollis vel.
        </div>
      </div>
    </div>
    <div class="height-48 width-48 bg-tint-granite-5 border-2 border-dashed border-tint-granite-1 curve-border-lg">
      <div class="clip-ellipse focus-x-50 focus-y-70 plot-x-10 plot-y-20">
        <div class="height-48 width-48 text-xs overflow-hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at nunc scelerisque, pretium arcu nec, convallis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec fermentum magna turpis, nec facilisis justo dapibus volutpat. Mauris sagittis pretium sem et consequat. Curabitur a tellus sem. Morbi non auctor elit. Donec tortor nunc, auctor vel sem ac, aliquam cursus nisi. Praesent lobortis urna ex, ut iaculis nulla porttitor in. Curabitur orci augue, pellentesque sed orci et, ultrices tempor dolor. Aenean tincidunt posuere lobortis. In ac tortor quis lorem lacinia gravida quis tincidunt lorem. Nunc ac ultrices leo. Ut sodales, nibh ut consequat fermentum, mi justo cursus quam, eget sodales dui risus ac odio. Proin efficitur lacinia lobortis. Integer efficitur ligula non ultricies sollicitudin. Praesent efficitur augue justo, sit amet dignissim nunc mollis vel.
        </div>
      </div>
    </div>
  </div>
</div>

{{ console('html',
'<div class="clip-ellipse focus-x-50 focus-y-70 plot-x-10 plot-y-20">
    <div class="height-84 width-48 text-xs overflow-hidden">
      ...
    </div>
  </div>
') }}

{{ console('scss',
'.dummy-clip {
    @extend
      .clip-circle,
      .focus-x-50,
      .focus-y-70,
      .plot-x-10
      .plot-y-20;
}
.dummy-image {
    @extend
      .height-48,
      .width-48,
      .text-xs,
      .overflow-hidden;
}
') }}



