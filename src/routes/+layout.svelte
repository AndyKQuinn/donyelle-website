<script lang="ts">
  import '../app.postcss'

  import { browser } from '$app/environment'
  import { applyAction, enhance } from '$app/forms'
  import { setUserContext } from '$lib/contexts/user'
  import { pb } from '$lib/pocketbase'
  import { onDestroy, type Snippet } from 'svelte'
  import { writable } from 'svelte/store'
  import type { PageData } from './$types'
  import { page } from '$app/stores'

  import { Button } from "$lib/components/ui/button"

  interface Props {
    data: PageData
    children?: Snippet
  }

  let { data, children }: Props = $props()

  const user = writable(data.user)
  setUserContext(user)

  if (browser) {
    pb.authStore.loadFromCookie(document.cookie)

    const unsubscribe = pb.authStore.onChange(() => {
      user.set(pb.authStore.record)
      document.cookie = pb.authStore.exportToCookie({ httpOnly: false })
    }, true)
    onDestroy(unsubscribe)
  }

  const navigationItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' }
  ]
</script>

<div class="fixed top-0 left-0 right-0 border-b z-10 bg-secondary">
  <div class="container flex h-14 items-center justify-between">
    <div class="hidden md:block">
      <a href="/" class="text-xl">
        Donyelle Headington
      </a>
    </div>

    <nav class="flex items-center gap-4">
      {#if $user}
        <a
          href="/"
          class="text-sm hover:text-primary"
          class:text-primary={$page.url.pathname === '/'}
        >
          {$user.email}
        </a>
        <form
          method="POST"
          action="/logout"
          use:enhance={() => {
            return async ({ result }) => {
              pb.authStore.clear()
              await applyAction(result)
            }
          }}
        >
          <Button variant="ghost" size="sm">Log out</Button>
        </form>
      {:else}
        {#each navigationItems as item}
          <Button
            href={item.href}
            variant="ghost"
            class="text-lg"
          >
            {item.label}
          </Button>
        {/each}
      {/if}
    </nav>
  </div>
</div>

<div class="mt-14">
  {@render children?.()}
</div>

<style></style>