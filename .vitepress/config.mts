import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Coditor Guides",
  description: "Guides for Coditor",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Privacy & Terms', link: '/privacy-policy' }
    ],

    sidebar: [
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
