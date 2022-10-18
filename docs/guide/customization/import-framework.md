---
footer: false
---

# Import Framework

> **Note:** Require SASS preprocessor to use the **@extend** directive. See [Using Weavv via CLI]() without doing it yourself.

## Via Package Manager 

Install Weavv CSS via the **NPM** package manager.

```bash
$ npm i weavvcss
```

Import the Weavv `.scss` file from the `node_modules` directory.

```js
// @file: `app.js`
import "weavvcss";
```

```scss
// @file: `style.scss`
@import "node_modules/weavvcss/weavv";
```

## Via CDN

Import the Weavv `.css` file from the hosted CDN server.

```html
// @file: `index.html`
<link href="https://unpkg.com/weavvcss@{VERSION}/dist/weavv-{VERSION}.min.css" rel="stylesheet" rel="preload" as="style" media="all" defer>
```

```css
// @file: `style.css`
@import "https://unpkg.com/weavvcss@{VERSION}/dist/weavv-{VERSION}.min.css";
```

```scss
// @file: `style.scss`
@import "https://unpkg.com/weavvcss@{VERSION}/dist/weavv-{VERSION}.min.css";
```

Expose the Weavv CSS utility classes using SASS's `@extend` directive. See [Extract Utility Classes](/guide/customization/extract-utility-classes), or [CSS Migration](/guide/customization/css-migration).

```scss
// @file: `style.scss`
html {
  @extend
    .font-default,
    .antialiased,
    .text-lg,
    .text-shade-granite-1;
}

body {
  @extend
    .bg-tint-granite-1;
}

p {
  @extend
    .text-md,
    .depth-relaxed;
}

a {
  @extend
    .text-orange-5,
    .\(hover\)text-shade-orange-1,
    .\(hover\)text-underline;
}

h1 {
  @extend
    .text-xl-2,
    .font-semibold;
}
```

