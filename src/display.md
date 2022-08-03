---
id: display
title: Display
description: Utilities for sets the display box type of an element.
topic: Layouts
variant: responsive, hover, group-hover
layout: default
---

> Layouts

# Display

Utilities for sets the display box type of an element.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for display in variants.display %}{% for item in display.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| block | display: block |
| hidden | display: none |
| inline | display: inline |
| inline-block | display: inline-block |
| flex | display: flex |
| inline-flex | display: inline-flex |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| table | display: table |
| table-caption  | display: table-caption |
| table-cell | display: table-cell |
| table-row | display: table-row |
| table-row-(group)  | display: table-row-(group) |
| table-column  | display: table-column |
| table-column-(group)  | display: table-column-(group) |
| table-header-(group)  | display: table-header-(group) |
| table-footer-(group)  | display: table-footer-(group) |

---

## Usage

{% from "misc/console.njk" import console %}

Set a block element that starts on a new line and takes up the full width.

<div class="padding-4 margin-y-2 margin-x-auto width-64 bg-tint-granite-5">
  <div class="(expand)margin-1 (expand)padding-6 (expand)width-full flex text-white (expand)bg-tint-granite-1 bg-tint-granite-5">
    <span class="block text-center">
      1
    </span>
    <span class="block bg-tint-granite-3 text-center">
      2
    </span>
    <span class="block text-center">
      3
    </span>
  </div>
</div>

{{ console('html',
'<div class="block">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .block;
}
') }}

Set the completely removed element.

<div class="padding-4 margin-y-2 margin-x-auto width-64 bg-tint-granite-5">
  <div class="(expand)margin-1 (expand)padding-6 (expand)width-full flex text-white (expand)bg-tint-granite-1 bg-tint-granite-5">
    <span class="block text-center">
      1
    </span>
    <span class="hidden block bg-tint-granite-3 text-center">
      2
    </span>
    <span class="block text-center">
      3
    </span>
  </div>
</div>

{{ console('html',
'<div class="hidden">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .hidden;
}
') }}

Set an element as an inline. Any height and width properties will have no effect.

<div class="padding-4 margin-y-2 margin-x-auto width-64 bg-tint-granite-5">
  <div class="(expand)margin-1 (expand)padding-6 (expand)width-full flex text-white (expand)text-center (expand)bg-tint-granite-2 bg-tint-granite-5">
    <div class="inline-block">1</div>
    <div class="inline-block bg-tint-granite-4">2</div>
    <div class="inline-block">3</div>
  </div>
</div>

{{ console('html',
'<div class="inline-block">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .inline-block;
}
') }}

Set an element as a block-level flex container.

<div class="padding-4 margin-y-2 margin-x-auto width-64 bg-tint-granite-5">
  <div class="(expand)margin-1 (expand)padding-6 (expand)width-full flex text-white (expand)text-center (expand)bg-tint-granite-2 bg-tint-granite-5">
    <div class="inline-block">1</div>
    <div class="inline-block bg-tint-granite-4">2</div>
    <div class="inline-block">3</div>
  </div>
</div>

{{ console('html',
'<div class="flex">
    <div>...</div>
    <div>...</div>
    <div>...</div>
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .flex;
}
') }}

Set an element as an inline-level flex container.

<div class="padding-4 margin-y-2 margin-x-auto width-64 bg-tint-granite-5">
  <div class="(expand)margin-1 (expand)padding-6 (expand)width-full flex inline-flex text-white (expand)text-center (expand)bg-tint-granite-2 bg-tint-granite-5">
    <div class="inline-block">1</div>
    <div class="inline-block bg-tint-granite-4">2</div>
    <div class="inline-block">3</div>
  </div>
</div>

{{ console('html',
'<div class="inline-flex">
    <div>...</div>
    <div>...</div>
    <div>...</div>
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .inline-flex;
}
') }}

Set a complete set of table with `table`, `table-row`, `table-cell`, `table-caption`, `table-column`, `table-column-group`, `table-header-group`, `table-row-group`, and `table-footer-group` utilities.

<div class="padding-4 margin-y-2 margin-x-auto max-width-lg bg-tint-granite-4">
  <div class="table width-full">
    <div class="table-row-group">
      <div class="table-row">
        <div class="table-cell bg-tint-granite-5 padding-x-4 padding-y-2">
          Row-1 Cell-1
        </div>
        <div class="table-cell bg-tint-granite-2 padding-x-4 padding-y-2">
          Row-1 Cell-2
        </div>
      </div>
      <div class="table-row">
        <div class="table-cell bg-tint-granite-2 padding-x-4 padding-y-2">
          Row-2 Cell-1
        </div>
        <div class="table-cell bg-tint-granite-5 padding-x-4 padding-y-2">
          Row-2 Cell-2
        </div>
      </div>
    </div>
  </div>
</div>

{{ console('html',
'<div class="table width-full">
    <div class="table-row-group">
      <div class="table-row">
        <div class="table-cell">
          ...
        </div>
        <div class="table-cell">
          ...
        </div>
      </div>
      <div class="table-row">
        <div class="table-cell">
          ...
        </div>
        <div class="table-cell">
          ...
        </div>
      </div>
    </div>
  </div>
') }}

{{ console('scss',
'.dummy-table {
    @extend
      .table,
      .width-full;
}
.dummy-table-group {
    @extend
      .table-row-group;
}
.dummy-table-row {
    @extend
      .table-row;
}
.dummy-table-cell {
    @extend
      .table-cell;
}
') }}

