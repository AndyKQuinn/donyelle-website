<script lang="ts">
  import ScheduleForm from "./schedule-form.svelte";
  import { page } from "$app/stores";

  $: service = $page.url.searchParams.get('service') || "invalidService";
</script>

<div class="mt-20">
  <ScheduleForm {service} />
</div>
