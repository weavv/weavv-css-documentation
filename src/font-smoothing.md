---
id: font-smoothing
title: Font Smoothing
description: Utilities for sets the antialiasing of the font.
topic: Typography
layout: default
---

> Typography

# Font Smoothing

Utilities for sets the antialiasing of the font.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for fontsmoothing in variants.fontsmoothing %}{% for item in fontsmoothing.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| antialiased | -webkit-font-smoothing: antialiased; <br> -moz-osx-font-smoothing: grayscale |
| subpixel-antialiased | -webkit-font-smoothing: auto; <br> -moz-osx-font-smoothing: auto |

---

## Usage

{% from "misc/console.njk" import console %}

Set default font-smoothing with `<body>` tag.

{{ console('html',
'<body class="antialiased">
    ...
  </body>
') }}

{{ console('scss',
'body {
    @extend
      antialiased;
}
') }}

