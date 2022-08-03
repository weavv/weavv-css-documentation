---
id: box-shadow
title: Box Shadow
description: Utilities for sets the box-shadow property attaches one or more shadows to an element.
topic: Effects
variant: hover, focus, focus-visible, focus-within
layout: default
---

> Effects

# Box Shadow

Utilities for sets the box-shadow property attaches one or more shadows to an element.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for boxshadow in variants.boxshadow %}{% for item in boxshadow.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

### Dreamy

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> | |
|:--|:--|:-:|
| shadow-dreamy-xs | box-shadow: <br> 0 0 0 1px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.03), 0 0 0 1px rgba(0, 0, 0, 0.02), 0 0 0 1px rgba(0, 0, 0, 0.01) | <div class="padding-3 inline-block (dark)bg-white"><div class="width-16 height-6 curve-border bg-white shadow-dreamy-xs"></div></div> |
| shadow-dreamy-sm | box-shadow: <br> 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 4px 0 rgba(0, 0, 0, 0.04), 0 1px 6px 0 rgba(0, 0, 0, 0.03), 0 1px 8px 0 rgba(0, 0, 0, 0.02) | <div class="padding-3 inline-block (dark)bg-white"><div class="width-16 height-6 curve-border bg-white shadow-dreamy-sm"></div></div> |
| shadow-dreamy | box-shadow: <br> 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 6px 0 rgba(0, 0, 0, 0.05), 0 1px 9px 0 rgba(0, 0, 0, 0.04), 0 1px 12px 0 rgba(0, 0, 0, 0.03) | <div class="padding-3 inline-block (dark)bg-white"><div class="width-16 height-6 curve-border bg-white shadow-dreamy"></div></div> |
| shadow-dreamy-md | box-shadow: <br> 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 3px 7px -1px rgba(0, 0, 0, 0.05), 0 2px 8px -1px rgba(0, 0, 0, 0.04), 0 1px 9px -1px rgba(0, 0, 0, 0.03) | <div class="padding-3 inline-block (dark)bg-white"><div class="width-16 height-6 curve-border bg-white shadow-dreamy-md"></div></div> |
| shadow-dreamy-lg | box-shadow: <br> 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 16px -3px rgba(0, 0, 0, 0.05), 0 3px 17px -3px rgba(0, 0, 0, 0.03), 0 1px 18px -3px rgba(0, 0, 0, 0.01) | <div class="padding-3 inline-block (dark)bg-white"><div class="width-16 height-6 curve-border bg-white shadow-dreamy-lg"></div></div> |
| shadow-dreamy-xl-1 | box-shadow: <br> 0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 26px -3px rgba(0, 0, 0, 0.04), 0 3px 27px -3px rgba(0, 0, 0, 0.02), 0 1px 28px -3px rgba(0, 0, 0, 0.01) | <div class="padding-3 inline-block (dark)bg-white"><div class="width-16 height-6 curve-border bg-white shadow-dreamy-xl-1"></div></div> |
| shadow-dreamy-xl-2 | box-shadow: <br> 0 10px 35px -3px rgba(0, 0, 0, 0.08), 0 4px 36px -3px rgba(0, 0, 0, 0.07), 0 3px 37px -3px rgba(0, 0, 0, 0.06), 0 1px 38px -3px rgba(0, 0, 0, 0.05) | <div class="padding-3 inline-block (dark)bg-white"><div class="width-16 height-6 curve-border bg-white shadow-dreamy-xl-2"></div></div> |

### Solid

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> | |
|:--|:--|:-:|
| shadow-xs | box-shadow: <br> 0 0 0 1px rgba(0, 0, 0, 0.05) | <div class="padding-3 inline-block (dark)bg-white"><div class="width-16 height-6 curve-border bg-white shadow-xs"></div></div> |
| shadow-sm | box-shadow: <br> 0 1px 2px 0 rgba(0, 0, 0, 0.05) | <div class="padding-3 inline-block (dark)bg-white"><div class="width-16 height-6 curve-border bg-white shadow-sm"></div></div> |
| shadow | box-shadow: <br> 0 1px 3px 0 rgba(0, 0, 0, 0.1), <br> 0 1px 2px 0 rgba(0, 0, 0, 0.06) | <div class="padding-3 inline-block (dark)bg-white"><div class="width-16 height-6 curve-border bg-white shadow"></div></div> |
| shadow-md | box-shadow: <br> 0 4px 6px -1px rgba(0, 0, 0, 0.1), <br> 0 2px 4px -1px rgba(0, 0, 0, 0.06) | <div class="padding-3 inline-block (dark)bg-white"><div class="width-16 height-6 curve-border bg-white shadow-md"></div></div> |
| shadow-lg | box-shadow: <br> 0 10px 15px -3px rgba(0, 0, 0, 0.1), <br> 0 4px 6px -2px rgba(0, 0, 0, 0.05) | <div class="padding-3 inline-block (dark)bg-white"><div class="width-16 height-6 curve-border bg-white shadow-lg"></div></div> |
| shadow-xl-1 | box-shadow: <br> 0 20px 25px -5px rgba(0, 0, 0, 0.1), <br> 0 10px 10px -5px rgba(0, 0, 0, 0.04) | <div class="padding-3 inline-block (dark)bg-white"><div class="width-16 height-6 curve-border bg-white shadow-xl-1"></div></div> |
| shadow-xl-2 | box-shadow: <br> 0 25px 50px -12px rgba(0, 0, 0, 0.25) | <div class="padding-3 inline-block (dark)bg-white"><div class="width-16 height-6 curve-border bg-white shadow-xl-2"></div></div> |
| shadow-inner | box-shadow: <br> inset 0 2px 4px 0 rgba(0, 0, 0, 0.06) | <div class="padding-3 inline-block (dark)bg-white"><div class="width-16 height-6 curve-border bg-white shadow-inner"></div></div> |
| shadow-outline | box-shadow: <br> 0 0 0 3px rgba(66, 153, 225, 0.5) | <div class="padding-3 inline-block (dark)bg-white"><div class="width-16 height-6 curve-border bg-white shadow-outline"></div></div> |
| shadow-none | box-shadow: none | <div class="padding-3 inline-block (dark)bg-white"><div class="width-16 height-6 curve-border bg-white shadow-none"></div></div> |

---

## Usage

{% from "misc/console.njk" import console %}

Set multiplied dreamy shadow to an element.

<div class="padding-x-4 margin-y-2 margin-x-auto width-64">
  <div class="padding-4 (dark)bg-white">
    <div class="height-32 bg-white shadow-dreamy curve-border-lg"></div>
  </div>
</div>

{{ console('html',
'<!-- parent -->
  <div class="shadow-dreamy ... bg-white ... width-32 height-32">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .shadow-dreamy,
      .bg-white,
      .width-32,
      .height-32;
}
') }}

Set basic solid shadow to an element.

<div class="padding-x-4 margin-y-2 margin-x-auto width-64">
  <div class="padding-4 (dark)bg-white">
    <div class="height-32 bg-white shadow curve-border-lg"></div>
  </div>
</div>

{{ console('html',
'<!-- parent -->
  <div class="shadow ... bg-white ... width-32 height-32">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .shadow,
      .bg-white,
      .width-32,
      .height-32;
}
') }}

Use `(expand)` variant to apply box shadow to all child elements.

<div class="margin-y-2 margin-x-auto flex justify-center items-center">
  <div class="inline-block">
    <div class="flex justify-center items-center (expand)margin-4 (expand)height-32 (expand)width-32 (expand)shadow-lg">
      <div class="bg-tint-granite-2"></div>
      <div class="bg-tint-granite-5"></div>
      <div class="bg-tint-granite-2"></div>
    </div>
  </div>
</div>

{{ console('html',
'<!-- parent -->
  <div class="(expand)shadow-lg">
    <!-- child -->
    <div> ... </div>
    <div> ... </div>
    <div> ... </div>
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .\(expand\)shadow-lg;
') }}

