---
id: equal
title: Equal
description: Utilities for sets balancing the space in between child elements.
topic: Spacing
relate: margin, padding
layout: default
---

> Spacing

# Equal

Utilities for sets balancing the space in between child elements.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for equal in variants.equal %}{% for item in equal.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| equal-x-0 | --equal-x-reverse: 0; <br> margin-right: calc(0 * var(--equal-x-reverse)); <br> margin-left: calc(0 * calc(1 - var(--equal-x-reverse))) |
| equal-x-1 | --equal-x-reverse: 0; <br> margin-right: calc(0.25rem * var(--equal-x-reverse)); <br> margin-left: calc(0.25rem * calc(1 - var(--equal-x-reverse))) |
| equal-x-2 | --equal-x-reverse: 0; <br> margin-right: calc(0.5rem * var(--equal-x-reverse)); <br> margin-left: calc(0.5rem * calc(1 - var(--equal-x-reverse))) |
| equal-x-3 | --equal-x-reverse: 0; <br> margin-right: calc(0.75rem * var(--equal-x-reverse)); <br> margin-left: calc(0.75rem * calc(1 - var(--equal-x-reverse))) |
| equal-x-4 | --equal-x-reverse: 0; <br> margin-right: calc(1rem * var(--equal-x-reverse)); <br> margin-left: calc(1rem * calc(1 - var(--equal-x-reverse))) |
| equal-x-5 | --equal-x-reverse: 0; <br> margin-right: calc(1.25rem * var(--equal-x-reverse)); <br> margin-left: calc(1.25rem * calc(1 - var(--equal-x-reverse))) |
| equal-x-6 | --equal-x-reverse: 0; <br> margin-right: calc(1.5rem * var(--equal-x-reverse)); <br> margin-left: calc(1.5rem * calc(1 - var(--equal-x-reverse))) |
| equal-x-8 | --equal-x-reverse: 0; <br> margin-right: calc(2rem * var(--equal-x-reverse)); <br> margin-left: calc(2rem * calc(1 - var(--equal-x-reverse))) |
| equal-x-10 | --equal-x-reverse: 0; <br> margin-right: calc(2.5rem * var(--equal-x-reverse)); <br> margin-left: calc(2.5rem * calc(1 - var(--equal-x-reverse))) |
| equal-x-12 | --equal-x-reverse: 0; <br> margin-right: calc(3rem * var(--equal-x-reverse)); <br> margin-left: calc(3rem * calc(1 - var(--equal-x-reverse))) |
| equal-x-16 | --equal-x-reverse: 0; <br> margin-right: calc(4rem * var(--equal-x-reverse)); <br> margin-left: calc(4rem * calc(1 - var(--equal-x-reverse))) |
| equal-x-20 | --equal-x-reverse: 0; <br> margin-right: calc(5rem * var(--equal-x-reverse)); <br> margin-left: calc(5rem * calc(1 - var(--equal-x-reverse))) |
| equal-x-24 | --equal-x-reverse: 0; <br> margin-right: calc(6rem * var(--equal-x-reverse)); <br> margin-left: calc(6rem * calc(1 - var(--equal-x-reverse))) |
| equal-x-32 | --equal-x-reverse: 0; <br> margin-right: calc(8rem * var(--equal-x-reverse)); <br> margin-left: calc(8rem * calc(1 - var(--equal-x-reverse))) |
| equal-x-40 | --equal-x-reverse: 0; <br> margin-right: calc(10rem * var(--equal-x-reverse)); <br> margin-left: calc(10rem * calc(1 - var(--equal-x-reverse))) |
| equal-x-48 | --equal-x-reverse: 0; <br> margin-right: calc(12rem * var(--equal-x-reverse)); <br> margin-left: calc(12rem * calc(1 - var(--equal-x-reverse))) |
| equal-x-56 | --equal-x-reverse: 0; <br> margin-right: calc(14rem * var(--equal-x-reverse)); <br> margin-left: calc(14rem * calc(1 - var(--equal-x-reverse))) |
| equal-x-64 | --equal-x-reverse: 0; <br> margin-right: calc(16rem * var(--equal-x-reverse)); <br> margin-left: calc(16rem * calc(1 - var(--equal-x-reverse))) |
| equal-x-72 | --equal-x-reverse: 0; <br> margin-right: calc(18rem * var(--equal-x-reverse)); <br> margin-left: calc(18rem * calc(1 - var(--equal-x-reverse))) |
| equal-x-80  | --equal-x-reverse: 0; <br> margin-right: calc(20rem * var(--equal-x-reverse)); <br> margin-left: calc(20rem * calc(1 - var(--equal-x-reverse))) |
| equal-x-88  | --equal-x-reverse: 0; <br> margin-right: calc(22rem * var(--equal-x-reverse)); <br> margin-left: calc(22rem * calc(1 - var(--equal-x-reverse))) |
| equal-x-96  | --equal-x-reverse: 0; <br> margin-right: calc(24rem * var(--equal-x-reverse)); <br> margin-left: calc(24rem * calc(1 - var(--equal-x-reverse))) |
| equal-x-104  | --equal-x-reverse: 0; <br> margin-right: calc(26rem * var(--equal-x-reverse)); <br> margin-left: calc(26rem * calc(1 - var(--equal-x-reverse))) |
| equal-x-112  | --equal-x-reverse: 0; <br> margin-right: calc(28rem * var(--equal-x-reverse)); <br> margin-left: calc(28rem * calc(1 - var(--equal-x-reverse))) |
| -equal-x-1 | --equal-x-reverse: 0; <br> margin-right: calc(-0.25rem * var(--equal-x-reverse)); <br> margin-left: calc(-0.25rem * calc(1 - var(--equal-x-reverse))) |
| -equal-x-2 | --equal-x-reverse: 0; <br> margin-right: calc(-0.5rem * var(--equal-x-reverse)); <br> margin-left: calc(-0.5rem * calc(1 - var(--equal-x-reverse))) |
| -equal-x-3 | --equal-x-reverse: 0; <br> margin-right: calc(-0.75rem * var(--equal-x-reverse)); <br> margin-left: calc(-0.75rem * calc(1 - var(--equal-x-reverse))) |
| -equal-x-4 | --equal-x-reverse: 0; <br> margin-right: calc(-1rem * var(--equal-x-reverse)); <br> margin-left: calc(-1rem * calc(1 - var(--equal-x-reverse))) |
| -equal-x-5 | --equal-x-reverse: 0; <br> margin-right: calc(-1.25rem * var(--equal-x-reverse)); <br> margin-left: calc(-1.25rem * calc(1 - var(--equal-x-reverse))) |
| -equal-x-6 | --equal-x-reverse: 0; <br> margin-right: calc(-1.5rem * var(--equal-x-reverse)); <br> margin-left: calc(-1.5rem * calc(1 - var(--equal-x-reverse))) |
| -equal-x-8 | --equal-x-reverse: 0; <br> margin-right: calc(-2rem * var(--equal-x-reverse)); <br> margin-left: calc(-2rem * calc(1 - var(--equal-x-reverse))) |
| -equal-x-10 | --equal-x-reverse: 0; <br> margin-right: calc(-2.5rem * var(--equal-x-reverse)); <br> margin-left: calc(-2.5rem * calc(1 - var(--equal-x-reverse))) |
| -equal-x-12 | --equal-x-reverse: 0; <br> margin-right: calc(-3rem * var(--equal-x-reverse)); <br> margin-left: calc(-3rem * calc(1 - var(--equal-x-reverse))) |
| -equal-x-16 | --equal-x-reverse: 0; <br> margin-right: calc(-4rem * var(--equal-x-reverse)); <br> margin-left: calc(-4rem * calc(1 - var(--equal-x-reverse))) |
| -equal-x-20 | --equal-x-reverse: 0; <br> margin-right: calc(-5rem * var(--equal-x-reverse)); <br> margin-left: calc(-5rem * calc(1 - var(--equal-x-reverse))) |
| -equal-x-24 | --equal-x-reverse: 0; <br> margin-right: calc(-6rem * var(--equal-x-reverse)); <br> margin-left: calc(-6rem * calc(1 - var(--equal-x-reverse))) |
| -equal-x-32 | --equal-x-reverse: 0; <br> margin-right: calc(-8rem * var(--equal-x-reverse)); <br> margin-left: calc(-8rem * calc(1 - var(--equal-x-reverse))) |
| -equal-x-40 | --equal-x-reverse: 0; <br> margin-right: calc(-10rem * var(--equal-x-reverse)); <br> margin-left: calc(-10rem * calc(1 - var(--equal-x-reverse))) |
| -equal-x-48 | --equal-x-reverse: 0; <br> margin-right: calc(-12rem * var(--equal-x-reverse)); <br> margin-left: calc(-12rem * calc(1 - var(--equal-x-reverse))) |
| -equal-x-56 | --equal-x-reverse: 0; <br> margin-right: calc(-14rem * var(--equal-x-reverse)); <br> margin-left: calc(-14rem * calc(1 - var(--equal-x-reverse))) |
| -equal-x-64 | --equal-x-reverse: 0; <br> margin-right: calc(-16rem * var(--equal-x-reverse)); <br> margin-left: calc(-16rem * calc(1 - var(--equal-x-reverse))) |
| -equal-x-72  | --equal-x-reverse: 0; <br> margin-right: calc(-18rem * var(--equal-x-reverse)); <br> margin-left: calc(-18rem * calc(1 - var(--equal-x-reverse))) |
| -equal-x-80  | --equal-x-reverse: 0; <br> margin-right: calc(-20rem * var(--equal-x-reverse)); <br> margin-left: calc(-20rem * calc(1 - var(--equal-x-reverse))) |
| -equal-x-88  | --equal-x-reverse: 0; <br> margin-right: calc(-22rem * var(--equal-x-reverse)); <br> margin-left: calc(-22rem * calc(1 - var(--equal-x-reverse))) |
| -equal-x-96  | --equal-x-reverse: 0; <br> margin-right: calc(-24rem * var(--equal-x-reverse)); <br> margin-left: calc(-24rem * calc(1 - var(--equal-x-reverse))) |
| -equal-x-104  | --equal-x-reverse: 0; <br> margin-right: calc(-26rem * var(--equal-x-reverse)); <br> margin-left: calc(-26rem * calc(1 - var(--equal-x-reverse))) |
| -equal-x-112  | --equal-x-reverse: 0; <br> margin-right: calc(-28rem * var(--equal-x-reverse)); <br> margin-left: calc(-28rem * calc(1 - var(--equal-x-reverse))) |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| equal-y-0 | --equal-y-reverse: 0; <br> margin-top: calc(0 * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(0 * var(--equal-y-reverse)) |
| equal-y-1 | --equal-y-reverse: 0; <br> margin-top: calc(0.25rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(0.25rem * var(--equal-y-reverse)) |
| equal-y-2 | --equal-y-reverse: 0; <br> margin-top: calc(0.5rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(0.5rem * var(--equal-y-reverse)) |
| equal-y-3 | --equal-y-reverse: 0; <br> margin-top: calc(0.75rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(0.75rem * var(--equal-y-reverse)) |
| equal-y-4 | --equal-y-reverse: 0; <br> margin-top: calc(1rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(1rem * var(--equal-y-reverse)) |
| equal-y-5 | --equal-y-reverse: 0; <br> margin-top: calc(1.25rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(1.25rem * var(--equal-y-reverse)) |
| equal-y-6 | --equal-y-reverse: 0; <br> margin-top: calc(1.5rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(1.5rem * var(--equal-y-reverse)) |
| equal-y-8 | --equal-y-reverse: 0; <br> margin-top: calc(2rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(2rem * var(--equal-y-reverse)) |
| equal-y-10 | --equal-y-reverse: 0; <br> margin-top: calc(2.5rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(2.5rem * var(--equal-y-reverse)) |
| equal-y-12 | --equal-y-reverse: 0; <br> margin-top: calc(3rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(3rem * var(--equal-y-reverse)) |
| equal-y-16 | --equal-y-reverse: 0; <br> margin-top: calc(4rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(4rem * var(--equal-y-reverse)) |
| equal-y-20 | --equal-y-reverse: 0; <br> margin-top: calc(5rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(5rem * var(--equal-y-reverse)) |
| equal-y-24 | --equal-y-reverse: 0; <br> margin-top: calc(6rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(6rem * var(--equal-y-reverse)) |
| equal-y-32 | --equal-y-reverse: 0; <br> margin-top: calc(8rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(8rem * var(--equal-y-reverse)) |
| equal-y-40 | --equal-y-reverse: 0; <br> margin-top: calc(10rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(10rem * var(--equal-y-reverse)) |
| equal-y-48 | --equal-y-reverse: 0; <br> margin-top: calc(12rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(12rem * var(--equal-y-reverse)) |
| equal-y-56 | --equal-y-reverse: 0; <br> margin-top: calc(14rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(14rem * var(--equal-y-reverse)) |
| equal-y-64 | --equal-y-reverse: 0; <br> margin-top: calc(16rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(16rem * var(--equal-y-reverse)) |
| equal-y-72  | --equal-y-reverse: 0; <br> margin-top: calc(18rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(18rem * var(--equal-y-reverse)) |
| equal-y-80  | --equal-y-reverse: 0; <br> margin-top: calc(20rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(20rem * var(--equal-y-reverse)) |
| equal-y-88  | --equal-y-reverse: 0; <br> margin-top: calc(22rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(22rem * var(--equal-y-reverse)) |
| equal-y-96  | --equal-y-reverse: 0; <br> margin-top: calc(24rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(24rem * var(--equal-y-reverse)) |
| equal-y-104  | --equal-y-reverse: 0; <br> margin-top: calc(26rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(26rem * var(--equal-y-reverse)) |
| equal-y-112  | --equal-y-reverse: 0; <br> margin-top: calc(28rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(28rem * var(--equal-y-reverse)) |
| -equal-y-1 | --equal-y-reverse: 0; <br> margin-top: calc(-0.25rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(-0.25rem * var(--equal-y-reverse)) |
| -equal-y-2 | --equal-y-reverse: 0; <br> margin-top: calc(-0.5rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(-0.5rem * var(--equal-y-reverse)) |
| -equal-y-3 | --equal-y-reverse: 0; <br> margin-top: calc(-0.75rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(-0.75rem * var(--equal-y-reverse)) |
| -equal-y-4 | --equal-y-reverse: 0; <br> margin-top: calc(-1rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(-1rem * var(--equal-y-reverse)) |
| -equal-y-5 | --equal-y-reverse: 0; <br> margin-top: calc(-1.25rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(-1.25rem * var(--equal-y-reverse)) |
| -equal-y-6 | --equal-y-reverse: 0; <br> margin-top: calc(-1.5rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(-1.5rem * var(--equal-y-reverse)) |
| -equal-y-8 | --equal-y-reverse: 0; <br> margin-top: calc(-2rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(-2rem * var(--equal-y-reverse)) |
| -equal-y-10 | --equal-y-reverse: 0; <br> margin-top: calc(-2.5rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(-2.5rem * var(--equal-y-reverse)) |
| -equal-y-12 | --equal-y-reverse: 0; <br> margin-top: calc(-3rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(-3rem * var(--equal-y-reverse)) |
| -equal-y-16 | --equal-y-reverse: 0; <br> margin-top: calc(-4rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(-4rem * var(--equal-y-reverse)) |
| -equal-y-20 | --equal-y-reverse: 0; <br> margin-top: calc(-5rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(-5rem * var(--equal-y-reverse)) |
| -equal-y-24 | --equal-y-reverse: 0; <br> margin-top: calc(-6rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(-6rem * var(--equal-y-reverse)) |
| -equal-y-32 | --equal-y-reverse: 0; <br> margin-top: calc(-8rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(-8rem * var(--equal-y-reverse)) |
| -equal-y-40 | --equal-y-reverse: 0; <br> margin-top: calc(-10rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(-10rem * var(--equal-y-reverse)) |
| -equal-y-48 | --equal-y-reverse: 0; <br> margin-top: calc(-12rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(-12rem * var(--equal-y-reverse)) |
| -equal-y-56 | --equal-y-reverse: 0; <br> margin-top: calc(-14rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(-14rem * var(--equal-y-reverse)) |
| -equal-y-64 | --equal-y-reverse: 0; <br> margin-top: calc(-16rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(-16rem * var(--equal-y-reverse)) |
| -equal-y-72  | --equal-y-reverse: 0; <br> margin-top: calc(-18rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(-18rem * var(--equal-y-reverse)) |
| -equal-y-80  | --equal-y-reverse: 0; <br> margin-top: calc(-20rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(-20rem * var(--equal-y-reverse)) |
| -equal-y-88  | --equal-y-reverse: 0; <br> margin-top: calc(-22rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(-22rem * var(--equal-y-reverse)) |
| -equal-y-96  | --equal-y-reverse: 0; <br> margin-top: calc(-24rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(-24rem * var(--equal-y-reverse)) |
| -equal-y-104  | --equal-y-reverse: 0; <br> margin-top: calc(-26rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(-26rem * var(--equal-y-reverse)) |
| -equal-y-112  | --equal-y-reverse: 0; <br> margin-top: calc(-28rem * calc(1 - var(--equal-y-reverse))); <br> margin-bottom: calc(-28rem * var(--equal-y-reverse)) |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| equal-x-reverse | --equal-x-reverse: 1 |
| equal-y-reverse | --equal-y-reverse: 1 |

---

## Usage

{% from "misc/console.njk" import console %}

Set spacing in between the elements horizontally, must companion with [flex](/flex/) utility.

<div class="padding-y-4">
  <div class="padding-4 margin-y-2 margin-x-auto max-width-sm bg-tint-granite-5">
    <div class="equal-x-8 flex (expand)width-full (expand)height-auto (expand)bg-tint-granite-3 bg-tint-granite-5 text-white">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </div>
</div>

{{ console('html',
'<div class="equal-x-2 flex">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .equal-x-2,
      .flex;
}
') }}

Set spacing in between the elements vertically.

  <div class="padding-y-4">
    <div class="padding-4 margin-y-2 margin-x-auto max-width-sm bg-tint-granite-5">
      <div class="equal-y-8 (expand)width-full (expand)height-auto (expand)bg-tint-granite-3 bg-tint-granite-5 text-white">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  </div>

{{ console('html',
'<div class="equal-y-8">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .equal-y-2;
}
') }}