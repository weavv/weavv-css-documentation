---
id: clip-polygon
title: Clip Polygon
description: Utilities for sets outside clipping path of image or element invisible, inside the clipping path are visible by moving plot x or y.
topic: Clipping
relate: clip-circle, clip-ellipse
layout: default
---

> Clipping

# Clip Polygon

Utilities for sets outside clipping path of image or element invisible, inside the clipping path are visible by moving plot x or y.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for clippolygon in variants.clippolygon %}{% for item in clippolygon.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| clip-polygon `{plot-top-x}` `{plot-top-y}` `{plot-bottom-x}` `{plot-bottom-y}` `{plot-left-x}` `{plot-left-y}` `{plot-right-x}` `{plot-right-y}` | clip-path: polygon(var(--clip-polygon-plot-top-x) var(--clip-polygon-plot-top-y), var(--clip-polygon-plot-right-x) var(--clip-polygon-plot-right-y), var(--clip-polygon-plot-bottom-x) var(--clip-polygon-plot-bottom-y), var(--clip-polygon-plot-left-x) var(--clip-polygon-plot-left-y)); |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| plot-top-x-0 | --clip-polygon-plot-top-x: 0% |
| plot-top-x-10 | --clip-polygon-plot-top-x: 10% |
| plot-top-x-20 | --clip-polygon-plot-top-x: 20% |
| plot-top-x-30 | --clip-polygon-plot-top-x: 30% |
| plot-top-x-40 | --clip-polygon-plot-top-x: 40% |
| plot-top-x-50 | --clip-polygon-plot-top-x: 50% |
| plot-top-x-60 | --clip-polygon-plot-top-x: 60% |
| plot-top-x-70 | --clip-polygon-plot-top-x: 70% |
| plot-top-x-80 | --clip-polygon-plot-top-x: 80% |
| plot-top-x-90 | --clip-polygon-plot-top-x: 90% |
| plot-top-x-100 | --clip-polygon-plot-top-x: 100% |
| -plot-top-x-10 | --clip-polygon-plot-top-x: -10% |
| -plot-top-x-20 | --clip-polygon-plot-top-x: -20% |
| -plot-top-x-30 | --clip-polygon-plot-top-x: -30% |
| -plot-top-x-40 | --clip-polygon-plot-top-x: -40% |
| -plot-top-x-50 | --clip-polygon-plot-top-x: -50% |
| -plot-top-x-60 | --clip-polygon-plot-top-x: -60% |
| -plot-top-x-70 | --clip-polygon-plot-top-x: -70% |
| -plot-top-x-80 | --clip-polygon-plot-top-x: -80% |
| -plot-top-x-90 | --clip-polygon-plot-top-x: -90% |
| -plot-top-x-100 | --clip-polygon-plot-top-x: -100% |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| plot-top-y-0 | --clip-polygon-plot-top-y: 0% |
| plot-top-y-10 | --clip-polygon-plot-top-y: 10% |
| plot-top-y-20 | --clip-polygon-plot-top-y: 20% |
| plot-top-y-30 | --clip-polygon-plot-top-y: 30% |
| plot-top-y-40 | --clip-polygon-plot-top-y: 40% |
| plot-top-y-50 | --clip-polygon-plot-top-y: 50% |
| plot-top-y-60 | --clip-polygon-plot-top-y: 60% |
| plot-top-y-70 | --clip-polygon-plot-top-y: 70% |
| plot-top-y-80 | --clip-polygon-plot-top-y: 80% |
| plot-top-y-90 | --clip-polygon-plot-top-y: 90% |
| plot-top-y-100 | --clip-polygon-plot-top-y: 100% |
| -plot-top-y-10 | --clip-polygon-plot-top-y: -10% |
| -plot-top-y-20 | --clip-polygon-plot-top-y: -20% |
| -plot-top-y-30 | --clip-polygon-plot-top-y: -30% |
| -plot-top-y-40 | --clip-polygon-plot-top-y: -40% |
| -plot-top-y-50 | --clip-polygon-plot-top-y: -50% |
| -plot-top-y-60 | --clip-polygon-plot-top-y: -60% |
| -plot-top-y-70 | --clip-polygon-plot-top-y: -70% |
| -plot-top-y-80 | --clip-polygon-plot-top-y: -80% |
| -plot-top-y-90 | --clip-polygon-plot-top-y: -90% |
| -plot-top-y-100 | --clip-polygon-plot-top-y: -100% |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| plot-bottom-x-0 | --clip-polygon-plot-bottom-x: 0% |
| plot-bottom-x-10 | --clip-polygon-plot-bottom-x: 10% |
| plot-bottom-x-20 | --clip-polygon-plot-bottom-x: 20% |
| plot-bottom-x-30 | --clip-polygon-plot-bottom-x: 30% |
| plot-bottom-x-40 | --clip-polygon-plot-bottom-x: 40% |
| plot-bottom-x-50 | --clip-polygon-plot-bottom-x: 50% |
| plot-bottom-x-60 | --clip-polygon-plot-bottom-x: 60% |
| plot-bottom-x-70 | --clip-polygon-plot-bottom-x: 70% |
| plot-bottom-x-80 | --clip-polygon-plot-bottom-x: 80% |
| plot-bottom-x-90 | --clip-polygon-plot-bottom-x: 90% |
| plot-bottom-x-100 | --clip-polygon-plot-bottom-x: 100% |
| -plot-bottom-x-10 | --clip-polygon-plot-bottom-x: -10% |
| -plot-bottom-x-20 | --clip-polygon-plot-bottom-x: -20% |
| -plot-bottom-x-30 | --clip-polygon-plot-bottom-x: -30% |
| -plot-bottom-x-40 | --clip-polygon-plot-bottom-x: -40% |
| -plot-bottom-x-50 | --clip-polygon-plot-bottom-x: -50% |
| -plot-bottom-x-60 | --clip-polygon-plot-bottom-x: -60% |
| -plot-bottom-x-70 | --clip-polygon-plot-bottom-x: -70% |
| -plot-bottom-x-80 | --clip-polygon-plot-bottom-x: -80% |
| -plot-bottom-x-90 | --clip-polygon-plot-bottom-x: -90% |
| -plot-bottom-x-100 | --clip-polygon-plot-bottom-x: -100% |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| plot-bottom-y-0 | --clip-polygon-plot-bottom-y: 0% |
| plot-bottom-y-10 | --clip-polygon-plot-bottom-y: 10% |
| plot-bottom-y-20 | --clip-polygon-plot-bottom-y: 20% |
| plot-bottom-y-30 | --clip-polygon-plot-bottom-y: 30% |
| plot-bottom-y-40 | --clip-polygon-plot-bottom-y: 40% |
| plot-bottom-y-50 | --clip-polygon-plot-bottom-y: 50% |
| plot-bottom-y-60 | --clip-polygon-plot-bottom-y: 60% |
| plot-bottom-y-70 | --clip-polygon-plot-bottom-y: 70% |
| plot-bottom-y-80 | --clip-polygon-plot-bottom-y: 80% |
| plot-bottom-y-90 | --clip-polygon-plot-bottom-y: 90% |
| plot-bottom-y-100 | --clip-polygon-plot-bottom-y: 100% |
| -plot-bottom-y-10 | --clip-polygon-plot-bottom-y: -10% |
| -plot-bottom-y-20 | --clip-polygon-plot-bottom-y: -20% |
| -plot-bottom-y-30 | --clip-polygon-plot-bottom-y: -30% |
| -plot-bottom-y-40 | --clip-polygon-plot-bottom-y: -40% |
| -plot-bottom-y-50 | --clip-polygon-plot-bottom-y: -50% |
| -plot-bottom-y-60 | --clip-polygon-plot-bottom-y: -60% |
| -plot-bottom-y-70 | --clip-polygon-plot-bottom-y: -70% |
| -plot-bottom-y-80 | --clip-polygon-plot-bottom-y: -80% |
| -plot-bottom-y-90 | --clip-polygon-plot-bottom-y: -90% |
| -plot-bottom-y-100 | --clip-polygon-plot-bottom-y: -100% |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| plot-left-x-0 | --clip-polygon-plot-left-x: 0% |
| plot-left-x-10 | --clip-polygon-plot-left-x: 10% |
| plot-left-x-20 | --clip-polygon-plot-left-x: 20% |
| plot-left-x-30 | --clip-polygon-plot-left-x: 30% |
| plot-left-x-40 | --clip-polygon-plot-left-x: 40% |
| plot-left-x-50 | --clip-polygon-plot-left-x: 50% |
| plot-left-x-60 | --clip-polygon-plot-left-x: 60% |
| plot-left-x-70 | --clip-polygon-plot-left-x: 70% |
| plot-left-x-80 | --clip-polygon-plot-left-x: 80% |
| plot-left-x-90 | --clip-polygon-plot-left-x: 90% |
| plot-left-x-100 | --clip-polygon-plot-left-x: 100% |
| -plot-left-x-10 | --clip-polygon-plot-left-x: -10% |
| -plot-left-x-20 | --clip-polygon-plot-left-x: -20% |
| -plot-left-x-30 | --clip-polygon-plot-left-x: -30% |
| -plot-left-x-40 | --clip-polygon-plot-left-x: -40% |
| -plot-left-x-50 | --clip-polygon-plot-left-x: -50% |
| -plot-left-x-60 | --clip-polygon-plot-left-x: -60% |
| -plot-left-x-70 | --clip-polygon-plot-left-x: -70% |
| -plot-left-x-80 | --clip-polygon-plot-left-x: -80% |
| -plot-left-x-90 | --clip-polygon-plot-left-x: -90% |
| -plot-left-x-100 | --clip-polygon-plot-left-x: -100% |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| plot-left-y-0 | --clip-polygon-plot-left-y: 0% |
| plot-left-y-10 | --clip-polygon-plot-left-y: 10% |
| plot-left-y-20 | --clip-polygon-plot-left-y: 20% |
| plot-left-y-30 | --clip-polygon-plot-left-y: 30% |
| plot-left-y-40 | --clip-polygon-plot-left-y: 40% |
| plot-left-y-50 | --clip-polygon-plot-left-y: 50% |
| plot-left-y-60 | --clip-polygon-plot-left-y: 60% |
| plot-left-y-70 | --clip-polygon-plot-left-y: 70% |
| plot-left-y-80 | --clip-polygon-plot-left-y: 80% |
| plot-left-y-90 | --clip-polygon-plot-left-y: 90% |
| plot-left-y-100 | --clip-polygon-plot-left-y: 100% |
| -plot-left-y-10 | --clip-polygon-plot-left-y: -10% |
| -plot-left-y-20 | --clip-polygon-plot-left-y: -20% |
| -plot-left-y-30 | --clip-polygon-plot-left-y: -30% |
| -plot-left-y-40 | --clip-polygon-plot-left-y: -40% |
| -plot-left-y-50 | --clip-polygon-plot-left-y: -50% |
| -plot-left-y-60 | --clip-polygon-plot-left-y: -60% |
| -plot-left-y-70 | --clip-polygon-plot-left-y: -70% |
| -plot-left-y-80 | --clip-polygon-plot-left-y: -80% |
| -plot-left-y-90 | --clip-polygon-plot-left-y: -90% |
| -plot-left-y-100 | --clip-polygon-plot-left-y: -100% |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| plot-right-x-0 | --clip-polygon-plot-right-x: 0% |
| plot-right-x-10 | --clip-polygon-plot-right-x: 10% |
| plot-right-x-20 | --clip-polygon-plot-right-x: 20% |
| plot-right-x-30 | --clip-polygon-plot-right-x: 30% |
| plot-right-x-40 | --clip-polygon-plot-right-x: 40% |
| plot-right-x-50 | --clip-polygon-plot-right-x: 50% |
| plot-right-x-60 | --clip-polygon-plot-right-x: 60% |
| plot-right-x-70 | --clip-polygon-plot-right-x: 70% |
| plot-right-x-80 | --clip-polygon-plot-right-x: 80% |
| plot-right-x-90 | --clip-polygon-plot-right-x: 90% |
| plot-right-x-100 | --clip-polygon-plot-right-x: 100% |
| -plot-right-x-10 | --clip-polygon-plot-right-x: -10% |
| -plot-right-x-20 | --clip-polygon-plot-right-x: -20% |
| -plot-right-x-30 | --clip-polygon-plot-right-x: -30% |
| -plot-right-x-40 | --clip-polygon-plot-right-x: -40% |
| -plot-right-x-50 | --clip-polygon-plot-right-x: -50% |
| -plot-right-x-60 | --clip-polygon-plot-right-x: -60% |
| -plot-right-x-70 | --clip-polygon-plot-right-x: -70% |
| -plot-right-x-80 | --clip-polygon-plot-right-x: -80% |
| -plot-right-x-90 | --clip-polygon-plot-right-x: -90% |
| -plot-right-x-100 | --clip-polygon-plot-right-x: -100% |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| plot-right-y-0 | --clip-polygon-plot-right-y: 0% |
| plot-right-y-10 | --clip-polygon-plot-right-y: 10% |
| plot-right-y-20 | --clip-polygon-plot-right-y: 20% |
| plot-right-y-30 | --clip-polygon-plot-right-y: 30% |
| plot-right-y-40 | --clip-polygon-plot-right-y: 40% |
| plot-right-y-50 | --clip-polygon-plot-right-y: 50% |
| plot-right-y-60 | --clip-polygon-plot-right-y: 60% |
| plot-right-y-70 | --clip-polygon-plot-right-y: 70% |
| plot-right-y-80 | --clip-polygon-plot-right-y: 80% |
| plot-right-y-90 | --clip-polygon-plot-right-y: 90% |
| plot-right-y-100 | --clip-polygon-plot-right-y: 100% |
| -plot-right-y-10 | --clip-polygon-plot-right-y: -10% |
| -plot-right-y-20 | --clip-polygon-plot-right-y: -20% |
| -plot-right-y-30 | --clip-polygon-plot-right-y: -30% |
| -plot-right-y-40 | --clip-polygon-plot-right-y: -40% |
| -plot-right-y-50 | --clip-polygon-plot-right-y: -50% |
| -plot-right-y-60 | --clip-polygon-plot-right-y: -60% |
| -plot-right-y-70 | --clip-polygon-plot-right-y: -70% |
| -plot-right-y-80 | --clip-polygon-plot-right-y: -80% |
| -plot-right-y-90 | --clip-polygon-plot-right-y: -90% |
| -plot-right-y-100 | --clip-polygon-plot-right-y: -100% |

---

## Usage

{% from "misc/console.njk" import console %}

### Clipping Image

<div class="padding-x-4 margin-y-2 margin-x-auto width-full">
  <div class="flex flex-row justify-center items-center">
    <div class="
      clip-polygon
      plot-top-x-80 plot-top-y-0
      plot-bottom-x-30 plot-bottom-y-100
      plot-left-x-0 plot-left-y-30
      plot-right-x-90 plot-right-y-40
      ... height-48 width-48"
    >
      <img
        class="height-48 width-48 bg-tint-granite-5"
        src="https://picsum.photos/256"
      >
    </div>
    <div class="
      clip-polygon
      plot-top-x-20 plot-top-y-0
      plot-bottom-x-80 plot-bottom-y-100
      plot-left-x-0 plot-left-y-60
      plot-right-x-90 plot-right-y-40
      ... height-48 width-48"
    >
      <img
        class="height-48 width-48 bg-tint-granite-5"
        src="https://picsum.photos/256"
      >
    </div>
    <div class="
      clip-polygon
      plot-top-x-70 plot-top-y-0
      plot-bottom-x-30 plot-bottom-y-100
      plot-left-x-90 plot-left-y-100
      plot-right-x-0 plot-right-y-100
      ... height-48 width-48"
    >
      <img
        class="height-48 width-48 bg-tint-granite-5"
        src="https://picsum.photos/256"
      >
    </div>
  </div>
</div>

{{ console('html',
'<div class="clip-polygon plot-top-x-80 plot-top-y-0 plot-bottom-x-30 plot-bottom-y-100 plot-left-x-0 plot-left-y-30 plot-right-x-90 plot-right-y-40 ... height-48 width-48">
    <img class="height-48 width-48" src="...">
  </div>
') }}

{{ console('scss',
'.dummy-clip {
    @extend
      .clip-polygon,
      .plot-top-x-80,
      .plot-top-y-0,
      .plot-bottom-x-30,
      .plot-bottom-y-100,
      .plot-left-x-0,
      .plot-left-y-30,
      .plot-right-x-90,
      .plot-right-y-40,
      .height-48,
      .width-48;
}
.dummy-image {
    @extend
      .height-48,
      .width-48;
}
') }}

### Clipping Background

<div class="padding-x-4 margin-y-2 margin-x-auto width-full">
  <div class="flex flex-row justify-center items-center">
    <div class="
      clip-polygon
      plot-top-x-80 plot-top-y-0
      plot-bottom-x-30 plot-bottom-y-100
      plot-left-x-0 plot-left-y-30
      plot-right-x-90 plot-right-y-40
      ... height-48 width-48"
    >
      <div class="height-48 width-48 bg-gradient-preset-19"></div>
    </div>
    <div class="
      clip-polygon
      plot-top-x-20 plot-top-y-0
      plot-bottom-x-80 plot-bottom-y-100
      plot-left-x-0 plot-left-y-60
      plot-right-x-90 plot-right-y-40
      ... height-48 width-48"
    >
      <div class="height-48 width-48 bg-gradient-preset-19"></div>
    </div>
    <div class="
      clip-polygon
      plot-top-x-70 plot-top-y-0
      plot-bottom-x-30 plot-bottom-y-100
      plot-left-x-90 plot-left-y-100
      plot-right-x-0 plot-right-y-100
      ... height-48 width-48"
    >
      <div class="height-48 width-48 bg-gradient-preset-19"></div>
    </div>
  </div>
</div>

{{ console('html',
'<div class="clip-polygon plot-top-x-80 plot-top-y-0 plot-bottom-x-30 plot-bottom-y-100 plot-left-x-0 plot-left-y-30 plot-right-x-90 plot-right-y-40 ... height-48 width-48">
    <div class="height-48 width-48 ... bg-gradient-preset-19"></div>
  </div>
') }}

{{ console('scss',
'.dummy-clip {
    @extend
      .clip-polygon,
      .plot-top-x-80,
      .plot-top-y-0,
      .plot-bottom-x-30,
      .plot-bottom-y-100,
      .plot-left-x-0,
      .plot-left-y-30,
      .plot-right-x-90,
      .plot-right-y-40,
      .height-48,
      .width-48;
}
.dummy-image {
    @extend
      .height-48,
      .width-48,
      .bg-gradient-preset-19;
}
') }}

### Clipping Text

<div class="padding-x-4 margin-y-2 margin-x-auto width-full">
  <div class="flex flex-row justify-center items-center">
    <div class="
      clip-polygon
      plot-top-x-80 plot-top-y-0
      plot-bottom-x-30 plot-bottom-y-100
      plot-left-x-0 plot-left-y-30
      plot-right-x-90 plot-right-y-40
      height-48 width-48"
    >
      <div class="height-48 width-48 text-xs">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at nunc scelerisque, pretium arcu nec, convallis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec fermentum magna turpis, nec facilisis justo dapibus volutpat. Mauris sagittis pretium sem et consequat. Curabitur a tellus sem. Morbi non auctor elit. Donec tortor nunc, auctor vel sem ac, aliquam cursus nisi. Praesent lobortis urna ex, ut iaculis nulla porttitor in. Curabitur orci augue, pellentesque sed orci et, ultrices tempor dolor. Aenean tincidunt posuere lobortis. In ac tortor quis lorem lacinia gravida quis tincidunt lorem. Nunc ac ultrices leo. Ut sodales, nibh ut consequat fermentum, mi justo cursus quam, eget sodales dui risus ac odio. Proin efficitur lacinia lobortis. Integer efficitur ligula non ultricies sollicitudin. Praesent efficitur augue justo, sit amet dignissim nunc mollis vel.
      </div>
    </div>
    <div class="
      clip-polygon
      plot-top-x-20 plot-top-y-0
      plot-bottom-x-80 plot-bottom-y-100
      plot-left-x-0 plot-left-y-60
      plot-right-x-90 plot-right-y-40
      height-48 width-48"
    >
      <div class="height-48 width-48 text-xs">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at nunc scelerisque, pretium arcu nec, convallis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec fermentum magna turpis, nec facilisis justo dapibus volutpat. Mauris sagittis pretium sem et consequat. Curabitur a tellus sem. Morbi non auctor elit. Donec tortor nunc, auctor vel sem ac, aliquam cursus nisi. Praesent lobortis urna ex, ut iaculis nulla porttitor in. Curabitur orci augue, pellentesque sed orci et, ultrices tempor dolor. Aenean tincidunt posuere lobortis. In ac tortor quis lorem lacinia gravida quis tincidunt lorem. Nunc ac ultrices leo. Ut sodales, nibh ut consequat fermentum, mi justo cursus quam, eget sodales dui risus ac odio. Proin efficitur lacinia lobortis. Integer efficitur ligula non ultricies sollicitudin. Praesent efficitur augue justo, sit amet dignissim nunc mollis vel.
      </div>
    </div>
    <div class="
      clip-polygon
      plot-top-x-70 plot-top-y-0
      plot-bottom-x-30 plot-bottom-y-100
      plot-left-x-90 plot-left-y-100
      plot-right-x-0 plot-right-y-100
      height-48 width-48"
    >
      <div class="height-48 width-48 text-xs">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at nunc scelerisque, pretium arcu nec, convallis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec fermentum magna turpis, nec facilisis justo dapibus volutpat. Mauris sagittis pretium sem et consequat. Curabitur a tellus sem. Morbi non auctor elit. Donec tortor nunc, auctor vel sem ac, aliquam cursus nisi. Praesent lobortis urna ex, ut iaculis nulla porttitor in. Curabitur orci augue, pellentesque sed orci et, ultrices tempor dolor. Aenean tincidunt posuere lobortis. In ac tortor quis lorem lacinia gravida quis tincidunt lorem. Nunc ac ultrices leo. Ut sodales, nibh ut consequat fermentum, mi justo cursus quam, eget sodales dui risus ac odio. Proin efficitur lacinia lobortis. Integer efficitur ligula non ultricies sollicitudin. Praesent efficitur augue justo, sit amet dignissim nunc mollis vel.
      </div>
    </div>
  </div>
</div>

{{ console('html',
'<div class="clip-polygon plot-top-x-70 plot-top-y-0 plot-bottom-x-30 plot-bottom-y-100 plot-left-x-90 plot-left-y-100 plot-right-x-0 plot-right-y-100 ... height-48 width-48">
    <div class="height-48 width-48 ... text-xs">
      ...
    </div>
  </div>
') }}

{{ console('scss',
'.dummy-clip {
    @extend
      .clip-polygon,
      .plot-top-x-70,
      .plot-top-y-0,
      .plot-bottom-x-30,
      .plot-bottom-y-100,
      .plot-left-x-90,
      .plot-left-y-100,
      .plot-right-x-0,
      .plot-right-y-100,
      .height-48,
      .width-48;
}
.dummy-image {
    @extend
      .height-48,
      .width-48,
      .text-xs;
}
') }}



