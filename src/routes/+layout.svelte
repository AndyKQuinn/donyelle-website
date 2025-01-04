<script lang="ts">
  import '../app.postcss'

  import { setUserContext } from '$lib/contexts/user'
  import { type Snippet } from 'svelte'
  import { writable } from 'svelte/store'
  import type { PageData } from './$types'

  import { Button } from "$lib/components/ui/button"

  import Sun from "lucide-svelte/icons/sun";
  import Moon from "lucide-svelte/icons/moon";
  import { ModeWatcher, toggleMode, setMode, resetMode } from "mode-watcher";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import Computer from "lucide-svelte/icons/laptop";
  import { colorTheme, setColorTheme } from '$lib/stores/theme'
  import Palette from "lucide-svelte/icons/palette"

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

  const availableThemes = [
    { name: 'Default', value: 'default' },
    { name: 'Purple 1 - Light', value: 'purple-two' },
    { name: 'Purple 1 - Dark', value: 'dark-purple-two' },
    { name: 'Purple 2 - Light', value: 'purple-three' },
    { name: 'Purple 2 - Dark', value: 'dark-purple-three' },
  ]

</script>

<div class="flex min-h-screen flex-col">
  <div class="fixed top-0 left-0 right-0 border-b z-10 bg-primary text-white">
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

          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild let:builder>
              <Button builders={[builder]} variant="ghost" size="icon">
                <Palette class="h-[1.6rem] w-[1.6rem]" />
                <span class="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content align="end">
              <DropdownMenu.Label class="text-lg">Color Theme</DropdownMenu.Label>
              {#each availableThemes as theme}
                <DropdownMenu.Item on:click={() => setColorTheme(theme.value)}>
                  <span>{theme.name}</span>
                </DropdownMenu.Item>
              {/each}
              <DropdownMenu.Separator />
              <DropdownMenu.Label>Mode</DropdownMenu.Label>
              <DropdownMenu.Item on:click={() => setMode("light")}>
                <Sun class="h-4 w-4 mr-2" />
                <span>Light</span>
              </DropdownMenu.Item>
              <DropdownMenu.Item on:click={() => setMode("dark")}>
                <Moon class="h-4 w-4 mr-2" />
                <span>Dark</span>
              </DropdownMenu.Item>
              <DropdownMenu.Item on:click={() => resetMode()}>
                <Computer class="h-4 w-4 mr-2" />
                <span>System</span>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>


      </nav>
    </div>
  </div>

  <div class="flex-1">
    <div class="absolute inset-0 -z-10 opacity-80">
			<img
				src="/images/image1.jpeg"
				alt="Background"
				class="w-full h-full object-cover opacity-50"
			/>
		</div>
    <ModeWatcher />
    {@render children?.()}
  </div>

  <section id="footer" class="bg-secondary py-2 md:py-4">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3 md:text-left">
        <div class="flex flex-col items-center md:text-left">
          <h3 class="mb-4 text-xl">Contact Me</h3>
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
</div>
