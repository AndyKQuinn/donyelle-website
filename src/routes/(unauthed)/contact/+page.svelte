<main>
	<section
		id="hero"
		class="relative flex min-h-screen items-center justify-center"
		style="background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9))) center/cover"
	>
		<div class="mx-auto w-full max-w-2xl p-6">
			<div class="mb-12 text-center">
				<h1 class="mb-6 text-5xl font-light text-emerald-800 md:text-7xl">Contact Me</h1>
				<p class="text-lg text-gray-600">
					I'd love to hear from you. Send me a message and I'll respond as soon as possible.
				</p>
			</div>

			<form>
				<div>
					<label for="name" class="mb-1 block text-sm font-medium text-gray-700">Name</label>
					<input
						type="text"
						id="name"
						name="name"
						class="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-emerald-500 focus:ring-emerald-500"
						required
					/>
				</div>

				<div>
					<label for="email" class="mb-1 block text-sm font-medium text-gray-700">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						class="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-emerald-500 focus:ring-emerald-500"
						required
					/>
				</div>

				<div>
					<label for="message" class="mb-1 block text-sm font-medium text-gray-700">Message</label>
					<textarea
						id="message"
						name="message"
						rows="4"
						class="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-emerald-500 focus:ring-emerald-500"
						required
					></textarea>
				</div>

				<div class="text-center">
					<button
						type="submit"
					>
						Send Message
					</button>
				</div>
			</form>
		</div>
	</section>
</main>
