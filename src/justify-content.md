---
id: justify-content
title: Justify Content
description: Utilities for controls how flex items are positioned along container's main axis.
topic: Flexbox
relate: flex, flex-direction, flex-grow, flex-shrink, flex-wrap, align-content, align-items, align-self
variant: responsive
layout: default
---

> Flexbox

# Justify Content

Utilities for controls how flex items are positioned along container's main axis.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for justifycontent in variants.justifycontent %}{% for item in justifycontent.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| justify-start | justify-content: flex-start |
| justify-center | justify-content: center |
| justify-end | justify-content: flex-end |
| justify-between | justify-content: space-between |
| justify-around | justify-content: space-around |

---

## Usage

{% from "misc/console.njk" import console %}

Set flex child elements to be positioned at the beginning with `justify-start`.

<div class="padding-4 margin-y-2 margin-x-auto flex justify-center items-center">
  <div class="padding-4 inline-block bg-tint-granite-5 width-88 height-48 ">
    <div class="flex justify-start (expand)width-20 (expand)height-20 text-white text-xl-1">
      <div class="flex justify-center items-center bg-tint-granite-3">1</div>
      <div class="flex justify-center items-center bg-tint-granite-1">2</div>
      <div class="flex justify-center items-center bg-tint-granite-3">3</div>
    </div>
  </div>
</div>

{{ console('html',
'<div class="flex justify-start">
    <div>...</div>
    <div>...</div>
    <div>...</div>
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .flex,
      .justify-start;
}
') }}

Set flex child elements to be positioned at the center with `justify-center`.

<div class="padding-4 margin-y-2 margin-x-auto flex justify-center items-center">
  <div class="padding-4 inline-block bg-tint-granite-5 width-88 height-48 ">
    <div class="flex justify-center (expand)width-20 (expand)height-20 text-white text-xl-1">
      <div class="flex justify-center items-center bg-tint-granite-3">1</div>
      <div class="flex justify-center items-center bg-tint-granite-1">2</div>
      <div class="flex justify-center items-center bg-tint-granite-3">3</div>
    </div>
  </div>
</div>

{{ console('html',
'<div class="flex justify-center">
    <div>...</div>
    <div>...</div>
    <div>...</div>
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .flex,
      .justify-center;
}
') }}

Set flex child elements to be positioned at the end of the available parent element spacing with `justify-end`.

<div class="padding-4 margin-y-2 margin-x-auto flex justify-center items-center">
  <div class="padding-4 inline-block bg-tint-granite-5 width-88 height-48 ">
    <div class="flex justify-end (expand)width-20 (expand)height-20 text-white text-xl-1">
      <div class="flex justify-center items-center bg-tint-granite-3">1</div>
      <div class="flex justify-center items-center bg-tint-granite-1">2</div>
      <div class="flex justify-center items-center bg-tint-granite-3">3</div>
    </div>
  </div>
</div>

{{ console('html',
'<div class="flex justify-end">
    <div>...</div>
    <div>...</div>
    <div>...</div>
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .flex,
      .justify-end;
}
') }}

Set flex child elements to be positioned at the beginning and the ending of the available parent element spacing with `justify-between`.

<div class="padding-4 margin-y-2 margin-x-auto flex justify-center items-center">
  <div class="padding-4 inline-block bg-tint-granite-5 width-88 height-48 ">
    <div class="flex justify-between (expand)width-20 (expand)height-20 text-white text-xl-1">
      <div class="flex justify-center items-center bg-tint-granite-3">1</div>
      <div class="flex justify-center items-center bg-tint-granite-1">2</div>
      <div class="flex justify-center items-center bg-tint-granite-3">3</div>
    </div>
  </div>
</div>

{{ console('html',
'<div class="flex justify-between">
    <div>...</div>
    <div>...</div>
    <div>...</div>
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .flex,
      .justify-between;
}
') }}

Set flex child elements to be positioned spacing between elements evenly of the available parent element with `justify-around`.

<div class="padding-4 margin-y-2 margin-x-auto flex justify-center items-center">
  <div class="padding-4 inline-block bg-tint-granite-5 width-88 height-48 ">
    <div class="flex justify-around (expand)width-20 (expand)height-20 text-white text-xl-1">
      <div class="flex justify-center items-center bg-tint-granite-3">1</div>
      <div class="flex justify-center items-center bg-tint-granite-1">2</div>
      <div class="flex justify-center items-center bg-tint-granite-3">3</div>
    </div>
  </div>
</div>

{{ console('html',
'<div class="flex justify-around">
    <div>...</div>
    <div>...</div>
    <div>...</div>
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .flex,
      .justify-around;
}
') }}

