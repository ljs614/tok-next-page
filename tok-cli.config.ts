import { RootConfig } from '@toktokhan-dev/cli'
import { commit } from '@toktokhan-dev/cli-plugin-commit'
import { genApi } from '@toktokhan-dev/cli-plugin-gen-api-react-query'
import { genIcon } from '@toktokhan-dev/cli-plugin-gen-icon-chakra'
import { genImg } from '@toktokhan-dev/cli-plugin-gen-img'
import { genRoutePage } from '@toktokhan-dev/cli-plugin-gen-route-pages'
import { genSource } from '@toktokhan-dev/cli-plugin-gen-source'
import { genTheme } from '@toktokhan-dev/cli-plugin-gen-theme-chakra'

import { printText } from './scripts/plugin-text'

const config: RootConfig<{
  plugins: [
    typeof genImg,
    typeof genRoutePage,
    typeof genApi,
    typeof genTheme,
    typeof genIcon,
    typeof genSource,
    typeof commit,
    typeof printText,
  ]
}> = {
  plugins: [
    genImg,
    genRoutePage,
    genApi,
    genTheme,
    genIcon,
    genSource,
    commit,
    printText,
  ],
  'gen:img': {
    input: 'public/images',
    oneDepth: true,
    basePath: '/images',
  },
  'gen:route': {
    oneDepth: true,
  },
  'gen:api': {
    swaggerSchemaUrl: 'https://sales-api-dev.pluuug.com/openapi.json/',
  },
  'gen:theme': {
    tokenModes: {
      colors: {
        light: 'light',
        dark: 'dark',
      },
      textStyles: {
        base: 'mobile',
        sm: 'tablet',
        md: 'desktop',
      },
    },
  },
  'gen:icon': {
    input: 'public/icons',
  },
  'gen:source': {
    appName: 'toktokhan-dev',
  },
  'print:text': {
    input: 'hello world!',
    output: 'src/generated/print-text.txt',
  },
}
export default config
