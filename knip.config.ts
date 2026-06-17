import type { KnipConfig } from 'knip'

const config = {
  paths: {
    '#/*': ['./src/*'],
    '@/*': ['./src/*'],
  },
  ignore: ['src/**/*.stories.{ts,tsx}', 'src/routeTree.gen.ts'],
  ignoreDependencies: [
    '@types/*',
    '@tanstack/router-cli',
    '@tanstack/devtools-event-client',
  ],
} satisfies KnipConfig

export default config
