---
id: pointer-events
title: Pointer Events
description: Utilities for specifies whether an element is the target of mouse events.
topic: Interactivity
layout: default
---

> Interactivity

# Pointer Events

Utilities for specifies whether an element is the target of mouse events.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for pointerevents in variants.pointerevents %}{% for item in pointerevents.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| pointer-events-none | pointer-events: none |
| pointer-events-auto | pointer-events: auto |

---

## Usage

{% from "misc/console.njk" import console %}

{{ console('html',
'<div class="pointer-events-none">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .pointer-events-none;
}
') }}