---
id: content-visibility
title: Render (Content-Visibility)
description: Utilities for sets skip rendering if element is off-screen to improve overall page rendering speed.
topic: Layouts
layout: default
---

> Layouts

# Render (Content-Visibility)

Utilities for sets skip rendering if element is off-screen to improve overall page rendering speed.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for contentvisibility in variants.contentvisibility %}{% for item in contentvisibility.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| render-auto | content-visibility: auto |
| render-auto-widest | content-visibility: auto; <br> contain-intrinsic-size: 1000px |
| render-auto-wide | content-visibility: auto; <br> contain-intrinsic-size: 800px |
| render-auto-normal | content-visibility: auto; <br> contain-intrinsic-size: 600px |
| render-auto-tight | content-visibility: auto; <br> contain-intrinsic-size: 400px |
| render-auto-tigher | content-visibility: auto; <br> contain-intrinsic-size: 200px |
| render-hidden-widest | content-visibility: hidden; <br> contain-intrinsic-size: 1000px |
| render-hidden-wide | content-visibility: hidden; <br> contain-intrinsic-size: 800px |
| render-hidden-normal | content-visibility: hidden; <br> contain-intrinsic-size: 600px |
| render-hidden-tight | content-visibility: hidden; <br> contain-intrinsic-size: 400px |
| render-hidden-tigher | content-visibility: hidden; <br> contain-intrinsic-size: 200px |

---

## Usage

{% from "misc/console.njk" import console %}

Set maximum height and width for the browser to start to render an element.

{{ console('html',
'<div class="render-auto-widest">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .render-auto-widest;
}
') }}

