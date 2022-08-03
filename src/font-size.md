---
id: font-size
title: Font Size
description: Utilities for sets the font size.
topic: Typography
relate: fluid-font-size
variant: responsive
layout: default
---

> Typography

# Font Size

Utilities for sets the font size.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for fontsize in variants.fontsize %}{% for item in fontsize.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> | |
|:--|:--|:-:|
| text-xs | font-size: .75rem | <span class="text-xs">Text</span> |
| text-sm | font-size: .875rem | <span class="text-sm">Text</span> |
| text-md | font-size: 1rem | <span class="text-md">Text</span> |
| text-lg | font-size: 1.125rem | <span class="text-lg">Text</span> |
| text-xl-1 | font-size: 1.25rem | <span class="text-xl-1">Text</span> |
| text-xl-2 | font-size: 1.5rem | <span class="text-xl-2">Text</span> |
| text-xl-3 | font-size: 1.875rem | <span class="text-xl-3">Text</span> |
| text-xl-4 | font-size: 2.25rem | <span class="text-xl-4">Text</span> |
| text-xl-5 | font-size: 3rem | <span class="text-xl-5">Text</span> |
| text-xl-6 | font-size: 4rem | <span class="text-xl-6">Text</span> |
| text-xl-7 | font-size: 5rem | <span class="text-xl-7">Text</span> |
| text-xl-8 | font-size: 6rem | <span class="text-xl-8">Text</span> |

---

## Usage

{% from "misc/console.njk" import console %}

Set font-size to an element.

{{ console('html',
'<div class="text-md">
    ...
  </div>

  <span class="text-md">
    ...
  </span>
') }}

{{ console('scss',
'.dummy {
    @extend
      text-md;
}
') }}

Set default font-size with `<body>` tag.

{{ console('html',
'<body class="text-md">
    ...
  </body>
') }}

{{ console('scss',
'body {
    @extend
      .text-md;
}
') }}

