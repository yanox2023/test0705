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
      { text: 'はじめての設定', link: '/setup/' },
      {
        text: 'マニュアル',
        items: [
          { text: 'マニュアル一覧', link: '/manual/' },
          { text: '商品設定', link: '/manual/products' },
          { text: 'テーマ設定', link: '/manual/theme' },
          { text: '受取ページ設定', link: '/manual/shipping-page' },
          { text: '通知メール設定', link: '/manual/notification-email' },
          { text: '注文管理', link: '/manual/order-management' },
        ],
      },
      {
        text: 'ヘルプ',
        items: [
          { text: 'FAQ', link: '/help/faq' },
          { text: 'トラブルシューティング', link: '/help/troubleshooting' },
        ],
      },
      { text: 'お問い合わせ', link: '/contact' },
      { text: 'プライバシーポリシー', link: '/privacy-policy' }
    ],

    sidebar: {
      '/setup/': [
        {
          text: 'はじめての設定',
          items: [
            { text: 'はじめての設定', link: '/setup/' },
          ],
        },
      ],
      '/manual/': [
        {
          text: 'マニュアル',
          items: [
            { text: 'マニュアル一覧', link: '/manual/' },
            { text: '商品設定', link: '/manual/products' },
            { text: 'テーマ設定', link: '/manual/theme' },
            { text: '受取ページ設定', link: '/manual/shipping-page' },
            { text: '通知メール設定', link: '/manual/notification-email' },
            { text: '注文管理', link: '/manual/order-management' },
          ],
        },
      ],
      '/help/': [
        {
          text: 'ヘルプ',
          items: [
            { text: 'FAQ', link: '/help/faq' },
            { text: 'トラブルシューティング', link: '/help/troubleshooting' },
          ],
        },
      ],
    },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})

