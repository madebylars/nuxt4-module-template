import { defineNuxtModule, addPlugin, addImportsDir, createResolver } from '@nuxt/kit'

export interface ModuleOptions {
  enabled?: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '{{project_name}}',
    configKey: '{{config_key}}',
    compatibility: {
      nuxt: '^4.0.0'
    }
  },
  defaults: {
    enabled: true
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    if (!options.enabled) return

    addPlugin(resolver.resolve('./runtime/plugin'))
    addImportsDir(resolver.resolve('./runtime/composables'))
  }
})
