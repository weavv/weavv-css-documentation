---
id: opacity
title: Opacity
description: Utilities for sets the transparency of an element.
topic: Effects
variant: responsive, hover, group-hover, focus, focus-visible, focus-within
layout: default
---

> Effects

# Opacity

Utilities for sets the transparency of an element.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for opacity in variants.opacity %}{% for item in opacity.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> | |
|:--|:--|:-:|
| opacity-100 | opacity: 1 | <div class="width-16 height-8 padding-1 inline-block text-black-8 bg-amber-4 curve-border opacity-100">Text</div> |
| opacity-75 | opacity: .75 | <div class="width-16 height-8 padding-1 inline-block text-black-8 bg-amber-4 curve-border opacity-75">Text</div> |
| opacity-50 | opacity: .5 | <div class="width-16 height-8 padding-1 inline-block text-black-8 bg-amber-4 curve-border opacity-50">Text</div> |
| opacity-25 | opacity: .25 | <div class="width-16 height-8 padding-1 inline-block text-black-8 bg-amber-4 curve-border opacity-25">Text</div> |
| opacity-0 | opacity: 0 | <div class="width-16 height-8 padding-1 inline-block text-black-8 bg-amber-4 curve-border opacity-0">Text</div> |

---

## Usage

{% from "misc/console.njk" import console %}

<div class="padding-4 margin-y-2 margin-x-auto">
  <div class="max-width-lg flex flex-wrap flex-gap-4 justify-center items-center">
    <div class="text-center">
      <div class="width-32 height-20 opacity-100 bg-tint-granite-5 filter saturate-10 curve-border-lg"></div>
      <div class="padding-t-2 text-sm text-center">
        opacity-100
      </div>
    </div>
    <div class="text-center">
      <div class="width-32 height-20 opacity-75 bg-tint-granite-5 filter saturate-10 curve-border-lg"></div>
      <div class="padding-t-2 text-sm text-center">
        opacity-75
      </div>
    </div>
    <div class="text-center">
      <div class="width-32 height-20 opacity-50 bg-tint-granite-5 filter saturate-10 curve-border-lg"></div>
      <div class="padding-t-2 text-sm text-center">
        opacity-50
      </div>
    </div>
    <div class="text-center">
      <div class="width-32 height-20 opacity-25 bg-tint-granite-5 filter saturate-10 curve-border-lg"></div>
      <div class="padding-t-2 text-sm text-center">
        opacity-25
      </div>
    </div>
    <div class="text-center">
      <div class="width-32 height-20 opacity-0 bg-tint-granite-5 filter saturate-10 curve-border-lg"></div>
      <div class="padding-t-2 text-sm text-center">
        opacity-0
      </div>
    </div>
  </div>
</div>

{{ console('html',
'<div class="opacity-50 ... bg-tint-granite-1 ... height-32 width-32">
  ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .opacity-50,
      .bg-tint-granite-1,
      .height-32,
      .width-32;
}
') }}

