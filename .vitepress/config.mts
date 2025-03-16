import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Coditor",
  description: "Coditor App",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide'},
      { text: 'Privacy & Terms', link: '/privacy-policy' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'How to use', link: '/guide' },
        ]
      },
      {
        text: 'Privacy & Terms',
        items: [
          { text: 'Privacy Policy', link: '/privacy-policy' },
          { text: 'Terms & Conditions', link: '/terms-conditions' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/breeze2/coditor-guides' }
    ]
  }
})
