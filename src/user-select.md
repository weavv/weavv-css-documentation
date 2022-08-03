---
id: user-select
title: User Select
description: Utilities for controls whether the user can select text.
topic: Interactivity
variant: responsive
layout: default
---

> Interactivity

# User Select

Utilities for controls whether the user can select text.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for userselect in variants.userselect %}{% for item in userselect.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| select-all | user-select: all |
| select-auto | user-select: auto |
| select-none | user-select: none |
| select-text | user-select: text |

---

## Usage

{% from "misc/console.njk" import console %}

{{ console('html',
'<div class="height-32 width-65 ... select-none">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .height-32,
      .width-65,
      .select-none;
}
') }}

