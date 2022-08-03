---
id: glyphs
title: Glyphs
description: Utilities for sets alternate glyphs for numbers, fractions, and ordinal markers to an element.
topic: Typography
variant: responsive
layout: default
---

> Typography

# Glyphs

Utilities for sets alternate glyphs for numbers, fractions, and ordinal markers to an element.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for glyphs in variants.glyphs %}{% for item in glyphs.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| glyphs-normal | font-variant-numeric: normal |
| glyphs-ordinal | font-variant-numeric: ordinal |
| glyphs-slashed-zero | font-variant-numeric: slashed-zero |
| glyphs-lining-nums | font-variant-numeric: lining-nums |
| glyphs-oldstyle-nums | font-variant-numeric: oldstyle-nums |
| glyphs-proportional-nums | font-variant-numeric: proportional-nums |
| glyphs-tabular-nums | font-variant-numberic: tabular-nums |
| glyphs-diagonal-fractions | font-variant-numeric: diagonal-fractions |
| glyphs-stacked-fractions | font-variant-numeric: stacked-fractions |

---

## Usage

{% from "misc/console.njk" import console %}

<div class="padding-x-4 margin-y-2 margin-x-auto width-full">
  <div class="flex (xs)flex-gap-8 (sm)flex-gap-24 flex-wrap justify-center items-center">
    <div class="flex flex-column justify-center items-center">
      <div class="padding-6 bg-tint-granite-5 bg-opacity-25 curve-border-lg">
        <div class="glyphs-normal text-xl-3 font-semibold text-shade-granite-1">
          2/4 4/5 3/6 4/8
        </div>
      </div>
      <div class="padding-y-4">
        Glyphs: OFF
      </div>
    </div>
    <div class="flex flex-column justify-center items-center">
      <div class="padding-6 bg-tint-granite-5 bg-opacity-25 curve-border-lg">
        <div class="glyphs-diagonal-fractions text-xl-3 font-semibold text-shade-granite-1">
          2/4 4/5 3/6 4/8
        </div>
      </div>
      <div class="padding-y-4">
        Glyphs: ON
      </div>
    </div>
  </div>
</div>

{{ console('html',
'<div class="glyphs-diagonal-fractions">
    2/4 4/5 3/6 4/8
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .glyphs-diagonal-fractions;
}
') }}


