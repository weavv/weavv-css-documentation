---
footer: false
---

# Responsive Utilities

Craft an adaptive user interface with responsive utility variants.

Every utility class in WEAVV CSS can be configured instantly with different breakpoints without leaving your HTML and without even using the `@media` in your custom CSS.

For any of the breakpoints that are prefixed with a utility, the utility value can be inherited from the smaller width to the maximum width. It means, the smaller-breakpoint-first, the rest follows it. Take the example below.

> **Example:** We have a text size is `(lg)` at the `(xs)` breakpoint, and text size is `(xl-4)` at the `(2k)` breakpoint. The rest of the breakpoints that are not defined are `(sm)`, `(md)`, `(lg)`, and `(1k)` will inherit the `(xs)`'s utility value, at the same time `(4k)`, `(8k)` will inherit the `(2k)`'s utility value.

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

## Modern Breakpoints

These are the default breakpoints covering almost all common devices.

```css
/* Small (sm) */
@media (min-width: 640px) { ... }
/* Medium (md) */
@media (min-width: 768px) { ... }
/* Large (lg) */
@media (min-width: 1024px) { ... }
/* Extra Large (1k) */
@media (min-width: 1280px) { ... }
/* 2k */
@media (min-width: 1920px) { ... }
```

## Ultra-Wide Breakpoints

The ultra-wide screen breakpoints are an option to fill up the new aesthetic design of the extra empty spaces. Instead of the design being positioned at the center of the browser viewport, why not expand more design and spread more meaningful pieces of information on the ultra-wide screen opportunity?

```css
/* 3k */
@media (min-width: 2560px) { ... }
/* 4k */
@media (min-width: 3840px) { ... }
/* 5k */
@media (min-width: 5120px) { ... }
/* 6k */
@media (min-width: 5760px) { ... }
/* 7k */
@media (min-width: 7000px) { ... }
/* 8k */
@media (min-width: 7680px) { ... }
```

## Legacy Breakpoints

Any lower than 300 pixels of viewport width is considered a legacy. If your project still needs a legacy breakpoint, Weavv still supports it by default. You can remove the legacy breakpoint by [customizing the modifier configurations](#customize-breakpoints).

```css
/* Extra Small (xs) */
@media (min-width: 320px) { ... }
```

## Breakpoint Examples

To prefix the breakpoint name (e.g. `(xs)`, `(sm)`, `(md)`, `(lg)` and so on) wrapped with the `()` parenthesis characters, before the `class name`.

> **EXAMPLE:** The font size is `text-xl-1` on `(sm)` small screen, while `text-md` on `(lg)` large screen.

```html
<div class="
  (sm)text-xl-1 
  (lg)text-md
">
  ...
</div>
```

:::details SCSS
```scss
.dummy {
  @extend
    .\(sm\)text-xl-1,
    .\(lg\)text-md;
}
```
:::

> **Example:** The background color is charcoal on `(sm)` small screen, red on `(lg)` large screen.

```html
<div class="
  (sm)bg-shade-amber-1 
  (lg)bg-shade-amber-5
">
  ...
</div>
```

:::details SCSS
```scss
.dummy {
  @extend
    .\(sm\)bg-shade-amber-1,
    .\(lg\)bg-shade-amber-5;
}
```
:::

## Customize Breakpoints

To add or remove breakpoints, look for `$screens` variables in the `src/configs/_modifiers.scss`.

```scss
// @file `src/configs/_modifiers.scss`
$screens: (
  xs: 320px, // legacy
  sm: 640px, // modern
  md: 768px,
  lg: 1024px,
  1k: 1280px,
  2k: 1920px,
  3k: 2560px, // ultra-wide
  4k: 3840px,
  5k: 5120px,
  6k: 5760px,
  7k: 7000px,
  8k: 7680px
);
```
