---
id: appearance
title: Appearance
description: Utilities for disables native styling based on the native browser theme.
topic: Interactivity
layout: default
---

> Interactivity

# Appearance

Utilities for disables native styling based on the native browser theme.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for appearance in variants.appearance %}{% for item in appearance.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| appearance-none | appearance: none |

---

## Usage

{% from "misc/console.njk" import console %}

{{ console('html',
'<div class="appearance-none">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .appearance-none;
}
') }}

