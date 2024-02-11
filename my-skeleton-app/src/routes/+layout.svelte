<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, initializeStores, Drawer, getDrawerStore, Avatar } from '@skeletonlabs/skeleton';
  import Navigation from '$lib/Navigation/Navigation.svelte';
	
	initializeStores();
	const drawerStore = getDrawerStore();

	function drawerOpen(): void {
		drawerStore.open({});
	}
</script>

<Drawer>
	<h2 class="p-4">Navigation</h2>
	<hr />
	<Navigation />
</Drawer>
<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-0 lg:w-64">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<div class="flex w-full">
						<button class="lg:hidden btn btn-sm mr-4" on:click="{drawerOpen}">
								<span>
										<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
												<rect width="100" height="20" />
												<rect y="30" width="100" height="20" />
												<rect y="60" width="100" height="20" />
										</svg>
								</span>
						</button>
						<strong class="text-xl uppercase">Michael Brooks</strong>
					</div>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
					<div class="flex">
						<a target="_blank" href="https://github.com/michaelbrooks1234">
							<button class="btn p-2">
								<Avatar width='w-10' src="/githubIcon.png"/>	
							</button>
						</a>
						<a target="_blank" href="https://www.linkedin.com/in/michael-brooksengineer/">
							<button class="btn p-2">
								<Avatar width='w-10' src="/linkedinIcon.png"/>	
							</button>
						</a>
					</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Navigation />
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
<style lang="postcss">
</style>