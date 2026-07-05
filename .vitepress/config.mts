import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "e-Gift Now",
  description: "e-Gift Now",
  base: '/test0705/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'アプリの使い方', link: '/how-to-use' },
      { text: 'プライバシーポリシー', link: '/privacy-policy' }
    ],

    // sidebar: [
    //   {
    //     text: '',
    //     items: [
    //       { text: 'アプリの使い方', link: '/how-to-use' },
    //       { text: 'プライバシーポリシー', link: '/privacy-policy' }
    //     ]
    //   }
    // ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
