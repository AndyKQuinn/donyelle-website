<script lang="ts">
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

  import * as Dialog from "$lib/components/ui/dialog";
  import type { PageData } from "./$types.js";
  export let data: PageData;
  const services = data.services;
  const imageBasePath = 'http://localhost:8090/api/files/services/';
</script>

<main>
  <div>
    <h1 class="flex justify-center text-4xl p-4">My Services</h1>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 pt-4 px-16">
    {#each services as service, i}
    {console.log("Service: ", service)}
      <Card class="max-w-96 border-2 border-primary">
        <img
          src={imageBasePath + service.id + "/" + service.image}
          alt={service.title}
          class="h-48 w-full rounded-lg object-cover"
        />
        <CardHeader>
          <div class="flex items-center justify-between">
            <CardTitle>{service.title}</CardTitle>
            <Badge class="text-sm text-white">{service.price}</Badge>
          </div>
          <CardDescription class="py-4">{service.description}</CardDescription>
        </CardHeader>
        <!-- <CardContent>
          <ul class="list-inside list-disc space-y-2">
            {#each service.features as feature}
              <li class="list-none text-center">{feature}</li>
            {/each}
          </ul>
        </CardContent> -->
        <CardFooter class="flex justify-center gap-8">
          <Dialog.Root>

            <Dialog.Trigger class="flex gap-2 bg-primary text-white rounded-md">
              Learn More
            </Dialog.Trigger>

            <Dialog.Content class="border-2 border-primary">
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
            <Button class="w-32" href="/schedule">
              Book Now
            </Button>
        </CardFooter>
      </Card>
    {/each}
  </div>

</main>
