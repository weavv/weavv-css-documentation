---
id: background-attachment
title: Background Attachment
description: Utilities for sets behaviour of background images when scrolling.
topic: Backgrounds
relate: background-blend, background-border, background-color, background-gradient, background-opacity, background-position, background-repeat, background-size
layout: default
---

> Backgrounds

# Background Attachment

Utilities for sets behaviour of background images when scrolling.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for backgroundattachment in variants.backgroundattachment %}{% for item in backgroundattachment.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| bg-fixed | background-attachment: fixed |
| bg-local | background-attachment: local |
| bg-scroll | background-attachment: scroll |

---

## Usage

{% from "misc/console.njk" import console %}

Set fixed background image with HTML inline attribute `style="..."` and a CSS property `background-image: url(...)` to an element.

<div class="margin-y-2 margin-x-auto max-width-sm bg-tint-lava-5">
  <div class="height-32 width-full overflow-y-scroll">
    <div
      class="height-64 width-64 bg-fixed"
      style="background-image:url(https://picsum.photos/300?=1)">
    </div>
  </div>
</div>

{{ console('html',
'<div class="bg-fixed ... width-56 height-24 ... overflow-y-scroll" style="background-image:url(...)">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-fixed,
      .width-56,
      .height-24,
      .overflow-y-scroll;
}
') }}

Set a scrollable background image in the browser viewport and the element container.

<div class="margin-y-2 margin-x-auto max-width-sm bg-tint-lava-5">
  <div class="height-32 width-full overflow-y-scroll">
    <div
      class="height-64 width-64 bg-local"
      style="background-image:url(https://picsum.photos/300?=1)">
    </div>
  </div>
</div>

{{ console('html',
'<div class="bg-local ... width-56 height-24 ... overflow-y-scroll" style="background-image:url(...)">
    ...
  </div>
') }}

{{ console('html',
'.dummy {
    @extend
      .bg-local,
      .width-56,
      .height-24,
      .overflow-y-scroll;
}
') }}

Set a scrollable background image in the browser viewport.

<div class="margin-y-2 margin-x-auto max-width-sm bg-tint-lava-5">
  <div class="height-32 width-full overflow-y-scroll">
    <div
      class="height-64 width-64 bg-scroll"
      style="background-image:url(https://picsum.photos/300?=1)">
    </div>
  </div>
</div>

{{ console('html',
'<div class="bg-scroll ... width-56 height-24 ... overflow-y-scroll" style="background-image:url(...)">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-scroll,
      .width-56,
      .height-24,
      .overflow-y-scroll;
}
') }}

