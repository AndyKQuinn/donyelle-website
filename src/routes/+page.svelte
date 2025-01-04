<script lang="ts">
  import { getUserContext } from '$lib/contexts/user'

  const user = getUserContext()

	import { Button } from '$lib/components/ui/button';

	const services = [
		{
			title: 'Ancestor Readings',
			description: 'Restore balance and harmony to your body and mind.'
		},
		{
			title: 'Fire cupping & body work',
			description: 'Address the root cause of emotional and physical challenges.'
		},
		{ title: 'Doll Workshops', description: 'Learn techniques for inner peace and mindfulness.' },
		{ title: 'Massage and healing arts', description: 'Discover the healing power of nature.' }
	];
</script>

<svelte:head>
	<title>Healing Journey | Holistic Wellness Center</title>
</svelte:head>

<main class="overflow-x-hidden">
	<section
		class="relative flex min-h-screen items-center justify-center px-4 py-12 md:py-0"
	>
		<div class="flex flex-col max-w-6xl w-full">
			<div class="">
				<div id="promo-banner" class="fixed bottom-4 left-1/2 -translate-x-1/2 flex flex-col sm:flex-row items-center justify-center gap-4 bg-primary rounded-xl p-4 border-2 border-primary shadow-lg max-w-[90%] w-max mx-auto">
					<div class="text-center text-white">
						New plant diva workshop coming soon! Sign up now to get 20% off!
					</div>
					<Button variant="secondary">Buy Tickets</Button>
				</div>
				<div class="text-center flex flex-col gap-2 bg-primary rounded-xl p-4 sm:p-6 text-white tracking-wide opacity-90">
					<h1 class="text-2xl md:text-4xl font-light font-serif mx-auto max-w-[90%]">
						Folkways Practitioner and Ancestor Specialist
					</h1>
					<p class="text-base md:text-lg font-serif font-light">
							Learn ~ Connect ~ Heal
					</p>
					<div class="flex justify-center gap-4 p-2">
						<Button variant="secondary" href="/about" class="text-lg">Learn More</Button>
						<Button variant="secondary" href="/services" class="text-lg">View Services</Button>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}

</style>
