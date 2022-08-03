---
id: curve-border
title: Curve-border
description: Utilities for sets border radius.
topic: Borders
relate: border-color, border-style, border-width, curve-object
variant: responsive
layout: default
---

> Borders

# Curve-border

Utilities for sets border radius.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for borderradius in variants.borderradius %}{% for item in borderradius.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> | |
|:--|:--|:-:|
| curve-border | border-radius: 0.25rem | <div class="width-8 height-8 curve-border bg-gray-3 border-2"></div> |
| curve-border-none | border-radius: 0 | <div class="width-8 height-8 curve-border-none bg-gray-3 border-2"></div> |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| curve-border-sm | border-radius: 0.125rem | <div class="width-8 height-8 curve-border-sm bg-gray-3 border-2"></div> |
| curve-border-md | border-radius: 0.375rem | <div class="width-8 height-8 curve-border-md bg-gray-3 border-2"></div> |
| curve-border-lg | border-radius: 0.5rem | <div class="width-8 height-8 curve-border-lg bg-gray-3 border-2"></div> |
| curve-border-full | border-radius: 9999px | <div class="width-8 height-8 curve-border-full bg-gray-3 border-2"></div> |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| curve-border-t-none | border-top-left-radius: 0; <br> border-top-right-radius: 0 | <div class="width-8 height-8 curve-border-t-none bg-gray-3 border-2"></div> |
| curve-border-r-none | border-top-right-radius: 0; <br> border-bottom-right-radius: 0 | <div class="width-8 height-8 curve-border-r-none bg-gray-3 border-2"></div> |
| curve-border-b-none | border-bottom-right-radius: 0; <br> border-bottom-left-radius: 0 | <div class="width-8 height-8 curve-border-b-none bg-gray-3 border-2"></div> |
| curve-border-l-none | border-top-left-radius: 0; <br> border-bottom-left-radius: 0 | <div class="width-8 height-8 curve-border-l-none bg-gray-3 border-2"></div> |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| curve-border-t | border-top-left-radius: 0.25rem; <br> border-top-right-radius: 0.25rem | <div class="width-8 height-8 curve-border-t bg-gray-3 border-2"></div> |
| curve-border-r | border-top-right-radius: 0.25rem; <br> border-bottom-right-radius: 0.25rem | <div class="width-8 height-8 curve-border-r bg-gray-3 border-2"></div> |
| curve-border-b | border-bottom-right-radius: 0.25rem; <br> border-bottom-left-radius: 0.25rem | <div class="width-8 height-8 curve-border-b bg-gray-3 border-2"></div> |
| curve-border-l | border-top-left-radius: 0.25rem; <br> border-bottom-left-radius: 0.25rem | <div class="width-8 height-8 curve-border-l bg-gray-3 border-2"></div> |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| curve-border-t-sm | border-top-left-radius: 0.125rem; <br> border-top-right-radius: 0.125rem | <div class="width-8 height-8 curve-border-t-sm bg-gray-3 border-2"></div> |
| curve-border-r-sm | border-top-right-radius: 0.125rem; <br> border-bottom-right-radius: 0.125rem | <div class="width-8 height-8 curve-border-r-sm bg-gray-3 border-2"></div> |
| curve-border-b-sm | border-bottom-right-radius: 0.125rem; <br> border-bottom-left-radius: 0.125rem | <div class="width-8 height-8 curve-border-b-sm bg-gray-3 border-2"></div> |
| curve-border-l-sm | border-top-left-radius: 0.125rem; <br> border-bottom-left-radius: 0.125rem | <div class="width-8 height-8 curve-border-l-sm bg-gray-3 border-2"></div> |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| curve-border-t-md | border-top-left-radius: 0.375rem; <br> border-top-right-radius: 0.375rem | <div class="width-8 height-8 curve-border-t-md bg-gray-3 border-2"></div> |
| curve-border-r-md | border-top-right-radius: 0.375rem; <br> border-bottom-right-radius: 0.375rem | <div class="width-8 height-8 curve-border-r-md bg-gray-3 border-2"></div> |
| curve-border-b-md | border-bottom-right-radius: 0.375rem; <br> border-bottom-left-radius: 0.375rem | <div class="width-8 height-8 curve-border-b-md bg-gray-3 border-2"></div> |
| curve-border-l-md | border-top-left-radius: 0.375rem; <br> border-bottom-left-radius: 0.375rem | <div class="width-8 height-8 curve-border-l-md bg-gray-3 border-2"></div> |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| curve-border-t-lg | border-top-left-radius: 0.5rem; <br> border-top-right-radius: 0.5rem | <div class="width-8 height-8 curve-border-t-lg bg-gray-3 border-2"></div> |
| curve-border-r-lg | border-top-right-radius: 0.5rem; <br> border-bottom-right-radius: 0.5rem | <div class="width-8 height-8 curve-border-r-lg bg-gray-3 border-2"></div> |
| curve-border-b-lg | border-bottom-right-radius: 0.5rem; <br> border-bottom-left-radius: 0.5rem | <div class="width-8 height-8 curve-border-b-lg bg-gray-3 border-2"></div> |
| curve-border-l-lg | border-top-left-radius: 0.5rem; <br> border-bottom-left-radius: 0.5rem | <div class="width-8 height-8 curve-border-l-lg bg-gray-3 border-2"></div> |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| curve-border-t-full | border-top-left-radius: 9999px; <br> border-top-right-radius: 9999px | <div class="width-8 height-8 curve-border-t-full bg-gray-3 border-2"></div> |
| curve-border-r-full | border-top-right-radius: 9999px; <br> border-bottom-right-radius: 9999px | <div class="width-8 height-8 curve-border-r-full bg-gray-3 border-2"></div> |
| curve-border-b-full | border-bottom-right-radius: 9999px; <br> border-bottom-left-radius: 9999px | <div class="width-8 height-8 curve-border-b-full bg-gray-3 border-2"></div> |
| curve-border-l-full | border-top-left-radius: 9999px; <br> border-bottom-left-radius: 9999px | <div class="width-8 height-8 curve-border-l-full bg-gray-3 border-2"></div> |

---

## Usage

{% from "misc/console.njk" import console %}

<div class="padding-x-4 margin-y-4 margin-x-auto width-56">
  <div class="padding-4 bg-tint-granite-1 curve-border-lg">
    <div class="width-full height-24 bg-tint-granite-5"></div>
  </div>
</div>

{{ console('html',
'<div class="curve-border-lg ... bg-tint-granite-5 ... width-32 height-32">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .curve-border-lg,
      .bg-tint-granite-5,
      .width-32,
      .height-32;
}
') }}

Use `(expand)` variant to apply border radius to all child elements.

<div class="margin-y-2 margin-x-auto flex justify-center items-center">
  <div class="inline-block">
    <div class="flex justify-center items-center (expand)margin-4 (expand)height-32 (expand)width-32 (expand)curve-border-lg">
      <div class="bg-tint-granite-1"></div>
      <div class="bg-tint-granite-5"></div>
      <div class="bg-tint-granite-1"></div>
    </div>
  </div>
</div>

{{ console('html',
'<!-- parent -->
  <div class="(expand)curve-border-lg">
    <!-- child -->
    <div> ... </div>
    <div> ... </div>
    <div> ... </div>
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .\(expand\)curve-border-lg;
}
') }}




