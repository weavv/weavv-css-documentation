---
id: scroll-smooth
title: Scroll Smooth
description: Utilities for sets smooth animation of scroll anchored position within a scrolling box.
topic: Interactivity
layout: default
---

> Interactivity

# Scroll Smooth

Utilities for sets smooth animation of scroll anchored position within a scrolling box.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for scrollbehaviour in variants.scrollbehaviour %}{% for item in scrollbehaviour.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| scroll-smooth | scroll-behavior: smooth |

---

## Usage

{% from "misc/console.njk" import console %}

{{ console('html',
'<html class="scroll-smooth">
    ...
  </html>
') }}

{{ console('scss',
'html {
    @extend
      .scroll-smooth;
}
') }}

