---
id: smooth-filter-animation
title: Filter Smooth
description: Utilities for sets filter utilities on-hover animation speed when selection-hover variant applied.
topic: Filters
relate: filter-brightness, filter-contrast, filter-saturate, filter-blur
layout: default
---

> Filters

# Smooth Filter Animation

Utilities for sets filter utilities on-hover animation speed when selection-hover variant applied.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for filtersmooth in variants.filtersmooth %}{% for item in filtersmooth.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| smooth `{duration}` | filter: brightness(var(--brightness)) contrast(var(--contrast)) saturate(var(--saturate)) blur(var(--blur)) drop-shadow(var(--drop-shadow)); transition: filter `{duration}` linear, transform `{duration}` linear; |

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| smooth-75 | transition: filter 75ms linear, transform 75ms linear; |
| smooth-100 | transition: filter 100ms linear, transform 100ms linear; |
| smooth-150 | transition: filter 150ms linear, transform 150ms linear; |
| smooth-200 | transition: filter 200ms linear, transform 200ms linear; |
| smooth-300 | transition: filter 300ms linear, transform 300ms linear; |
| smooth-500 | transition: filter 500ms linear, transform 500ms linear; |
| smooth-700 | transition: filter 700ms linear, transform 700ms linear; |
| smooth-1000 | transition: filter 1000ms linear, transform 1000ms linear; |

---

## Usage

{% from "misc/console.njk" import console %}

<div class="padding-x-4 margin-y-4 margin-x-auto">
  <div class="flex flex-column justify-center items-center">
    <div class="(selection-hover)filter brightness-2 saturate-0 blur-10 smooth-200 ... flex flex-wrap flex-gap-4 justify-center items-center">
      <div class="transform (hover)scale-125 ... transition duration-700 ease-in-out .... cursor-pointer">
        <img class="width-24 height-24 ... object-cover object-center ... bg-tint-granite-1 ... curve-border-lg ... shadow ... filter saturate-4" src="https://picsum.photos/100?random=1">
      </div>
      <div class="transform (hover)scale-125 ... transition duration-700 ease-in-out ... cursor-pointer">
        <img class="width-24 height-24 ... object-cover object-center ... bg-tint-granite-1 ... curve-border-lg ... shadow ... filter saturate-4" src="https://picsum.photos/100?random=2">
      </div>
      <div class="transform (hover)scale-125 ... transition duration-700 ease-in-out ... cursor-pointer">
        <img class="width-24 height-24 ... object-cover object-center ... bg-tint-granite-1 ... curve-border-lg ... shadow ... filter saturate-4" src="https://picsum.photos/100?random=3">
      </div>
      <div class="transform (hover)scale-125 ... transition duration-700 ease-in-out ... cursor-pointer">
        <img class="width-24 height-24 ... object-cover object-center ... bg-tint-granite-1 ... curve-border-lg ... shadow ... filter saturate-4" src="https://picsum.photos/100?random=4">
      </div>
    </div>
    <div class="padding-t-8 text-gray-6 text-sm text-center">
      <span class="margin-r-2 padding-x-3 padding-y-1 text-white text-lg align-middle font-semibold text-italic font-serif bg-tint-granite-5 curve-border-full">i</span>
      Hover images to see filter animation.
    </div>
  </div>
</div>

{{ console('html',
'<!-- parent -->
  <div class="(selection-hover)filter brightness-2 saturate-0 blur-10 smooth-200 ... flex flex-wrap flex-gap-4 justify-center items-center">
    <!-- child -->
    <div>
      <img class="filter ... width-24 height-24" src="...">
    </div>
    <div>
      <img class="filter ... width-24 height-24" src="...">
    </div>
    <div>
      <img class="filter ... width-24 height-24" src="...">
    </div>
  </div>
') }}

{{ console('scss',
'.dummy-parent {
    @extend
      \(selection-hover\)filter,
      .brightness-2,
      .saturate-0,
      .blur-10,
      .smooth-200,
      .flex,
      .flex-wrap,
      .flex-gap-4,
      .justify-center,
      .items-center;
}
.dummy-child {
    @extend
      .filter,
      .width-24,
      .height-24;
}
') }}



