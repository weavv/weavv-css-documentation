---
id: text-clamp
title: Text Clamp
description: Utilities for sets total display text line to an element.
topic: Typography
layout: default
---

> Typography

# Text Clamp

Utilities for sets total display text line to an element.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for textclamp in variants.textclamp %}{% for item in textclamp.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| text-clamp-1 | display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; word-wrap: break-word; text-overflow: ellipsis; position: relative; visibility: visible |
| text-clamp-2 | display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; word-wrap: break-word; text-overflow: ellipsis; position: relative; visibility: visible |
| text-clamp-3 | display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; word-wrap: break-word; text-overflow: ellipsis; position: relative; visibility: visible |
| text-clamp-4 | display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; word-wrap: break-word; text-overflow: ellipsis; position: relative; visibility: visible |
| text-clamp-5 | display: -webkit-box; -webkit-line-clamp: 5; -webkit-box-orient: vertical; overflow: hidden; word-wrap: break-word; text-overflow: ellipsis; position: relative; visibility: visible |

---

## Usage

{% from "misc/console.njk" import console %}

<div class="margin-x-2 margin-y-2 margin-x-auto flex flex-wrap">
  <div class="padding-4 width-1/2">
    <div class="font-serif text-xl-2">
      Clamp-1
    </div>
    <div class="text-sm depth-tight-2 text-clamp-1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </div>
  <div class="padding-4 width-1/2">
    <div class="font-serif text-xl-2">
      Clamp-2
    </div>
    <div class="text-sm depth-tight-2 text-clamp-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </div>
  <div class="padding-4 width-1/2">
    <div class="font-serif text-xl-2">
      Clamp-3
    </div>
    <div class="text-sm depth-tight-2 text-clamp-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </div>
  <div class="padding-4 width-1/2">
    <div class="font-serif text-xl-2">
      Clamp-4
    </div>
    <div class="text-sm depth-tight-2 text-clamp-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </div>
</div>

{{ console('html',
'<div class="text-clamp-3 ... text-md depth-tight-2">
    ...
  </div>
') }}

{{ console('scss',
'.duumy {
    @extend
      .text-clamp-3,
      .text-md depth-tight-2;
}
') }}
