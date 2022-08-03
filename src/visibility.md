---
id: visibility
title: Visibility
description: Utilities for show or hide without affecting the layout of the document.
topic: Layouts
relate: clear, render, display, float, object-fit, object-position, overflow, position, top/bottom/left/right, z-index
variant: hover, group-hover
layout: default
---

> Layouts

# Visibility

Utilities for show or hide without affecting the layout of the document.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for visibility in variants.visibility %}{% for item in visibility.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| visible | visibility: visible |
| invisible | visibility: hidden |

---

## Usage

{% from "misc/console.njk" import console %}

Set `visible` to an element.

<div class="margin-y-2 margin-x-auto width-64">
  <div class="flex justify-center (expand)width-32 (expand)height-24 bg-tint-lava-5">
    <div class="bg-tint-granite-5"></div>
    <div class="bg-tint-granite-1 visible"></div>
    <div class="bg-tint-granite-5"></div>
  </div>
</div>

{{ console('html',
'<div class="visible">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .visible;
}
') }}

Set `invisible` to an elment, the element property remains, but not hidden from existing.

<div class="margin-y-2 margin-x-auto width-64">
  <div class="flex justify-center (expand)width-32 (expand)height-24 bg-tint-lava-5">
    <div class="bg-tint-granite-5"></div>
    <div class="bg-tint-granite-1 invisible"></div>
    <div class="bg-tint-granite-5"></div>
  </div>
</div>

{{ console('html',
'<div class="invisible">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .invisible;
}
') }}
