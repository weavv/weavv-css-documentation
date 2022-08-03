---
id: text-decoration
title: Text Decoration
description: Utilities for sets the text underline or line-through of an element.
topic: Typography
variant: responsive, hover, group-hover, focus, focus-visible, focus-within
layout: default
---

> Typography

# Text Decoration

Utilities for sets the text underline or line-through of an element.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for textdecoration in variants.textdecoration %}{% for item in textdecoration.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| text-`{options}` `{thickness}` `{offset}` |  text-decoration: `{options}`; <br> text-decoration-thickness: `{thickness}`; <br> text-underline-offset: `{offset}`|

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> | |
|:--|:--|:-:|
| underline | text-decoration: underline | <div class="text-lg text-underline">Text</div> |
| line-through | text-decoration: line-through | <div class="text-lg text-line-through">Text</div> |
| no-deco | text-decoration: none |  <div class="text-lg text-no-deco">Text</div> |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> | |
|:--|:--|:-:|
| line-thickness-1 | text-decoration-thickness: 0.2em | <div class="text-underline line-thickness-1">Text</div> |
| line-thickness-2 | text-decoration-thickness: 0.3em | <div class="text-underline line-thickness-2">Text</div> |
| line-thickness-3 | text-decoration-thickness: 0.4em | <div class="text-underline line-thickness-3">Text</div> |
| line-thickness-4 | text-decoration-thickness: 0.5em | <div class="text-underline line-thickness-4">Text</div> |
| line-thickness-5 | text-decoration-thickness: 0.6em | <div class="text-underline line-thickness-5">Text</div> |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> | |
|:--|:--|:-:|
| line-offset-1 | text-decoration-thickness: 0.1em | <div class="text-underline line-offset-1">Text</div> |
| line-offset-2 | text-decoration-thickness: 0.2em | <div class="text-underline line-offset-2">Text</div> |
| line-offset-3 | text-decoration-thickness: 0.3em | <div class="text-underline line-offset-3">Text</div> |
| line-offset-4 | text-decoration-thickness: 0.4em | <div class="text-underline line-offset-4">Text</div> |
| line-offset-5 | text-decoration-thickness: 0.5em | <div class="text-underline line-offset-5">Text</div> |

---

## Usage

{% from "misc/console.njk" import console %}

<div class="padding-x-4 margin-y-4 margin-x-auto width-full">
  <div class="flex flex-column justify-center items-center">
    <div class="text-xl-4 text-underline">
      Text Underline
    </div>
  </div>
</div>

{{ console('html',
'<div class="text-underline">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .text-underline;
}
') }}

<div class="padding-x-4 margin-y-4 margin-x-auto width-full">
  <div class="flex flex-column justify-center items-center">
    <div class="text-xl-4 text-underline line-thickness-3">
      Text Underline Thickness
    </div>
  </div>
</div>

{{ console('html',
'<div class="text-underline line-thickness-3">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .text-underline,
      .line-thickness-3;
}
') }}

<div class="padding-x-4 margin-y-4 margin-x-auto width-full">
  <div class="flex flex-column justify-center items-center">
    <div class="text-xl-4 text-underline line-offset-5">
      Text Underline Offset
    </div>
  </div>
</div>

{{ console('html',
'<div class="text-underline line-offset-3">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .text-underline,
      .line-offset-3;
}
') }}

