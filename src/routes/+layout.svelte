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

<div class="fixed top-0 left-0 right-0 border-b z-10 bg-red-200">
  <div class="flex h-14 items-center justify-center md:justify-between md:container">
    <div class="hidden lg:block text-2xl">
      <a href="/">
        Donyelle Headington
      </a>
    </div>

    <nav class="flex items-center">
        {#each navigationItems as item}
          <Button
            href={item.href}
            variant="ghost"
            class="text-lg"
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

<section id="footer" class="bg-secondary py-8 md:py-12">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 gap-8 md:grid-cols-3 md:text-left">
      <div class="flex flex-col items-center md:text-left">
        <h3 class="mb-4 text-xl font-semibold">Contact Me</h3>
        <div class="flex flex-col">
          <div class="flex items-center gap-4 p-2">
            <p class="text-2xl">☎️</p>
            <p>612-298-7122</p>
          </div>
          <div class="flex items-center gap-4 p-2">
            <p class="text-2xl">📧</p>
            <a href="mailto:Donyellemary12@gmail.com">Donyellemary12@gmail.com</a>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center md:text-left">
        <h3 class="mb-4 text-xl">Hours</h3>
        <p class="mb-2">Monday - Friday: 9am - 7pm</p>
        <p class="mb-2">Saturday: 10am - 5pm</p>
        <p>Sunday: Unavailable</p>
      </div>
      <div class="flex flex-col items-center md:text-left">
        <h3 class="mb-4 text-xl">Follow Us</h3>
        <div class="flex gap-4 text-2xl">
          <p>🐥</p>
          <p>😈</p>
        </div>
      </div>
    </div>
    <div class="mt-8 pt-8 text-center">
      <p>&copy; {new Date().getFullYear()} Donyelle Headington ~ All rights reserved.</p>
    </div>
  </div>
</section>
