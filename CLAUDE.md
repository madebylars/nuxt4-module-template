# CLAUDE.md

Project context and known pitfalls for {{project_name}}, maintained for Claude Code sessions.

## Stack

- Nuxt 4 module (built with @nuxt/module-builder)
- Vue 3 / TypeScript
- {{author}} / {{github_org}}

## Known Nuxt 4 pitfalls (carried over from other projects — verify these still apply)

- **`process.env` in `nuxt.config.ts`**: don't reference `process.env.X` directly in config — it won't resolve the way you expect at build time. Use `runtimeConfig` and access via `useRuntimeConfig()` at runtime instead.
- **Module `defaults` vs consumer overrides**: double-check `defineNuxtModule`'s `defaults` actually merge the way you expect with consumer-supplied options — partial overrides of nested option objects can silently drop keys.
- **`addImportsDir` / `addPlugin` paths**: these must be resolved via `createResolver(import.meta.url)`, not plain relative paths, or the playground will fail to find runtime files after a fresh clone.
- **Cloudflare Workers constraints** (if this module targets edge runtimes): no filesystem access, no `localStorage`, and outbound fetches without a `User-Agent` header can get silently rejected (e.g. GitHub API returns 403).
- **Supabase `sb_` key format**: new Supabase projects issue `sb_` prefixed keys — some modules/tooling still expect the legacy JWT format until support catches up. Check which one you actually have before debugging auth issues.

## Add to this list

When you hit something that cost you real debugging time, add it here — this file is only useful if it stays current.

## License

{{license}} © {{author}}
