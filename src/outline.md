---
id: outline
title: Outline
description: Utilities to set outline style surrounding the edge of an element, including the width thickness, color and outline offset.
topic: Interactivity
variant: focus
layout: default
---

> Interactivity

# Outline

Utilities to set outline style surrounding the edge of an element, including the width thickness, color and outline offset.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for outline in variants.outline %}{% for item in outline.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| outline `{style}` `{thickness}` `{offset}` `{color}` | --outline-style: none; --outline-thickness: 1px; --outline-offset: 0; --outline-color: currentColor; outline-style: var(--outline-style); outline-width: var(--outline-thickness); outline-offset: var(--outline-offset); outline-color: var(--outline-color) |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| style-none | outline-style: none |
| style-dotted | outline-style: dotted |
| style-dashed | outline-style: dashed |
| style-solid | outline-style: solid |
| style-double | outline-style: double |
| style-groove | outline-style: groove |
| style-ridge | outline-style: ridge |
| style-inset | outline-style: inset |
| style-outset | outline-style: outset |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| thinkness-1 | outline-width: 0.25rem |
| thinkness-2 | outline-width: 0.5rem |
| thinkness-3 | outline-width: 0.75rem |
| thinkness-4 | outline-width: 1rem |
| thinkness-5 | outline-width: 1.25rem |
| thinkness-6 | outline-width: 1.5rem |
| thinkness-8 | outline-width: 2rem |
| thinkness-10 | outline-width: 2.5rem |
| thinkness-12 | outline-width: 3rem |
| thinkness-16 | outline-width: 4rem |
| thinkness-20 | outline-width: 5rem |
| thinkness-24 | outline-width: 6rem |
| thinkness-32 | outline-width: 8rem |
| thinkness-40 | outline-width: 10rem |
| thinkness-48 | outline-width: 12rem |
| thinkness-56 | outline-width: 14rem |
| thinkness-64 | outline-width: 16rem |
| thinkness-72 | outline-width: 18rem |
| thinkness-80 | outline-width: 20rem |
| thinkness-88 | outline-width: 22rem |
| thinkness-96 | outline-width: 24rem |
| thinkness-104 | outline-width: 26rem |
| thinkness-112 | outline-width: 28rem |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| offset-1 | outline-offset: 0.25rem |
| offset-2 | outline-offset: 0.5rem |
| offset-3 | outline-offset: 0.75rem |
| offset-4 | outline-offset: 1rem |
| offset-5 | outline-offset: 1.25rem |
| offset-6 | outline-offset: 1.5rem |
| offset-8 | outline-offset: 2rem |
| offset-10 | outline-offset: 2.5rem |
| offset-12 | outline-offset: 3rem |
| offset-16 | outline-offset: 4rem |
| offset-20 | outline-offset: 5rem |
| offset-24 | outline-offset: 6rem |
| offset-32 | outline-offset: 8rem |
| offset-40 | outline-offset: 10rem |
| offset-48 | outline-offset: 12rem |
| offset-56 | outline-offset: 14rem |
| offset-64 | outline-offset: 16rem |
| offset-72 | outline-offset: 18rem |
| offset-80 | outline-offset: 20rem |
| offset-88 | outline-offset: 22rem |
| offset-96 | outline-offset: 24rem |
| offset-104 | outline-offset: 26rem |
| offset-112 | outline-offset: 28rem |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> | |
|:--|:--|:-:|
| outline-charcoal-1 | outline-color: #222c35 | <div class="width-16 height-8 curve-border bg-charcoal-1 "></div> |
| outline-charcoal-2 | outline-color: #1f2831 | <div class="width-16 height-8 curve-border bg-charcoal-2"></div> |
| outline-charcoal-3 | outline-color: #1c252c | <div class="width-16 height-8 curve-border bg-charcoal-3"></div> |
| outline-charcoal-4 | outline-color: #192127 | <div class="width-16 height-8 curve-border bg-charcoal-4"></div> |
| outline-charcoal-5 | outline-color: #161d22 | <div class="width-16 height-8 curve-border bg-charcoal-5"></div> |
| outline-charcoal-6 | outline-color: #13181d | <div class="width-16 height-8 curve-border bg-charcoal-6"></div> |
| outline-charcoal-7 | outline-color: #101419 | <div class="width-16 height-8 curve-border bg-charcoal-7"></div> |
| outline-charcoal-8 | outline-color: #0d1014 | <div class="width-16 height-8 curve-border bg-charcoal-8"></div> |
| outline-charcoal-9 | outline-color: #0a0c0f | <div class="width-16 height-8 curve-border bg-charcoal-9"></div> |
| outline-gray-1 | outline-color: #f7fafc | <div class="width-16 height-8 curve-border bg-gray-1"></div> |
| outline-gray-2 | outline-color: #edf2f7 | <div class="width-16 height-8 curve-border bg-gray-2"></div> |
| outline-gray-3 | outline-color: #e2e8f0 | <div class="width-16 height-8 curve-border bg-gray-3"></div> |
| outline-gray-4 | outline-color: #cbd5e0 | <div class="width-16 height-8 curve-border bg-gray-4"></div> |
| outline-gray-5 | outline-color: #a0aec0 | <div class="width-16 height-8 curve-border bg-gray-5"></div> |
| outline-gray-6 | outline-color: #718096 | <div class="width-16 height-8 curve-border bg-gray-6 "></div> |
| outline-gray-7 | outline-color: #4a5568 | <div class="width-16 height-8 curve-border bg-gray-7 "></div> |
| outline-gray-8 | outline-color: #2d3748 | <div class="width-16 height-8 curve-border bg-gray-8"></div> |
| outline-gray-9 | outline-color: #1a202c | <div class="width-16 height-8 curve-border bg-gray-9"></div> |
| outline-red-1 | outline-color: #fff5f5 | <div class="width-16 height-8 curve-border bg-red-1"></div> |
| outline-red-2 | outline-color: #fed7d7 | <div class="width-16 height-8 curve-border bg-red-2"></div> |
| outline-red-3 | outline-color: #feb2b2 | <div class="width-16 height-8 curve-border bg-red-3"></div> |
| outline-red-4 | outline-color: #fc8181 | <div class="width-16 height-8 curve-border bg-red-4"></div> |
| outline-red-5 | outline-color: #f56565 | <div class="width-16 height-8 curve-border bg-red-5"></div> |
| outline-red-6 | outline-color: #e53e3e | <div class="width-16 height-8 curve-border bg-red-6"></div> |
| outline-red-7 | outline-color: #c53030 | <div class="width-16 height-8 curve-border bg-red-7"></div> |
| outline-red-8 | outline-color: #9b2c2c | <div class="width-16 height-8 curve-border bg-red-8"></div> |
| outline-red-9 | outline-color: #742a2a | <div class="width-16 height-8 curve-border bg-red-9"></div> |
| outline-orange-1 | outline-color: #fffaf0 | <div class="width-16 height-8 curve-border bg-orange-1"></div> |
| outline-orange-2 | outline-color: #feebc8 | <div class="width-16 height-8 curve-border bg-orange-2"></div> |
| outline-orange-3 | outline-color: #fbd38d | <div class="width-16 height-8 curve-border bg-orange-3"></div> |
| outline-orange-4 | outline-color: #f6ad55 | <div class="width-16 height-8 curve-border bg-orange-4"></div> |
| outline-orange-5 | outline-color: #ed8936 | <div class="width-16 height-8 curve-border bg-orange-5"></div> |
| outline-orange-6 | outline-color: #dd6b20 | <div class="width-16 height-8 curve-border bg-orange-6"></div> |
| outline-orange-7 | outline-color: #c05621 | <div class="width-16 height-8 curve-border bg-orange-7"></div> |
| outline-orange-8 | outline-color: #9c4221 | <div class="width-16 height-8 curve-border bg-orange-8"></div> |
| outline-orange-9 | outline-color: #7b341e | <div class="width-16 height-8 curve-border bg-orange-9"></div> |
| outline-green-1 | outline-color: #f0fff4 | <div class="width-16 height-8 curve-border bg-green-1"></div> |
| outline-green-2 | outline-color: #c6f6d5 | <div class="width-16 height-8 curve-border bg-green-2"></div> |
| outline-green-3 | outline-color: #9ae6b4 | <div class="width-16 height-8 curve-border bg-green-3"></div> |
| outline-green-4 | outline-color: #68d391 | <div class="width-16 height-8 curve-border bg-green-4"></div> |
| outline-green-5 | outline-color: #48bb78 | <div class="width-16 height-8 curve-border bg-green-5"></div> |
| outline-green-6 | outline-color: #38a169 | <div class="width-16 height-8 curve-border bg-green-6"></div> |
| outline-green-7 | outline-color: #2f855a | <div class="width-16 height-8 curve-border bg-green-7"></div> |
| outline-green-8 | outline-color: #276749 | <div class="width-16 height-8 curve-border bg-green-8"></div> |
| outline-green-9 | outline-color: #22543d | <div class="width-16 height-8 curve-border bg-green-9"></div> |
| outline-teal-1 | outline-color: #e6fffa | <div class="width-16 height-8 curve-border bg-teal-1"></div> |
| outline-teal-2 | outline-color: #b2f5ea | <div class="width-16 height-8 curve-border bg-teal-2"></div> |
| outline-teal-3 | outline-color: #81e6d9 | <div class="width-16 height-8 curve-border bg-teal-3"></div> |
| outline-teal-4 | outline-color: #4fd1c5 | <div class="width-16 height-8 curve-border bg-teal-4"></div> |
| outline-teal-5 | outline-color: #38b2ac | <div class="width-16 height-8 curve-border bg-teal-5"></div> |
| outline-teal-6 | outline-color: #319795 | <div class="width-16 height-8 curve-border bg-teal-6"></div> |
| outline-teal-7 | outline-color: #2c7a7b | <div class="width-16 height-8 curve-border bg-teal-7"></div> |
| outline-teal-8 | outline-color: #285e61 | <div class="width-16 height-8 curve-border bg-teal-8"></div> |
| outline-teal-9 | outline-color: #234e52 | <div class="width-16 height-8 curve-border bg-teal-9"></div> |
| outline-blue-1 | outline-color: #ebf8ff | <div class="width-16 height-8 curve-border bg-blue-1"></div> |
| outline-blue-2 | outline-color: #bee3f8 | <div class="width-16 height-8 curve-border bg-blue-2"></div> |
| outline-blue-3 | outline-color: #90cdf4 | <div class="width-16 height-8 curve-border bg-blue-3"></div> |
| outline-blue-4 | outline-color: #63b3ed | <div class="width-16 height-8 curve-border bg-blue-4"></div> |
| outline-blue-5 | outline-color: #4299e1 | <div class="width-16 height-8 curve-border bg-blue-5"></div> |
| outline-blue-6 | outline-color: #3182ce | <div class="width-16 height-8 curve-border bg-blue-6"></div> |
| outline-blue-7 | outline-color: #2b6cb0 | <div class="width-16 height-8 curve-border bg-blue-7"></div> |
| outline-blue-8 | outline-color: #2c5282 | <div class="width-16 height-8 curve-border bg-blue-8"></div> |
| outline-blue-9 | outline-color: #2a4365 | <div class="width-16 height-8 curve-border bg-blue-9"></div> |
| outline-indigo-1 | outline-color: #ebf4ff | <div class="width-16 height-8 curve-border bg-indigo-1"></div> |
| outline-indigo-2 | outline-color: #c3dafe | <div class="width-16 height-8 curve-border bg-indigo-2"></div> |
| outline-indigo-3 | outline-color: #a3bffa | <div class="width-16 height-8 curve-border bg-indigo-3"></div> |
| outline-indigo-4 | outline-color: #7f9cf5 | <div class="width-16 height-8 curve-border bg-indigo-4"></div> |
| outline-indigo-5 | outline-color: #667eea | <div class="width-16 height-8 curve-border bg-indigo-5"></div> |
| outline-indigo-6 | outline-color: #5a67d8 | <div class="width-16 height-8 curve-border bg-indigo-6"></div> |
| outline-indigo-7 | outline-color: #4c51bf | <div class="width-16 height-8 curve-border bg-indigo-7"></div> |
| outline-indigo-8 | outline-color: #434190 | <div class="width-16 height-8 curve-border bg-indigo-8"></div> |
| outline-indigo-9 | outline-color: #3c366b | <div class="width-16 height-8 curve-border bg-indigo-9"></div> |
| outline-purple-1 | outline-color: #faf5ff | <div class="width-16 height-8 curve-border bg-purple-1"></div> |
| outline-purple-2 | outline-color: #e9d8fd | <div class="width-16 height-8 curve-border bg-purple-2"></div> |
| outline-purple-3 | outline-color: #d6bcfa | <div class="width-16 height-8 curve-border bg-purple-3"></div> |
| outline-purple-4 | outline-color: #b794f4 | <div class="width-16 height-8 curve-border bg-purple-4"></div> |
| outline-purple-5 | outline-color: #9f7aea | <div class="width-16 height-8 curve-border bg-purple-5"></div> |
| outline-purple-6 | outline-color: #805ad5 | <div class="width-16 height-8 curve-border bg-purple-6"></div> |
| outline-purple-7 | outline-color: #6b46c1 | <div class="width-16 height-8 curve-border bg-purple-7"></div> |
| outline-purple-8 | outline-color: #553c9a | <div class="width-16 height-8 curve-border bg-purple-8"></div> |
| outline-purple-9 | outline-color: #44337a | <div class="width-16 height-8 curve-border bg-purple-9"></div> |
| outline-pink-1 | outline-color: #fff5f7 | <div class="width-16 height-8 curve-border bg-pink-1"></div> |
| outline-pink-2 | outline-color: #fed7e2 | <div class="width-16 height-8 curve-border bg-pink-2"></div> |
| outline-pink-3 | outline-color: #fbb6ce | <div class="width-16 height-8 curve-border bg-pink-3"></div> |
| outline-pink-4 | outline-color: #f687b3 | <div class="width-16 height-8 curve-border bg-pink-4"></div> |
| outline-pink-5 | outline-color: #ed64a6 | <div class="width-16 height-8 curve-border bg-pink-5"></div> |
| outline-pink-6 | outline-color: #d53f8c | <div class="width-16 height-8 curve-border bg-pink-6"></div> |
| outline-pink-7 | outline-color: #b83280 | <div class="width-16 height-8 curve-border bg-pink-7"></div> |
| outline-pink-8 | outline-color: #97266d | <div class="width-16 height-8 curve-border bg-pink-8"></div> |
| outline-pink-9 | outline-color: #702459 | <div class="width-16 height-8 curve-border bg-pink-9"></div> |
| outline-khaki-1 | outline-color: #f9f7f4 | <div class="width-16 height-8 curve-border bg-khaki-1"></div> |
| outline-khaki-2 | outline-color: #f0ebe4 | <div class="width-16 height-8 curve-border bg-khaki-2"></div> |
| outline-khaki-3 | outline-color: #e7dfd3 | <div class="width-16 height-8 curve-border bg-khaki-3"></div> |
| outline-khaki-4 | outline-color: #d5c8b2 | <div class="width-16 height-8 curve-border bg-khaki-4"></div> |
| outline-khaki-5 | outline-color: #c3b091 | <div class="width-16 height-8 curve-border bg-khaki-5"></div> |
| outline-khaki-6 | outline-color: #b09e83 | <div class="width-16 height-8 curve-border bg-khaki-6"></div> |
| outline-khaki-7 | outline-color: #756a57 | <div class="width-16 height-8 curve-border bg-khaki-7"></div> |
| outline-khaki-8 | outline-color: #584f41 | <div class="width-16 height-8 curve-border bg-khaki-8"></div> |
| outline-khaki-9 | outline-color: #3b352c | <div class="width-16 height-8 curve-border bg-khaki-9"></div> |
| outline-amber-1 | outline-color: #fff9e6 | <div class="width-16 height-8 curve-border bg-amber-1"></div> |
| outline-amber-2 | outline-color: #fff0bf | <div class="width-16 height-8 curve-border bg-amber-2"></div> |
| outline-amber-3 | outline-color: #ffe799 | <div class="width-16 height-8 curve-border bg-amber-3"></div> |
| outline-amber-4 | outline-color: #ffd54d | <div class="width-16 height-8 curve-border bg-amber-4"></div> |
| outline-amber-5 | outline-color: #ffc3 | <div class="width-16 height-8 curve-border bg-amber-5"></div> |
| outline-amber-6 | outline-color: #e6b0 | <div class="width-16 height-8 curve-border bg-amber-6"></div> |
| outline-amber-7 | outline-color: #9975 | <div class="width-16 height-8 curve-border bg-amber-7"></div> |
| outline-amber-8 | outline-color: #7358 | <div class="width-16 height-8 curve-border bg-amber-8"></div> |
| outline-amber-9 | outline-color: #4d3b | <div class="width-16 height-8 curve-border bg-amber-9"></div> |

---

## Usage

{% from "misc/console.njk" import console %}

<div class="padding-x-4 margin-y-16 margin-x-auto (xs)max-width-full (sm)max-width-lg (md)max-width-lg (lg)max-width-lg">
  <div class="outline style-dotted thickness-2 outline-tint-lava-3 offset-2 ... height-32 width-32 ... bg-tint-granite-5"></div>
</div>

{{ console('html',
'<div class="outline style-dotted thickness-2 offset-2 outline-tint-lava-3 ... height-32 width-32 ... bg-tint-granite-5">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .outline,
      .style-dotted,
      .thickness-2,
      .offset-2,
      .outline-tint-lava-3,
      .height-32,
      .width-32,
      .bg-tint-granite-5;
}
') }}

<div class="padding-x-4 margin-y-16 margin-x-auto (xs)max-width-full (sm)max-width-lg (md)max-width-lg (lg)max-width-lg">
  <div class="outline style-dashed thickness-2 outline-tint-lava-3 offset-2 ... height-32 width-32 ... bg-tint-granite-5"></div>
</div>

{{ console('html',
'<div class="outline style-dashed thickness-2 offset-2 outline-tint-lava-3 ... height-32 width-32 ... bg-tint-granite-5">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .outline,
      .style-dashed,
      .thickness-2,
      .offset-2,
      .outline-tint-lava-3,
      .height-32,
      .width-32,
      .bg-tint-granite-5;
}
') }}

