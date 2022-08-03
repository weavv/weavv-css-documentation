---
id: depth
title: Depth
description: Utilities for sets the line height.
topic: Typography
variant: responsive
layout: default
---

> Typography

# Depth

Utilities for sets the line height.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for lineheight in variants.lineheight %}{% for item in lineheight.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| depth-none | line-height: 1 |
| depth-tight-2 | line-height: 1.25 |
| depth-tight-1 | line-height: 1.375 |
| depth-normal | line-height: 1.5 |
| depth-loose-1 | line-height: 1.625 |
| depth-loose-2 | line-height: 2 |
| depth-loose-3 | line-height: .75rem |
| depth-loose-4 | line-height: 1rem |
| depth-loose-5 | line-height: 1.25rem |
| depth-loose-6 | line-height: 1.5rem |
| depth-loose-7 | line-height: 1.75rem |
| depth-loose-8 | line-height: 2rem |
| depth-loose-9 | line-height: 2.25rem |
| depth-loose-10 | line-height: 2.5rem |

---

## Usage

{% from "misc/console.njk" import console %}

<div class="padding-4 margin-y-2 margin-x-auto flex justify-center items-center max-width-md">
  <div class="(expand)text-center flex flex-gap-5 justify-center items-center text-xl-2 text-shade-granite-1">
    <div class="flex flex-column justify-center items-center">
      <div class="padding-4 bg-tint-granite-5 bg-opacity-25 width-64">
        <div class="text-left depth-tight-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </div>
      </div>
      <div class="padding-t-2 text-black-9 text-sm text-center">
        depth-tight-2
      </div>
    </div>
    <div class="flex flex-column justify-center items-center">
      <div class="padding-4 bg-tint-granite-5 bg-opacity-25 width-64">
        <div class="text-left depth-loose-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </div>
      </div>
      <div class="padding-t-2 text-black-9 text-sm text-center">
        depth-loose-10
      </div>
    </div>
  </div>
</div>

{{ console('html',
'<div class="depth-tight-2">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .depth-tight-2;
}
') }}
