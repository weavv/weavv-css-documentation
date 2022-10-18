---
footer: false
---

# Customize Utilities

First download the Weavv CSS framework repository.

```bash
$ git clone https://github.com/weavv/weavv-css.git
$ cd weavv-css
```

To customize the Weavv CSS framework by `enable` or `disable` the utility modules in the `.scss` files. The final build file size will be smaller or bigger depends on how much utility you need.

## Configure Utility Components

- File location: `.src/full.scss`.
- File location: `.src/minimal.scss`.

## Configure Variants

- File location: `.src/configs/_variants.scss`

## Configure Modifiers

You can customize the Weavv CSS default configuration file `./src/configs/_modifiers.scss` by adding or removing the `modifier` values that you don't need. If you find a utility that is not included in the build, you can create your utility using the [Plugin API](/guide/customization/plugin-api).

```scss
$screens: (
  xs: 320px,
  sm: 640px,
  md: 768px,
  lg: 1024px,
  xl: 1280px,
  2k: 1920px,
  3k: 2560px,
  4k: 3840px
  5k: 5120px,
  6k: 5760px,
  7k: 7000px,
  8k: 7680px
);
```

> **Note:** The most recommended and effective way to strip down unused CSS classes is using [PurgeCSS](https://purgecss.com) or using [Weavv CLI tool](). See also, [Reduce File Size](/guide/customization/reduce-file-size).


