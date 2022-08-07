---
id: gradient
title: Background Gradient Presets
description: Utilities for sets the gradient preset diagonally to an element.
topic: Effects
relate: bg-gradient
variant: dark-mode, hover, focus-visible, focus-within
layout: default
---

> Backgrounds

# Background Gradient Presets

Utilities for sets the gradient preset diagonally to an element.

---

## Variant

<div class="flex flex-gap-2 flex-wrap justify-start items-center">{% for backgroundgradientpreset in variants.backgroundgradientpreset %}{% for item in backgroundgradientpreset.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</div>

---

## API

| <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">class</span> | <span class="padding-x-3 padding-y-1 text-white bg-shade-granite-5 font-semibold curve-border-md">css</span> |
|:--|:--|
| bg-gradient-`{value}` | background-image: linear-gradient(`{modifier}`); |

| <span class="padding-x-3 padding-y-1 text-white (dark)text-charcoal-1 bg-gray-7 (dark)bg-gray-6 font-semibold curve-border-full">value</span> | <span class="padding-x-3 padding-y-1 text-white (dark)text-charcoal-1 bg-gray-7 (dark)bg-gray-6 font-semibold curve-border-full">modifier</span> | |
|:--|:--|:-:|
| preset-1 | 45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100% | <div class="width-16 height-8 bg-gradient-preset-1 curve-border shadow"></div> |
| preset-2 | to top, #a18cd1 0%, #fbc2eb 100% | <div class="width-16 height-8 bg-gradient-preset-2 curve-border shadow"></div> |
| preset-3 | to top, #fad0c4 0%, #fad0c4 1%, #ffd1ff 100% | <div class="width-16 height-8 bg-gradient-preset-3 curve-border shadow"></div> |
| preset-4 | to right, #ffecd2 0%, #fcb69f 100% | <div class="width-16 height-8 bg-gradient-preset-4 curve-border shadow"></div> |
| preset-5 | to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, <br>#f99185 52%, #cf556c 78%, #b12a5b 100% | <div class="width-16 height-8 bg-gradient-preset-5 curve-border shadow"></div> |
| preset-6 | to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100% | <div class="width-16 height-8 g/radient-preset-6 curve-border shadow"></div> |
| preset-7 | 120deg, #f6d365 0%, #fda085 100% | <div class="width-16 height-8 bg-gradient-preset-7 curve-border shadow"></div> |
| preset-8 | to top, #fbc2eb 0%, #a6c1ee 100% | <div class="width-16 height-8 bg-gradient-preset-8 curve-border shadow"></div> |
| preset-9 | to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100% | <div class="width-16 height-8 bg-gradient-preset-9 curve-border shadow"></div> |
| preset-10 | 120deg, #a1c4fd 0%, #c2e9fb 100% | <div class="width-16 height-8 bg-gradient-preset-10 curve-border shadow"></div> |
| preset-11 | 120deg, #d4fc79 0%, #96e6a1 100% | <div class="width-16 height-8 bg-gradient-preset-11 curve-border shadow"></div> |
| preset-12 | 120deg, #84fab0 0%, #8fd3f4 100% | <div class="width-16 height-8 bg-gradient-preset-12 curve-border shadow"></div> |
| preset-13 | to top, #cfd9df 0%, #e2ebf0 100% | <div class="width-16 height-8 bg-gradient-preset-13 curve-border shadow"></div> |
| preset-14 | 120deg, #a6c0fe 0%, #f68084 100% | <div class="width-16 height-8 bg-gradient-preset-14 curve-border shadow"></div> |
| preset-15 | 120deg, #fccb90 0%, #d57eeb 100% | <div class="width-16 height-8 bg-gradient-preset-15 curve-border shadow"></div> |
| preset-16 | 120deg, #e0c3fc 0%, #8ec5fc 100% | <div class="width-16 height-8 bg-gradient-preset-16 curve-border shadow"></div> |
| preset-17 | 120deg, #f093fb 0%, #f5576c 100% | <div class="width-16 height-8 bg-gradient-preset-17 curve-border shadow"></div> |
| preset-18 | 120deg, #fdfbfb 0%, #ebedee 100% | <div class="width-16 height-8 bg-gradient-preset-18 curve-border shadow"></div> |
| preset-19 | to right, #4facfe 0%, #00f2fe 100% | <div class="width-16 height-8 bg-gradient-preset-19 curve-border shadow"></div> |
| preset-20 | to right, #43e97b 0%, #38f9d7 100% | <div class="width-16 height-8 bg-gradient-preset-20 curve-border shadow"></div> |
| preset-21 | to right, #fa709a 0%, #fee140 100% | <div class="width-16 height-8 bg-gradient-preset-21 curve-border shadow"></div> |
| preset-22 | to top, #30cfd0 0%, #330867 100% | <div class="width-16 height-8 bg-gradient-preset-22 curve-border shadow"></div> |
| preset-23 | to top, #a8edea 0%, #fed6e3 100% | <div class="width-16 height-8 bg-gradient-preset-23 curve-border shadow"></div> |
| preset-24 | to top, #5ee7df 0%, #b490ca 100% | <div class="width-16 height-8 bg-gradient-preset-24 curve-border shadow"></div> |
| preset-25 | to top, #d299c2 0%, #fef9d7 100% | <div class="width-16 height-8 bg-gradient-preset-25 curve-border shadow"></div> |
| preset-26 | 135deg, #f5f7fa 0%, #c3cfe2 100% | <div class="width-16 height-8 bg-gradient-preset-26 curve-border shadow"></div> |
| preset-27 | 135deg, #667eea 0%, #764ba2 100% | <div class="width-16 height-8 bg-gradient-preset-27 curve-border shadow"></div> |
| preset-28 | 135deg, #fdfcfb 0%, #e2d1c3 100% | <div class="width-16 height-8 bg-gradient-preset-28 curve-border shadow"></div> |
| preset-29 | 120deg, #89f7fe 0%, #66a6ff 100% | <div class="width-16 height-8 bg-gradient-preset-29 curve-border shadow"></div> |
| preset-30 | to top, #fddb92 0%, #d1fdff 100% | <div class="width-16 height-8 bg-gradient-preset-30 curve-border shadow"></div> |
| preset-31 | to top, #9890e3 0%, #b1f4cf 100% | <div class="width-16 height-8 bg-gradient-preset-31 curve-border shadow"></div> |
| preset-32 | to top, #ebc0fd 0%, #d9ded8 100% | <div class="width-16 height-8 bg-gradient-preset-32 curve-border shadow"></div> |
| preset-33 | to top, #96fbc4 0%, #f9f586 100% | <div class="width-16 height-8 bg-gradient-preset-33 curve-border shadow"></div> |
| preset-34 | 180deg, #2af598 0%, #009efd 100% | <div class="width-16 height-8 bg-gradient-preset-34 curve-border shadow"></div> |
| preset-35 | to top, #cd9cf2 0%, #f6f3ff 100% | <div class="width-16 height-8 bg-gradient-preset-35 curve-border shadow"></div> |
| preset-36 | to right, #e4afcb 0%, #b8cbb8 0%, #b8cbb8 0%, <br>#e2c58b 30%, #c2ce9c 64%, #7edbdc 100% | <div class="width-16 height-8 bg-gradient-preset-36 curve-border shadow"></div> |
| preset-37 | to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, <br>#cf6cc9 33%, #ee609c 66%, #ee609c 100% | <div class="width-16 height-8 bg-gradient-preset-37 curve-border shadow"></div> |
| preset-38 | to right, #6a11cb 0%, #2575fc 100% | <div class="width-16 height-8 bg-gradient-preset-38 curve-border shadow"></div> |
| preset-39 | to top, #37ecba 0%, #72afd3 100% | <div class="width-16 height-8 bg-gradient-preset-39 curve-border shadow"></div> |
| preset-40 | to top, #ebbba7 0%, #cfc7f8 100% | <div class="width-16 height-8 bg-gradient-preset-40 curve-border shadow"></div> |
| preset-41 | to top, #fff1eb 0%, #ace0f9 100% | <div class="width-16 height-8 bg-gradient-preset-41 curve-border shadow"></div> |
| preset-42 | to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, <br>#b49fda 79%, #7ac5d8 100% | <div class="width-16 height-8 bg-gradient-preset-42 curve-border shadow"></div> |
| preset-43 | to top, #c471f5 0%, #fa71cd 100% | <div class="width-16 height-8 bg-gradient-preset-43 curve-border shadow"></div> |
| preset-44 | to top, #48c6ef 0%, #6f86d6 100% | <div class="width-16 height-8 bg-gradient-preset-44 curve-border shadow"></div> |
| preset-45 | to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, <br>#fe9a8b 100% | <div class="width-16 height-8 bg-gradient-preset-45 curve-border shadow"></div> |
| preset-46 | to top, #feada6 0%, #f5efef 100% | <div class="width-16 height-8 bg-gradient-preset-46 curve-border shadow"></div> |
| preset-47 | to top, #e6e9f0 0%, #eef1f5 100% | <div class="width-16 height-8 bg-gradient-preset-47 curve-border shadow"></div> |
| preset-48 | to top, #accbee 0%, #e7f0fd 100% | <div class="width-16 height-8 bg-gradient-preset-48 curve-border shadow"></div> |
| preset-49 | -20deg, #e9defa 0%, #fbfcdb 100% | <div class="width-16 height-8 bg-gradient-preset-49 curve-border shadow"></div> |
| preset-50 | to top, #c1dfc4 0%, #deecdd 100% | <div class="width-16 height-8 bg-gradient-preset-50 curve-border shadow"></div> |
| preset-51 | to top, #0ba360 0%, #3cba92 100% | <div class="width-16 height-8 bg-gradient-preset-51 curve-border shadow"></div> |
| preset-52 | to top, #00c6fb 0%, #005bea 100% | <div class="width-16 height-8 bg-gradient-preset-52 curve-border shadow"></div> |
| preset-53 | to right, #74ebd5 0%, #9face6 100% | <div class="width-16 height-8 bg-gradient-preset-53 curve-border shadow"></div> |
| preset-54 | to top, #6a85b6 0%, #bac8e0 100% | <div class="width-16 height-8 bg-gradient-preset-54 curve-border shadow"></div> |
| preset-55 | to top, #a3bded 0%, #6991c7 100% | <div class="width-16 height-8 bg-gradient-preset-55 curve-border shadow"></div> |
| preset-56 | to top, #9795f0 0%, #fbc8d4 100% | <div class="width-16 height-8 bg-gradient-preset-56 curve-border shadow"></div> |
| preset-57 | to top, #a7a6cb 0%, #8989ba 52%, #8989ba 100% | <div class="width-16 height-8 bg-gradient-preset-57 curve-border shadow"></div> |
| preset-58 | to top, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, <br>#8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, <br>#f18271 75%, #f3a469 87%, #f7c978 100% | <div class="width-16 height-8 bg-gradient-preset-58 curve-border shadow"></div> |
| preset-59 | to top, #fcc5e4 0%, #fda34b 15%, #ff7882 35%, <br>#c8699e 52%, #7046aa 71%, #0c1db8 87%, #020f75 100% | <div class="width-16 height-8 bg-gradient-preset-59 curve-border shadow"></div> |
| preset-60 | to top, #dbdcd7 0%, #dddcd7 24%, #e2c9cc 30%, <br>#e7627d 46%, #b8235a 59%, #801357 71%, <br>#3d1635 84%, #1c1a27 100% | <div class="width-16 height-8 bg-gradient-preset-60 curve-border shadow"></div> |
| preset-61 | to top, #f43b47 0%, #453a94 100% | <div class="width-16 height-8 bg-gradient-preset-61 curve-border shadow"></div> |
| preset-62 | to top, #4fb576 0%, #44c489 30%, #28a9ae 46%, <br>#28a2b7 59%, #4c7788 71%, #6c4f63 86%, <br>#432c39 100% | <div class="width-16 height-8 bg-gradient-preset-62 curve-border shadow"></div> |
| preset-63 | to top, #0250c5 0%, #d43f8d 100% | <div class="width-16 height-8 bg-gradient-preset-63 curve-border shadow"></div> |
| preset-64 | to top, #88d3ce 0%, #6e45e2 100% | <div class="width-16 height-8 bg-gradient-preset-64 curve-border shadow"></div> |
| preset-65 | to top, #d9afd9 0%, #97d9e1 100% | <div class="width-16 height-8 bg-gradient-preset-65 curve-border shadow"></div> |
| preset-66 | to top, #7028e4 0%, #e5b2ca 100% | <div class="width-16 height-8 bg-gradient-preset-66 curve-border shadow"></div> |
| preset-67 | 15deg, #13547a 0%, #80d0c7 100% | <div class="width-16 height-8 bg-gradient-preset-67 curve-border shadow"></div> |
| preset-68 | to top, #505285 0%, #585e92 12%, #65689f 25%, <br>#7474b0 37%, #7e7ebb 50%, #8389c7 62%, <br>#9795d4 75%, #a2a1dc 87%, #b5aee4 100% | <div class="width-16 height-8 bg-gradient-preset-68 curve-border shadow"></div> |
| preset-69 | to top, #ff0844 0%, #ffb199 100% | <div class="width-16 height-8 bg-gradient-preset-69 curve-border shadow"></div> |
| preset-70 | 45deg, #93a5cf 0%, #e4efe9 100% | <div class="width-16 height-8 bg-gradient-preset-70 curve-border shadow"></div> |
| preset-71 | to right, #434343 0%, black 100% | <div class="width-16 height-8 bg-gradient-preset-71 curve-border shadow"></div> |
| preset-72 | to top, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, <br>#a2b6df 100% | <div class="width-16 height-8 bg-gradient-preset-72 curve-border shadow"></div> |
| preset-73 | 45deg, #93a5cf 0%, #e4efe9 100% | <div class="width-16 height-8 bg-gradient-preset-73 curve-border shadow"></div> |
| preset-74 | to right, #92fe9d 0%, #00c9ff 100% | <div class="width-16 height-8 bg-gradient-preset-74 curve-border shadow"></div> |
| preset-75 | to right, #ff758c 0%, #ff7eb3 100% | <div class="width-16 height-8 bg-gradient-preset-75 curve-border shadow"></div> |
| preset-76 | to right, #868f96 0%, #596164 100% | <div class="width-16 height-8 bg-gradient-preset-76 curve-border shadow"></div> |
| preset-77 | to top, #c79081 0%, #dfa579 100% | <div class="width-16 height-8 bg-gradient-preset-77 curve-border shadow"></div> |
| preset-78 | 45deg, #8baaaa 0%, #ae8b9c 100% | <div class="width-16 height-8 bg-gradient-preset-78 curve-border shadow"></div> |
| preset-79 | to right, #f83600 0%, #f9d423 100% | <div class="width-16 height-8 bg-gradient-preset-79 curve-border shadow"></div> |
| preset-80 | -20deg, #b721ff 0%, #21d4fd 100% | <div class="width-16 height-8 bg-gradient-preset-80 curve-border shadow"></div> |
| preset-81 | -20deg, #6e45e2 0%, #88d3ce 100% | <div class="width-16 height-8 bg-gradient-preset-81 curve-border shadow"></div> |
| preset-82 | -20deg, #d558c8 0%, #24d292 100% | <div class="width-16 height-8 bg-gradient-preset-82 curve-border shadow"></div> |
| preset-83 | 60deg, #abecd6 0%, #fbed96 100% | <div class="width-16 height-8 bg-gradient-preset-83 curve-border shadow"></div> |
| preset-84 | to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, <br>#efeeec 75%, #e9e9e7 100% | <div class="width-16 height-8 bg-gradient-preset-84 curve-border shadow"></div> |
| preset-85 | to top, #5f72bd 0%, #9b23ea 100% | <div class="width-16 height-8 bg-gradient-preset-85 curve-border shadow"></div> |
| preset-86 | to top, #09203f 0%, #537895 100% | <div class="width-16 height-8 bg-gradient-preset-86 curve-border shadow"></div> |
| preset-87 | -20deg, #ddd6f3 0%, #faaca8 100%, #faaca8 100% | <div class="width-16 height-8 bg-gradient-preset-87 curve-border shadow"></div> |
| preset-88 | -20deg, #dcb0ed 0%, #99c99c 100% | <div class="width-16 height-8 bg-gradient-preset-88 curve-border shadow"></div> |
| preset-89 | to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100% | <div class="width-16 height-8 bg-gradient-preset-89 curve-border shadow"></div> |
| preset-90 | to top, #c71d6f 0%, #d09693 100% | <div class="width-16 height-8 bg-gradient-preset-90 curve-border shadow"></div> |
| preset-91 | 60deg, #96deda 0%, #50c9c3 100% | <div class="width-16 height-8 bg-gradient-preset-91 curve-border shadow"></div> |
| preset-92 | to top, #f77062 0%, #fe5196 100% | <div class="width-16 height-8 bg-gradient-preset-92 curve-border shadow"></div> |
| preset-93 | to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100% | <div class="width-16 height-8 bg-gradient-preset-93 curve-border shadow"></div> |
| preset-94 | to right, #a8caba 0%, #5d4157 100% | <div class="width-16 height-8 bg-gradient-preset-94 curve-border shadow"></div> |
| preset-95 | 60deg, #29323c 0%, #485563 100% | <div class="width-16 height-8 bg-gradient-preset-95 curve-border shadow"></div> |
| preset-96 | -60deg, #16a085 0%, #f4d03f 100% | <div class="width-16 height-8 bg-gradient-preset-96 curve-border shadow"></div> |
| preset-97 | -60deg, #ff5858 0%, #f09819 100% | <div class="width-16 height-8 bg-gradient-preset-97 curve-border shadow"></div> |
| preset-98 | -20deg, #2b5876 0%, #4e4376 100% | <div class="width-16 height-8 bg-gradient-preset-98 curve-border shadow"></div> |
| preset-99 | -20deg, #00cdac 0%, #8ddad5 100% | <div class="width-16 height-8 bg-gradient-preset-99 curve-border shadow"></div> |
| preset-100 | to top, #4481eb 0%, #04befe 100% | <div class="width-16 height-8 bg-gradient-preset-100 curve-border shadow"></div> |
| preset-101 | to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100% | <div class="width-16 height-8 bg-gradient-preset-101 curve-border shadow"></div> |
| preset-102 | 45deg, #874da2 0%, #c43a30 100% | <div class="width-16 height-8 bg-gradient-preset-102 curve-border shadow"></div> |
| preset-103 | to top, #4481eb 0%, #04befe 100% | <div class="width-16 height-8 bg-gradient-preset-103 curve-border shadow"></div> |
| preset-104 | to top, #e8198b 0%, #c7eafd 100% | <div class="width-16 height-8 bg-gradient-preset-104 curve-border shadow"></div> |
| preset-105 | -20deg, #f794a4 0%, #fdd6bd 100% | <div class="width-16 height-8 bg-gradient-preset-105 curve-border shadow"></div> |
| preset-106 | 60deg, #64b3f4 0%, #c2e59c 100% | <div class="width-16 height-8 bg-gradient-preset-106 curve-border shadow"></div> |
| preset-107 | to top, #3b41c5 0%, #a981bb 49%, #ffc8a9 100% | <div class="width-16 height-8 bg-gradient-preset-107 curve-border shadow"></div> |
| preset-108 | to top, #0fd850 0%, #f9f047 100% | <div class="width-16 height-8 bg-gradient-preset-108 curve-border shadow"></div> |
| preset-109 | to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, <br>#efefef 48%, #d9d9d9 75%, #bcbcbc 100% | <div class="width-16 height-8 bg-gradient-preset-109 curve-border shadow"></div> |
| preset-110 | 45deg, #ee9ca7 0%, #ffdde1 100% | <div class="width-16 height-8 bg-gradient-preset-109 curve-border shadow"></div> |
| preset-111 | to right, #3ab5b0 0%, #3d99be 31%, #56317a 100% | <div class="width-16 height-8 bg-gradient-preset-110 curve-border shadow"></div> |
| preset-112 | to top, #209cff 0%, #68e0cf 100% | <div class="width-16 height-8 bg-gradient-preset-112 curve-border shadow"></div> |
| preset-113 | to top, #bdc2e8 0%, #bdc2e8 1%, #e6dee9 100% | <div class="width-16 height-8 bg-gradient-preset-113 curve-border shadow"></div> |
| preset-114 | to top, #e6b980 0%, #eacda3 100% | <div class="width-16 height-8 bg-gradient-preset-114 curve-border shadow"></div> |
| preset-115 | to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100% | <div class="width-16 height-8 bg-gradient-preset-115 curve-border shadow"></div> |
| preset-116 | to top, #d5dee7 0%, #ffafbd 0%, #c9ffbf 100% | <div class="width-16 height-8 bg-gradient-preset-116 curve-border shadow"></div> |
| preset-117 | to top, #9be15d 0%, #00e3ae 100% | <div class="width-16 height-8 bg-gradient-preset-117 curve-border shadow"></div> |
| preset-118 | to right, #ed6ea0 0%, #ec8c69 100% | <div class="width-16 height-8 bg-gradient-preset-118 curve-border shadow"></div> |
| preset-119 | to right, #ffc3a0 0%, #ffafbd 100% | <div class="width-16 height-8 bg-gradient-preset-119 curve-border shadow"></div> |
| preset-120 | to top, #cc208e 0%, #6713d2 100% | <div class="width-16 height-8 bg-gradient-preset-120 curve-border shadow"></div> |
| preset-121 | to top, #b3ffab 0%, #12fff7 100% | <div class="width-16 height-8 bg-gradient-preset-121 curve-border shadow"></div> |
| preset-122 | to top, #65bd60 0%, #5ac1a8 25%, #3ec6ed 50%, <br>#b7ddb7 75%, #fef381 100% | <div class="width-16 height-8 bg-gradient-preset-122 curve-border shadow"></div> |
| preset-123 | to right, #243949 0%, #517fa4 100% | <div class="width-16 height-8 bg-gradient-preset-123 curve-border shadow"></div> |
| preset-124 | -20deg, #fc6076 0%, #ff9a44 100% | <div class="width-16 height-8 bg-gradient-preset-124 curve-border shadow"></div> |
| preset-125 | to top, #dfe9f3 0%, white 100% | <div class="width-16 height-8 bg-gradient-preset-125 curve-border shadow"></div> |
| preset-126 | to right, #00dbde 0%, #fc00ff 100% | <div class="width-16 height-8 bg-gradient-preset-126 curve-border shadow"></div> |
| preset-127 | to right, #f9d423 0%, #ff4e50 100% | <div class="width-16 height-8 bg-gradient-preset-127 curve-border shadow"></div> |
| preset-128 | to top, #50cc7f 0%, #f5d100 100% | <div class="width-16 height-8 bg-gradient-preset-128 curve-border shadow"></div> |
| preset-129 | to right, #0acffe 0%, #495aff 100% | <div class="width-16 height-8 bg-gradient-preset-129 curve-border shadow"></div> |
| preset-130 | -20deg, #616161 0%, #9bc5c3 100% | <div class="width-16 height-8 bg-gradient-preset-130 curve-border shadow"></div> |
| preset-131 | 60deg, #3d3393 0%, #2b76b9 37%, #2cacd1 65%, <br>#35eb93 100% | <div class="width-16 height-8 bg-gradient-preset-131 curve-border shadow"></div> |
| preset-132 | to top, #df89b5 0%, #bfd9fe 100% | <div class="width-16 height-8 bg-gradient-preset-132 curve-border shadow"></div> |
| preset-133 | to right, #ed6ea0 0%, #ec8c69 100% | <div class="width-16 height-8 bg-gradient-preset-133 curve-border shadow"></div> |
| preset-134 | to right, #d7d2cc 0%, #304352 100% | <div class="width-16 height-8 bg-gradient-preset-134 curve-border shadow"></div> |
| preset-135 | to top, #e14fad 0%, #f9d423 100% | <div class="width-16 height-8 bg-gradient-preset-135 curve-border shadow"></div> |
| preset-136 | to top, #b224ef 0%, #7579ff 100% | <div class="width-16 height-8 bg-gradient-preset-136 curve-border shadow"></div> |
| preset-137 | to right, #c1c161 0%, #c1c161 0%, #d4d4b1 100% | <div class="width-16 height-8 bg-gradient-preset-137 curve-border shadow"></div> |
| preset-138 | to right, #ec77ab 0%, #7873f5 100% | <div class="width-16 height-8 bg-gradient-preset-138 curve-border shadow"></div> |
| preset-139 | to top, #007adf 0%, #00ecbc 100% | <div class="width-16 height-8 bg-gradient-preset-139 curve-border shadow"></div> |
| preset-140 | -225deg, #20E2D7 0%, #F9FEA5 100% | <div class="width-16 height-8 bg-gradient-preset-140 curve-border shadow"></div> |
| preset-141 | -225deg, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100% | <div class="width-16 height-8 bg-gradient-preset-141 curve-border shadow"></div> |
| preset-142 | -225deg, #2CD8D5 0%, #6B8DD6 48%, #8E37D7 100% | <div class="width-16 height-8 bg-gradient-preset-142 curve-border shadow"></div> |
| preset-143 | -225deg, #DFFFCD 0%, #90F9C4 48%, #39F3BB 100% | <div class="width-16 height-8 bg-gradient-preset-143 curve-border shadow"></div> |
| preset-144 | -225deg, #5D9FFF 0%, #B8DCFF 48%, #6BBBFF 100% | <div class="width-16 height-8 bg-gradient-preset-144 curve-border shadow"></div> |
| preset-145 | -225deg, #A8BFFF 0%, #884D80 100% | <div class="width-16 height-8 bg-gradient-preset-145 curve-border shadow"></div> |
| preset-146 | -225deg, #5271C4 0%, #B19FFF 48%, #ECA1FE 100% | <div class="width-16 height-8 bg-gradient-preset-146 curve-border shadow"></div> |
| preset-147 | -225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100% | <div class="width-16 height-8 bg-gradient-preset-147 curve-border shadow"></div> |
| preset-148 | -225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100% | <div class="width-16 height-8 bg-gradient-preset-148 curve-border shadow"></div> |
| preset-149 | -225deg, #B6CEE8 0%, #F578DC 100% | <div class="width-16 height-8 bg-gradient-preset-149 curve-border shadow"></div> |
| preset-150 | -225deg, #FFFEFF 0%, #D7FFFE 100% | <div class="width-16 height-8 bg-gradient-preset-150 curve-border shadow"></div> |
| preset-151 | -225deg, #E3FDF5 0%, #FFE6FA 100% | <div class="width-16 height-8 bg-gradient-preset-151 curve-border shadow"></div> |
| preset-152 | -225deg, #7DE2FC 0%, #B9B6E5 100% | <div class="width-16 height-8 bg-gradient-preset-152 curve-border shadow"></div> |
| preset-153 | -225deg, #CBBACC 0%, #2580B3 100% | <div class="width-16 height-8 bg-gradient-preset-153 curve-border shadow"></div> |
| preset-154 | -225deg, #B7F8DB 0%, #50A7C2 100% | <div class="width-16 height-8 bg-gradient-preset-154 curve-border shadow"></div> |
| preset-155 | -225deg, #7085B6 0%, #87A7D9 50%, #DEF3F8 100% | <div class="width-16 height-8 bg-gradient-preset-155 curve-border shadow"></div> |
| preset-156 | -225deg, #77FFD2 0%, #6297DB 48%, #1EECFF 100% | <div class="width-16 height-8 bg-gradient-preset-156 curve-border shadow"></div> |
| preset-157 | -225deg, #AC32E4 0%, #7918F2 48%, #4801FF 100% | <div class="width-16 height-8 bg-gradient-preset-157 curve-border shadow"></div> |
| preset-158 | -225deg, #D4FFEC 0%, #57F2CC 48%, #4596FB 100% | <div class="width-16 height-8 bg-gradient-preset-158 curve-border shadow"></div> |
| preset-159 | -225deg, #9EFBD3 0%, #57E9F2 48%, #45D4FB 100% | <div class="width-16 height-8 bg-gradient-preset-159 curve-border shadow"></div> |
| preset-160 | -225deg, #473B7B 0%, #3584A7 51%, #30D2BE 100% | <div class="width-16 height-8 bg-gradient-preset-160 curve-border shadow"></div> |
| preset-161 | -225deg, #65379B 0%, #886AEA 53%, #6457C6 100% | <div class="width-16 height-8 bg-gradient-preset-161 curve-border shadow"></div> |
| preset-162 | -225deg, #A445B2 0%, #D41872 52%, #FF0066 100% | <div class="width-16 height-8 bg-gradient-preset-162 curve-border shadow"></div>  |
| preset-163 | -225deg, #7742B2 0%, #F180FF 52%, #FD8BD9 100% | <div class="width-16 height-8 bg-gradient-preset-163 curve-border shadow"></div> |
| preset-164 | -225deg, #FF3CAC 0%, #562B7C 52%, #2B86C5 100% | <div class="width-16 height-8 bg-gradient-preset-164 curve-border shadow"></div> |
| preset-165 | -225deg, #FF057C 0%, #8D0B93 50%, #321575 100% | <div class="width-16 height-8 bg-gradient-preset-165 curve-border shadow"></div> |
| preset-166 | -225deg, #FF057C 0%, #7C64D5 48%, #4CC3FF 100% | <div class="width-16 height-8 bg-gradient-preset-166 curve-border shadow"></div> |
| preset-167 | -225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100% | <div class="width-16 height-8 bg-gradient-preset-167 curve-border shadow"></div> |
| preset-168 | -225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100% | <div class="width-16 height-8 bg-gradient-preset-168 curve-border shadow"></div> |
| preset-169 | -225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%) | <div class="width-16 height-8 bg-gradient-preset-169 curve-border shadow"></div> |

---

## Usage

{% from "misc/console.njk" import console %}

Set background gradient to an element.

<div class="padding-x-4 margin-y-2 margin-x-auto width-64">
  <div class="bg-gradient-preset-42 width-64 height-32"></div>
</div>

{{ console('html',
'<div class="bg-gradient-preset-4 ... width-64 height-32">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-gradient-preset-4,
      .width-64,
      .height-32;
}
') }}

Set default background gradient to `<body>` tag.

{{ console('html',
'<body class="bg-gradient-preset-4">
    ...
  </body>
') }}

{{ console('scss',
'body {
    @extend
      .bg-gradient-preset-4;
}
') }}

Set background gradient clipping as text color by adding `clip-text`.

<div class="padding-x-4 margin-y-4 margin-x-auto width-56">
  <div class="bg-gradient-preset-14 clip-text inline-block text-xl-8 font-extrabold">
    TEXT
  </div>
</div>

{{ console('html',
'<div class="bg-gradient-preset-4 clip-text ... inline-block">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-gradient-preset-4,
      .clip-text,
      .inline-block;
}
') }}

Set auto dark theme enabled to an element with added `(dark)` prefix.

{{ console('html',
'<div class="bg-gradient-preset-4 ... (dark)bg-gradient-preset-5 ... width-64 height-32">
    ...
  </div>
') }}

{{ console('scss',
'.dummy {
    @extend
      .bg-gradient-preset-4,
      .\\(dark\\)bg-gradient-preset-5,
      .width-64,
      .height-32;
}
') }}

