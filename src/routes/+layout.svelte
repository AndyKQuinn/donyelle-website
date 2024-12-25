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

  interface Props {
    data: PageData
    children?: Snippet
  }

  let { data, children }: Props = $props()

  // Initialize user store
  const user = writable(data.user)
  setUserContext(user)

  if (browser) {
    // Load user from cookie (client-side only)
    pb.authStore.loadFromCookie(document.cookie)

    // Update user store when auth store changes
    const unsubscribe = pb.authStore.onChange(() => {
      user.set(pb.authStore.record)
      document.cookie = pb.authStore.exportToCookie({ httpOnly: false })
    }, true)
    onDestroy(unsubscribe)
  }
</script>

<div class="bg-neutral text-neutral-content">
  <div class="mx-auto navbar flex-col sm:flex-row">
    <div class="navbar-start hidden sm:block">
      <a
        href="/"
        class="btn btn-ghost text-xl hover:text-primary transition-colors duration-200"
        class:text-primary={$page.url.pathname === '/'}
      >Donyelle Headington</a>
    </div>
    <div class="navbar-end w-full justify-center sm:justify-end">
      <ul class="menu menu-horizontal gap-2">
        {#if $user}
          <li>
            <a
              href="/"
              class="hover:text-primary transition-colors duration-200"
              class:text-primary={$page.url.pathname === '/'}
            >{$user.email}</a>
          </li>
          <li>
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
              <button class="hover:text-primary transition-colors duration-200">Log out</button>
            </form>
          </li>
        {:else}
          {#each [
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About' },
            { href: '/services', label: 'Services' },
            { href: '/contact', label: 'Contact' }
          ] as link}
            <li class="text-md sm:text-xl">
              <a
                href={link.href}
                class="hover:text-primary transition-colors duration-200"
                class:text-primary={$page.url.pathname === link.href}
              >{link.label}</a>
            </li>
          {/each}
        {/if}
      </ul>
    </div>
  </div>
</div>

<div class="mx-auto py-8 px-4">
  {@render children?.()}
</div>

<style></style>