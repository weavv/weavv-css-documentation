---
id: fill
title: SVG
description: Utilities for sets the color to paint an SVG.
topic: SVG
layout: default
---

> SVG

# Fill

Utilities for sets the color to paint an SVG.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for svgfill in variants.svgfill %}{% for item in svgfill.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| fill-current | fill: currentColor |

---

## Usage

{% from "misc/console.njk" import console %}

Set a SVG image with color overrides by using `text-{palettes}-{modifier}` utility. (See [Text Color](/text-color/)).

<div class="padding-x-4 margin-y-4 margin-x-auto width-56">
  <svg
		class="width-full height-24 fill-current text-shade-amber-4"
		role="img"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		viewBox="0 0 46.8 46.8"
		enable-background="new 0 0 46.8 46.8"
		xml:space="preserve">
		<g>
			<path display="none" fill="#FFFFFF" d="M49.8,45.3c-16.3,0-32.5,0-48.8,0C1,30.6,1,16,1,1.4c16.3,0,32.5,0,48.8,0
				C49.8,16,49.8,30.6,49.8,45.3z M8.8,38.6c0.1-0.2,0.2-0.3,0.3-0.5c3.3-5.9,6.7-11.8,9.9-17.8c1.5-2.7,1.4-1.8,1.4-5.2
				c0-3.7,0-7.3,0-11c0-1.7-0.9-2.6-2.6-2.6c-0.6,0-1.3,0-1.9,0c-2,0-3.7,0.8-4.7,2.5C8.1,9.6,4.9,15.3,1.7,20.9
				c-0.9,1.6-0.9,3.2,0,4.8c2.3,4.2,4.6,8.4,6.9,12.5C8.7,38.4,8.7,38.5,8.8,38.6z M41,38.6c0.1-0.1,0.1-0.2,0.2-0.2
				c2.4-4.3,4.7-8.5,7.1-12.8c0.8-1.5,0.8-3.1-0.1-4.6C45,15.4,41.9,9.8,38.7,4.1c-0.8-1.5-2.1-2.3-3.7-2.5c-1-0.1-2.1-0.1-3.1-0.1
				c-1.3,0-2.3,1-2.3,2.3c0,4.4,0,8.9,0,13.3c0,0.5,0.2,1.1,0.4,1.6c2.7,4.9,5.5,9.9,8.3,14.8C39.1,35.2,40.1,36.9,41,38.6z
				M24.9,45.1C24.9,45.1,24.9,45.1,24.9,45.1c3.2,0,6.5,0,9.7,0c1.1,0,2.1-0.4,3-1c2-1.5,2.4-4.2,1-6.5c-1.4-2.4-2.8-4.8-4.2-7.2
				c-0.2-0.3-0.3-0.3-0.6-0.3c-1.2,0-2.3,0-3.5,0c-4.8,0-9.6,0-14.4,0c-0.2,0-0.5,0.1-0.6,0.2c-1.5,2.6-3.1,5.1-4.5,7.7
				c-0.8,1.4-0.8,2.9-0.1,4.4c0.8,1.8,2.3,2.7,4.3,2.7C18.4,45.2,21.7,45.1,24.9,45.1z"/>
			<path d="M8.8,38.6c-0.1-0.1-0.2-0.2-0.2-0.3C6.3,34.1,4,29.9,1.7,25.8c-0.9-1.6-0.9-3.2,0-4.8C4.9,15.3,8.1,9.6,11.3,4
				c1-1.8,2.7-2.5,4.7-2.5c0.6,0,1.3,0,1.9,0c1.7,0,2.6,0.9,2.6,2.6c0,3.7,0,7.3,0,11c0,3.5,0.1,2.5-1.4,5.2
				c-3.3,5.9-6.6,11.9-9.9,17.8C9,38.3,8.9,38.4,8.8,38.6z"/>
			<path d="M41,38.6c-1-1.7-1.9-3.4-2.8-5.1c-2.8-4.9-5.5-9.9-8.3-14.8c-0.3-0.5-0.4-1.1-0.4-1.6c0-4.4,0-8.9,0-13.3
				c0-1.3,1-2.3,2.3-2.3c1,0,2.1,0,3.1,0.1c1.6,0.2,2.9,1.1,3.7,2.5C41.9,9.8,45,15.4,48.2,21c0.8,1.5,0.9,3.1,0.1,4.6
				c-2.3,4.3-4.7,8.6-7.1,12.8C41.2,38.5,41.1,38.5,41,38.6z"/>
			<path d="M24.9,45.1c-3.3,0-6.6,0-9.8,0c-1.9,0-3.4-1-4.3-2.7c-0.7-1.4-0.7-3,0.1-4.4c1.4-2.6,3-5.1,4.5-7.7
				c0.1-0.1,0.4-0.2,0.6-0.2c4.8,0,9.6,0,14.4,0c1.2,0,2.3,0,3.5,0c0.3,0,0.5,0.1,0.6,0.3c1.4,2.4,2.8,4.8,4.2,7.2
				c1.4,2.3,0.9,5.1-1,6.5c-0.9,0.7-1.9,1-3,1C31.4,45.1,28.2,45.1,24.9,45.1C24.9,45.1,24.9,45.1,24.9,45.1z"/>
		</g>
  </svg>
</div>

{{ console('html',
'<svg class="fill-current text-shade-amber-4">
    ...
  </svg>
') }}

{{ console('scss',
'svg {
		@extend
			.fill-current,
			.text-shade-amber-4;
}
') }}

