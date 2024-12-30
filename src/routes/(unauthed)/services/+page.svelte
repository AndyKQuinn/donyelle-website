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
  import { PUBLIC_POCKETBASE_URL } from '$env/static/public';

  export let data: PageData;

  const services = data.services;
  const imageBasePath = `${PUBLIC_POCKETBASE_URL}/api/files/services/`;
</script>

<main class="my-14">
  <div>
    <h1 class="flex justify-center text-4xl p-4">My Services</h1>
  </div>
  {#if services && services.length > 0}
    <div class="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 p-4">
      {#each services as service}
        <Card class="border-2 border-primary flex flex-col justify-between h-[32rem] w-full sm:w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] xl:w-[calc(25%-2rem)]">
          <img
            src={imageBasePath + service.id + "/" + service.image}
            alt={service.title}
            class="h-48 w-full rounded-md object-cover"
          />
          <CardHeader>
            <div class="flex justify-between items-center">
              <CardTitle class="text-xl line-clamp-1">{service.title}</CardTitle>
              <Badge class="text-sm text-white shrink-0">{service.price}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription class="line-clamp-4 h-24">{service.description}</CardDescription>
          </CardContent>
          <CardFooter class="flex flex-col sm:flex-row justify-between gap-2 mt-auto">
            <Dialog.Root>
              <Dialog.Trigger class="w-full sm:w-auto">
                  <p class="border-2 border-primary p-1 px-2 rounded-lg">More Details
              </Dialog.Trigger>

              <Dialog.Content class="border-2 border-primary">
                <Dialog.Header class="flex flex-col gap-4">
                  <Dialog.Title>More Details</Dialog.Title>
                  <Dialog.Description>
                    {@html service.details}
                  </Dialog.Description>
                  <Dialog.Close>
                    <Button>Close</Button>
                  </Dialog.Close>
                </Dialog.Header>
              </Dialog.Content>
            </Dialog.Root>
            <Button href="/schedule" class="text-md w-full sm:w-auto">
              Book Now
            </Button>
          </CardFooter>
        </Card>
      {/each}
    </div>
  {:else}
    <div class="flex justify-center items-center p-8">
      <p class="text-lg text-muted-foreground">No services available at the moment.</p>
    </div>
  {/if}
</main>
