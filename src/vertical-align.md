---
id: vertical-align
title: Vertical Align
description: Utilities for sets the vertical alignment of an inline or table-cell box.
topic: Typography
variant: responsive
layout: default
---

> Typography

# Vertical Align

Utilities for sets the vertical alignment of an inline or table-cell box.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for verticalalign in variants.verticalalign %}{% for item in verticalalign.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| align-top | vertical-align: top |
| align-baseline | vertical-align: baseline |
| align-middle | vertical-align: middle |
| align-bottom | vertical-align: bottom |
| align-text-top | vertical-align: text-top |
| align-text-bottom | vertical-align: text-bottom |

---

## Usage

{% from "misc/console.njk" import console  %}

Set element vertical alignment to `top`.

<div class="margin-y-2 margin-x-auto width-64">
  <div class="height-32 padding-6 text-lg bg-tint-granite-5 flex justify-center items-center">
    <div>
      Text
      <img class="padding-x-2 inline-block align-top" src="https://picsum.photos/70?=1">
      Text
    </div>
  </div>
</div>

<div class="margin-y-2 margin-x-auto width-64">
  <div class="height-32 padding-6 text-lg bg-tint-granite-5 flex justify-center items-center">
    <div>
      Text
      <span class="padding-x-3 text-xl-5 inline-block align-top">
        Text
      </span>
      Text
    </div>
  </div>
</div>

{{ console('html',
'<div>
    ...
    <img class="align-top ... inline-block" src="...">
    ...
  </div>

  <div>
    ...
    <div class="align-top ... inline-block">
      ...
    </div>
    ...
  </div>
') }}

{{ console('scss',
'img {
    @extend
      .align-top,
      .inline-block;
}
') }}

Set element vertical alignment to `bottom`.

<div class="margin-y-2 margin-x-auto width-64">
  <div class="height-32 padding-6 text-lg bg-tint-granite-5 flex justify-center items-center">
    <div>
      Text
      <img class="padding-x-2 inline-block align-bottom"
           src="https://picsum.photos/70?=1">
      Text
    </div>
  </div>
</div>

<div class="margin-y-2 margin-x-auto width-64">
  <div class="height-32 padding-6 text-lg bg-tint-granite-5 flex justify-center items-center">
    <div>
      Text
      <span class="text-xl-5 inline-block align-bottom">
        Text
      </span>
      Text
    </div>
  </div>
</div>

{{ console('html',
'<div>
    ...
    <img class="align-bottom ... inline-block" src="...">
    ...
  </div>

  <div>
    ...
    <div class="align-bottom ... inline-block">
      ...
    </div>
    ...
  </div>
') }}

{{ console('scss',
'img {
    @extend
      .align-bottom,
      .inline-block;
}
') }}

Set element vertical alignment to `baseline`.

<div class="margin-y-2 margin-x-auto width-64">
  <div class="height-32 padding-6 text-lg bg-tint-granite-5 flex justify-center items-center">
    <div>
      Text
      <img class="padding-x-2 inline-block align-baseline" src="https://picsum.photos/70?=1">
      Text
    </div>
  </div>
</div>

<div class="margin-y-2 margin-x-auto width-64">
  <div class="height-32 padding-6 text-lg bg-tint-granite-5 flex justify-center items-center">
    <div>
      Text
      <span class="text-xl-5 inline-block align-baseline">
        Text
      </span>
      Text
    </div>
  </div>
</div>

{{ console('html',
'<div>
    ...
    <img class="align-baseline ... inline-block" src="...">
    ...
  </div>

  <div>
    ...
    <div class="align-baseline ... inline-block">
      ...
    </div>
    ...
  </div>
') }}

{{ console('scss',
'img {
    @extend
      .align-baseline,
      .inline-block;
}
') }}

Set element vertical alignment to `middle`.

<div class="margin-y-2 margin-x-auto width-64">
  <div class="height-32 padding-6 text-lg bg-tint-granite-5 flex justify-center items-center">
    <div>
      Text
      <img class="padding-x-2 inline-block align-middle" src="https://picsum.photos/70?=1">
      Text
    </div>
  </div>
</div>

<div class="margin-y-2 margin-x-auto width-64">
  <div class="height-32 padding-6 text-lg bg-tint-granite-5 flex justify-center items-center">
    <div>
      Text
      <span class="text-xl-5 inline-block align-middle">
        Text
      </span>
      Text
    </div>
  </div>
</div>

{{ console('html',
'<div>
    ...
    <img class="align-middle ... inline-block" src="...">
    ...
  </div>

  <div>
    ...
    <div class="align-middle ... inline-block">
      ...
    </div>
    ...
  </div>
') }}

{{ console('scss',
'img {
    @extend
      .align-middle,
      .inline-block;
}
') }}