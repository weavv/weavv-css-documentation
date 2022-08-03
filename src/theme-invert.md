---
id: theme-invert
title: Theme Invert
description: Utilities for sets page theme either dark or light by applying force invert.
topic: Theme
layout: default
---

> Theme

# Theme Invert

Utilities for sets page theme either dark or light by applying force invert with color correction.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for themeinvert in variants.themeinvert %}{% for item in themeinvert.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white (dark)text-charcoal-1 bg-gray-7 (dark)bg-gray-6 font-semibold curve-border-full">attribute</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-1 font-semibold curve-border-full">css</span> |
|:--|:--|
| theme="invert" | html[theme="invert"], img[theme="invert"], [theme="invert"] { filter: invert(1) hue-rotate(180deg); |

---

## Usage

{% from "misc/console.njk" import console %}

The basic set up for `theme="invert"` attribute is with the `<html>` tag. This allows the utility to attenuate colors of the page theme but not changing any color of it.

{{ console('html',
'<html theme="invert">
  ...
</html>
') }}

But, the images and some other elements will look inverted. To compensate that, apply the same `theme="invert"` attribute to all affected elements, like in the example.

{{ console('html',
'<html theme="invert">
  ...
    <!-- e.g. To compensate inverted image -->
    <img theme="invert">
    <!-- e.g. To compensate other inverted elements -->
    <div theme="invert"></div>
    <span theme="invert"></span>
  ...
</html>
') }}

---

### Simulate

To simulate `theme="invert"` on a Chrome-based web browser at the developer tools, by pressing `CTRL+SHIFT+I` and find your way to enable the `Rendering` options in the picture below. You 'll find the `Emulate CSS media feature prefers-color-scheme` menu.

<div class="margin-x-4 padding-y-4">
  <img
    theme="auto"
    class="width-full height-full object-fit object-center curve-border-lg"
    src="/images/content/simulate_theme.jpg"
    loading="lazy"
    alt="Chrome prefers-color-scheme simulator"
  >
</div>

