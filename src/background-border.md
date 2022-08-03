---
id: background-border
title: Background Border
description: Utilities for sets background border to an element with flexible control over the border spacing, size, angle and length.
topic: Background
relate: background-attachment, background-blend, background-color, background-gradient, background-opacity, background-position, background-repeat, background-size
layout: default
---

> Backgrounds

# Background Border

Utilities for sets background border to an element with flexible control over the border spacing, size, angle and length.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for backgroundborder in variants.backgroundborder %}{% for item in backgroundborder.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| bg-border `{length}` `{size}` `{space}` `{angle}` | background-image: repeating-linear-gradient(var(--bg-border-angle-left), currentColor, currentColor var(--bg-border-length), transparent var(--bg-border-length), transparent var(--bg-border-space), currentColor var(--bg-border-space)), repeating-linear-gradient(var(--bg-border-angle-top), currentColor, currentColor var(--bg-border-length), transparent var(--bg-border-length), transparent var(--bg-border-space), currentColor var(--bg-border-space)), repeating-linear-gradient(var(--bg-border-angle-right), currentColor, currentColor var(--bg-border-length), transparent var(--bg-border-length), transparent var(--bg-border-space), currentColor var(--bg-border-space)), repeating-linear-gradient(var(--bg-border-angle-bottom), currentColor, currentColor var(--bg-border-length), transparent var(--bg-border-length), transparent var(--bg-border-space), currentColor var(--bg-border-space)); <br><br> background-size: var(--bg-border-width) 100%, 100% var(--bg-border-width), var(--bg-border-width) 100%, 100% var(--bg-border-width); <br><br> background-position: 0 0, 0 0, 100% 0, 0 100%; <br> background-repeat: no-repeat |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| length-10 | --bg-border-length: 10 |
| length-20 | --bg-border-length: 20 |
| length-30 | --bg-border-length: 30 |
| length-40 | --bg-border-length: 40 |
| length-50 | --bg-border-length: 50 |
| length-60 | --bg-border-length: 60 |
| length-70 | --bg-border-length: 70 |
| length-80 | --bg-border-length: 80 |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| size-6 | --bg-border-size: 6px |
| size-9 | --bg-border-size: 9px |
| size-12 | --bg-border-size: 12px |
| size-14 | --bg-border-size: 14px |
| size-18 | --bg-border-size: 18px |
| size-24 | --bg-border-size: 24px |
| size-32 | --bg-border-size: 32px |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| space-10 | --bg-border-space: 10px |
| space-20 | --bg-border-space: 20px |
| space-30 | --bg-border-space: 30px |
| space-40 | --bg-border-space: 40px |
| space-50 | --bg-border-space: 50px |
| space-60 | --bg-border-space: 60px |
| space-70 | --bg-border-space: 70px |
| space-80 | --bg-border-space: 80px |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| angle-45 | --bg-border-angle: 45deg |
| -angle-45 | --bg-border-angle: -45deg |
| angle-60 | --bg-border-angle: 60deg |
| -angle-60 | --bg-border-angle: -60deg |

---

## Usage

{% from "misc/console.njk" import console %}

Set basic background border to an element.

<div class="padding-x-4 margin-y-4 margin-x-auto width-56">
  <div class="height-32 width-56 bg-border length-20 size-9 space-30 angle-45"></div>
</div>

{{ console('html',
'<div class="bg-border length-20 size-9 space-30 angle-45 ... height-32 width-56">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-border,
      .length-20,
      .size-9,
      .space-30,
      .angle-45,
      .height-32,
      .width-56";
}
') }}

Set background border with color by using `text-{color}` utility (See [Text Color](/text-color/)).

<div class="padding-x-4 margin-y-4 margin-x-auto width-56">
  <div class="height-32 width-56 bg-border length-20 size-9 space-30 angle-45 text-shade-amber-1"></div>

{{ console('html',
'<div class="bg-border length-20 size-9 space-30 angle-45 text-amber-4 ... height-32 width-56">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-border,
      .length-20,
      .size-9,
      .space-30,
      .angle-45,
      .text-amber-4,
      .height-32,
      .width-56;
}
') }}

Set background border solid.

<div class="padding-x-4 margin-y-4 margin-x-auto width-56">
  <div class="height-32 width-56 bg-border length-10 size-6 space-10 angle-45"></div>
</div>

{{ console('html',
'<div class="bg-border length-10 size-6 space-10 angle-45 text-amber-4 ... height-32 width-56">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-border,
      .length-10,
      .size-6,
      .space-10,
      .angle-45,
      .text-amber-4,
      .height-32,
      .width-56;
}
') }}

Set background border solid and thicker.

<div class="padding-x-4 margin-y-4 margin-x-auto width-56">
  <div class="height-32 width-56 bg-border length-10 size-32 space-10 angle-45"></div>
</div>

{{ console('html',
'<div class="bg-border length-10 size-32 space-10 angle-45 ... height-32 width-56">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-border,
      .length-10,
      .size-32,
      .space-10,
      .angle-45,
      .height-32,
      .width-56;
}
') }}
