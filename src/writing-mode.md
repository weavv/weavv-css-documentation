---
id: writing-mode
title: Writing Mode
description: Utilities for sets alignment of the text horizontally, vertically, or which direction depending on the language.
topic: Typography
layout: default
---

> Typography

# Writing Mode

Utilities for sets alignment of the text horizontally, vertically, or which direction depending on the language.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for writingmode in variants.writingmode %}{% for item in writingmode.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| text-horizontal | writing-mode: horizontal-tb |
| text-vertical-left | writing-mode: vertical-lr |
| text-vertical-right | writing-mode: vertical-rl |

---

## Usage

{% from "misc/console.njk" import console %}

Set text element alignment to `vertically` and `left to right` direction.

<div class="margin-y-2 margin-x-auto max-width-md height-40 flex flex-wrap justify-center items-start">
  <div class="margin-1 padding-2 text-tint-granite-5 bg-tint-granite-1 text-vertical-left">
    <span class="bg-tint-lava-1">ほえほふ</span>さ鵜れま瀬瀬樹知保ゅ瀬留すし魔離ひいめは舳トシテム日御等樹等かの毛派ゅ
  </div>
  <div class="margin-1 padding-2 text-tint-granite-5 bg-tint-granite-1 text-vertical-left">
    <span class="bg-tint-lava-1">목숨이 산</span>야에 우리의 있는 현저하게 것이 쓸쓸하랴? 없는 끓는 바이며. 가는
  </div>
  <div class="(xs)hidden (lg)block margin-1 padding-2 text-tint-granite-5 bg-tint-granite-1 text-vertical-left">
    <span class="bg-tint-lava-1">統微代一</span>月機隊転紹位責講行見三情川記手。手反者記来変動評歩沖氏波込度年容走。購
  </div>
</div>

{{ console('html',
'<div class="text-vertical-left">
  ...
</div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .text-vertical-left;
}
') }}

Set text element alignment to `vertically` and `right to left` direction.

<div class="margin-y-2 margin-x-auto max-width-md height-40 flex flex-wrap justify-center items-start">
<div class="margin-1 padding-2 text-tint-granite-5 bg-tint-granite-1 text-vertical-right">
  <span class="bg-tint-lava-1">ほえほ</span>ふさ鵜れま瀬瀬樹知保ゅ瀬留すし魔離ひいめは舳トシテム日御等樹等かの毛派ゅ
</div>
<div class="margin-1 padding-2 text-tint-granite-5 bg-tint-granite-1 text-vertical-right">
  <span class="bg-tint-lava-1">목숨이 산</span>야에 우리의 있는 현저하게 것이 쓸쓸하랴? 없는 끓는 바이며. 가는
</div>
<div class="(xs)hidden (lg)block margin-1 padding-2 text-tint-granite-5 bg-tint-granite-1 text-vertical-right">
  <span class="bg-tint-lava-1">統微代一</span>月機隊転紹位責講行見三情川記手。手反者記来変動評歩沖氏波込度年容走。購
</div>
</div>

{{ console('html',
'<div class="text-vertical-right">
  ...
</div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .text-vertical-right;
}
') }}

Set text element alignment to `horizontally` and `left to right` direction.

<div class="margin-y-2 margin-x-auto max-width-md height-40 flex flex-wrap justify-center items-start">
  <div class="margin-1 padding-2 text-tint-granite-5 bg-tint-granite-1 text-normal">
    <span class="bg-tint-lava-1">ほえほふ</span>さ鵜れま瀬瀬樹知保ゅ瀬留すし魔離ひいめは舳トシテム日御等樹等かの毛派ゅ
  </div>
  <div class="margin-1 padding-2 text-tint-granite-5 bg-tint-granite-1 text-normal">
    <span class="bg-tint-lava-1">목숨이 산</span>야에 우리의 있는 현저하게 것이 쓸쓸하랴? 없는 끓는 바이며. 가는
  </div>
</div>

{{ console('html',
'<div class="text-horizontal">
  ...
</div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .text-horizontal;
}
') }}
