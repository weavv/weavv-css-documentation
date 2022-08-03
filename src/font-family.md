---
id: font-family
title: Font Family
description: Utilities for sets the font family and Google Fonts.
topic: Typography
layout: default
---

> Typography

# Font Family

Utilities for sets the native font family and Google Fonts.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for fontfamily in variants.fontfamily %}{% for item in fontfamily.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> | |
|:--|:--|:-:|
| font-default | font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Helvetica Neue, sans-serif | <div class="padding-x-2 text-lg font-default bg-white">Text</div> |
| font-sans | font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell, Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Lucida Grande, Helvetica, Arial, sans-serif | <div class="padding-x-2 text-lg font-sans bg-white">Text</div> |
| font-serif | font-family: Noto Serif, Droid Serif, Georgia, Cambria, Times New Roman, Times, serif | <div class="padding-x-2 text-lg font-serif bg-white">Text</div> |
| font-mono | font-family: SF Mono, Consolas, Roboto Mono, Noto Mono, Droid Mono, Fira Mono, Ubuntu Mono, Oxygen Mono, Lucida Console, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace | <div class="padding-x-2 text-lg font-mono bg-white">Text</div> |
| font-arabic | font-family: Arabic UI Display, Geeza Pro, Simplified Arabic, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell, Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Lucida Grande, Helvetica, Arial, sans-serif | <div class="padding-x-2 text-lg font-arabic bg-white">نص</div> |
| font-japanese | font-family: Meiryo, Yu Gothic, Hiragino Kaku Gothic Pro, Hiragino Sans, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell, Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Lucida Grande, Helvetica, Arial, sans-serif | <div class="padding-x-2 text-lg font-japanese bg-white">テキスト</div> |
| font-korean | font-family: Malgun Gothic, Apple SD Gothic Neo, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell, Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Lucida Grande, Helvetica, Arial, sans-serif | <div class="padding-x-2 text-lg font-korean bg-white">본문</div> |
| font-thai | font-family: Leelawadee, Thonburi, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell, Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Lucida Grande, Helvetica, Arial, sans-serif | <div class="padding-x-2 text-lg font-thai bg-white">ข้อความ</div> |
| font-chinese | font-family: Microsoft Yahei, PingFang SC, PingFang TC, Hiragino Sans, Hiragino Kaku Gothic Pro, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell, Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Lucida Grande, Helvetica, Arial, sans-serif | <div class="padding-x-2 text-lg font-chinese bg-white">文本</div> |

---

## Usage

{% from "misc/console.njk" import console %}

Set font family to an specific element.

{{ console('html',
'<div class="font-default">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .font-default;
}
') }}

Set font family to `<body>` as default.

{{ console('html',
'<body class="font-default">
    ...
  </body>
') }}

{{ console('scss',
'body {
    @extend
      .font-default;
}
') }}

### Google Fonts

Built-in handpicked 30 font types from Google Fonts.

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for googlefonts in variants.googlefonts %}{% for item in googlefonts.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> | |
|:--|:--|:-:|
| font-alegreya | font-family: "Alegreya", sans-serif | <div class="padding-x-2 text-xl-1 font-alegreya bg-white">Text</div> |
| font-alegreya-sans | font-family: "Alegreya Sans", sans-serif | <div class="padding-x-2 text-xl-1 font-alegreya-sans bg-white">Text</div> |
| font-archivo-narrow | font-family: "Archivo Narrow", sans-serif | <div class="padding-x-2 text-xl-1 font-archivo-narrow bg-white">Text</div> |
| font-biorhyme | font-family: "BioRhyme", sans-serif | <div class="padding-x-2 text-xl-1 font-biorhyme bg-white">Text</div> |
| font-cardo | font-family: "Cardo", sans-serif | <div class="padding-x-2 text-xl-1 font-cardo bg-white">Text</div> |
| font-chivo | font-family: "Chivo", sans-serif | <div class="padding-x-2 text-xl-1 font-chivo bg-white">Text</div> |
| font-inconsolata | font-family: "Inconsolata", sans-serif | <div class="padding-x-2 text-xl-1 font-inconsolata bg-white">Text</div> |
| font-inknut-antiqua | font-family: "Inknut Antiqua", sans-serif | <div class="padding-x-2 text-xl-1 font-inknut-antiqua bg-white">Text</div> |
| font-karla | font-family: "Karla", sans-serif | <div class="padding-x-2 text-xl-1 font-karla bg-white">Text</div> |
| font-lato | font-family: "Lato", sans-serif | <div class="padding-x-2 text-xl-1 font-lato bg-white">Text</div> |
| font-libre-baskerville | font-family: "Libre Baskerville", sans-serif | <div class="padding-x-2 text-xl-1 font-libre-baskerville bg-white">Text</div> |
| font-lora | font-family: "Lora", sans-serif | <div class="padding-x-2 text-xl-1 font-lora bg-white">Text</div> |
| font-manrope | font-family: "Manrope", sans-serif | <div class="padding-x-2 text-xl-1 font-manrope bg-white">Text</div> |
| font-merriweather | font-family: "Merriweather", sans-serif | <div class="padding-x-2 text-lg font-merriweather bg-white">Text</div> |
| font-montserrat | font-family: "Montserrat", sans-serif | <div class="padding-x-2 text-lg font-montserrat bg-white">Text</div> |
| font-neuton | font-family: "neuton", sans-serif | <div class="padding-x-2 text-lg font-neuton bg-white">Text</div> |
| font-open-sans | font-family: "Open Sans", sans-serif | <div class="padding-x-2 text-lg font-open-sans bg-white">Text</div> |
| font-pt-sans | font-family: "PT Sans", sans-serif | <div class="padding-x-2 text-lg font-pt-sans bg-white">Text</div> |
| font-pt-serif | font-family: "PT Serif", sans-serif | <div class="padding-x-2 text-lg font-pt-serif bg-white">Text</div> |
| font-playfair-display | font-family: "PlayFair Display", sans-serif | <div class="padding-x-2 text-lg font-playfair-display bg-white">Text</div> |
| font-poppins | font-family: "Poppins", sans-serif | <div class="padding-x-2 text-lg font-poppins bg-white">Text</div> |
| font-proza-libre | font-family: "Proza Libre", sans-serif | <div class="padding-x-2 text-lg font-proza-libre bg-white">Text</div> |
| font-raleway | font-family: "Raleway", sans-serif | <div class="padding-x-2 text-lg font-raleway bg-white">Text</div> |
| font-roboto | font-family: "Roboto", sans-serif | <div class="padding-x-2 text-lg font-roboto bg-white">Text</div> |
| font-roboto-slab | font-family: "Roboto Slab", sans-serif | <div class="padding-x-2 text-lg font-roboto-slab bg-white">Text</div> |
| font-rubik | font-family: "Rubik", sans-serif | <div class="padding-x-2 text-lg font-rubik bg-white">Text</div> |
| font-source-sans-pro | font-family: "Source Sans Pro", sans-serif | <div class="padding-x-2 text-lg font-source-sans-pro bg-white">Text</div> |
| font-source-serif-pro | font-family: "Source Serif Pro", sans-serif | <div class="padding-x-2 text-lg font-source-serif-pro bg-white">Text</div> |
| font-spectral | font-family: "Spectral", sans-serif | <div class="padding-x-2 text-lg font-spectral bg-white">Text</div> |

---

## Usage

<div class="margin-y-2 margin-x-auto max-width-lg (expand)padding-2 (expand)width-64 flex justify-center items-center text-lg (child-2)font-open-sans (first)font-biorhyme (last)font-lora">

  <div class="flex flex-column justify-center items-center">
    <p class="padding-4 bg-tint-granite-5 bg-opacity-25 curve-border-lg">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </p>
    <p class="padding-t-6 font-default text-tint-granite-1">
      Open-Sans
    </p>
  </div>
  <div class="flex flex-column justify-center items-center">
    <p class="padding-4 bg-tint-granite-5 bg-opacity-25 curve-border-lg">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </p>
    <p class="padding-t-6 font-default text-tint-granite-1">
      BioRhyme
    </p>
  </div>
  <div class="flex flex-column justify-center items-center">
    <p class="padding-4 bg-tint-granite-5 bg-opacity-25 curve-border-lg">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </p>
    <p class="padding-t-6 font-default text-tint-granite-1">
      Lora
    </p>
  </div>
</div>

Set Google Fonts type to an element.

{{ console('html',
'<p class="font-lora">
    ...
  </p>
') }}

{{ console('scss',
'.dummy {
    @extend
      .font-lora;
}
') }}

## Customize Google Fonts

Use {{ site.productname }} dedicated API to embedding the Google Fonts in the framework without manually adding the line `@import url(...);`.

{{ console('html',
"@include google-fonts(
  (
    font: 'Alata',
    weight: '400;500;800'
  )
  //...
  );
") }}

The generated code look like below in your {{ site.productname }} CSS final build.

{{ console('scss',
'/* @file: `dist/{{ site.smallproductname }}-{{ site.version.framework }}.css` */
  @import url("https://fonts.googleapis.com/css2?family=Alata&:wght@400;500;800&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Roboto&:wght@400;500&display=swap");
') }}

To embed more than one Google Fonts.

{{ console('scss',
"@include google-fonts(
  (
    font: 'Alata',
    weight: '400;500;800'
  ),
  (
    font: 'Lato',
    weight: '400;500'
  )
  );
") }}