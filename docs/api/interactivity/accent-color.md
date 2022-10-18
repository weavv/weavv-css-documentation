---
footer: false
---

> Interactivity

# Accent Color

Utilities for re-tinting the accented color of form controls including checkbox, radio button and, range.

## Variant

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">CSS</span> | |
|:--|:--|
| accent-shade-`{palettes}` | <div class="text-sm depth-tight-1"><span class="padding-r-1">See:</span><a class="text-underline font-semibold" href="/getting-started-palette/">Palette</a> page to find more about the color options (Shades, Tones, Tints), color manipulations (saturation, brightness, contrast), and transparency.</div> |
| accent-tone-`{palettes}` | |
| accent-tint-`{palettes}` | |

## Usage

```html
<input class="accent-tint-teal-1 ... width-24 height-24" type="checkbox">
<input class="accent-tint-teal-1 ... width-24 height-24" type="radio">
```

```scss
.dummy {
  @extend
    .accent-tint-teal-1,
    .width-24,
    .height-24;
}
```
