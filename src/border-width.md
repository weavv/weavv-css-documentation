---
id: border-width
title: Border Width
description: Utilities for sets border width in increments of 1px.
topic: Borders
relate: border-color, border-radius, border-style, curve-object
variant: focus
layout: default
---

> Borders

# Border Width

Utilities for sets border width in increments of 1px.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for borderwidth in variants.borderwidth %}{% for item in borderwidth.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> | |
|:--|:--|:-:|
| border | border-width: 1px | <div class="width-16 height-8 bg-gray-3 border border-gray-9"></div> |
| border-0 | border-width: 0 | <div class="width-16 height-8 bg-gray-3 border-0 border-gray-9"></div> |
| border-2 | border-width: 2px | <div class="width-16 height-8 bg-gray-3 border-2 border-gray-9"></div> |
| border-4 | border-width: 4px | <div class="width-16 height-8 bg-gray-3 border-4 border-gray-9"></div> |
| border-8 | border-width: 8px | <div class="width-16 height-8 bg-gray-3 border-8 border-gray-9"></div> |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| border-t-0 | border-top-width: 0 | <div class="width-16 height-8 bg-gray-3 border border-t-0 border-gray-9"></div> |
| border-t-2 | border-top-width: 2px | <div class="width-16 height-8 bg-gray-3 border border-t-2 border-gray-9"></div> |
| border-t-4 | border-top-width: 4px | <div class="width-16 height-8 bg-gray-3 border border-t-4 border-gray-9"></div> |
| border-t-8 | border-top-width: 8px | <div class="width-16 height-8 bg-gray-3 border border-t-8 border-gray-9"></div> |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| border-b-0 | border-bottom-width: 0 | <div class="width-16 height-8 bg-gray-3 border border-b-0 border-gray-9"></div> |
| border-b-2 | border-bottom-width: 2px | <div class="width-16 height-8 bg-gray-3 border border-b-2 border-gray-9"></div> |
| border-b-4 | border-bottom-width: 4px | <div class="width-16 height-8 bg-gray-3 border border-b-4 border-gray-9"></div> |
| border-b-8 | border-bottom-width: 8px | <div class="width-16 height-8 bg-gray-3 border border-b-8 border-gray-9"></div> |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| border-l-0 | border-left-width: 0 | <div class="width-16 height-8 bg-gray-3 border border-l-0 border-gray-9"></div> |
| border-l-2 | border-left-width: 2px | <div class="width-16 height-8 bg-gray-3 border border-l-2 border-gray-9"></div> |
| border-l-4 | border-left-width: 4px | <div class="width-16 height-8 bg-gray-3 border border-l-4 border-gray-9"></div> |
| border-l-8 | border-left-width: 8px | <div class="width-16 height-8 bg-gray-3 border border-l-8 border-gray-9"></div> |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| border-r-0 | border-right-width: 0 | <div class="width-16 height-8 bg-gray-3 border border-r-0 border-gray-9"></div> |
| border-r-2 | border-right-width: 2px | <div class="width-16 height-8 bg-gray-3 border border-r-2 border-gray-9"></div> |
| border-r-4 | border-right-width: 4px | <div class="width-16 height-8 bg-gray-3 border border-r-4 border-gray-9"></div> |
| border-r-8 | border-right-width: 8px | <div class="width-16 height-8 bg-gray-3 border border-r-8 border-gray-9"></div> |

---

## Usage

{% from "misc/console.njk" import console %}

<div class="padding-x-4 margin-y-4 margin-x-auto width-56">
  <div class="padding-4 bg-tinit-granite-1 border-8">
    <div class="width-full height-24 bg-tint-granite-5"></div>
  </div>
</div>

{{ console('html',
'<div class="border-8">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .border-8;
}
') }}

