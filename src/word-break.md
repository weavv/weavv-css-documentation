---
id: word-break
title: Word Break
description: Utilities for sets the word breaks of an element.
topic: Typography
variant: responsive
layout: default
---

> Typography

# Word Break

Utilities for sets the word breaks of an element.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for wordbreak in variants.wordbreak %}{% for item in wordbreak.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| break-normal | word-break: normal; <br> overflow-wrap: normal |
| break-words | overflow-wrap: break-word; |
| break-all | word-break: break-all;
| truncate | overflow: hidden; <br> text-overflow: ellipsis; <br> white-space: nowrap |

---

## Usage

{% from "misc/console.njk" import console %}

Set text paragraph break line normally.

<div class="margin-y-2 margin-x-auto max-width-sm">
  <div class="padding-4 bg-tint-granite-5 break-normal">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quidem itaque beatae, rem teneturuiaiureeumnatusenimmaximelaudantiumquibusdamillonihil, reprehenderit saepe quam aliquid odio accusamus.
  </div>
</div>

{{ console('html',
'<div class="break-normal">
  ...
</div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .break-normal;
}
') }}

Set text paragraph break only words.

<div class="margin-y-2 margin-x-auto max-width-sm">
  <div class="padding-4 bg-tint-granite-5 break-words">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quidem itaque beatae, rem teneturuiaiureeumnatusenimmaximelaudantiumquibusdamillonihil, reprehenderit saepe quam aliquid odio accusamus.
  </div>
</div>

{{ console('html',
'<div class="break-words">
  ...
</div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .break-words;
}
') }}

Set text paragraph break all lines and words.

<div class="margin-y-2 margin-x-auto max-width-sm">
  <div class="padding-4 bg-tint-granite-5 break-all">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quidem itaque beatae, rem teneturuiaiureeumnatusenimmaximelaudantiumquibusdamillonihil, reprehenderit saepe quam aliquid odio accusamus.
  </div>
</div>

{{ console('html',
'<div class="break-all">
  ...
</div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .break-all;
}
') }}

Set text paragraph truncate into a single line.

<div class="margin-y-2 margin-x-auto max-width-sm">
  <div class="padding-4 bg-tint-granite-5 truncate">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quidem itaque beatae, rem teneturuiaiureeumnatusenimmaximelaudantiumquibusdamillonihil, reprehenderit saepe quam aliquid odio accusamus.
  </div>
</div>

{{ console('html',
'<div class="truncate">
  ...
</div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .truncate;
}
') }}

