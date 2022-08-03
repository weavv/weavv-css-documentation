---
id: column
title: Column
description: Utilities for set the multiple paragraphs text into columns to adjust and balance automatically allowing the content to flow naturally.
topic: Typography
variant: responsive
layout: default
---

> Typography

# Column

Utilities for set the multiple paragraphs text into columns to adjust and balance automatically allowing the content to flow naturally.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for column in variants.column %}{% for item in column.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| column `{count}` `{size}` `{fill}` `{gap}` `{bar-style}` `{bar-size}` `{bar-color}` | --column-count: auto;<br> --column-width: auto;<br> --column-fill: auto;<br> --column-gap: normal;<br> --column-rule-width: 1px;<br> --column-rule-style: none;<br> --column-rule-color: black;<br> column-count: var(--column-count);<br> column-width: var(--column-width);<br> column-fill: var(--column-fill);<br> column-gap: var(--column-gap);<br> column-rule-width: var(--column-rule-width);<br> column-rule-style: var(--column-rule-style);<br> column-rule-color: var(--column-rule-color); |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| count-2 | --column-count: 2 |
| count-3 | --column-count: 3 |
| count-4 | --column-count: 4 |
| count-5 | --column-count: 5 |
| count-6 | --column-count: 6 |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| size-12 | --column-width: 12em |
| size-14 | --column-width: 14em |
| size-16 | --column-width: 16em |
| size-18 | --column-width: 18em |
| size-20 | --column-width: 20em |
| size-22 | --column-width: 22em |
| size-24 | --column-width: 24em |
| size-26 | --column-width: 26em |
| size-28 | --column-width: 28em |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| fill-auto | --column-fill: auto |
| fill-balance | --column-fill: balance |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| gap-2 | --column-gap: 2em |
| gap-3 | --column-gap: 3em |
| gap-4 | --column-gap: 4em |
| gap-5 | --column-gap: 5em |
| gap-6 | --column-gap: 6em |
| gap-7 | --column-gap: 7em |
| gap-8 | --column-gap: 8em |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| bar-size-2 | --column-rule-width: 2px |
| bar-size-4 | --column-rule-width: 4px |
| bar-size-6 | --column-rule-width: 6px |
| bar-size-8 | --column-rule-width: 8px |
| bar-size-10 |  --column-rule-width: 10px |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| bar-none | --column-rule-style: none |
| bar-dotted | --column-rule-style: dotted |
| bar-dashed | --column-rule-style: dashed |
| bar-solid | --column-rule-style: solid |

---

## Usage

{% from "misc/console.njk" import console %}

Content split with 3 columns.

{{ console('html',
'<div class="column count-3 size-20 gap-3">
    <p> ... </p>
    <p> ... </p>
    <p> ... </p>
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .column,
      .count-3,
      .size-20,
      .gap-3;
}
') }}

Countent split with 3 columns, each content has spacing and separator bar.

{{ console('html',
'<div class="column count-3 size-20 gap-3 ... bar-size-2 bar-dotted ... bar-tint-violet-1">
    <p> ... </p>
    <p> ... </p>
    <p> ... </p>
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .column,
      .count-3,
      .size-20,
      .gap-3,
      .bar-size-2,
      .bar-dotted;
}
') }}