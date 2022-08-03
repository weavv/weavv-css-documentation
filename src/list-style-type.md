---
id: line-style-type
title: List Style Type
description: Utilities for sets the bullet style of a list.
topic: Typography
layout: default
---

> Typography

# List Style Type

Utilities for sets the bullet style of a list.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for liststyletype in variants.liststyletype %}{% for item in liststyletype.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| list-none | list-style-type: none |
| list-disc | list-style-type: disc |
| list-decimal | list-style-type: decimal |

---

## Usage

{% from "misc/console.njk" import console %}

<div class="padding-4 margin-y-2 margin-x-auto flex flex-gap-6 justify-center items-center max-width-md">
  <div class="flex flex-column justify-center items-center">
    <ul class="padding-8 width-40 list-decimal text-white bg-tint-granite-5 (expand)bg-tint-granite-1 (expand)margin-y-2">
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
      list-decimal
    </div>
  </div>
  <div class="flex flex-column justify-center items-center">
    <ul class="padding-8 width-40 list-none text-white bg-tint-granite-5 (expand)bg-tint-granite-1 (expand)margin-y-2">
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
      list-none
    </div>
  </div>
</div>

{{ console('html',
'<ul class="list-decimal">
    <li>
      ...
    </li>
    ...
  </ul>
') }}

{{ console('scss',
'ul {
    @extend
      .list-decimal;
}
') }}

