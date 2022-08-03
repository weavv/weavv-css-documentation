---
id: overscroll
title: Overscroll
description: Utilities for sets an scrollable element that won't affecting the parent scrollable element on touch device.
topic: Interactivity
layout: default
---

> Interactivity

# Overscroll

Utilities for sets an scrollable element that won't affecting the parent scrollable element on touch device.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for overscroll in variants.overscroll %}{% for item in overscroll.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| overscroll-auto | overscroll-behavior: auto |
| overscroll-contain | overscroll-behavior: contain |
| overscroll-none | overscroll-behavior: none |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| overscroll-x-auto | overscroll-behavior-x: auto |
| overscroll-x-contain | overscroll-behavior-x: contain |
| overscroll-x-none | overscroll-behavior-x: none |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| overscroll-y-auto | overscroll-behavior-y: auto |
| overscroll-y-contain | overscroll-behavior-y: contain |
| overscroll-y-none | overscroll-behavior-y: none |

---

## Usage

{% from "misc/console.njk" import console %}

Set an scrollable element that won't affecting the parent scrollable element. This will disable the browser default `scroll chaining` feature to improve user experience.

An example of an element on the left without the `overscroll` utility applied. When you scroll to the long text till the end, the whole page will continue to scroll. But the element on the right will not.

<div class="padding-x-4 margin-t-2 margin-b-6 margin-x-auto (xs)max-width-full (sm)max-width-lg (md)max-width-lg (lg)max-width-lg height-64">
  <div class="flex">
    <div class="margin-4">
      <div class="width-32 height-56 text-shade-granite-5 bg-tint-granite-5 overflow-y-scroll">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, ducimus eum debitis. Magni, officiis numquam recusandae deserunt et maiores molestias quod laudantium. Natus, unde veniam hic labore voluptatibus aliquam ducimus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, ducimus eum debitis. Magni, officiis numquam recusandae deserunt et maiores molestias quod laudantium. Natus, unde veniam hic labore voluptatibus aliquam ducimus.
      </div>
      <div class="padding-t-2 text-sm text-center">
        Overscroll: OFF
      </div>
    </div>
    <div class="margin-4">
      <div class="width-32 height-56 text-shade-granite-5 bg-tint-granite-5 overscroll-contain overflow-y-scroll curve-border">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, ducimus eum debitis. Magni, officiis numquam recusandae deserunt et maiores molestias quod laudantium. Natus, unde veniam hic labore voluptatibus aliquam ducimus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, ducimus eum debitis. Magni, officiis numquam recusandae deserunt et maiores molestias quod laudantium. Natus, unde veniam hic labore voluptatibus aliquam ducimus.
      </div>
      <div class="padding-t-2 text-sm text-center">
        Overscroll: ON
      </div>
    </div>
  </div>
</div>

{{ console('html',
'<div class="overscroll-contain">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .overscroll-contain;
}
') }}

