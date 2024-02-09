<script lang="ts">
  import { getDrawerStore } from "@skeletonlabs/skeleton";
  import { page } from '$app/stores';

  const drawerStore = getDrawerStore();

  function drawerClose(): void {
      drawerStore.close();
  }
</script>
<nav class="list-nav p-4">
	<ul>
		<li><a on:click="{drawerClose}" class="{$page.url.pathname == '/' ? 'bg-surface-500' : ''}" href="/">Homepage</a></li>
		<li><a on:click="{drawerClose}" class="{$page.url.pathname == '/about' ? 'bg-surface-500' : ''}" href="/about">About</a></li>
		<li><a on:click="{drawerClose}" class="{$page.url.pathname == '/work' ? 'bg-surface-500' : ''}" href="/work">Work</a></li>
		<li><a on:click="{drawerClose}" class="{$page.url.pathname == '/contact' ? 'bg-surface-500' : ''}" href="/contact">Contact</a></li>
	</ul>
</nav>
