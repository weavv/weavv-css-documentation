---
id: utility-first
title: Utility-First
description: WEAVV is a utility-centric framework. Creating a complex component from a bunch of small functional CSS building blocks.
topic: Core Concepts
layout: default
---

# Utility-First

{{ site.productname }} is a utility-centric framework. Which, creating a complex component from a bunch of small functional CSS building blocks.

Each utility property can be configured for different conditions. Such as the value of the text size, spacing, color shades, which also can be configured to respond to different screen sizes and different types of interactivity such as `hover`, `focus`, `active`, and so on.

<div class="margin-t-4 margin-x-4 padding-3 border-l-8 text-sm">
  <span class="padding-r-1 font-semibold">
    Note:
  </span>
  Read more information about the
  <a href="/responsive/">
    Responsive
  </a> and
  <a href="/pseudo-class-variants/">
    Pseudo-Class Variants
  </a>
</div>

## Writing Styles

The idea of how the utility works in the {{ site.productname }} CSS framework. To get you to understand it more comprehensively, let have a look at the two HTML and CSS writing examples.

### Conventional Style

<div class="box-panel">
  <div class="box-content">
    <img src="https://i.pravatar.cc/100">
    <span>
      John Doe
    </span>
  </div>
</div>

<style>
  .box-panel {
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    margin: 2rem auto;
    max-width: 300px;
    padding: 2rem 1rem;
  }
  .box-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box-content img {
    background-color: #edf2f7;
    border-radius: 100%;
    height: 4rem;
    width: 4rem;
    margin-right: 1rem;
  }
  .box-content span {
    color: #262626;
    font-size: 1.125em;
  }
</style>

```html
<!-- Example -->
<div class="box-panel">
  <div class="box-content">
    <img src="https://i.pravatar.cc/100">
    <span>
      John Doe
    </span>
  </div>
</div>

<style>
  .box-panel {
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    margin: 2rem auto;
    max-width: 300px;
    padding: 2rem 1rem;
  }
  .box-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box-content img {
    background-color: #edf2f7;
    border-radius: 100%;
    height: 4rem;
    width: 4rem;
    margin-right: 1rem;
  }
  .box-content span {
    color: #262626;
    font-size: 1.125em;
  }
</style>
```

### {{ site.productname }} Style

When styling the elements with {{ site.productname }}, you don't have to write like the example above traditionally. You can create your styling to your component right away in the HTML instead.

<div class="margin-x-auto margin-y-8 max-width-xs">
  <div class="flex justify-center items-center padding-x-4 padding-y-8 bg-white curve-border-lg shadow-md">
    <img
      class="height-16 width-16 curve-border-full object-cover object-center overflow-hidden"
      src="https://i.pravatar.cc/100"
    >
    <div class="padding-x-4 text-shade-granite-1 text-lg">
      John Doe
    </div>
  </div>
</div>

```html
<!-- Example -->
<div class="margin-x-auto margin-y-8 max-width-xs">
  <div class="flex justify-center items-center padding-x-4 padding-y-8 bg-white curve-border-lg shadow-md">
    <img
      class="height-16 width-16 object-cover object-center curve-border-full overflow-hidden"
      src="https://i.pravatar.cc/100"
    >
    <div class="padding-x-4 text-shade-granite-1-1 text-lg">
      John Doe
    </div>
  </div>
</div>
```
