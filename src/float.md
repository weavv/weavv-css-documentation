---
id: float
title: Float
description: Utilities for sets an element's placement to a side of its container and allows content to wrap around it.
topic: Layouts
variant: responsive
layout: default
---

> Layouts

# Float

Utilities for sets an element's placement to a side of its container and allows content to wrap around it.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for float in variants.float %}{% for item in float.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| float-right | float: right |
| float-left | float: left |
| float-none | float: none |
| clearfix | &::after { <br> content: ""; <br> display: table; <br> clear: both; } |

---

## Usage

{% from "misc/console.njk" import console %}

Set image to `float-left`.

<div class="padding-4 margin-y-4 margin-x-auto">
  <div class="max-width-lg flex justify-center items-center">
    <div class="text-shade-granite-1 text-sm">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis ea, architecto doloremque exercitationem sapiente magnam, nostrum accusantium error eius minus, earum provident.
      <img class="margin-4 width-32 height-32 object-cover object-center curve-border-lg shadow float-left" src="https://picsum.photos/256" alt="">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos minus qui assumenda mollitia, quaerat enim soluta et. Temporibus enim aspernatur eveniet, corporis delectus architecto ab repellat corrupti vitae natus culpa?
    </div>
  </div>
</div>

{{ console('html',
'<div>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    <img class="float-left" src="...">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .float-left;
}
') }}

Set image to `float-right`.

<div class="padding-4 margin-y-4 margin-x-auto">
  <div class="max-width-lg flex justify-center items-center">
    <div class="text-shade-granite-1 text-sm">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis ea, architecto doloremque exercitationem sapiente magnam, nostrum accusantium error eius minus, earum provident.
      <img class="margin-4 width-32 height-32 object-cover object-center curve-border-lg shadow float-right" src="https://picsum.photos/256" alt="">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos minus qui assumenda mollitia, quaerat enim soluta et. Temporibus enim aspernatur eveniet, corporis delectus architecto ab repellat corrupti vitae natus culpa?
    </div>
  </div>
</div>

{{ console('html',
'<div>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    <img class="float-right" src="...">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .float-right;
}
') }}