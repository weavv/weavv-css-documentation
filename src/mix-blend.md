---
id: mix-blend
title: Mix Blend
description: Utilities for sets how an element's content should blend with its direct parent background.
topic: Effects
layout: default
---

> Effects

# Mix Blend

Utilities for sets how an element's content should blend with its direct parent background.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for mixblend in variants.mixblend %}{% for item in mixblend.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| blend-normal | mix-blend-mode: normal |
| blend-multiply | mix-blend-mode: multiply |
| blend-screen | mix-blend-mode: screen |
| blend-overlay | mix-blend-mode: overlay |
| blend-darken | mix-blend-mode: darken |
| blend-lighten | mix-blend-mode: lighten |
| blend-color | mix-blend-mode: color |
| blend-color-dodge | mix-blend-mode: color-dodge |
| blend-color-burn | mix-blend-mode: color-burn |
| blend-hard-light | mix-blend-mode: hard-light |
| blend-soft-light | mix-blend-mode: soft-light |
| blend-difference | mix-blend-mode: difference |
| blend-exclusion | mix-blend-mode: exclusion |
| blend-hue | mix-blend-mode: hue |
| blend-saturation | mix-blend-mode: saturation |
| blend-luminosity | mix-blend-mode: luminosity |

---

## Usage

{% from "misc/console.njk" import console %}

Mix blend with background colors.

<div class="padding-4 margin-y-2 margin-x-auto width-64">
  <div class="width-48 height-32 bg-tint-amber-4 blend-darken"></div>
  <div class="-margin-t-24 margin-l-10 height-32 bg-tint-lime-4 blend-darken"></div>
</div>

{{ console('html',
'<div class="...">
    <div class="blend-darken bg-tint-amber-4 ... width-48 height-32"></div>
    <div class="blend-screen bg-tint-lime-4... -margin-t-24 margin-l-10 height-32"></div>
  </div>
') }}

{{ console('scss',
'.dummy-blend-one {
    @extend
      .blend-darken,
      .bg-tint-amber-4,
      .width-48,
      .height-32;
}
.dummy-blend-two {
  @extend
    .blend-screen,
    .bg-tint-lime-4,
    .-margin-t-24,
    .margin-l-10,
    .height-32;
}
') }}

Mix blend with images.

<div class="padding-4 margin-y-2 margin-x-auto width-64">
  <img
    class="width-48 height-32 bg-tint-granite-4 blend-darken"
    src="https://picsum.photos/256?=1"
  >
  <img
    class="-margin-t-24 margin-l-10 width-48 height-32 bg-tint-granite-4 blend-darken"
    src="https://picsum.photos/256?=2"
  >
</div>

{{ console('html',
'<div class="...">
    <img class="blend-darken ... width-48 height-32" src="...">
    <img class="blend-screen ... -margin-t-24 margin-l-10 width-48 height-32" src="...">
  </div>
') }}

{{ console('scss',
'.dummy-blend-one {
    @extend
      .blend-darken,
      .width-48,
      .height-32;
}
.dummy-blend-two {
    @extend
      .blend-screen,
      .-margin-t-24,
      .margin-l-10,
      .width-48,
      .height-32;
}
') }}

Mix blend with typography.

<div class="padding-4 margin-y-2 margin-x-auto width-64">
  <div class="relative">
    <div class="absolute top-0 left-9 text-tint-amber-4 text-xl-8 font-extrabold blend-darken">
      TEXT
    </div>
    <div class="absolute top-6 left-6 text-tint-lime-4 text-xl-8 font-extrabold blend-screen">
      TEXT
    </div>
  </div>
</div>

{{ console('html',
'<div class="relative">
    <div class="blend-darken ... absolute top-0 left-0">
      ...
    </div>
    <div class="blend-screen ... absolute top-6 left-6">
      ...
    </div>
  </div>
') }}


