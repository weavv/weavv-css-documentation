---
id: text-align
title: Text Align
description: Utilities for sets the alignment of text.
topic: Typography
variant: responsive
layout: default
---

> Typography

# Text Align

Utilities for sets the alignment of text.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for textalign in variants.textalign %}{% for item in textalign.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| text-left | text-align: left |
| text-center | text-align: center |
| text-right | text-align: right |
| text-justify | text-align: justify |

---

## Usage

{% from "misc/console.njk" import console %}

Set text align to `left`.

<div class="margin-y-2 margin-x-auto width-64">
  <div class="width-56 height-32 padding-4 bg-tint-granite-5">
    <div class="text-xl-4 text-left">
      Text
    </div>
  </div>
</div>

{{ console('html',
'<div class="text-left">
    ...
  </div>
')}}

{{ console('scss',
'.dummy {
    @extend
      .text-left;
}
')}}

Set text align to `right`.

<div class="margin-y-2 margin-x-auto width-64">
  <div class="width-56 height-32 padding-4 bg-tint-granite-5">
    <div class="text-xl-4 text-right">
      Text
    </div>
  </div>
</div>

{{ console('html',
'<div class="text-right">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .text-right;
}
') }}

Set text align to `center`.

<div class="margin-y-2 margin-x-auto width-64">
  <div class="width-56 height-32 padding-4 bg-tint-granite-5">
    <div class="text-xl-4 text-center">
      Text
    </div>
  </div>
</div>

{{ console('html',
'<div class="text-center">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .text-center;
}
') }}

Set text align to `justify`.

<div class="margin-y-2 margin-x-auto width-64">
  <div class="width-56 height-32 padding-4 bg-tint-granite-5">
    <div class="text-xl-2 text-justify">
      Text Text Text Text Text Text Text
    </div>
  </div>
</div>

{{ console('html',
'<div class="text-justify">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .text-justify;
}
') }}

