// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.nrrv.com',
  integrations: [
    starlight({
      title: 'NRRV Docs',
      description: 'Documentation for the NRRV development lifecycle framework and LDF tooling.',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/NRRVcom/ldf' },
      ],
      logo: {
        light: './src/assets/logo-light.svg',
        dark: './src/assets/logo-dark.svg',
        replacesTitle: true,
      },
      customCss: ['./src/styles/custom.css'],
      editLink: {
        baseUrl: 'https://github.com/NRRVcom/nrrv-docs/edit/main/',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', slug: 'getting-started/introduction' },
            { label: 'Installation', slug: 'getting-started/installation' },
            { label: 'Quick Start', slug: 'getting-started/quick-start' },
            { label: 'First Loop', slug: 'getting-started/first-loop' },
          ],
        },
        {
          label: 'Framework',
          items: [
            { label: 'Overview', slug: 'framework/overview' },
            { label: 'NRRV Phases', slug: 'framework/phases' },
            { label: 'Signals', slug: 'framework/signals' },
            { label: 'Loops', slug: 'framework/loops' },
            { label: 'Guardrails', slug: 'framework/guardrails' },
          ],
        },
        {
          label: 'SAIL',
          items: [
            { label: 'Overview', slug: 'sail/overview' },
            { label: 'Scope', slug: 'sail/scope' },
            { label: 'Architect', slug: 'sail/architect' },
            { label: 'Implement', slug: 'sail/implement' },
            { label: 'Learn', slug: 'sail/learn' },
            { label: 'TDD Anchors', slug: 'sail/tdd-anchors' },
          ],
        },
        {
          label: 'Crew System',
          items: [
            { label: 'Overview', slug: 'crew/overview' },
            { label: 'Captain', slug: 'crew/captain' },
            { label: 'Crew Members', slug: 'crew/members' },
            { label: 'Providers', slug: 'crew/providers' },
          ],
        },
        {
          label: 'CLI Reference',
          items: [
            { label: 'nrrv', slug: 'cli/nrrv' },
            { label: 'ldf', slug: 'cli/ldf' },
          ],
        },
        {
          label: 'API Reference',
          autogenerate: { directory: 'api' },
        },
        {
          label: 'Enterprise',
          items: [
            { label: 'Overview', slug: 'enterprise/overview' },
          ],
        },
      ],
      head: [
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: 'https://docs.nrrv.com/og-image.png',
          },
        },
      ],
    }),
  ],
});
