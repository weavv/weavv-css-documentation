---
footer: false
---

# Pseudo-Class Variants

Using utilities to add CSS pseudo-class to style an element to enhance logical interactivity behavior.

## Breakpoints

Add one of these prefixes `(xs)`, `(sm)`, `(md)`, `(lg)`, `(1k)`, `(2k)`, `(4k)`, `(8k)` to a utility to enable responsive response to different screen sizes.

```html
<div class="
  (xs)text-lg 
  (2k)text-xl-4
">
  ...
</div>
```

:::details SCSS
```scss
.dummy {
  @extend
    .\(xs\)text-lg,
    .\(2k\)text-xl-4;
}
```
:::

## Expand

Add the `(expand)` prefix to a utility in a parent element, the utility will take effect on all child elements.

```html
<!-- parent -->
<div class="
  (expand)margin-2 
  (expand)padding-4
">
  <!-- child -->
  <div>...</div>
  <div>...</div>
  ...
</div>
```

:::details SCSS
```scss
.dummy {
  @extend
    .\(expand\)margin-2,
    .\(expand\)padding-4;
}
```
:::

:::info These are the default enabled utilities to use with the `(expand)` variant:
- [Border Radius](/api/borders/border-radius)
- [Box Shadow](/api/effects/box-shadow-color)
- [Overflow](/api/layouts/overflow)
- [Height](/api/sizing/height)
- [Width](/api/sizing/width)
- [Margin](/api/spacing/margin)
- [Padding](/api/spacing/padding)
:::

## Hover

```html
<div class="
  text-shade-granite-1 
  (hover)text-white 
  bg-white 
  (hover)bg-tint-granite-5
">
  ...
</div>
```

:::details SCSS
```scss
.dummy {
  @extend
    .text-shade-granite-1,
    .\(hover\)text-white,
    .bg-white,
    .\(hover\)bg-tint-granite-5;
}
```
:::

## Group-Hover

```html
<!-- parent -->
<div class="
  (group) 
  bg-tint-granite-5 
  (hover)bg-tint-granite-1
">
  <!-- children -->
  <div class="(group-hover)text-white">
    ...
  </div>
</div>
```

:::details SCSS
```scss
.dummy {
  @extend
    .\(group\),
    .bg-tint-granite-5,
    .\(hover\)bg-tint-granite-1;
}
```
:::

## Group-Focus

```html
<!-- parent -->
<div class="
  (group) 
  bg-tint-granite-5 
  (focus)bg-tint-granite-1
">
  <!-- children -->
  <div class="(group-focus)text-white">
    ...
  </div>
</div>
```

:::details SCSS
```scss
.dummy {
  @extend
    .\(group\),
    .bg-tint-granite-5.
    .\(focus\)bg-tint-granite-1;
}
```
:::

## Selection-Hover

Add the `(selection-hover)` prefix to `filter` utilities with setting up parent and child elements.

> **Note:** Deselected elements are affected by the `filter` configurations.

```html
<!-- parent -->
<div class="
  (selection-hover)filter 
  saturate-0 
  blur-10 ... 
  smooth-200
">
  <!-- children -->
  <div>
    <div>
      ...
    </div>
  </div>
</div>
```

:::details SCSS
```scss
.dummy {
  @extend
    .\(selection-hover\)filter,
    .saturate-0,
    .blur-10,
    .smooth-200;
}
```
:::

:::info These are the default selected **Filters** utilities for `(selection-hover)` variant:
- [Blur](/api/filters/filter-blur)
- [Brightness](/api/filters/filter-brightness)
- [Contrast](/api/filters/filter-contrast)
- [Drop Shadow](/api/filters/filter-drop-shadow)
- [Saturate](/api/filters/filter-saturate)
- [Smooth](/api/filters/filter-smooth)
:::

## Focus

```html
<input 
  class="
    bg-tint-granite-2 
    (focus)bg-tint-granite-5 
    border-transparent 
    (focus)border-tint-granite-5
  " 
  placeholder="Focus me!"
>
```

:::details SCSS
```scss
.dummy {
  @extend
    .bg-tint-granite-2,
    .\(focus\)bg-tint-granite-5,
    .border-transparent,
    .\(focus\)border-tint-granite-5;
}
```
:::

## Focus-Within

```html
<!-- parent -->
<div class="
  (focus-within)text-shade-lava-1
  (focus-within)bg-tint-lava-5
">
  <!-- children -->
  Title: <input placeholder="Focus me!">
</div>
```

:::details SCSS
```scss
.dummy {
  @extend
    .\(focus-within\)text-shade-lava-1,
    .\(focus-within\)bg-tint-lava-5;
}
```
:::

## Focus-Visible

```html
<div class="
  bg-tint-granite-5 
  (focus-visible)bg-tint-granite-2
">
  ...
</div>
```

:::details SCSS
```scss
.dummy {
  @extend
    .bg-tint-granite-5,
    .\(focus-visible\)bg-tint-granite-2;
}
```
:::

## Active

```html
<button class="
  bg-tint-granite-5 
  (active)bg-tint-granite-2 ...
  text-white
">
  ...
</button>
```

:::details SCSS
```scss
.dummy {
  @extend
    .bg-tint-granite-5,
    .\(active\)bg-tint-granite-2,
    .text-white;
}
```
:::

## Visited

```html
<a 
  class="
    text-shade-granite-1 
    (visited)text-shade-lava-1 
    (visited)text-underline" 
  href="..."
>
  ...
</a>
```

:::details SCSS
```scss
.dummy {
  @extend
    .text-shade-granite-1,
    .\(visited\)text-shade-lava-1,
    .\(visited\)text-underline;
}
```
:::

## Checked

```html
<button class="
  (checked)text-white 
  (checked)bg-tint-granite-5 
  (checked)text-underline
">
  ...
</button>
```

:::details SCSS
```scss
.dummy {
  @extend
    .\(checked\)text-white,
    .\(checked\)bg-tint-granite-5,
    .\(checked\)text-underline;
}
```
:::

## Disabled

```html
<button class="
  (disabled)text-shade-granite-1 
  (disabled)bg-tint-granite-5
">
  ...
</button>
```

:::details SCSS
```scss
.dummy {
  @extend
    .\(disabled\)text-shade-granite-1,
    .\(disabled\)bg-tint-granite-5;
}
```
:::

## First-last

Add the `(first)` or `(last)` prefix to a utility in a parent element, the utility will take effect on the first child or last child elements.

```html
<!-- parent -->
<div class="
  (first)text-xl-2 
  (last)text-xs
">
  <!-- children -->
  <div>...</div>
  <div>...</div>
  ...
</div>
```

:::details SCSS
```scss
.dummy {
  @extend
    .\(first\)text-xl-2,
    .\(last\)text-xs;
}
```
:::

## First Letter

Add the `(first-letter)` prefix to a utility in a parent element, the utility will take effect on the child element containing text and apply the effect to the first letter of the text.

```html
<!-- parent -->
<div class="
  (first-letter)text-xl-2 
  (first-letter)text-tint-lava-2 
  (first-letter)font-semibold
">
  <!-- children -->
  <div>...</div>
  <div>...</div>
  ...
</div>
```

:::details SCSS
```scss
.dummy {
  @extend
    .\(first-letter\)text-xl-2,
    .\(first-letter\)text-tint-lava-2,
    .\(first-letter\)font-semibold;
}
```
:::

## Dark Mode

Add the `(dark)` prefix to a utility when dark theme settings are enabled.

```html
<div class="
  text-shade-granite-1 
  (dark)text-tint-granite-5
">
  ...
</div>
```

:::details SCSS
```scss
.dummy {
  @extend
    .text-shade-granite-1,
    .\(dark\)text-tint-granite-5;
}
```
:::

## Light Mode

Add the `(light)` prefix to a utility when light theme settings are enabled.

```html
<div class="
  text-shade-granite-1 
  (light)text-shade-granite-5
">
  ...
</div>
```

:::details SCSS
```scss
.dummy {
  @extend
    .text-shade-granite-1,
    .\(light\)text-shade-granite-5;
}
```
:::

:::info These are the default enabled utilities to use with `(light)` and `(dark)` variants:
- [Background Color](/api/backgrounds/background-color/)
- [Border Color](/api/borders/border-color/)
- [Box Shadow](/api/effects/box-shadow/)
- [Filter Invert](/api/filters/filter-invert)
- [Background Gradient](/api/backgrounds/gradient/)
- [Placeholder Color](/api/interactivity/placeholder-color/)
- [Text Color](/api/typography/text-color/)
:::

## Reduce-Motion

Add the `(reduce-motion)` prefix to a utility to reduce animation motion for readers with vestibular motion disorders.

```html
<div class="
  (reduce-motion)transition
  duration-300
  ease-in-out ...
  border-4 
  border-tint-granite-5 
  (hover)border-tint-granite-1 ...
  (hover)shadow-lg ... 
  width-32 
  height-24
">
  ...
</div>
```

:::details SCSS
```scss
.dummy {
  @extend
    .\(reduce-motion\)transition,
    .duration-300,
    .ease-in-out,
    .border-4,
    .border-tint-granite-5,
    .\(hover\)border-tint-granite-1,
    .\(hover\)shadow-lg,
    .width-32,
    .height-24;
}
```
:::

## Portrait

Add the `(portrait)` prefix to a utility when portrait settings are enabled.

```html
<div class="
  flex 
  (portrait)flex-column
">
  ...
</div>
```

:::details SCSS
```scss
.dummy {
  @extend
    .flex,
    .\(portrait\)flex-column;
}
```
:::

## Landscape

Add the `(landscape)` prefix to a utility when landscape settings are enabled.

```html
<div class="
  flex 
  (landscape)flex-column
">
  ...
</div>
```

:::details SCSS
```scss
.dummy {
  @extend
    .flex,
    .\(landscape\)flex-column;
}
```
:::

:::info These are the default enabled utilities to use with `(portrait)` and `(landscape)` variants:
- [Flex Direction](/api/flexbox/flex-direction/)
:::
