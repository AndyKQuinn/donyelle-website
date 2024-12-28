<script lang="ts">
  import '../app.postcss'

  import { setUserContext } from '$lib/contexts/user'
  import { type Snippet } from 'svelte'
  import { writable } from 'svelte/store'
  import type { PageData } from './$types'

  import { Button } from "$lib/components/ui/button"

  interface Props {
    data: PageData
    children?: Snippet
  }

  let { data, children }: Props = $props()

  const user = writable(data.user)
  setUserContext(user)

  const navigationItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' }
  ]
</script>

<div class="fixed top-0 left-0 right-0 border-b z-10 bg-secondary">
  <div class="container flex h-14 items-center justify-between">
    <div class="hidden lg:block">
      <a href="/" class="text-xl">
        Donyelle Headington
      </a>
    </div>

    <nav class="flex items-center gap-2 sm:gap-4 mx-auto lg:mx-0">
        {#each navigationItems as item}
          <Button
            href={item.href}
            variant="ghost"
            class="text-sm sm:text-base lg:text-lg px-2 sm:px-4"
          >
            {item.label}
          </Button>
        {/each}
    </nav>
  </div>
</div>

<div class="mt-14">
  {@render children?.()}
</div>

<style></style>