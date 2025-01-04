<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { Input } from "$lib/components/ui/input";
    import { Textarea } from "$lib/components/ui/textarea";
    import { Label } from "$lib/components/ui/label";
    import * as Form from "$lib/components/ui/form";

    export let service: string = ''; // Service parameter passed from parent

    let formData = {
        name: '',
        email: '',
        details: ''
    };

    const handleSubmit = async () => {
        try {
            // TODO: Implement form submission logic
            console.log('Form submitted:', { ...formData, service });
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
</script>

<div class="max-w-xl w-full mx-auto p-6 space-y-6 bg-secondary">
    <div class="space-y-2 text-center">
        <h2 class="text-3xl font-bold">Schedule {service}</h2>
        <p class="text-muted-foreground">Fill out the form below to schedule your appointment.</p>
    </div>

    <form on:submit|preventDefault={handleSubmit} class="space-y-4 flex flex-col gap-4">
        <div class="space-y-2">
            <Label for="name" class="text-xl">Name</Label>
            <Input
                id="name"
                type="text"
                placeholder="Your preferred name"
                required
                bind:value={formData.name}
                class="text-xl"
            />
        </div>

        <div class="space-y-2">
            <Label for="email" class="text-xl">Email</Label>
            <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
                bind:value={formData.email}
                class="text-xl"
            />
        </div>

        <div class="space-y-2">
            <Label for="details" class="text-xl">Additional Details</Label>
            <Textarea
                id="details"
                placeholder="What else might be helpful to know?"
                bind:value={formData.details}
                class="text-xl"
            />
        </div>

        <Button type="submit" class="w-full text-xl">Schedule Appointment</Button>
    </form>
</div>
