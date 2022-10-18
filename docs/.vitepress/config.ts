import { defineConfig, DefaultTheme } from 'vitepress'

const ogTitle = 'Weavv CSS'
const ogDescription = 'A colossal low-level utility CSS framework for crafting a beautiful and elegant user interface at an atomic level'
const ogImage = 'https://weavvcss.netlify.app/og-image.png'
const ogUrl = 'https://weavvcss.netlify.app'

// netlify envs
const deployURL = process.env.DEPLOY_PRIME_URL || ''
const commitRef = process.env.COMMIT_REF?.slice(0, 8) || 'dev'

const deployType = (() => {
  switch (deployURL) {
    case 'https://weavvcss.netlify.app':
      return 'main'
    case '':
      return 'local'
    default:
      return 'release'
  }
})()

const additionalTitle = ((): string => {
  switch (deployType) {
    case 'main':
      return ' (main branch)'
    case 'local':
      return ' (local)'
    case 'release':
      return ''
  }
})()

export default defineConfig({
  lang: 'en-US',
  title: `Weavv ${additionalTitle}`,
  description: 'A colossal low-level utility CSS framework for crafting a beautiful and elegant user interface at an atomic level.',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: ogTitle }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: ogDescription }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@weavvcss' }],
    ['meta', { name: 'theme-color', content: '#646cff' }]
  ],

  markdown: {
    lineNumbers: true
  },
  
  vue: {
    reactivityTransform: true
  },

  themeConfig: {
    logo: '/logo.svg',

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/weavvcss' },
      { icon: 'github', link: 'https://github.com/weavv' }
    ],

    nav: [
      {
        text: 'API', 
        link: '/api/'
      },
      {
        text: 'Playground',
        link: 'https://weavvcss.netlify.app/playground/'
      },
      {
        text: 'Features',
        items: [
          { text: 'Breakpoints', link: '/guide/features/breakpoints' },
          { text: 'Variants', link: '/guide/features/variants' },
          { text: 'Dark/Light', link: '/guide/features/theme' },
          { text: 'Palette', link: '/guide/features/palette' },
          { text: 'Gradient', link: '/guide/features/gradient' },
          { text: 'Animations', link: '/guide/features/animations' },
          { text: 'Orientation', link: '/guide/features/orientation' },
          { text: 'Fluids', link: '/guide/features/fluids' },
        ],
      },
      {
        text: 'Customization',
        items: [
          { text: 'Extract Utility Classes', link: '/guide/customization/extract-utility-classes' },
          { text: 'Import Framework', link: '/guide/customization/import-framework' },
          { text: 'CSS Migration', link: '/guide/customization/css-migration' },
          { text: 'Create Empty Project', link: '/guide/customization/create-empty-project' },
          { text: 'Reduce File Size', link: '/guide/customization/reduce-file-size' },
          { text: 'Customize Utilities', link: '/guide/customization/customize-utilities' },
          { text: 'Plugin API', link: '/guide/customization/plugin-api' },
        ],
      },
    ],

    sidebar: {
      '/guide/features/': [
      {
        text: 'Features',
        items: [
          { text: 'Breakpoints', link: '/guide/features/breakpoints' },
          { text: 'Variants', link: '/guide/features/variants' },
          { text: 'Dark/Light', link: '/guide/features/theme' },
          { text: 'Palette', link: '/guide/features/palette' },
          { text: 'Gradient', link: '/guide/features/gradient' },
          { text: 'Animations', link: '/guide/features/animations' },
          { text: 'Orientation', link: '/guide/features/orientation' },
          { text: 'Fluids', link: '/guide/features/fluids' },
          ]
        }
      ],
      '/guide/customization/': [
      {
        text: 'Customization',
        items: [
          { text: 'Extract Utility Classes', link: '/guide/customization/extract-utility-classes' },
          { text: 'Import Framework', link: '/guide/customization/import-framework' },
          { text: 'CSS Migration', link: '/guide/customization/css-migration' },
          { text: 'Create Empty Project', link: '/guide/customization/create-empty-project' },
          { text: 'Reduce File Size', link: '/guide/customization/reduce-file-size' },
          { text: 'Customize Utilities', link: '/guide/customization/customize-utilities' },
          { text: 'Plugin API', link: '/guide/customization/plugin-api' },
        ],
      },
      ],
      '/api/': [
        {
          text: 'Typography',
          items: [
            { text: 'Font Family', link: '/api/typography/font-family' },
            { text: 'Font Size', link: '/api/typography/' },
            { text: 'Font Smoothing', link: '/api/typography/' },
            { text: 'Font Style', link: '/api/typography/' },
            { text: 'Font Weight', link: '/api/typography/' },
            { text: 'Column', link: '/api/typography/' },
            { text: 'Counter', link: '/api/typography/' },
            { text: 'Glyphs', link: '/api/typography/' },
            { text: 'Letter Spacing', link: '/api/typography/' },
            { text: 'Line Height', link: '/api/typography/' },
            { text: 'List Style Position', link: '/api/typography/' },
            { text: 'List Style Type', link: '/api/typography/' },
            { text: 'Text Align', link: '/api/typography/' },
            { text: 'Text Clamp', link: '/api/typography/' },
            { text: 'Text Color', link: '/api/typography/' },
            { text: 'Text Decoration', link: '/api/typography/' },
            { text: 'Text Transform', link: '/api/typography/' },
            { text: 'Text Stroke', link: '/api/typography/' },
            { text: 'Text Stroke Color', link: '/api/typography/' },
            { text: 'Vertical Align', link: '/api/typography/' },
            { text: 'Whitespace', link: '/api/typography/' },
            { text: 'Word Break', link: '/api/typography/' },
            { text: 'Writing Mode', link: '/api/typography/' },
          ]
        },
        {
          text: 'Layouts',
          items: [
            { text: 'Aspect Ratio', link: '/api/layouts/' },
            { text: 'Clear', link: '/api/layouts/' },
            { text: 'Display', link: '/api/layouts/' },
            { text: 'Float', link: '/api/layouts/' },
            { text: 'Object Fit', link: '/api/layouts/' },
            { text: 'Object Position', link: '/api/layouts/' },
            { text: 'Overflow', link: '/api/layouts/' },
            { text: 'Position', link: '/api/layouts/' },
            { text: 'Render', link: '/api/layouts/' },
            { text: 'Top/Bottom/Left/Right', link: '/api/layouts/' },
            { text: 'Visibility', link: '/api/layouts/' },
            { text: 'Z-Index', link: '/api/layouts/' },
          ]
        },
        {
          text: 'Interactivity',
          items: [
            { text: 'Accent Color', link: '/api/interactivity/accent-color' },
            { text: 'Cursor', link: '/api/interactivity/' },
            { text: 'Outline', link: '/api/interactivity/' },
            { text: 'Overscroll', link: '/api/interactivity/' },
            { text: 'Pointer Events', link: '/api/interactivity/' },
            { text: 'Placeholder Color', link: '/api/interactivity/' },
            { text: 'Resize', link: '/api/interactivity/' },
            { text: 'Scroll Behaviour', link: '/api/interactivity/' },
            { text: 'Scroll Bar', link: '/api/interactivity/' },
            { text: 'Scroll Smooth', link: '/api/interactivity/' },
            { text: 'Scroll Padding', link: '/api/interactivity/' },
            { text: 'Scroll Margin', link: '/api/interactivity/' },
            { text: 'Text Highlight', link: '/api/interactivity/' },
            { text: 'Touch Action', link: '/api/interactivity/' },
            { text: 'User Select', link: '/api/interactivity/' },
          ]
        },
        {
          text: 'Flexbox',
          items: [
            { text: 'Flex', link: '/api/flexbox/' },
            { text: 'Flex Center', link: '/api/flexbox/' },
            { text: 'Direction', link: '/api/flexbox/' },
            { text: 'Gap', link: '/api/flexbox/' },
            { text: 'Grow', link: '/api/flexbox/' },
            { text: 'Shrink', link: '/api/flexbox/' },
            { text: 'Basis', link: '/api/flexbox/' },
            { text: 'Wrap', link: '/api/flexbox/' },
            { text: 'Align Content', link: '/api/flexbox/' },
            { text: 'Align Items', link: '/api/flexbox/' },
            { text: 'Align Self', link: '/api/flexbox/' },
            { text: 'Justify Content', link: '/api/flexbox/' },
            { text: 'Order', link: '/api/flexbox/' },
          ]
        },
        {
          text: 'Backgrounds',
          items: [
            { text: 'Attachment', link: '/api/backgrounds/' },
            { text: 'Blend', link: '/api/backgrounds/' },
            { text: 'Border', link: '/api/backgrounds/' },
            { text: 'Color', link: '/api/backgrounds/' },
            { text: 'Gradient', link: '/api/backgrounds/' },
            { text: 'Opacity', link: '/api/backgrounds/' },
            { text: 'Position', link: '/api/backgrounds/' },
            { text: 'Repeat', link: '/api/backgrounds/' },
            { text: 'Size', link: '/api/backgrounds/' },
          ]
        },
        {
          text: 'Borders',
          items: [
            { text: 'Border Color', link: '/api/borders/' },
            { text: 'Border Radius', link: '/api/borders/' },
            { text: 'Border Style', link: '/api/borders/' },
            { text: 'Border Width', link: '/api/borders/' },
            { text: 'Curve Object', link: '/api/borders/' },
            { text: 'Dissect', link: '/api/borders/' },
            { text: 'Dissect Color', link: '/api/borders/' },
            { text: 'Dissect Opacity', link: '/api/borders/' },
          ]
        },
        {
          text: 'Spacing',
          items: [
            { text: 'Equal', link: '/api/spacing/' },
            { text: 'Margin', link: '/api/spacing/' },
            { text: 'Padding', link: '/api/spacing/' },
          ]
        },
        {
          text: 'Sizing',
          items: [
            { text: 'Width', link: '/api/sizing/' },
            { text: 'Min Width', link: '/api/sizing/' },
            { text: 'Max Width', link: '/api/sizing/' },
            { text: 'Height', link: '/api/sizing/' },
            { text: 'Min Height', link: '/api/sizing/' },
            { text: 'Max Height', link: '/api/sizing/' },
            { text: 'Proportion Scale', link: '/api/sizing/' },
          ]
        },
        {
          text: 'Fluids',
          items: [
            { text: 'Font Size', link: '/api/fluids/' },
            { text: 'Margin', link: '/api/fluids/' },
            { text: 'Padding', link: '/api/fluids/' },
          ]
        },
        {
          text: 'Effects',
          items: [
            { text: 'Box Shadow', link: '/api/effects/' },
            { text: 'Box Shadow Color', link: '/api/effects/' },
            { text: 'Text Offset Shadow', link: '/api/effects/' },
            { text: 'Text Neon Shadow', link: '/api/effects/' },
            { text: 'Mix Blend', link: '/api/effects/' },
            { text: 'Opacity', link: '/api/effects/' },
          ]
        },
        {
          text: 'Filters',
          items: [
            { text: 'Brightness', link: '/api/filters/' },
            { text: 'Blur', link: '/api/filters/' },
            { text: 'Contrast', link: '/api/filters/' },
            { text: 'Drop Shadow', link: '/api/filters/' },
            { text: 'Invert', link: '/api/filters/' },
            { text: 'Saturate', link: '/api/filters/' },
            { text: 'Smooth', link: '/api/filters/' },
            { text: 'Backdrop Brightness', link: '/api/filters/' },
            { text: 'Backdrop Blur', link: '/api/filters/' },
            { text: 'Backdrop Contrast', link: '/api/filters/' },
            { text: 'Backdrop Saturate', link: '/api/filters/' },
          ]
        },
        {
          text: 'Animations',
          items: [
            { text: 'Blur', link: '/api/animations/' },
            { text: 'Fade', link: '/api/animations/' },
            { text: 'Roll', link: '/api/animations/' },
            { text: 'Slide', link: '/api/animations/' },
            { text: 'Delay', link: '/api/animations/' },
            { text: 'Duration', link: '/api/animations/' },
            { text: 'Loop', link: '/api/animations/' },
          ]
        },
        {
          text: 'Transforms',
          items: [
            { text: 'Origin', link: '/api/transforms/' },
            { text: 'Perspective', link: '/api/transforms/' },
            { text: 'Translate', link: '/api/transforms/' },
            { text: 'Rotate', link: '/api/transforms/' },
            { text: 'Scale', link: '/api/transforms/' },
            { text: 'Skew', link: '/api/transforms/' },
          ]
        },
        {
          text: 'Transitions',
          items: [
            { text: 'Property', link: '/api/transitions/' },
            { text: 'Duration', link: '/api/transitions/' },
            { text: 'Timing', link: '/api/transitions/' },
          ]
        },
        {
          text: 'Clipping',
          items: [
            { text: 'Circle', link: '/api/clipping/' },
            { text: 'Ellipse', link: '/api/clipping/' },
            { text: 'Polygon', link: '/api/clipping/' },
          ]
        },
        {
          text: 'Theme',
          items: [
            { text: 'Auto', link: '/api/theme/' },
            { text: 'Invert', link: '/api/theme/' },
          ]
        },
        {
          text: 'Rendering',
          items: [
            { text: 'Enhance Image', link: '/api/rendering/' },
            { text: 'Enhance Text', link: '/api/rendering/' },
          ]
        },
        {
          text: 'SVG',
          items: [
            { text: 'Fill', link: '/api/svg/' },
            { text: 'Stroke', link: '/api/svg/' },
            { text: 'Stroke Width', link: '/api/svg/' },
            { text: 'Stroke Line Cap', link: '/api/svg/' },
          ]
        },
        {
          text: 'Accessbility',
          items: [
            { text: 'Screen Reader', link: '/api/accessbility/' },
          ]
        }
      ],
    },

    footer: {
      copyright: `Copyright &copy; 2021-${new Date().getFullYear()} Louis Low. MIT License. (${commitRef}).`
    },
   
  }
})
