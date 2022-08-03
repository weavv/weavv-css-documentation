---
id: dissect-opacity
title: Dissect Opacity
description: Utilities for sets opacity to bottom border on each child elements of its parent.
topic: Borders
relate: dissect, dissect-color
layout: default
---

> Borders

# Dissect Opacity

Utilities for sets opacity to bottom border on each child elements of its parent.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for dissectopacity in variants.dissectopacity %}{% for item in dissectopacity.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| dissect-opacity-0 | --dissect-opacity: 0 |
| dissect-opacity-25 | --dissect-opacity: .25 |
| dissect-opacity-50 | --dissect-opacity: .5 |
| dissect-opacity-75 | --dissect-opacity: .75 |
| dissect-opacity-100 | --dissect-opacity: 1 |

---

## Usage

{% from "misc/console.njk" import console %}

Set `dissect-x-{value}` and `dissect-y-{value}` borders with `color` opacity to `50%`.

<div class="padding-y-4">
  <div class="padding-x-4 padding-y-4 margin-x-auto max-width-sm bg-tint-granite-5">
    <div class="dissect-y-4 dissect-shade-lava-1 dissect-opacity-50 text-tint-granite-5 (expand)text-center (expand)width-full (expand)height-8 (expand)bg-tint-granite-5">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </div>
</div>

{{ console('html',
'<div class="dissect-y-4 dissect-shade-amber-4 dissect-opacity-50">
    <div>...</div>
    <div>...</div>
    <div>...</div>
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .dissect-y-4,
      .dissect-shade-amber-4,
      .dissect-opacity-50;
}
') }}

Set `dissect-x-{value}` and `dissect-y-{value}` borders with `color` opacity to `25%`.

  <div class="padding-y-4">
    <div class="padding-x-4 padding-y-4 margin-x-auto max-width-sm bg-tint-granite-5">
      <div class="dissect-y-4 dissect-shade-lava-1 dissect-opacity-25 text-tint-granite-3 (expand)width-full (expand)height-8 (expand)bg-tint-granite-5 (expand)text-center">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  </div>

{{ console('html',
'<div class="dissect-y-4 dissect-shade-amber-4 dissect-opacity-25">
    <div>...</div>
    <div>...</div>
    <div>...</div>
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .dissect-y-4,
      .dissect-shade-amber-4,
      .dissect-opacity-25;
}
') }}

