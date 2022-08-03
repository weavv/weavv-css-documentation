---
id: font-style
title: Font Style
description: Utilities for sets the style of the font.
topic: Typography
layout: default
---

> Typography

# Font Style

Utilities for sets the style of the font.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for fontstyle in variants.fontstyle %}{% for item in fontstyle.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> | |
|:--|:--|:-:|
| text-italic | font-style: italic | <div class="text-lg text-italic">Text</div> |
| text-not-italic | font-style: normal | <div class="text-lg text-not-italic">Text</div> |

---

## Usage

{% from "misc/console.njk" import console %}

{{ console('html',
'<div class="text-italic">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .text-italic;
}
') }}

