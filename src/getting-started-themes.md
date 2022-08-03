---
id: themesoverview
title: Introduction of Dark or Light Mode
description: Utilities to sets `dark` or `light` theme to an element.
topic: Getting Started > Features
relate: theme-auto, theme-invert, pseudo-class-variants
layout: default
---

> Getting Started

<div class="-margin-t-4 padding-t-4 (xs)text-xl-3 (lg)text-xl-5 font-semibold gap-tight-1">
  Themes
</div>

Utilities to sets `dark` or `light` theme to an element.

# Dark

{% from "misc/console.njk" import console %}

<div class="padding-x-4 padding-y-2 width-full">
  <div class="relative flex justify-center items-center bg-gray-8 border border-gray-8 height-48 width-full curve-border-lg overflow-hidden">
    <div class="absolute top-1 right-1">
      <div class="flex flex-gap-1 (expand)height-4 (expand)width-4 (expand)bg-gray-5 (expand)curve-border-full">
        <div></div>
        <div></div>
        <div class="bg-gray-1"></div>
      </div>
    </div>
    <div class="flex flex-column justify-center items-center">
      <div class="text-xl-3 font-semibold text-gray-2">
        Dark
      </div>
    </div>
  </div>
</div>

Add the `(dark)` prefix to a utility when dark theme settings enabled. Find out more about the usage [Pseudo Class Variants](/pseudo-class-variants/#dark-mode-v1.1.0).

{{ console('html',
'<!-- Example -->
<div class="padding-x-4 padding-y-2 width-full">
  <div class="relative flex justify-center items-center (dark)bg-gray-8 (light)bg-gray-4 border (dark)border-gray-8 (light)border-gray-4 height-48 width-full curve-border-lg overflow-hidden">
    <div class="absolute top-1 right-1">
      <div class="flex flex-gap-1 (expand)height-4 (expand)width-4 (expand)curve-border-full">
        <div class="(dark)bg-gray-5"></div>
        <div class="(dark)bg-gray-5"></div>
        <div class="(dark)bg-gray-1 (light)bg-gray-7"></div>
      </div>
    </div>
    <div class="flex flex-column justify-center items-center">
      <div class="text-xl-3 font-semibold (dark)text-gray-2 (light)text-gray-7">
        Dark
      </div>
    </div>
  </div>
</div>
') }}

# Light

Add the `(light)` prefix to a utility when light theme settings enabled. Find out more about the usage at [Pseudo Class Variants](/pseudo-class-variants/#light-mode-v1.1.5).

<div class="padding-x-4 padding-y-2 width-full">
  <div class="relative flex justify-center items-center bg-gray-2 border border-gray-4 height-48 width-full curve-border-lg overflow-hidden">
    <div class="absolute top-0 left-0">
      <div class="height-48 width-full"></div>
    </div>
    <div class="absolute top-1 right-1">
      <div class="flex flex-gap-1 (expand)height-4 (expand)width-4 (expand)bg-gray-5 (expand)curve-border-full">
        <div></div>
        <div></div>
        <div class="bg-gray-7"></div>
      </div>
    </div>
    <div class="flex flex-column justify-center items-center">
      <div class="text-xl-3 font-semibold text-gray-7">
        Light
      </div>
    </div>
  </div>
</div>

{{ console('html',
'<!-- Example -->
<div class="padding-x-4 padding-y-2 width-full">
  <div class="relative flex justify-center items-center (light)bg-gray-4 (dark)bg-gray-8 border (light)border-gray-4 (dark)border-gray-8 height-48 width-full curve-border-lg overflow-hidden">
    <div class="absolute top-1 right-1">
      <div class="flex flex-gap-1 (expand)height-4 (expand)width-4 (expand)curve-border-full">
        <div class="(dark)bg-gray-5"></div>
        <div class="(dark)bg-gray-5"></div>
        <div class="(light)bg-gray-7 (dark)bg-gray-1"></div>
      </div>
    </div>
    <div class="flex flex-column justify-center items-center">
      <div class="text-xl-3 font-semibold (light)text-gray-7 (dark)text-gray-2">
        Dark
      </div>
    </div>
  </div>
</div>
') }}

## Override Options

To override theme invert to an element. Find out more about the usage [`theme-auto`](/theme-auto/) and [`theme-invert`](/theme-invert/) utilities.

{{ console('html',
'<!-- Example -->
<html theme="auto|invert">
  ...
    <!-- e.g. To compensate inverted image -->
    <img theme="auto|invert">
    <!-- e.g. To compensate other inverted elements -->
    <div theme="auto|invert"></div>
    <span theme="auto|invert"></span>
  ...
</html>
') }}

## Simulate

To simulate [`(dark)`](/pseudo-class-variants/#dark-mode-v1.1.0), [`(light)`](/pseudo-class-variants/#light-mode-v1.1.5), [`theme="auto"`](/theme-auto/), [`theme="invert"`](/theme-invert/) on a Chrome-based web browser, open the developer tools, by pressing `CTRL+SHIFT+I` and find your way to enable the `Rendering` options in the picture below. You 'll find the `Emulate CSS media feature prefers-color-scheme` menu.

<div class="margin-x-4 py-4">
  <img
    theme="auto"
    class="width-full heigh-full object-fit object-center curve-border-lg"
    src="/images/content/simulate_theme.jpg"
    loading="lazy"
    alt="Chrome prefers-color-scheme simulator"
  >
</div>

---

{% include "button-getting-started.njk" %}