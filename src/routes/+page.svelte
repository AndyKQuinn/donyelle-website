<script lang="ts">
  import { getUserContext } from '$lib/contexts/user'

  const user = getUserContext()

	import { onMount, onDestroy } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { Button } from '$lib/components/ui/button';

	// Enhanced intersection observer with different thresholds per section
	onMount(() => {
		testimonialInterval = setInterval(() => {
			currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
		}, 5000);
	});

	onDestroy(() => {
		if (testimonialInterval) clearInterval(testimonialInterval);
	});

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

	const testimonials = [
		{
			quote:
				'Donyelle has helped me tremendously with my neck and upper back pain. She is also a fabulous person with a heart of gold. I highly recommend her any of her services.',
			author: 'Andy Q.'
		},
		{
			quote: 'Meow meow. Meow meow, meow meow. Meow, meow meow... meeeeeeeeow.',
			author: 'Kitty C.'
		},
		{
			quote: 'Woof. Woof woof. Woof arf arf, arf arf woof. Woof.',
			author: 'Doge'
		}
	];

	let currentTestimonialIndex = 0;
	let testimonialInterval: ReturnType<typeof setInterval>;
</script>

<svelte:head>
	<title>Healing Journey | Holistic Wellness Center</title>
</svelte:head>

<main class="overflow-x-hidden">
	<section
		class="relative flex min-h-screen items-center justify-center px-4 py-12 md:py-0"
	>
		<div class="absolute inset-0 -z-10">
			<img
				src="/images/background-1.png"
				alt="Background"
				class="w-full h-full object-cover opacity-50"
			/>
		</div>
		<div class="flex flex-col max-w-6xl w-full">
			<div class="">
				<div class="text-center flex flex-col gap-2 bg-teal-900 rounded-xl p-4 text-white tracking-wide opacity-90">
					<h1 class="text-2xl md:text-5xl font-light font-serif">
						Folkways Practitioner and Ancestor Specialist
					</h1>
					<p class="text-base md:text-lg font-serif font-light">
						Learn ~ Connect ~ Heal
					</p>
					<div class="flex justify-center gap-4 p-2">
						<Button>Learn More</Button>
						<Button>View Services</Button>
					</div>
				</div>
				<!-- <img src="/images/donyelle-face.png" alt="Hero" class="h-auto max-w-[200px] md:max-w-[400px] rounded-md" /> -->
			</div>
			<div id="promo-banner" class="absolute bottom-20 md:bottom-40 left-0 right-0 mx-8 flex flex-col md:flex-row bg-red-200 items-center rounded-xl p-2 gap-4 md:gap-0 md:justify-between border-2 border-primary">
				<div class="text-center md:text-left">
					New plant diva workshop coming soon! Sign up now to get 20% off!
				</div>
				<Button>Buy Tickets</Button>
			</div>
		</div>
	</section>
</main>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}

</style>
