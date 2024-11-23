import { createSystem, defineConfig, defaultConfig } from '@chakra-ui/react'

/**
 * `breakpoints` - Ajusta para ficar igual ao TailwindCSS
 * @see https://tailwindcss.com/docs/responsive-design#targeting-a-breakpoint-range
 */

const config = defineConfig({
  theme: {
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    }
  }
})

export const chakraSystem = createSystem(defaultConfig, config)
