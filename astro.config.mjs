import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sidebar from './src/sidebar.json' with { type: 'json' };

// Netlify supplies URL for production, including when building deploy previews.
const site = process.env.SITE_URL || process.env.URL;

export default defineConfig({
  ...(site ? { site } : {}),
  output: 'static',
  integrations: [
    starlight({
      title: 'KOR',
      description: 'KOR Synthetic RLV Controller documentation for Second Life.',
      logo: {
        light: './public/logo/230x50web.png',
        dark: './public/logo/230x50web_white.png',
        alt: 'KOR',
        replacesTitle: true,
      },
      favicon: '/favicon.svg',
      sidebar,
      social: [
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/ReCV36N8h8' },
        { icon: 'external', label: 'Support', href: 'https://my.secondlife.com/darx.snowpaw' },
      ],
      // LSL is not bundled with Shiki; keep these examples as readable plain text.
      expressiveCode: { shiki: { langAlias: { lsl: 'text' } } },
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});
