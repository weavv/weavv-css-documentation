---
id: whitespace
title: Whitespace
description: Utilities for sets the whitespace of an element.
topic: Typography
variant: responsive
layout: default
---

> Typography

# Whitespace

Utilities for sets the whitespace of an element.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for whitespace in variants.whitespace %}{% for item in whitespace.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| whitespace-normal | white-space: normal |
| whitespace-no-wrap | white-space: nowrap |
| whitespace-pre | white-space: pre |
| whitespace-pre-line | white-space: pre-line |
| whitespace-pre-wrap | white-space: pre-wrap |

---

## Usage

{% from "misc/console.njk" import console %}

Set text paragraph whitespace to `normal`.

<div class="margin-y-2 margin-x-auto max-width-lg">
  <div class="padding-4 bg-tint-granite-5 whitespace-normal">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quidem itaque beatae, rem tenetur quia iure, eum natus enim maxime laudantium quibusdam illo nihil, reprehenderit saepe quam aliquid odio accusamus.
  </div>
</div>

{{ console('html',
'<div class="whitespace-normal ...">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .whitespace-normal;
}
') }}

Set scrollable text paragraph whitespace to `no-wrap`.

<div class="margin-y-2 margin-x-auto max-width-lg">
  <div class="padding-4 bg-tint-granite-5 whitespace-no-wrap overflow-x-scroll">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quidem itaque beatae, rem tenetur quia iure, eum natus enim maxime laudantium quibusdam illo nihil, reprehenderit saepe quam aliquid odio accusamus.
  </div>
</div>

{{ console('html',
'<div class="whitespace-no-wrap ... overflow-x-scroll">
    ...
  </div>
') }}

Set text paragraph preserved new line whitespaces.

<div class="margin-y-2 margin-x-auto max-width-lg">
  <div class="padding-4 bg-tint-granite-5 whitespace-pre">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.

      Omnis quidem itaque beatae,
      rem tenetur quia iure,

    reprehenderit saepe quam aliquid odio accusamus.
  </div>
</div>

{{ console('html',
'<div class="whitespace-pre ...">
    ...
  </div>
') }}

Set text paragraph without preserved new line whitespaces.

<div class="margin-y-2 margin-x-auto max-width-lg">
  <div class="padding-4 bg-tint-granite-5 whitespace-pre-line">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Omnis quidem itaque beatae,
    rem tenetur quia iure,

    reprehenderit saepe quam aliquid odio accusamus.
  </div>
</div>

{{ console('html',
'<div class="whitespace-pre-line ...">
    ...
  </div>
') }}

