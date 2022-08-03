---
id: cursor
title: Cursor
description: Utilities for changes the cursor when hovering over an element.
topic: Interactivity
layout: default
---

> Interactivity

# Cursor

Utilities for changes the cursor when hovering over an element.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for cursor in variants.cursor %}{% for item in cursor.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> | |
|:--|:--|:-:|
| cursor-auto | cursor: auto | <div class="width-24 padding-x-2 padding-y-1 text-gray-6 text-xs text-center uppercase font-semibold bg-white (hover)bg-gray-1 border border-gray-1 (hover)border-gray-2 curve-border cursor-auto">Point Me</div> |
| cursor-default | cursor: default | <div class="width-24 padding-x-2 padding-y-1 text-gray-6 text-xs text-center uppercase font-semibold bg-white (hover)bg-gray-1 border border-gray-1 (hover)border-gray-2 curve-border cursor-default">Point Me</div> |
| cursor-none  | cursor: none | <div class="width-24 padding-x-2 padding-y-1 text-gray-6 text-xs text-center uppercase font-semibold bg-white (hover)bg-gray-1 border border-gray-1 (hover)border-gray-2 curve-border cursor-none">Point Me</div> |
| cursor-context-menu  | cursor: context-menu | <div class="width-24 padding-x-2 padding-y-1 text-gray-6 text-xs text-center uppercase font-semibold bg-white (hover)bg-gray-1 border border-gray-1 (hover)border-gray-2 curve-border cursor-content-menu">Point Me</div> |
| cursor-help  | cursor: help | <div class="width-24 padding-x-2 padding-y-1 text-gray-6 text-xs text-center uppercase font-semibold bg-white (hover)bg-gray-1 border border-gray-1 (hover)border-gray-2 curve-border cursor-help">Point Me</div> |
| cursor-pointer | cursor: pointer | <div class="width-24 padding-x-2 padding-y-1 text-gray-6 text-xs text-center uppercase font-semibold bg-white (hover)bg-gray-1 border border-gray-1 (hover)border-gray-2 curve-border cursor-pointer">Point Me</div> |
| cursor-progress  | cursor: progress | <div class="width-24 padding-x-2 padding-y-1 text-gray-6 text-xs text-center uppercase font-semibold bg-white (hover)bg-gray-1 border border-gray-1 (hover)border-gray-2 curve-border cursor-progress">Point Me</div> |
| cursor-wait | cursor: wait | <div class="width-24 padding-x-2 padding-y-1 text-gray-6 text-xs text-center uppercase font-semibold bg-white (hover)bg-gray-1 border border-gray-1 (hover)border-gray-2 curve-border cursor-wait">Point Me</div> |
| cursor-cell  | cursor: cell | <div class="width-24 padding-x-2 padding-y-1 text-gray-6 text-xs text-center uppercase font-semibold bg-white (hover)bg-gray-1 border border-gray-1 (hover)border-gray-2 curve-border cursor-cell">Point Me</div> |
| cursor-crosshair  | cursor: crosshair | <div class="width-24 padding-x-2 padding-y-1 text-gray-6 text-xs text-center uppercase font-semibold bg-white (hover)bg-gray-1 border border-gray-1 (hover)border-gray-2 curve-border cursor-crosshair">Point Me</div> |
| cursor-text | cursor: text | <div class="width-24 padding-x-2 padding-y-1 text-gray-6 text-xs text-center uppercase font-semibold bg-white (hover)bg-gray-1 border border-gray-1 (hover)border-gray-2 curve-border cursor-text">Point Me</div> |
| cursor-vertical-text  | cursor: vertical-text | <div class="width-24 padding-x-2 padding-y-1 text-gray-6 text-xs text-center uppercase font-semibold bg-white (hover)bg-gray-1 border border-gray-1 (hover)border-gray-2 curve-border cursor-vertical-text">Point Me</div> |
| cursor-alias  | cursor: alias | <div class="width-24 padding-x-2 padding-y-1 text-gray-6 text-xs text-center uppercase font-semibold bg-white (hover)bg-gray-1 border border-gray-1 (hover)border-gray-2 curve-border cursor-alias">Point Me</div> |
| cursor-copy  | cursor: copy | <div class="width-24 padding-x-2 padding-y-1 text-gray-6 text-xs text-center uppercase font-semibold bg-white (hover)bg-gray-1 border border-gray-1 (hover)border-gray-2 curve-border cursor-copy">Point Me</div> |
| cursor-move | cursor: move | <div class="width-24 padding-x-2 padding-y-1 text-gray-6 text-xs text-center uppercase font-semibold bg-white (hover)bg-gray-1 border border-gray-1 (hover)border-gray-2 curve-border cursor-move">Point Me</div> |
| cursor-no-drop  | cursor: no-drop | <div class="width-24 padding-x-2 padding-y-1 text-gray-6 text-xs text-center uppercase font-semibold bg-white (hover)bg-gray-1 border border-gray-1 (hover)border-gray-2 curve-border cursor-no-drop">Point Me</div> |
| cursor-not-allowed | cursor: not-allowed | <div class="width-24 padding-x-2 padding-y-1 text-gray-6 text-xs text-center uppercase font-semibold bg-white (hover)bg-gray-1 border border-gray-1 (hover)border-gray-2 curve-border cursor-not-allowed">Point Me</div> |
| cursor-all-scroll  | cursor: all-scroll | <div class="width-24 padding-x-2 padding-y-1 text-gray-6 text-xs text-center uppercase font-semibold bg-white (hover)bg-gray-1 border border-gray-1 (hover)border-gray-2 curve-border cursor-all-scroll">Point Me</div> |
| cursor-col-resize  | cursor: col-resize | <div class="width-24 padding-x-2 padding-y-1 text-gray-6 text-xs text-center uppercase font-semibold bg-white (hover)bg-gray-1 border border-gray-1 (hover)border-gray-2 curve-border cursor-col-resize">Point Me</div> |
| cursor-row-resize  | cursor: row-resize | <div class="width-24 padding-x-2 padding-y-1 text-gray-6 text-xs text-center uppercase font-semibold bg-white (hover)bg-gray-1 border border-gray-1 (hover)border-gray-2 curve-border cursor-row-resize">Point Me</div> |
| cursor-n-resize  | cursor: n-resize | <div class="width-24 padding-x-2 padding-y-1 text-gray-6 text-xs text-center uppercase font-semibold bg-white (hover)bg-gray-1 border border-gray-1 (hover)border-gray-2 curve-border cursor-n-resize">Point Me</div> |
| cursor-e-resize  | cursor: e-resize | <div class="width-24 padding-x-2 padding-y-1 text-gray-6 text-xs text-center uppercase font-semibold bg-white (hover)bg-gray-1 border border-gray-1 (hover)border-gray-2 curve-border cursor-e-resize">Point Me</div> |
| cursor-s-resize  | cursor: s-resize | <div class="width-24 padding-x-2 padding-y-1 text-gray-6 text-xs text-center uppercase font-semibold bg-white (hover)bg-gray-1 border border-gray-1 (hover)border-gray-2 curve-border cursor-s-resize">Point Me</div> |
| cursor-w-resize  | cursor: w-resize | <div class="width-24 padding-x-2 padding-y-1 text-gray-6 text-xs text-center uppercase font-semibold bg-white (hover)bg-gray-1 border border-gray-1 (hover)border-gray-2 curve-border cursor-w-resive">Point Me</div> |
| cursor-ns-resize  | cursor: ns-resize | <div class="width-24 padding-x-2 padding-y-1 text-gray-6 text-xs text-center uppercase font-semibold bg-white (hover)bg-gray-1 border border-gray-1 (hover)border-gray-2 curve-border cursor-ns-resize">Point Me</div> |
| cursor-ew-resize  | cursor: ew-resize | <div class="width-24 padding-x-2 padding-y-1 text-gray-6 text-xs text-center uppercase font-semibold bg-white (hover)bg-gray-1 border border-gray-1 (hover)border-gray-2 curve-border cursor-ew-resize">Point Me</div> |
| cursor-ne-resize  | cursor: ne-resize | <div class="width-24 padding-x-2 padding-y-1 text-gray-6 text-xs text-center uppercase font-semibold bg-white (hover)bg-gray-1 border border-gray-1 (hover)border-gray-2 curve-border cursor-ne-resize">Point Me</div> |
| cursor-nw-resize  | cursor: nw-resize | <div class="width-24 padding-x-2 padding-y-1 text-gray-6 text-xs text-center uppercase font-semibold bg-white (hover)bg-gray-1 border border-gray-1 (hover)border-gray-2 curve-border cursor-nw-resize">Point Me</div> |
| cursor-se-resize  | cursor: se-resize | <div class="width-24 padding-x-2 padding-y-1 text-gray-6 text-xs text-center uppercase font-semibold bg-white (hover)bg-gray-1 border border-gray-1 (hover)border-gray-2 curve-border cursor-se-resize">Point Me</div> |
| cursor-sw-resize  | cursor: sw-resize | <div class="width-24 padding-x-2 padding-y-1 text-gray-6 text-xs text-center uppercase font-semibold bg-white (hover)bg-gray-1 border border-gray-1 (hover)border-gray-2 curve-border cursor-sw-resize">Point Me</div> |
| cursor-nesw-resize  | cursor: nesw-resize | <div class="width-24 padding-x-2 padding-y-1 text-gray-6 text-xs text-center uppercase font-semibold bg-white (hover)bg-gray-1 border border-gray-1 (hover)border-gray-2 curve-border cursor-nesw-resize">Point Me</div> |
| cursor-nwse-resize  | cursor: nwse-resize | <div class="width-24 padding-x-2 padding-y-1 text-gray-6 text-xs text-center uppercase font-semibold bg-white (hover)bg-gray-1 border border-gray-1 (hover)border-gray-2 curve-border cursor-nwse-resize">Point Me</div> |

---

## Usage

{% from "misc/console.njk" import console %}

{{ console('html',
'<div class="cursor-pointer">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .cursor-pointer;
}
') }}

