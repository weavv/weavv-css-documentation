---
id: gap
title: Gap
description: Utilities for sets the spacing between letters.
topic: Typography
variant: responsive
layout: default
---

> Typography

# Gap

Utilities for sets the spacing between letters.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for letterspacing in variants.letterspacing %}{% for item in letterspacing.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> | |
|:--|:--|:-:|
| gap-tight-2 | letter-spacing: -0.05em | <div class="text-lg gap-tight-2">Text</div> |
| gap-tight-1 | letter-spacing: -0.025em | <div class="text-lg gap-tight-1">Text</div> |
| gap-normal | letter-spacing: 0 | <div class="text-lg gap-normal">Text</div> |
| gap-wide-1 | letter-spacing: 0.025em | <div class="text-lg gap-wide-1">Text</div> |
| gap-wide-1 | letter-spacing: 0.05em | <div class="text-lg gap-wide-2">Text</div> |
| gap-wide-3 | letter-spacing: 0.1em | <div class="text-lg gap-wide-3">Text</div> |

---

## Usage

{% from "misc/console.njk" import console %}

<div class="padding-4 margin-y-2 margin-x-auto flex justify-center items-center max-width-md">
  <div class="(expand)text-center flex flex-gap-5 justify-center items-center text-xl-2 text-shade-granite-1">
    <div class="flex flex-column justify-center items-center">
      <div class="padding-4 bg-tint-granite-5 bg-opacity-25 width-64">
        <div class="text-left gap-tight-normal">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </div>
      </div>
      <div class="padding-t-2 text-sm text-center">
        gap-tight-normal
      </div>
    </div>
    <div class="flex flex-column justify-center items-center">
      <div class="padding-4 bg-tint-granite-5 bg-opacity-25 width-64">
        <div class="text-left gap-tight-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </div>
      </div>
      <div class="padding-t-2 text-sm text-center">
        gap-tight-2
      </div>
    </div>
  </div>
</div>

{{ console('html',
'<div class="gap-tight-2">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .gap-tight-2;
}
') }}
