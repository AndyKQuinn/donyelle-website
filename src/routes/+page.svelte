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
		class="relative flex min-h-screen items-center justify-center"
	>
		<div class="flex flex-col">
		<div class="flex gap-8 align-center items-center">
			<div class="text-center flex flex-col gap-2">
				<h1 class="text-6xl font-light">
					Begin Your Healing Journey
				</h1>
				<p class="mx-auto text-lg">
					Find balance, peace, and natural healing through holistic practices
				</p>
				<div class="flex justify-center gap-4 p-4">

					<Button>Learn More</Button>
					<Button>View Services</Button>
				</div>
			</div>
			<img src="/images/donyelle-face.png" alt="Hero" class="h-auto" />
		</div>
		<div id="promo-banner" class="flex mt-20 bg-red-200 align-center items-center rounded-xl p-4 justify-between">
			<div>New plant diva workshop coming soon! Sign up now to get 20% off!</div>
			<Button>Buy Tickets</Button>
		</div>
		</div>
	</section>

	<section id="about" class="bg-sage-50 py-20">
		<div
			class="container mx-auto px-4"
		>
			<h2 class="mb-12 text-center text-4xl">My Approach to Healing</h2>
			<div class="mx-auto max-w-3xl text-lg leading-relaxed">
				<p class="mb-6">
					We believe in treating the whole person – body, mind, and spirit. My holistic approach
					combines ancient wisdom with modern understanding to help you achieve optimal wellness.
				</p>
				<p>
					Through gentle and natural methods, we guide you on your path to healing, helping you
					reconnect with your body's innate wisdom and ability to heal.
				</p>
			</div>
		</div>
	</section>

	<section id="services" class="py-20">
		<div class="container mx-auto px-4">
			<h2 class="mb-12 text-center text-4xl" in:fly={{ y: 50, duration: 1000 }}>
				My Services
			</h2>
			<div class="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
				{#each services as service, i}
					<div
						class="bg-sage-50 rounded-lg p-8 transition-shadow duration-300 hover:shadow-lg"
						in:fly={{ x: i % 2 === 0 ? -50 : 50, duration: 1000, delay: 200 * i }}
					>
						<h3 class="mb-4 text-2xl text-emerald-700">{service.title}</h3>
						<p class="text-gray-600">{service.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section id="testimonials" class="bg-sage-100 h-96 py-20">
		<div
			class="container mx-auto px-4"
		>
			<h2 class="mb-12 text-center text-4xl">Client Stories</h2>
			<div class="mx-auto max-w-4xl">
				{#each [testimonials[currentTestimonialIndex]] as testimonial (currentTestimonialIndex)}
					<div in:fade={{ duration: 400 }}>
						<blockquote class="text-center text-xl italic">
							"{testimonial.quote}"
							<footer class="mt-4">— {testimonial.author}</footer>
						</blockquote>
					</div>
				{/each}
				<div class="mt-8 flex justify-center gap-2">
					{#each testimonials as _, i}
						<button
							class="h-2 w-2 rounded-full transition-colors duration-300 {i ===
							currentTestimonialIndex
								? 'bg-primary'
								: 'bg-secondary'}"
							on:click={() => (currentTestimonialIndex = i)}
							aria-label="Go to testimonial {i + 1}"
						></button>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section id="footer" class="bg-secondary py-12">
		<div class="container mx-auto px-4">
			<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
				<div>
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
				<div>
					<h3 class="mb-4 text-xl">Hours</h3>
					<p class="mb-2">Monday - Friday: 9am - 7pm</p>
					<p class="mb-2">Saturday: 10am - 5pm</p>
					<p>Sunday: Unavailable</p>
				</div>
				<div>
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
</main>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}

	.bg-sage-50 {
		background-color: #f7f9f7;
	}

	.bg-sage-100 {
		background-color: #e8efe8;
	}
</style>
