---
id: curve-object
title: Curve Object
description: Utilities for set border-radius to draw multiple curves abstract object to an element.
topic: Borders
relate: border-color, border-style, border-width
layout: default
---

> Borders

# Curve Object

Utilities for set border-radius to draw multiple curves abstract object to an element.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for curveobject in variants.curveobject %}{% for item in curveobject.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| curve-object `{radius-top-left}` `{radius-top-right}` `{radius-bottom-right}` `{radius-bottom-left}` `{curve-left-top-bottom}` `{curve-right-top-bottom}` `{curve-right-bottom-top}` `{curve-left-bottom-top}`| border-radius: var(--object-radius-top-left) var(--object-radius-top-right) var(--object-radius-bottom-right) var(--object-radius-bottom-left) / var(--object-curve-left-top-bottom) var(--object-curve-right-top-bottom) var(--object-curve-right-bottom-top) var(--object-curve-left-bottom-top); |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| radius-tl-0 | --object-radius-top-left: 0% |
| radius-tl-10 | --object-radius-top-left: 10% |
| radius-tl-20 | --object-radius-top-left: 20% |
| radius-tl-30 | --object-radius-top-left: 30% |
| radius-tl-40 | --object-radius-top-left: 40% |
| radius-tl-50 | --object-radius-top-left: 50% |
| radius-tl-60 | --object-radius-top-left: 60% |
| radius-tl-70 | --object-radius-top-left: 70% |
| radius-tl-80 | --object-radius-top-left: 80% |
| radius-tl-90 | --object-radius-top-left: 90% |
| radius-tl-100 | --object-radius-top-left: 100% |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| radius-tr-0 | --object-radius-top-right: 0% |
| radius-tr-10 | --object-radius-top-right: 10% |
| radius-tr-20 | --object-radius-top-right: 20% |
| radius-tr-30 | --object-radius-top-right: 30% |
| radius-tr-40 | --object-radius-top-right: 40% |
| radius-tr-50 | --object-radius-top-right: 50% |
| radius-tr-60 | --object-radius-top-right: 60% |
| radius-tr-70 | --object-radius-top-right: 70% |
| radius-tr-80 | --object-radius-top-right: 80% |
| radius-tr-90 | --object-radius-top-right: 90% |
| radius-tr-100 | --object-radius-top-right: 100% |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| radius-br-0 | --object-radius-bottom-right: 0% |
| radius-br-10 | --object-radius-bottom-right: 10% |
| radius-br-20 | --object-radius-bottom-right: 20% |
| radius-br-30 | --object-radius-bottom-right: 30% |
| radius-br-40 | --object-radius-bottom-right: 40% |
| radius-br-50 | --object-radius-bottom-right: 50% |
| radius-br-60 | --object-radius-bottom-right: 60% |
| radius-br-70 | --object-radius-bottom-right: 70% |
| radius-br-80 | --object-radius-bottom-right: 80% |
| radius-br-90 | --object-radius-bottom-right: 90% |
| radius-br-100 | --object-radius-bottom-right: 100% |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| radius-bl-0 | --object-radius-bottom-left: 0% |
| radius-bl-10 | --object-radius-bottom-left: 10% |
| radius-bl-20 | --object-radius-bottom-left: 20% |
| radius-bl-30 | --object-radius-bottom-left: 30% |
| radius-bl-40 | --object-radius-bottom-left: 40% |
| radius-bl-50 | --object-radius-bottom-left: 50% |
| radius-bl-60 | --object-radius-bottom-left: 60% |
| radius-bl-70 | --object-radius-bottom-left: 70% |
| radius-bl-80 | --object-radius-bottom-left: 80% |
| radius-bl-90 | --object-radius-bottom-left: 90% |
| radius-bl-100 | --object-radius-bottom-left: 100%  |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| <div class="padding-2 border-l-8 text-xs font-thin depth-tight-1">`curve-border-` will be rreplace with shorter name, just `curve-` on the next version <strong>1.0.1</strong></div> | |
| curve-border-ltb-0 | --object-curve-left-top-bottom: 0%  |
| curve-border-ltb-10 | --object-curve-left-top-bottom: 10% |
| curve-border-ltb-20 | --object-curve-left-top-bottom: 20% |
| curve-border-ltb-30 | --object-curve-left-top-bottom: 30% |
| curve-border-ltb-40 | --object-curve-left-top-bottom: 40% |
| curve-border-ltb-50 | --object-curve-left-top-bottom: 50% |
| curve-border-ltb-60 | --object-curve-left-top-bottom: 60% |
| curve-border-ltb-70 | --object-curve-left-top-bottom: 70% |
| curve-border-ltb-80 | --object-curve-left-top-bottom: 80% |
| curve-border-ltb-90 | --object-curve-left-top-bottom: 90% |
| curve-border-ltb-100 | --curveradius-left-top-bottom: 100% |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| <div class="padding-2 border-l-8 text-xs font-thin depth-tight-1">`curve-border-` will be rreplace with shorter name, just `curve-` on the next version <strong>1.0.1</strong></div> | |
| curve-border-rtb-0 | --object-curve-right-top-bottom: 0% |
| curve-border-rtb-10 | --object-curve-right-top-bottom: 10% |
| curve-border-rtb-20 | --object-curve-right-top-bottom: 20% |
| curve-border-rtb-30 | --object-curve-right-top-bottom: 30% |
| curve-border-rtb-40 | --object-curve-right-top-bottom: 40% |
| curve-border-rtb-50 | --object-curve-right-top-bottom: 50% |
| curve-border-rtb-60 | --object-curve-right-top-bottom: 60% |
| curve-border-rtb-70 | --object-curve-right-top-bottom: 70% |
| curve-border-rtb-80 | --object-curve-right-top-bottom: 80% |
| curve-border-rtb-90 | --object-curve-right-top-bottom: 90% |
| curve-border-rtb-100 | --object-curve-right-top-bottom: 100% |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| <div class="padding-2 border-l-8 text-xs font-thin depth-tight-1">`curve-border-` will be rreplace with shorter name, just `curve-` on the next version <strong>1.0.1</strong></div> | |
| curve-border-rbt-0 | --object-curve-right-bottom-top: 0% |
| curve-border-rbt-10 | --object-curve-right-bottom-top: 10% |
| curve-border-rbt-20 | --object-curve-right-bottom-top: 20% |
| curve-border-rbt-30 | --object-curve-right-bottom-top: 30% |
| curve-border-rbt-40 | --object-curve-right-bottom-top: 40% |
| curve-border-rbt-50 | --object-curve-right-bottom-top: 50% |
| curve-border-rbt-60 | --object-curve-right-bottom-top: 60% |
| curve-border-rbt-70 | --object-curve-right-bottom-top: 70% |
| curve-border-rbt-80 | --object-curve-right-bottom-top: 80% |
| curve-border-rbt-90 | --object-curve-right-bottom-top: 90% |
| curve-border-rbt-100 | --object-curve-right-bottom-top: 100% |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| <div class="padding-2 border-l-8 text-xs font-thin depth-tight-1">`curve-border-` will be rreplace with shorter name, just `curve-` on the next version <strong>1.0.1</strong></div> | |
| curve-border-lbt-0 | --object-curve-left-bottom-top: 0% |
| curve-border-lbt-10 | --object-curve-left-bottom-top: 10% |
| curve-border-lbt-20 | --object-curve-left-bottom-top: 20% |
| curve-border-lbt-30 | --object-curve-left-bottom-top: 30% |
| curve-border-lbt-40 | --object-curve-left-bottom-top: 40% |
| curve-border-lbt-50 | --object-curve-left-bottom-top: 50% |
| curve-border-lbt-60 | --object-curve-left-bottom-top: 60% |
| curve-border-lbt-70 | --object-curve-left-bottom-top: 70% |
| curve-border-lbt-80 | --object-curve-left-bottom-top: 80% |
| curve-border-lbt-90 | --object-curve-left-bottom-top: 90% |
| curve-border-lbt-100 | --object-curve-left-bottom-top: 100% |

---

## Usage

{% from "misc/console.njk" import console %}

<div class="padding-x-4 margin-t-4 margin-b-32 margin-x-auto width-64">
  <div class="relative (group) cursor-pointer">
    <div class="
      stack-2
      absolute top-0 left-0
      curve-object
      radius-tr-100 radius-bl-100
      curve-border-rtb-100 curve-border-lbt-100 curve-border-rbt-100 ...
      transform (group-hover)scale-50 (group-hover)rotate-45 ...
      transition duration-1000 ease ...
      bg-tint-teal-1 width-48 height-48
    "></div>
    <div class="
      stack-1
      absolute top-0 left-0
      curve-object
      radius-tr-100 radius-bl-100
      curve-border-rtb-100 curve-border-lbt-100 curve-border-rbt-100 ...
      transform (group-hover)scale-50 (group-hover)rotate-45 ...
      transition duration-200 ease ...
      bg-tint-teal-3 width-48 height-48
    "></div>
    <div class="
      stack-3 absolute top-0 left-0">
      <div class="
        padding-3
        text-xl-1 font-mono ...
        text-tint-onyx-5 (group-hover)text-tint-onyx-5
        depth-tight-2
      ">
        Hover <br> Me
      </div>
    </div>
  </div>
</div>

{{ console('html',
'<div class="curve-object radius-tr-100 radius-bl-100 curve-border-rtb-100 curve-border-lbt-100 curve-border-rbt-100 ... width-64 height-64 ... bg-tint-teal-5">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .curve-object,
      .radius-tr-100,
      .radius-bl-100,
      .curve-border-rtb-100,
      .curve-border-lbt-100,
      .curve-border-rbt-100,
      .width-64,
      .height-64,
      .bg-tint-teal-5;
}
') }}



