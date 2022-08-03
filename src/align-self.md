---
id: align-self
title: Align Self
description: Utilities for controls how an individual flex item is positioned along container's cross axis.
topic: Flexbox
relate: flex, flex-gap, flex-direction, flex-grow, flex-shrink, flex-wrap, align-content, align-items
variant: responsive
layout: default
---

> Flexbox

# Align Self

Utilities for controls how an individual flex item is positioned along container's cross axis.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for alignself in variants.alignself %}{% for item in alignself.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| self-auto | align-self: auto |
| self-baseline  | align-self: baseline |
| self-start | align-self: flex-start |
| self-center | align-self: center |
| self-end | align-self: flex-end |
| self-stretch | align-self: stretch |

---

## Usage

{% from "misc/console.njk" import console %}

<div class="padding-x-4 margin-y-4 margin-x-auto">
  <div class="padding-2 height-48 width-32 flex text-white bg-tint-granite-5 (expand)padding-2 (expand)width-10 curve-border">
    <div class="flex self-auto justify-center items-center bg-tint-granite-2">1</div>
  </div>
  <div class="margin-t-2 text-sm text-center">
    self-auto
  </div>
</div>

{{ console('html',
'<!-- parent -->
<div class="flex">
    <-- child -->
    <div class="self-auto">
      ...
    </div>
  </div>
') }}

{{ console('scss',
'.dummy-parent {
    @extend
      .flex;
}
.dummy-child {
    @extend
      .self-auto;
}
') }}

<div class="padding-x-4 margin-y-4 margin-x-auto">
  <div class="padding-2 height-48 width-32 flex text-white bg-tint-granite-5 (expand)padding-2 (expand)width-10 curve-border">
    <div class="flex self-baseline justify-center items-center bg-tint-granite-2">1</div>
  </div>
  <div class="margin-t-2 text-sm text-center">
    self-baseline
  </div>
</div>

{{ console('html',
'<div class="flex">
    <div class="self-baseline">
      ...
    </div>
  </div>
') }}

{{ console('scss',
'.dummy-parent {
    @extend
      .flex;
}
.dummy-child {
    @extend
      .self-baseline;
}
') }}

<div class="padding-x-4 margin-y-4 margin-x-auto">
  <div class="padding-2 height-48 width-32 flex text-white bg-tint-granite-5 (expand)padding-2 (expand)width-10 curve-border">
    <div class="flex self-start justify-center items-center bg-tint-granite-2">1</div>
  </div>
  <div class="margin-t-2 text-sm text-center">
    self-auto
  </div>
</div>

{{ console('html',
'<div class="flex">
    <div class="self-start">
      ...
    </div>
  </div>
') }}

{{ console('scss',
'.dummy-parent {
    @extend
      .flex;
}
.dummy-child {
    @extend
      .self-start;
}
') }}

<div class="padding-x-4 margin-y-4 margin-x-auto">
  <div class="padding-2 height-48 width-32 flex text-white bg-tint-granite-5 (expand)padding-2 (expand)width-10 curve-border">
    <div class="flex self-center justify-center items-center bg-tint-granite-2">1</div>
  </div>
  <div class="margin-t-2 text-sm text-center">
    self-auto
  </div>
</div>

{{ console('html',
'<div class="flex">
    <div class="self-center">
      ...
    </div>
  </div>
') }}

{{ console('scss',
'.dummy-parent {
    @extend
      .flex;
}
.dummy-child {
    @extend
      .self-center;
}
') }}

<div class="padding-x-4 margin-y-4 margin-x-auto">
  <div class="padding-2 height-48 width-32 flex text-white bg-tint-granite-5 (expand)padding-2 (expand)width-10 curve-border">
    <div class="flex self-end justify-center items-center bg-tint-granite-2">1</div>
  </div>
  <div class="margin-t-2 text-sm text-center">
    self-auto
  </div>
</div>

{{ console('html',
'<div class="flex">
    <div class="self-end">
      ...
    </div>
  </div>
') }}

{{ console('scss',
'.dummy-parent {
    @extend
      .flex;
}
.dummy-child {
    @extend
      .self-end;
}
') }}

<div class="padding-x-4 margin-y-4 margin-x-auto">
  <div class="padding-2 height-48 width-32 flex text-white bg-tint-granite-5 (expand)padding-2 (expand)width-10 curve-border">
    <div class="flex self-stretch justify-center items-center bg-tint-granite-2">1</div>
  </div>
  <div class="margin-t-2 text-sm text-center">
    self-auto
  </div>
</div>

{{ console('html',
'<div class="flex">
    <div class="self-stretch">
      ...
    </div>
  </div>
') }}

{{ console('scss',
'.dummy-parent {
    @extend
      .flex;
}
.dummy-child {
    @extend
      .self-stretch;
}
') }}