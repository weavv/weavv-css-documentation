---
id: screen-reader
title: Screen Reader
description: Utilities for controls whether an element is visually hidden but still accessible to screen readers.
topic: Accessibility
layout: default
---

> Accessibility

# Screen Reader

Utilities for controls whether an element is visually hidden but still accessible to screen readers.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for screenreader in variants.screenreader %}{% for item in screenreader.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| screen-reader-on | position: absolute; <br> width: 1px; <br> height: 1px; <br> padding: 0; <br> margin: -1px; <br> overflow: hidden; <br> white-space: nowrap; <br> border-width: 0 |
| screen-reader-off | position: static; <br> width: auto; <br> height: auto; <br> padding: 0; <br> margin: 0; <br> overflow: visible; <br> clip: auto; <br> white-space: normal |

---

## Usage

{% from "misc/console.njk" import console %}

Set an element visible to screen reader.

{{ console('html',
'<div class="screen-reader-on">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .screen-reader-on;
}
') }}

Set an element hidden from screen reader.

{{ console('html',
'<div class="screen-reader-off">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .screen-reader-off;
}
') }}
