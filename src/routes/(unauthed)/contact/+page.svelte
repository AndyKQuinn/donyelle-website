<script>
	import { Button } from '$lib/components/ui/button';
</script>

<main>
	<section
		class="relative flex min-h-screen items-center justify-center"
	>
		<div class="mx-auto w-full max-w-2xl p-6 bg-primary rounded-xl text-white">
			<div class="mb-12 text-center">
				<h1 class="mb-6 text-5xl font-light md:text-7xl">Contact Me</h1>
				<p class="text-xl">
					I'd love to hear from you. Send me a message and I'll respond as soon as possible.
				</p>
			</div>

			<form class="flex flex-col gap-4">
				<div>
					<label for="name" class="mb-1 block text-md font-medium">Name</label>
					<input
						type="text"
						id="name"
						name="name"
						class="w-full rounded-md border border-gray-300 px-4 py-2"
						required
					/>
				</div>

				<div>
					<label for="email" class="mb-1 block text-md font-medium">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						class="w-full rounded-md border border-gray-300 px-4 py-2"
						required
					/>
				</div>

				<div>
					<label for="message" class="mb-1 block text-md font-medium">Message</label>
					<textarea
						id="message"
						name="message"
						rows="4"
						class="w-full rounded-md border border-gray-300 px-4 py-2"
						required
					></textarea>
				</div>

				<div class="text-center">
					<Button
						type="submit"
						class="text-xl border-2 border-white"
					>
						Send Message
					</Button>
				</div>
			</form>
		</div>
	</section>
</main>
