---
id: transform-perspective
title: Transform Perspective
description: Utilities for set an element a 3D-space by affecting the distance between the Z plane and the user.
topic: Transforms
relate: rotate
layout: default
---

> Transforms

# Transforms Perspective

Utilities for set an element a 3D-space by affecting the distance between the Z plane and the user.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for transformperspective in variants.transformperspective %}{% for item in transformperspective.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| transform-perspective-none  | perspective: none |
| transform-perspective-200  | perspective: 200px |
| transform-perspective-300  | perspective: 300px |
| transform-perspective-400  | perspective: 400px |
| transform-perspective-500  | perspective: 500px |
| transform-perspective-600  | perspective: 600px |
| transform-perspective-700  | perspective: 700px |
| transform-perspective-800  | perspective: 800px |
| transform-perspective-900  | perspective: 900px |
| transform-perspective-1000  | perspective: 1000px |

---

## Usage

{% from "misc/console.njk" import console %}

With `transform-perspective` value set to `300`.

<div class="margin-x-2 margin-y-2 margin-x-auto width-full">
  <div class="padding-4 flex flex-column justify-center items-center">
    <div class="transform-perspective-300 flex flex-gap-4 justify-center items-center">
      <div class="transform rotate-y-45 (hover)rotate-y-0 height-32 width-32 curve-border-lg shadow transition duration-500 linear flex justify-center items-center">
        <div class="text-sm font-semibold">
          rotate-y-45
        </div>
      </div>
      <div class="transform -rotate-y-24 (hover)rotate-y-0 height-32 width-32 curve-border-lg shadow transition duration-500 linear flex justify-center items-center">
        <div class="text-sm font-semibold">
          -rotate-y-24
        </div>
      </div>
      <div class="transform rotate-x-24 (hover)rotate-x-0 height-32 width-32 curve-border-lg shadow transition duration-500 linear flex justify-center items-center">
        <div class="text-sm font-semibold">
          rotate-x-24
        </div>
      </div>
      <div class="transform -rotate-x-24 (hover)rotate-x-0 height-32 width-32 curve-border-lg shadow transition duration-500 linear flex justify-center items-center">
        <div class="text-sm font-semibold">
          -rotate-x-24
        </div>
      </div>
    </div>
    <div class="padding-y-6 text-gray-6">
      Try hover above objects to see 3D perspective effect.
    </div>
  </div>
</div>

With `transform-perspective` value set to `none` to disable 3D perspective.

<div class="margin-x-2 margin-y-2 margin-x-auto width-full">
  <div class="padding-4 flex flex-column justify-center items-center">
    <div class="transform-perspective-none flex flex-gap-4 justify-center items-center">
      <div class="transform rotate-y-45 (hover)rotate-y-0 height-32 width-32 curve-border-lg shadow transition duration-500 linear flex justify-center items-center">
        <div class="text-sm font-semibold">
          rotate-y-45
        </div>
      </div>
      <div class="transform -rotate-y-24 (hover)rotate-y-0 height-32 width-32 curve-border-lg shadow transition duration-500 linear flex justify-center items-center">
        <div class="text-sm font-semibold">
          -rotate-y-24
        </div>
      </div>
      <div class="transform rotate-x-24 (hover)rotate-x-0 height-32 width-32 curve-border-lg shadow transition duration-500 linear flex justify-center items-center">
        <div class="text-sm font-semibold">
          rotate-x-24
        </div>
      </div>
      <div class="transform -rotate-x-24 (hover)rotate-x-0 height-32 width-32 curve-border-lg shadow transition duration-500 linear flex justify-center items-center">
        <div class="text-sm font-semibold">
          -rotate-x-24
        </div>
      </div>
    </div>
    <div class="padding-y-6">
      Try hover above objects to see effect.
    </div>
  </div>
</div>

{{ console('html',
'<div class="transform-perspective-300">
    <div class="transform rotate-y-45 (hover)-rotate-y-0 ... height-32 width-32 ... bg-tint-granite-5 ... transition duration-500 linear"></div>
  </div>

  <div class="transform-perspective-300">
    <img class="transform rotate-y-45 (hover)-rotate-y-0 ... height-32 width-32 ... bg-tint-granite-5 ... object-cover object-fit overflow-hidden ... transition duration-500 linear" src="..">
  </div>
') }}

{{ console('scss',
'.dummy-parent {
    @extend
      .transform-perspective-300;
}
.dummy-child {
    @extend
      .transform,
      .rotate-y-45,
      \(hover\)-rotate-y-0,
      .height-32,
      .width-32,
      .bg-tint-granite-5,
      .transition,
      .duration-500,
      .linear;
}
') }}

