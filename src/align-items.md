---
id: align-item
title: Align Items
description: Utilities for sets flex items position along a container's cross axis.
topic: Flexbox
relate: flex, flex-gap, flex-direction, flex-grow, flex-shrink, flex-wrap, align-content, align-self
variant: responsive
layout: default
---

> Flexbox

# Align Items

Utilities for sets flex items position along a container's cross axis.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for alignitems in variants.alignitems %}{% for item in alignitems.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| items-baseline  | align-items: baseline |
| items-start | align-items: flex-start |
| items-center | align-items: center |
| items-end | align-items: flex-end |
| items-stretch | align-items: stretch |

---

## Usage

{% from "misc/console.njk" import console %}

<div class="padding-x-4 margin-y-4 margin-x-auto">
  <div class="padding-2 height-48 width-48 flex flex-wrap items-baseline bg-tint-granite-5 (expand)height-12 (expand)width-12 text-white curve-border">
    <div class="flex justify-center items-center bg-tint-granite-2">1</div>
    <div class="flex justify-center items-center bg-tint-granite-3">2</div>
  </div>
  <div class="margin-t-2 text-sm text-center">
    items-baseline
  </div>
</div>

{{ console('html',
'<!-- parent -->
  <div class="flex items-baseline">
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
      .items-baseline;
') }}

<div class="padding-x-4 margin-y-4 margin-x-auto">
  <div class="padding-2 height-48 width-48 flex flex-wrap items-start bg-tint-granite-5 (expand)height-12 (expand)width-12 text-white curve-border">
    <div class="flex justify-center items-center bg-tint-granite-2">1</div>
    <div class="flex justify-center items-center bg-tint-granite-3">2</div>
  </div>
  <div class="margin-t-2 text-sm text-center">
    items-start
  </div>
</div>

{{ console('html',
'<!-- parent -->
  <div class="flex items-start">
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
      .items-start;
') }}

<div class="padding-x-4 margin-y-4 margin-x-auto">
  <div class="padding-2 height-48 width-48 flex flex-wrap items-center bg-tint-granite-5 (expand)height-12 (expand)width-12 text-white curve-border">
    <div class="flex justify-center items-center bg-tint-granite-2">1</div>
    <div class="flex justify-center items-center bg-tint-granite-3">2</div>
  </div>
  <div class="margin-t-2 text-sm text-center">
    items-center
  </div>
</div>

{{ console('html',
'<!-- parent -->
  <div class="flex items-center">
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
      .items-center;
}
') }}

<div class="padding-x-4 margin-y-4 margin-x-auto">
  <div class="padding-2 height-48 width-48 flex flex-wrap items-end bg-tint-granite-5 (expand)height-12 (expand)width-12 text-white curve-border">
    <div class="flex justify-center items-center bg-tint-granite-2">1</div>
    <div class="flex justify-center items-center bg-tint-granite-3">2</div>
  </div>
  <div class="margin-t-2 text-sm text-center">
    items-end
  </div>
</div>

{{ console('html',
'<!-- parent -->
  <div class="flex items-end">
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
      .items-end;
}
') }}

<div class="padding-x-4 margin-y-4 margin-x-auto">
  <div class="padding-2 height-48 width-48 flex flex-wrap items-stretch bg-tint-granite-5 (expand)height-12 (expand)width-12 text-white curve-border">
    <div class="flex justify-center items-center bg-tint-granite-2">1</div>
    <div class="flex justify-center items-center bg-tint-granite-3">2</div>
  </div>
  <div class="margin-t-2 text-sm text-center">
    items-stretch
  </div>
</div>

{{ console('html',
'<!-- parent -->
  <div class="flex items-stretch">
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
      .items-stretch;
}
') }}

