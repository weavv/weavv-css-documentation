---
id: pseudo-class-variant
title: Pseudo-Class Variants
description: Using utilities to add hover, group-hover, group-focus, group-focus, focus, active, disabled, visited, checked and so on to style an element.
topic: Core Concepts
layout: default
---

{% from "misc/console.njk" import console %}

# Pseudo-Class Variants

Using utilities to add CSS pseudo-class to style an element:

- [responsive](/pseudo-class-variants/#responsive)
- [dark-mode](/pseudo-class-variants/#dark-mode), [light-mode](/pseudo-class-variants/#light-mode)
- [reduce-motion](/pseudo-class-variants/#reduce-motion)
- [selection-hover](/pseudo-class-variants/#selection-hover)
- [expand](/pseudo-class-variants/#expand)
- [first-of-type, last-of-type](/pseudo-class-variants/#first-last)
- [first-letter](/pseudo-class-variants/#first-letter),
- [portrait](/pseudo-class-variants/#portrait), [landscape](/pseudo-class-variants/#landscape)
- [hover](/pseudo-class-variants/#hover), [group-hover](/pseudo-class-variants/#group-hover)
- [focus](/pseudo-class-variants/#focus), [group-focus](/pseudo-class-variants/#group-focus), [focus-visible](/pseudo-class-variants/#focus-visible), [focus-within](/pseudo-class-variants/#focus-within)
- [active](/pseudo-class-variants/#active)
- [visited](/pseudo-class-variants/#visited)
- [checked](/pseudo-class-variants/#checked)
- [disabled](/pseudo-class-variants/#disabled)

## Responsive

Add the one of these prefixes `(xs)`, `(sm)`, `(md)`, `(lg)`, `(1k)`, `(2k)`, `(4k)`, `(8k)` to a utility to enable responsive response to different screen sizes.

{{ console('html',
'<!-- Example -->
<div class="(xs)text-lg (2k)text-xl-4">
    ...
  </div>
') }}

{{ console('scss',
'.example {
    @extend
      .\\(xs\\)text-lg,
      .\\(2k\\)text-xl-4;
}
') }}

## Hover

Add the `(hover)` prefix to a utility to enable on-hover.

{{ console('html',
'<!-- Example -->
<div class="text-shade-granite-1 (hover)text-white bg-white (hover)bg-tint-granite-5">
    ...
  </div>
') }}

{{ console('scss',
'.example {
    @extend
      .text-shade-granite-1,
      .\\(hover\\)text-white,
      .bg-white,
      .\\(hover\\)bg-tint-granite-5;
}
') }}

## Focus

Add the `(focus)` prefix to a utility to enable on-focus.

{{ console('html',
'<!-- Example -->
<input class="bg-tint-granite-2 (focus)bg-tint-granite-5 border-transparent (focus)border-tint-granite-5" placeholder="Focus me!">
') }}

{{ console('scss',
'.example {
    @extend
      .bg-tint-granite-2,
      .\\(focus\\)bg-tint-granite-5,
      .border-transparent,
      .\\(focus\\)border-tint-granite-5;
}
') }}

## Focus-Within

Add the `(focus-within)` prefix to a utility to enable on-focused for child element.

{{ console('html',
'<!-- Example -->
<div class="(focus-within)text-shade-lava-1 (focus-within)bg-tint-lava-5">
    Title: <input placeholder="Focus me!">
  </div>
') }}

{{ console('scss',
'.example {
    @extend
      .\\(focus-within\\)text-shade-lava-1,
      .\\(focus-within\\)bg-tint-lava-5;
}
') }}

## Focus-Visible

Add the `(focus-visible)` prefix to a utility to enable on-focused for child element.

{{ console('html',
'<!-- Example -->
<div class="bg-tint-granite-5 (focus-visible)bg-tint-granite-2">
    ...
  </div>
') }}

{{ console('scss',
'.example {
    @extend
      .bg-tint-granite-5,
      .\\(focus-visible\\)bg-tint-granite-2;
}
') }}

## Active

Add the `(active)` prefix to a utility to enable on-active.

{{ console('html',
'<!-- Example -->
<button class="bg-tint-granite-5 (active)bg-tint-granite-2 text-white">
    ...
  </button>
') }}

{{ console('scss',
'.example {
    @extend
      .bg-tint-granite-5,
      .\\(active\\)bg-tint-granite-2,
      .text-white;
}
') }}

## Visited

Add the `(visited)` prefix to a utility to enable on-visited.

{{ console('html',
'<!-- Example -->
<a class="text-shade-granite-1 (visited)text-shade-lava-1 (visited)text-underline"
   href="...">
    ...
  </a>
') }}

{{ console('scss',
'.example {
    @extend
      .text-shade-granite-1,
      .\\(visited\\)text-shade-lava-1,
      .\\(visited\\)text-underline;
}
') }}

## Checked

Add the `(checked)` prefix to a utility to enable on-checked.

{{ console('html',
'<!-- Example -->
<button class="(checked)text-white (checked)bg-tint-granite-5 (checked)text-underline">
    ...
  </button>
') }}

{{ console('scss',
'.example {
    @extend
      .\\(checked\\)text-white,
      .\\(checked\\)bg-tint-granite-5,
      .\\(checked\\)text-underline;
}
') }}

## Disabled

Add the `(disabled)` prefix to a utility to enable on-disabled.

{{ console('html',
'<!-- Example -->
<button class="(disabled)text-shade-granite-1 (disabled)bg-tint-granite-5">
    ...
  </button>
') }}

{{ console('scss',
'.example {
    @extend
      .\\(disabled\\)text-shade-granite-1,
      .\\(disabled\\)bg-tint-granite-5;
}
') }}

---

## Group

## Group-Hover

Add `(group)` class to the parent element and add the `(group-hover)` prefix to a utility on the child element to enable group-hover.

{{ console('html',
'<!-- Example -->
<div class="(group) bg-tint-granite-5 (hover)bg-tint-granite-1">
    <div class="(group-hover)text-white">
      ...
    </div>
  </div>
') }}

{{ console('scss',
'.example {
    @extend
      .\\(group\\),
      .bg-tint-granite-5,
      .\\(hover\\)bg-tint-granite-1;
}
') }}

## Group-Focus

Add `(group)` class to the parent element and add the `(group-focus)` prefix to a utility on the child element to enable group-focus.

{{ console('html',
'<!-- Example -->
<div class="(group) bg-tint-granite-5 (focus)bg-tint-granite-1">
    <div class="(group-focus)text-white">
      ...
    </div>
  </div>
') }}

{{ console('scss',
'.example {
    @extend
      .\\(group\\),
      .bg-tint-granite-5.
      .\\(focus\\)bg-tint-granite-1;
}
') }}

---

## Selection-Hover

Add `(selection-hover)` prefix to `filter` utilities with set up parent and child elements. Deselected elements are affected by the `filter` configurations.

{{ console('html',
'<!-- Example -->
<!-- parent -->
<div class="(selection-hover)filter saturate-0 blur-10 ... smooth-200">
    <!-- child -->
    <div>
      <div>
        ...
      </div>
    </div>
    <!-- child -->
    <div>
      <div>
        ...
      </div>
    </div>
  </div>
') }}

{{ console('scss',
'.example {
    @extend
      .\\(selection-hover\\)filter,
      .saturate-0,
      .blur-10,
      .smooth-200;
}
') }}

Default selected **Filters** utilities for `(selection-hover)` variant.

- [Blur](/filter-blur/)
- [Brightness](/filter-brightness/)
- [Contrast](/filter-contrast/)
- [Drop Shadow](/filter-drop-shadow/)
- [Saturate](/filter-saturate/)
- [Smooth](/filter-smooth/)

## Expand

Add `(expand)` prefix to a utility in a parent element, the utility will take effect to all child elements.

{{ console('html',
'<!-- Example -->
<!-- parent -->
<div class="(expand)margin-2 (expand)padding-4">
    <!-- child -->
    <div>...</div>
    <div>...</div>
    ...
  </div>
') }}

{{ console('scss',
'.example {
    @extend
      .\\(expand\\)margin-2,
      .\\(expand\\)padding-4;
}
') }}

Default selected few utilities for `(expand)` variant.

- **Borders:** [Border Radius](/border-radius/)
- **Effects:** [Box Shadow](/box-shadow-color/)
- **Layout:** [Overflow](/overflow/)
- **Sizing:** [Height](/height/), [Width](/width/)
- **Spacing:** [Margin](/margin/), [Padding](/padding/)

## First-last

Add `(first)` or `(last)` prefix to a utility in a parent element, the utility will take effect to first child or last child elements.

{{ console('html',
'<!-- Example -->
<!-- parent -->
<div class="(first)text-xl-2 (last)text-xs">
    <!-- child -->
    <div>...</div>
    <div>...</div>
    ...
  </div>
') }}

{{ console('scss',
'.example {
    @extend
      .\\(first\\)text-xl-2,
      .\\(last\\)text-xs;
}
') }}

## First Letter

Add `(first-letter)` prefix to a utility in a parent element, the utility will take effect to child element containing text and apply effect to first letter of the text.

{{ console('html',
'<!-- Example -->
<!-- parent -->
<div class="(first)text-xl-2 (last)text-xs">
    <!-- child -->
    <div>...</div>
    <div>...</div>
    ...
  </div>
') }}

{{ console('scss',
'.example {
    @extend
      .\\(first\\)text-xl-2,
      .\\(last\\)text-xs;
}
') }}

---

# Theme

## Dark Mode

Add the `(dark)` prefix to a utility when dark theme settings enabled.

{{ console('html',
'<!-- Example -->
<div class="text-shade-granite-1 (dark)text-tint-granite-5">
    ...
  </div>
') }}

{{ console('scss',
'.example {
    @extend
      .text-shade-granite-1,
      .\\(dark\\)text-tint-granite-5;
}
') }}

## Light Mode

Add the `(light)` prefix to a utility when light theme settings enabled.

{{ console('html',
'<!-- Example -->
<div class="text-shade-granite-1 (light)text-shade-granite-5">
    ...
  </div>
') }}

{{ console('scss',
'.example {
    @extend
      .text-shade-granite-1,
      .\\(light\\)text-shade-granite-5;
}
') }}

<div class="margin-4 padding-3 border-l-8 text-sm">
  <span class="padding-r-1 font-semibold">
    Note:
  </span>
  Default enabled utilities (
  <a href="/background-color/">
    Background Color
  </a>,
  <a href="/border-color/">
    Border Color
  </a>,
  <a href="/gradient/">
    Gradient
  </a>,
  <a href="/filter-invert/">
    Filter Invert
  </a>,
  <a href="/placeholder-color/">
    Placeholder Color
  </a>,
  <a href="/box-shadow-color/">
    Shadow Color
  </a>,
  <a href="/text-color/">
    Text Color
  </a>).
</div>

---

## Reduce-Motion

Add the `(reduce-motion)` prefix to a utility reduce animation motion for readers with vestibular motion disorders.

{{ console('html',
'<!-- Example -->
<div class="(reduce-motion)transition duration-300 ease-in-out border-4 border-tint-granite-5 (hover)border-tint-granite-1 (hover)shadow-lg ... width-32 height-24">
    ...
  </div>
') }}

{{ console('scss',
'.example {
    @extend
      .\\(reduce-motion\\)transition,
      .duration-300,
      .ease-in-out,
      .border-4,
      .border-tint-granite-5,
      .\\(hover\\)border-tint-granite-1,
      .\\(hover\\)shadow-lg,
      .width-32,
      .height-24;
}
') }}

---

# Orientation

## Portrait

Add the `(portrait)` prefix to a utility when portrait settings enabled.

{{ console('html',
'<!-- Example -->
<div class="flex (portrait)flex-column">
    ...
  </div>
') }}

{{ console('scss',
'.example {
    @extend
      .flex,
      .\\(portrait\\)flex-column;
}
') }}

## Landscape

Add the `(landscape)` prefix to a utility when landscape settings enabled.

{{ console('html',
'<!-- Example -->
<div class="flex (landscape)flex-column">
    ...
  </div>
') }}

{{ console('scss',
'.example {
    @extend
      .flex,
      .\\(landscape\\)flex-column;
}
') }}

<div class="margin-4 padding-3 border-l-8 border-tint-amber-1 text-sm">
  <span class="padding-r-1 font-semibold">
    Note:
  </span>
  Default enabled utilities (
  <a href="/flex-direction/">
    Flex Direction
  </a>).
</div>

