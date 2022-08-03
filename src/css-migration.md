---
id: css-migration
title: CSS Migration
description: How to migrate the existing CSS or CSS framework you use in your project with WEAVV.
topic: Core Concepts
layout: default
---

{% from "misc/console.njk" import console %}

# CSS Migration

Migrating existing CSS to {{ site.productname }} CSS is a tedious job for frontend developers. We will be using the SASS's [`@extend`](https://sass-lang.com/documentation/at-rules/extend) directive to extract the {{ site.productname }} utility classes, and replacing the existing CSS properties of your style sheet. (See [Extract Utility Classes](/extract-utility-classes/), [Create Empty Project](/create-empty-project/)).

<div class="margin-y-4 margin-x-4 padding-3 border-l-8 text-sm">
  <span class="padding-r-1 font-semibold">
    Note:
  </span>
  Require SASS preprocessor to use the
  <strong>
    @extend
  </strong>
  directive. (See
  <a href="/installation/#using-{{ site.smallproductname }}-via-cli">
    Using {{ site.productname }} via CLI
  </a>.)
</div>

## Examples

Here we have existing classes in the HTML file, and we might not want to change the class names so lightly. So we leave it as it should be untouched.

<div class="margin-x-auto margin-y-8 profile">
  <div class="profile-wrapped">
    <img
      class="profile-photo"
      src="https://i.pravatar.cc/200"
    >
    <div class="profile-username">
      John Doe
    </div>
  </div>
  <div class="profile-description">
    Lorem ipsum dolor sit amet,
    consectetur adipiscing elit.
  </div>
</div>

<style>
  .profile {
    color: #718096;
    max-width: 20rem;
    padding: 1.5rem;
    background-color: white;
    box-shadow:
      0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    border-radius: 0.5rem;
  }
  .profile-wrapped {
    display: flex;
    justify-content: start;
    align-items: center;
  }
  .profile-photo {
    width: 5rem;
    height: 5rem;
    object-cover: fit;
    object-position: center;
    border-radius: 9999px;
    border-width: 0.25em;
    border-color: #f7fafc;
    box-shadow:
      0 1px 3px 0 rgba(0, 0, 0, 0.1),
      0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }
  .profile-username {
    padding: 1rem;
    font-size: 1.5rem;
    font-weight: 600;
  }
  .profile-description {
    font-size: .875rem;
    line-height: 1.25;
    padding-top: 0.5rem;
  }
</style>

{{ console('html',
'<div class="profile">
    <div class="profile-wrapped">
      <img class="profile-photo" src="https://i.pravatar.cc/200">
      <div class="profile-username">
        John Doe
      </div>
    </div>
    <div class="profile-description">
      Lorem ipsum dolor sit amet,
      consectetur adipiscing elit.
    </div>
  </div>
') }}

{{ console('css',
'<style>
    .profile {
      color: #718096;
      max-width: 20rem;
      padding: 1.5rem;
      background-color: white;
      box-shadow:
        0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
      border-radius: 0.5rem;
    }
    .profile-wrapped {
      display: flex;
      justify-content: start;
      align-items: center;
    }
    .profile-photo {
      width: 5rem;
      height: 5rem;
      object-cover: fit;
      object-position: center;
      border-radius: 9999px;
      border-width: 0.25em;
      border-color: #f7fafc;
      box-shadow:
        0 1px 3px 0 rgba(0, 0, 0, 0.1),
        0 1px 2px 0 rgba(0, 0, 0, 0.06);
    }
    .profile-username {
      padding: 1rem;
      font-size: 1.5rem;
      font-weight: 600;
    }
    .profile-description {
      font-size: .875rem;
      line-height: 1.25;
      padding-top: 0.5rem;
    }
</style>
') }}

# Two Different Ways Of Styling

## Custom SCSS Styling

We use the `@extend` directive to expose the {{ site.productname }} utility classes to replacing the existing selectors CSS properties, look like the below,

<div class="margin-y-4 margin-x-4 padding-3 border-l-8 text-sm">
  <span class="padding-r-1 font-semibold">
    Note:
  </span>
  If your existing stylesheet file is in
  <strong>
  .css
  </strong>
  , you will need to rename them to
  <strong>
  .scss
  </strong>
  ,and with SASS/SCSS Preprocessor installed.
</div>

{{ console('scss',
'// @file: `style.scss`
// after refactoring with WEAVV in `.scss` existing file.
.profile {
    @extend
      .margin-10,
      .padding-6,
      .max-width-xs,
      .text-shade-granite-5,
      .bg-white,
      .shadow-lg,
      .curve-border-lg;
}

.profile-wrapped {
    @extend
      .flex,
      .justify-start,
      .items-center;
}

.profile-photo {
    @extend
      .width-20,
      .height-20,
      .object-cover,
      .object-center,
      .curve-border-full,
      .border-4,
      .border-tint-granite-1,
      .shadow;
}

.profile-username {
    @extend
      .padding-4,
      .text-xl-2,
      .font-semibold;
}

.profile-description {
    @extend
      .padding-y-2,
      .text-sm,
      .depth-tight-2;
}
') }}

## HTML Inline Styling

Styling without the need of importing an external CSS file.

{{ console('html',
'<div class="margin-10 padding-6 max-width-xs text-shade-granite-1 bg-white shadow-lg curve-border-lg">
    <div class="flex justify-start items-center">
      <img class="width-20 height-20 object-cover object-center curve-border-full border-4 border-tint-granite-5 shadow" src="https://i.pravatar.cc/200">
      <div class="padding-4 text-xl-2 font-semibold">
        John Doe
      </div>
    </div>
    <div class="padding-y-2 text-sm depth-tight-2">
      Lorem ipsum dolor sit amet,
      consectetur adipiscing elit.
    </div>
  </div>
') }}
