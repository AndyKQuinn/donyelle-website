<script>
	import {
		Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
  import { Button } from '$lib/components/ui/button';

	const services = [
		{
			title: 'Service Title',
			description: 'Descriptor of service of things that I provide',
			image: '/images/fire-cupping-sauna.png',
			features: ['Interesting fact 1', 'Interesting thing 2', 'Some other thing 3'],
			details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
			price: '$99.99/hour'
		},
		{
			title: 'Service Title',
			description: 'Descriptor of service of things that I provide',
			image: '/images/healing-nature.png',
			features: ['Interesting fact 1', 'Interesting thing 2', 'Some other thing 3'],
			details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
			price: '$99.99/hour'
		},
		{
			title: 'Service Title',
			description: 'Descriptor of service of things that I provide',
			image: '/images/fire-cupping-sauna.png',
			features: ['Interesting fact 1', 'Interesting thing 2', 'Some other thing 3'],
			details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
			price: '$99.99/hour'
		}
	];

  import * as Dialog from "$lib/components/ui/dialog";

</script>

<main>
  <div>
    <h1 class="flex justify-center text-4xl p-4">My Services</h1>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
    {#each services as service, i}
      <Card>
        <img
          src={service.image}
          alt={service.title}
          class="h-48 w-full rounded-xl object-cover"
        />
        <CardHeader>
          <div class="flex items-center justify-between">
            <CardTitle>{service.title}</CardTitle>
            <Badge class="text-xl text-white">{service.price}</Badge>
          </div>
          <CardDescription>{service.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul class="list-inside list-disc space-y-2">
            {#each service.features as feature}
              <li class="list-none text-center">{feature}</li>
            {/each}
          </ul>
        </CardContent>
        <CardFooter class="flex justify-center gap-8">
          <Dialog.Root>
            <Dialog.Trigger class="flex gap-2 bg-primary text-white px-4 py-2 rounded-md">
              Learn More
            </Dialog.Trigger>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>More Details</Dialog.Title>
                <Dialog.Description>
                  Here is where we will provide more details about the service. All sorts of juicy awesome tidbits of information.
                </Dialog.Description>
                <Dialog.Close>
                  <Button>Close</Button>
                </Dialog.Close>
              </Dialog.Header>
            </Dialog.Content>
          </Dialog.Root>
            <Button href="/schedule">
              Book Now
            </Button>
        </CardFooter>
      </Card>
    {/each}
  </div>

</main>
