---
id: dissect
title: Dissect
description: Utilities for sets bottom border on each child elements of its parent.
topic: Borders
relate: dissect-color, dissect-opacity
layout: default
---

> Borders

# Dissect

Utilities for sets bottom border on each child elements of its parent.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for dissect in variants.dissect %}{% for item in dissect.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| dissect-x-0 | --dissect-x-reverse: 0; <br> border-right-width: calc(0 * var(--dissect-x-reverse)); <br> border-left-width: calc(0 * calc(1 - var(--dissect-x-reverse))) |
| dissect-x-2 | --dissect-x-reverse: 0; <br> border-right-width: calc(2px * var(--dissect-x-reverse)); <br> border-left-width: calc(2px * calc(1 - var(--dissect-x-reverse))) |
| dissect-x-4 | --dissect-x-reverse: 0; <br> border-right-width: calc(4px * var(--dissect-x-reverse)); <br> border-left-width: calc(4px * calc(1 - var(--dissect-x-reverse))) |
| dissect-x-8 | --dissect-x-reverse: 0; <br> border-right-width: calc(8px * var(--dissect-x-reverse)); <br> border-left-width: calc(8px * calc(1 - var(--dissect-x-reverse))) |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| dissect-y-0 | --dissect-y-reverse: 0; <br> border-top-width: calc(0 * calc(1 - var(--dissect-y-reverse))); <br> border-bottom-width: calc(0 * var(--dissect-y-reverse)) |
| dissect-y-2 | --dissect-y-reverse: 0; <br> border-top-width: calc(2px * calc(1 - var(--dissect-y-reverse))); <br> border-bottom-width: calc(2px * var(--dissect-y-reverse)) |
| dissect-y-4 | --dissect-y-reverse: 0; <br> border-top-width: calc(4px * calc(1 - var(--dissect-y-reverse))); <br> border-bottom-width: calc(4px * var(--dissect-y-reverse)) |
| dissect-y-8 | --dissect-y-reverse: 0; <br> border-top-width: calc(8px * calc(1 - var(--dissect-y-reverse))); <br> border-bottom-width: calc(8px * var(--dissect-y-reverse)) |
| dissect-x | --dissect-x-reverse: 0; <br> border-right-width: calc(1px * var(--divide-x-reverse)); <br> border-left-width: calc(1px * calc(1 - var(--divide-x-reverse))) |
| dissect-y | --dissect-y-reverse: 0; <br> border-top-width: calc(1px * calc(1 - var(--divide-y-reverse))); <br> border-bottom-width: calc(1px * var(--divide-y-reverse)) |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| dissect-x-reverse | --dissect-x-reverse: 1 |
| dissect-y-reverse | --dissect-y-reverse: 1 |

---

## Usage

{% from "misc/console.njk" import console %}

Set borders in between the elements horizontally, must companion with [flex](/flex/) utility.

<div class="padding-y-4">
  <div class="padding-4 margin-x-auto max-width-sm bg-tint-granite-5">
    <div class="(expand)width-64 (expand)height-8 (expand)bg-tint-granite-5 (expand)text-center flex dissect-x-4 dissect-shade-lava-1 text-shade-granite-5">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </div>
</div>

{{ console('html',
'<div class="flex dissect-x-4">
    <div>...</div>
    <div>...</div>
    <div>...</div>
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .flex,
      .dissect-x-4;
}
') }}

Set borders in between the elements vertically.

<div class="padding-y-4">
  <div class="padding-4 margin-x-auto max-width-sm bg-tint-granite-5">
    <div class="(expand)width-full (expand)height-8 (expand)bg-tint-granite-5 dissect-y-4 dissect-shade-lava-1 text-shade-granite-5">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </div>
</div>

{{ console('html',
'<div class="dissect-y-4">
    <div>...</div>
    <div>...</div>
    <div>...</div>
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .dissect-y-4;
}
') }}