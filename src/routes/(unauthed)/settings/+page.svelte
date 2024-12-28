<script lang="ts">
  import type { PageData } from "./$types.js";
  export let data: PageData;
  import SettingsForm from "./settings-form.svelte";
</script>

<SettingsForm data={data.form} />
