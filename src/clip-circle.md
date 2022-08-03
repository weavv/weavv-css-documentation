---
id: clip-circle
title: Clip Circle
description: Utilities for sets outside clipping circle path of image or element invisible, inside the clipping path are visible by moving plot x or y and focus area.
topic: Clipping
relate: clip-polygon, clip-ellipse
layout: default
---

> Clipping

# Clip Circle

Utilities for sets outside clipping circle path of image or element invisible, inside the clipping path are visible by moving plot x or y and focus area.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for clipcircle in variants.clipcircle %}{% for item in clipcircle.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| clip-circle `{focus}` `{plot-x}` `{plot-y}` | clip-path: circle(var(--clip-circle-focus) at var(--clip-circle-plot-x) var(--clip-circle-plot-y)); |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| focus-0 | --clip-circle-focus: 0% |
| focus-10 | --clip-circle-focus: 10% |
| focus-20 | --clip-circle-focus: 20% |
| focus-30 | --clip-circle-focus: 30% |
| focus-40 | --clip-circle-focus: 40% |
| focus-50 | --clip-circle-focus: 50% |
| focus-60 | --clip-circle-focus: 60% |
| focus-70 | --clip-circle-focus: 70% |
| focus-80 | --clip-circle-focus: 80% |
| focus-90 | --clip-circle-focus: 90% |
| focus-100 | --clip-circle-focus: 100% |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| plot-x-0 | --clip-circle-plot-x: 0% |
| plot-x-10 | --clip-circle-plot-x: 10% |
| plot-x-20 | --clip-circle-plot-x: 20% |
| plot-x-30 | --clip-circle-plot-x: 30% |
| plot-x-40 | --clip-circle-plot-x: 40% |
| plot-x-50 | --clip-circle-plot-x: 50% |
| plot-x-60 | --clip-circle-plot-x: 60% |
| plot-x-70 | --clip-circle-plot-x: 70% |
| plot-x-80 | --clip-circle-plot-x: 80% |
| plot-x-90 | --clip-circle-plot-x: 90% |
| plot-x-100 | --clip-circle-plot-x: 100% |
| -plot-x-10 | --clip-circle-plot-x: -10% |
| -plot-x-20 | --clip-circle-plot-x: -20% |
| -plot-x-30 | --clip-circle-plot-x: -30% |
| -plot-x-40 | --clip-circle-plot-x: -40% |
| -plot-x-50 | --clip-circle-plot-x: -50% |
| -plot-x-60 | --clip-circle-plot-x: -60% |
| -plot-x-70 | --clip-circle-plot-x: -70% |
| -plot-x-80 | --clip-circle-plot-x: -80% |
| -plot-x-90 | --clip-circle-plot-x: -90% |
| -plot-x-100 | --clip-circle-plot-x: -100% |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| plot-y-0 | --clip-circle-plot-y: 0% |
| plot-y-10 | --clip-circle-plot-y: 10% |
| plot-y-20 | --clip-circle-plot-y: 20% |
| plot-y-30 | --clip-circle-plot-y: 30% |
| plot-y-40 | --clip-circle-plot-y: 40% |
| plot-y-50 | --clip-circle-plot-y: 50% |
| plot-y-60 | --clip-circle-plot-y: 60% |
| plot-y-70 | --clip-circle-plot-y: 70% |
| plot-y-80 | --clip-circle-plot-y: 80% |
| plot-y-90 | --clip-circle-plot-y: 90% |
| plot-y-100 | --clip-circle-plot-y: 100% |
| -plot-y-10 | --clip-circle-plot-y: -10% |
| -plot-y-20 | --clip-circle-plot-y: -20% |
| -plot-y-30 | --clip-circle-plot-y: -30% |
| -plot-y-40 | --clip-circle-plot-y: -40% |
| -plot-y-50 | --clip-circle-plot-y: -50% |
| -plot-y-60 | --clip-circle-plot-y: -60% |
| -plot-y-70 | --clip-circle-plot-y: -70% |
| -plot-y-80 | --clip-circle-plot-y: -80% |
| -plot-y-90 | --clip-circle-plot-y: -90% |
| -plot-y-100 | --clip-circle-plot-y: -100% |

---

## Usage

{% from "misc/console.njk" import console %}

### Clipping Image

<div class="padding-x-4 padding-y-2 margin-x-auto width-full">
  <div class="flex flex-gap-10 flex-row flex-wrap justify-center items-center">
    <div class="height-48 width-48 bg-tint-granite-5 border-2 border-dashed border-tint-granite-1 curve-border-lg overflow-hidden">
      <div>
        <img class="height-48 width-48 object-cover object-center overflow-hidden curve-border-lg shadow" src="https://picsum.photos/256">
      </div>
    </div>
    <div class="height-48 width-48 bg-tint-granite-5 border-2 border-dashed border-tint-granite-1 curve-border-lg">
      <div class="clip-circle focus-30 plot-x-10 plot-y-40">
        <img class="height-48 width-48 object-cover object-center" src="https://picsum.photos/256">
      </div>
    </div>
    <div class="height-48 width-48 bg-tint-granite-5 border-2 border-dashed border-tint-granite-1 curve-border-lg">
      <div class="clip-circle focus-30 plot-x-60 plot-y-70">
        <img class="height-48 width-48 object-cover object-center" src="https://picsum.photos/256">
      </div>
    </div>
  </div>
</div>

{{ console('html',
'<div class="clip-circle focus-30 plot-x-60 plot-y-70">
    <img class="height-64 width-64 ... object-cover object-center" src="...">
  </div>
') }}

{{ console('scss',
'.dummy-clip {
    @extend
      .clip-circle,
      .focus-30,
      .plot-x-60,
      .plot-y-70;
}
.dummy-image {
    @extend
      .height-64,
      .width-64,
      .object-cover,
      .object-center;
}
') }}

### Clipping Background

<div class="padding-x-4 padding-y-2 margin-x-auto width-full">
  <div class="flex flex-gap-10 flex-row flex-wrap justify-center items-center">
    <div class="height-48 width-48 bg-tint-granite-5 border-2 border-dashed border-tint-granite-1 curve-border-lg overflow-hidden">
      <div>
        <div class="height-48 width-48 bg-gradient-preset-12 curve-border-lg"></div>
      </div>
    </div>
    <div class="height-48 width-48 bg-tint-granite-5 border-2 border-dashed border-tint-granite-1 curve-border-lg">
      <div class="clip-circle focus-30 plot-x-10 plot-y-40">
        <div class="height-48 width-48 bg-gradient-preset-12 curve-border-lg"></div>
      </div>
    </div>
    <div class="height-48 width-48 bg-tint-granite-5 border-2 border-dashed border-tint-granite-1 curve-border-lg">
      <div class="clip-circle focus-30 plot-x-60 plot-y-70">
        <div class="height-48 width-48 bg-gradient-preset-12 curve-border-lg"></div>
      </div>
    </div>
  </div>
</div>

{{ console('html',
'<div class="clip-circle focus-30 plot-x-60 plot-y-70">
    <div class="height-48 width-48 ... bg-gradient-preset-19"></div>
  </div>
') }}

{{ console('scss',
'.dummy-clip {
    @extend
      .clip-circle,
      .focus-30,
      .plot-x-60,
      .plot-y-70;
}
.dummy-image {
    @extend
      .height-64,
      .width-64,
      .bg-gradient-preset-19;
}
') }}

### Clipping text

<div class="padding-x-4 padding-y-2 margin-x-auto width-full">
  <div class="flex flex-gap-10 flex-row flex-wrap justify-center items-center">
    <div class="height-48 width-48 bg-tint-granite-5 border-2 border-dashed border-tint-granite-1 curve-border-lg overflow-hidden">
      <div>
        <div class="height-48 width-48 text-xs overflow-hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at nunc scelerisque, pretium arcu nec, convallis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec fermentum magna turpis, nec facilisis justo dapibus volutpat. Mauris sagittis pretium sem et consequat. Curabitur a tellus sem. Morbi non auctor elit. Donec tortor nunc, auctor vel sem ac, aliquam cursus nisi. Praesent lobortis urna ex, ut iaculis nulla porttitor in. Curabitur orci augue, pellentesque sed orci et, ultrices tempor dolor. Aenean tincidunt posuere lobortis. In ac tortor quis lorem lacinia gravida quis tincidunt lorem. Nunc ac ultrices leo. Ut sodales, nibh ut consequat fermentum, mi justo cursus quam, eget sodales dui risus ac odio. Proin efficitur lacinia lobortis. Integer efficitur ligula non ultricies sollicitudin. Praesent efficitur augue justo, sit amet dignissim nunc mollis vel.
        </div>
      </div>
    </div>
    <div class="height-48 width-48 bg-tint-granite-5 border-2 border-dashed border-tint-granite-1 curve-border-lg">
      <div class="clip-circle focus-30 plot-x-10 plot-y-40">
        <div class="height-48 width-48 text-xs overflow-hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at nunc scelerisque, pretium arcu nec, convallis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec fermentum magna turpis, nec facilisis justo dapibus volutpat. Mauris sagittis pretium sem et consequat. Curabitur a tellus sem. Morbi non auctor elit. Donec tortor nunc, auctor vel sem ac, aliquam cursus nisi. Praesent lobortis urna ex, ut iaculis nulla porttitor in. Curabitur orci augue, pellentesque sed orci et, ultrices tempor dolor. Aenean tincidunt posuere lobortis. In ac tortor quis lorem lacinia gravida quis tincidunt lorem. Nunc ac ultrices leo. Ut sodales, nibh ut consequat fermentum, mi justo cursus quam, eget sodales dui risus ac odio. Proin efficitur lacinia lobortis. Integer efficitur ligula non ultricies sollicitudin. Praesent efficitur augue justo, sit amet dignissim nunc mollis vel.
        </div>
      </div>
    </div>
    <div class="height-48 width-48 bg-tint-granite-5 border-2 border-dashed border-tint-granite-1 curve-border-lg">
      <div class="clip-circle focus-30 plot-x-70 plot-y-60">
        <div class="height-48 width-48 text-xs overflow-hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at nunc scelerisque, pretium arcu nec, convallis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec fermentum magna turpis, nec facilisis justo dapibus volutpat. Mauris sagittis pretium sem et consequat. Curabitur a tellus sem. Morbi non auctor elit. Donec tortor nunc, auctor vel sem ac, aliquam cursus nisi. Praesent lobortis urna ex, ut iaculis nulla porttitor in. Curabitur orci augue, pellentesque sed orci et, ultrices tempor dolor. Aenean tincidunt posuere lobortis. In ac tortor quis lorem lacinia gravida quis tincidunt lorem. Nunc ac ultrices leo. Ut sodales, nibh ut consequat fermentum, mi justo cursus quam, eget sodales dui risus ac odio. Proin efficitur lacinia lobortis. Integer efficitur ligula non ultricies sollicitudin. Praesent efficitur augue justo, sit amet dignissim nunc mollis vel.
        </div>
      </div>
    </div>
  </div>
</div>

{{ console('html',
'<div class="clip-circle focus-30 plot-x-60 plot-y-70">
    <div class="height-64 width-64 text-xs">
      ...
    </div>
  </div>
') }}

{{ console('scss',
'.dummy-clip {
    @extend
      .clip-circle,
      .focus-30,
      .plot-x-60,
      .plot-y-70;
}
.dummy-text {
    @extend
      .height-64,
      .width-64,
      .text-xs;
}
') }}

