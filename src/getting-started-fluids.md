---
id: fluidsoverview
title: Introduction of Fluids Utilities
description: Utilities for sets min and max values with other utilities for screen size without breakpoints.
topic: Getting Started > Features
relate: fluid-font-size, fluid-margin, fluid-padding
layout: default
---

> Getting Started

<div class="-margin-t-4 padding-t-4 (xs)text-xl-3 (lg)text-xl-5 font-semibold gap-tight-1">
  Fluids
</div>

Utilities for sets min and max values with other utilities for screen size without breakpoints.

# Font Size

{% from "misc/console.njk" import console %}

<div class="flex (xs)flex-column (sm)flex-row">
  <div class="relative height-72 width-88 padding-4 bg-tint-granite-5 border-l-2 border-t-2 border-b-2 border-tint-granite-1 curve-border-l-lg">
    <div class="padding-b-4 text-lg font-mono">
      fluid-text-lg
    </div>
    <div class="text-lg">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
    <div class="absolute bottom-2 left-4 text-sm font-mono font-semibold">
      Small Screen
    </div>
  </div>
  <div class="relative height-72 width-full padding-4 bg-tint-granite-5 border-r-2 border-t-2 border-b-2 border-tint-granite-1 curve-border-r-lg">
    <div class="padding-b-4 text-lg font-mono">
      fluid-text-sm
    </div>
    <div class="text-sm">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
    </div>
    <div class="absolute bottom-2 right-4 text-sm font-mono font-semibold">
      Large Screen
    </div>
  </div>
</div>

---

Find out more about the usage of [Fluid Font Size](/fluid-font-size/).

```html
<!-- Example -->
<div class="fluid text-min-lg text-max-sm">
  ...
</div>
```

---

# Margin

Find out more about the usage of [Fluid Margin](/fluid-margin/).

<div class="flex (xs)flex-column (sm)flex-row">
  <div class="relative height-72 width-88 padding-0 bg-tint-granite-4 border-l-2 border-t-2 border-b-2 border-shade-granite-5 curve-border-l-lg">
    <div class="padding-4 text-lg font-mono">
      fluid-margin-lg
    </div>
    <div class="relative height-48 width-64 bg-tint-granite-3 flex justify-center items-center">
      <div class="absolute top-2 left-4 text-gray-8">
        Margin
      </div>
      <div class="padding-x-10 padding-y-10 text-shade-lime-5 bg-tint-lime-5">
        Content
      </div>
    </div>
    <div class="absolute bottom-2 left-4 text-sm font-mono font-semibold">
      Small Screen
    </div>
  </div>
  <div class="relative height-72 width-full bg-tint-granite-5 border-r-2 border-t-2 border-b-2 border-shade-granite-5 curve-border-r-lg">
    <div class="padding-4 text-lg font-mono">
      fluid-margin-sm
    </div>
    <div class="relative height-48 width-full bg-tint-granite-4 flex justify-center items-center">
      <div class="absolute top-2 left-4 text-gray-8">
        Margin
      </div>
      <div class="width-96 padding-y-16 flex justify-center items-center text-shade-lime-5 bg-tint-lime-5">
        Content
      </div>
    </div>
    <div class="absolute bottom-2 right-4 text-sm font-mono font-semibold">
      Large Screen
    </div>
  </div>
</div>

---

```html
<!-- Example -->
<div class="fluid margin-min-lg margin-max-sm">
  ...
</div>
```

---

# Padding

<div class="flex (xs)flex-column (sm)flex-row">
  <div class="relative height-72 width-88 padding-0 bg-tint-granite-5 border-l-2 border-t-2 border-b-2 border-shade-granite-5 curve-border-l-lg">
    <div class="padding-4 text-lg font-mono">
      fluid-padding-lg
    </div>
    <div class="relative height-48 width-64 bg-tint-granite-4 flex justify-center items-center">
			<div class="absolute top-2 left-4 text-gray-8">
				Padding
			</div>
			<div class="padding-x-10 padding-y-10 text-shade-lime-1 bg-tint-lime-5">
				Content
			</div>
    </div>
    <div class="absolute bottom-2 left-4 text-sm font-mono font-semibold">
      Small Screen
    </div>
  </div>
  <div class="relative height-72 width-full bg-tint-granite-4 border-r-2 border-t-2 border-b-2 border-shade-granite-5 curve-border-r-lg">
    <div class="padding-4 text-lg font-mono">
      fluid-padding-sm
    </div>
    <div class="relative height-48 width-full bg-tint-granite-3 flex justify-center items-center">
			<div class="absolute top-2 left-4 text-gray-8">
				Padding
			</div>
			<div class="width-96 padding-y-16 flex justify-center items-center text-shade-lime-1 bg-tint-lime-5">
				Content
			</div>
    </div>
    <div class="absolute bottom-2 right-4 text-sm font-mono font-semibold">
      Large Screen
    </div>
  </div>
</div>

---

Find out more about the usage of [Fluid Padding](/fluid-padding/).

{{ console('html',
'<!-- Example -->
<div class="fluid padding-min-lg padding-max-sm">
  ...
</div>
') }}

---

{% include "button-getting-started.njk" %}