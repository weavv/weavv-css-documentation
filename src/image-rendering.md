---
id: image
title: Image
description: Utilities for sets an image or canvas renders if it is scaled up or down from its original dimensions.
topic: Rendering
layout: default
---

> Rendering

# Image

Utilities for sets an image or canvas renders if it is scaled up or down from its original dimensions.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for imagerendering in variants.imagerendering %}{% for item in imagerendering.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| image-optimize-auto | image-rendering: auto |
| image-optimize-crisp | image-rendering: crisp-edges |
| image-optimize-pixelated | image-rendering: pixelated |

---

## Usage

{% from "misc/console.njk" import console %}

{{ console('html',
'<img class="image-optimize-crisp">
  <canvas class="image-optimize-crisp"></canvas>
  <div class="image-optimize-crisp" style="background-image: url(...)"> ... </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .image-optimize-crisp;
}
.canvas {
    @extend
      image-optimize-crisp;
}
') }}

