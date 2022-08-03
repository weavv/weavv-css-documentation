---
id: text-rendering
title: Text Rendering
description: Utilities for fine tune optimization by suggesting to the browser as to how it should render text on the screen.
topic: Rendering
relate: image-rendering
layout: default
---

> Rendering

# Text Rendering

Utilities for fine tune optimization by suggesting to the browser as to how it should render text on the screen.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for textrendering in variants.textrendering %}{% for item in textrendering.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| text-optimize-auto | text-rendering: auto; |
| text-optimize-speed | text-rendering: optimizeSpeed; |
| text-optimize-legibility | text-rendering: optimizeLegibility; |
| text-optimize-precision | text-rendering: geometricPrecision; |

---

## Usage

{% from "misc/console.njk" import console %}

{{ console('html',
'<div class="text-optimize-legibility">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .text-optimize-legibility;
}
') }}
