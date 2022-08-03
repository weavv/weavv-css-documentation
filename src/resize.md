---
id: resize
title: Resize
description: Utilities for sets whether an element is resizable, along with direction.
topic: Interactivity
variant: responsive
layout: default
---

> Interactivity

# Resize

Utilities for sets whether an element is resizable, along with direction.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for resize in variants.resize %}{% for item in resize.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| resize | resize: both |
| resize-none | resize: none |
| resize-x | resize: horizontal |
| resize-y | resize: vertical |

---

## Usage

{% from "misc/console.njk" import console %}

Resize both `x` and `y` directions.

<div class="padding-x-4 margin-y-4 margin-x-auto width-56">
  <div class="height-32 width-64 border border-tint-granie-5 padding-4 resize overflow-auto curve-border">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aperiam, ipsum aspernatur pariatur rerum doloremque porro quibusdam, vitae doloribus eaque corporis harum asperiores distinctio quam veniam nobis odit nisi inventore.
  </div>
</div>

{{ console('html',
'<div class="resize ... overflow-auto">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .resize,
      .overflow-auto;
}
') }}

Resize both `x` only directions.

<div class="padding-x-4 margin-y-4 margin-x-auto width-56">
  <div class="height-32 width-64 border border-tint-granite-5 padding-4 resize-x overflow-auto curve-border">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aperiam, ipsum aspernatur pariatur rerum doloremque porro quibusdam, vitae doloribus eaque corporis harum asperiores distinctio quam veniam nobis odit nisi inventore.
  </div>
</div>

{{ console('html',
'<div class="resize-x ... overflow-auto">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .resize-x,
      .overflow-auto;
}
') }}

Resize both `y` only directions.

<div class="padding-x-4 margin-y-4 margin-x-auto width-56">
  <div class="height-32 width-64 border border-tint-granite-5 padding-4 resize-y overflow-auto curve-border">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aperiam, ipsum aspernatur pariatur rerum doloremque porro quibusdam, vitae doloribus eaque corporis harum asperiores distinctio quam veniam nobis odit nisi inventore.
  </div>
</div>

{{ console('html',
'<div class="resize-y ... overflow-auto">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    .resize-y,
    .overflow-auto;
}
') }}
