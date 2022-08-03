---
id: flex-center
title: Flex DireCenterction
description: Utilities for controls how flex items are centered vertically and horizontally.
topic: Flexbox
relate: flex, align-items, justify-content
variant: responsive, fullscreen, child-selection
layout: default
---

> Flexbox

# Flex Center

Utilities for controls how flex items are centered vertically and horizontally.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for flexcenter in variants.flexcenter %}{% for item in flexcenter.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| flex-center | justify-content: center; <br> align-items: center; |

---

## Usage

{% from "misc/console.njk" import console %}

Set child elements in `flex-center` direction.

<div class="padding-4 margin-y-4 margin-x-auto">
  <div class="width-64 height-64 flex flex-center bg-tint-granite-5 bg-opacity-25">
    <div class="(expand)margin-2 (expand)width-20 (expand)height-20 (expand)bg-tint-granite-5 (expand)curve-border-lg (expand)text-center text-xl-1 text-shade-granite-1 flex flex-center">
      <div class="flex flex-center border-2 border-tint-granite-3 border-dashed">1</div>
    </div>
  </div>
</div>

{{ console('html',
'<div class="flex ... flex-center">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .flex,
      .flex-center;
}
') }}

