---
id: align-content
title: Align Content
description: Utilities for controls how lines are positioned in multi-line flex containers.
topic: Flexbox
relate: flex, flex-gap, flex-direction, flex-grow, flex-shrink, flex-wrap, align-items, align-self
variant: responsive
layout: default
---

> Flexbox

# Align Content

Utilities for controls how lines are positioned in multi-line flex containers.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for aligncontent in variants.aligncontent %}{% for item in aligncontent.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| content-start | align-content: flex-start |
| content-center | align-content: center |
| content-end | align-content: flex-end |
| content-between | align-content: space-between |
| content-around | align-content: space-around |
| content-stretch  | align-content: stretch |

---

## Usage

{% from "misc/console.njk" import console %}

<div class="padding-x-4 margin-y-4 margin-x-auto">
  <div class="padding-2 height-48 width-48 flex flex-wrap content-start bg-tint-granite-5 (expand)height-12 (expand)width-12 text-white curve-border">
    <div class="flex justify-center items-center bg-tint-granite-2">1</div>
    <div class="flex justify-center items-center bg-tint-granite-3">2</div>
    <div class="flex justify-center items-center bg-tint-granite-2">3</div>
    <div class="flex justify-center items-center bg-tint-granite-3">4</div>
    <div class="flex justify-center items-center bg-tint-granite-2">5</div>
    <div class="flex justify-center items-center bg-tint-granite-3">6</div>
  </div>
  <div class="margin-t-2 text-sm text-center">
    content-start
  </div>
</div>

{{ console('html',
'<!-- parent -->
  <div class="flex content-start">
    <!-- child -->
    <div>...</div>
    <div>...</div>
    <div>...</div>
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .flex,
      .content-start;
}
') }}

<div class="padding-x-4 margin-y-4 margin-x-auto">
  <div class="padding-2 height-48 width-48 flex flex-wrap content-center bg-tint-granite-5 (expand)height-12 (expand)width-12 text-white curve-border">
    <div class="flex justify-center items-center bg-tint-granite-2">1</div>
    <div class="flex justify-center items-center bg-tint-granite-3">2</div>
    <div class="flex justify-center items-center bg-tint-granite-2">3</div>
    <div class="flex justify-center items-center bg-tint-granite-3">4</div>
    <div class="flex justify-center items-center bg-tint-granite-2">5</div>
    <div class="flex justify-center items-center bg-tint-granite-3">6</div>
  </div>
  <div class="margin-t-2 text-sm text-center">
    content-center
  </div>
</div>

{{ console('html',
'<!-- parent -->
  <div class="flex content-center">
    <!-- child -->
    <div>...</div>
    <div>...</div>
    <div>...</div>
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .flex,
      .content-center;
}
') }}

<div class="padding-x-4 margin-y-4 margin-x-auto">
  <div class="padding-2 height-48 width-48 flex flex-wrap content-end bg-tint-granite-5 (expand)height-12 (expand)width-12 text-white curve-border">
    <div class="flex justify-center items-center bg-tint-granite-2">1</div>
    <div class="flex justify-center items-center bg-tint-granite-3">2</div>
    <div class="flex justify-center items-center bg-tint-granite-2">3</div>
    <div class="flex justify-center items-center bg-tint-granite-3">4</div>
    <div class="flex justify-center items-center bg-tint-granite-2">5</div>
    <div class="flex justify-center items-center bg-tint-granite-3">6</div>
  </div>
  <div class="margin-t-2 text-sm text-center">
    content-end
  </div>
</div>

{{ console('html',
'<!-- parent -->
  <div class="flex content-end">
    <!-- child -->
    <div>...</div>
    <div>...</div>
    <div>...</div>
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .flex,
      .content-end;
}
') }}

<div class="padding-x-4 margin-y-4 margin-x-auto">
  <div class="padding-2 height-48 width-48 flex flex-wrap content-between bg-tint-granite-5 (expand)height-12 (expand)width-12 text-white curve-border">
    <div class="flex justify-center items-center bg-tint-granite-2">1</div>
    <div class="flex justify-center items-center bg-tint-granite-3">2</div>
    <div class="flex justify-center items-center bg-tint-granite-2">3</div>
    <div class="flex justify-center items-center bg-tint-granite-3">4</div>
    <div class="flex justify-center items-center bg-tint-granite-2">5</div>
    <div class="flex justify-center items-center bg-tint-granite-3">6</div>
  </div>
  <div class="margin-t-2 text-sm text-center">
    content-between
  </div>
</div>

{{ console('scss',
'.dummy {
    @extend
      .flex,
      .content-between;
}
') }}

<div class="padding-x-4 margin-y-4 margin-x-auto">
  <div class="padding-2 height-48 width-48 flex flex-wrap content-around bg-tint-granite-5 (expand)height-12 (expand)width-12 text-white curve-border">
    <div class="flex justify-center items-center bg-tint-granite-2">1</div>
    <div class="flex justify-center items-center bg-tint-granite-3">2</div>
    <div class="flex justify-center items-center bg-tint-granite-2">3</div>
    <div class="flex justify-center items-center bg-tint-granite-3">4</div>
    <div class="flex justify-center items-center bg-tint-granite-2">5</div>
    <div class="flex justify-center items-center bg-tint-granite-3">6</div>
  </div>
  <div class="margin-t-2 text-sm text-center">
    content-around
  </div>
</div>

{{ console('scss',
'.dummy {
    @extend
      .flex,
      .content-around;
}
') }}

<div class="padding-x-4 margin-y-4 margin-x-auto">
    <div class="padding-2 height-48 width-48 flex flex-wrap content-stretch bg-tint-granite-5 (expand)height-12 (expand)width-12 text-white curve-border">
      <div class="flex justify-center items-center bg-tint-granite-2">1</div>
      <div class="flex justify-center items-center bg-tint-granite-3">2</div>
      <div class="flex justify-center items-center bg-tint-granite-2">3</div>
      <div class="flex justify-center items-center bg-tint-granite-3">4</div>
      <div class="flex justify-center items-center bg-tint-granite-2">5</div>
      <div class="flex justify-center items-center bg-tint-granite-3">6</div>
    </div>
    <div class="margin-t-2 text-sm text-center">
      content-stretch
    </div>
  </div>

{{ console('scss',
'.dummy {
    @extend
      .flex,
      .content-stretch;
}
') }}