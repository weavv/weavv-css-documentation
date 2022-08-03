---
id: list-style-position
title: List Style Position
description: Utilities for sets the position of a list's bullets.
topic: Typography
layout: default
---

> Typography

# List Style Position

Utilities for sets the position of a list's bullets.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for liststyleposition in variants.liststyleposition %}{% for item in liststyleposition.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| list-inside | list-style-position: inside |
| list-outside | list-style-position: outside |

---

## Usage

{% from "misc/console.njk" import console %}

<div class="padding-4 margin-y-2 margin-x-auto flex flex-gap-6 justify-center items-center max-width-md">
  <div class="flex flex-column justify-center items-center">
    <ul class="padding-8 width-40 list-inside text-gray-5 bg-tint-granite-5 bg-opacity-25 (expand)bg-tint-granite-5 (expand)margin-y-2">
      <li>
        lorem
      </li>
      <li>
        lorem
      </li>
      <li>
        lorem
      </li>
    </ul>
    <div class="padding-t-2 text-sm text-center">
      list-inside
    </div>
  </div>
  <div class="flex flex-column justify-center items-center">
    <ul class="padding-8 width-40 list-outside text-gray-5 bg-tint-granite-5 bg-opacity-25 (expand)bg-tint-granite-5 (expand)margin-y-2">
      <li>
        lorem
      </li>
      <li>
        lorem
      </li>
      <li>
        lorem
      </li>
    </ul>
    <div class="padding-t-2 text-sm text-center">
      list-outside
    </div>
  </div>
</div>

{{ console('html',
'<ul class="list-outside">
    <li>
      ...
    </li>
    ...
  </ul>
') }}

{{ console('scss',
'ul {
    @extend
      .list-outside;
}
') }}

