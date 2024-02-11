<script lang="ts">
  import type { SvelteComponent } from 'svelte';
  import { getModalStore } from '@skeletonlabs/skeleton';

  const modalStore = getModalStore();

  export let parent: SvelteComponent;
</script>

{#if $modalStore[0]}
  <div class="card flex flex-col justify-between w-95vw sm:w-80vw lg:w-30vw h-fit p-8">
    <div class="flex flex-col">
      <span class="text-4xl text-primary-500 mt-8">{$modalStore[0].meta.title}</span>
      <span class="text-lg mt-9">{$modalStore[0].meta.body}</span>
    </div>
    <span class="text-xl mt-2 text-success-400">
      Technologies Used:
    </span>
    <div class="flex flex-row h-fit flex-wrap pt-2 justify-between">
      {#each $modalStore[0].meta.technologiesUsed as tech}
        <span class="mx-4 my-2 text-success-300">{tech}</span>
      {/each}
    </div>
    <div class="flex flex-row w-full justify-around mt-8">
      <a href="{$modalStore[0].meta.liveLink}" target="_blank"><button class="btn variant-ringed-primary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
        </svg>
        View Live</button></a>
      <a href="{$modalStore[0].meta.sourceLink}" target="_blank"><button class="btn variant-ringed-primary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg>
        View Source</button></a>
    </div>
  </div>
{/if}
