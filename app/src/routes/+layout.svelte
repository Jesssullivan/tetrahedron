<script lang="ts">

	import { Modal } from '@skeletonlabs/skeleton';

	import { initializeStores } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import { CookieModal } from '$lib/components/CookieModal';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import { init, promise, pictures, slug } from '$lib/store';



	import '../app.postcss';
	import { AppShell, AppBar, Avatar } from '@skeletonlabs/skeleton';
	import { AppRail, AppRailAnchor, Drawer } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import {
		AlignJustify,
		Baby,
		BookHeart, Boxes,
		CalendarCheck2, Cross,
		Facebook, Github,
		HomeIcon,
		Instagram,
		Linkedin,
		Map, Megaphone, Rss,
		Star,
		Stethoscope
	} from 'lucide-svelte';
	import {  getDrawerStore } from '@skeletonlabs/skeleton';
	import { acuityDrawerSettings, contactDrawerSettings } from '$lib/util';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import CatMouseTracker from '$lib/components/CatMouseTracker.svelte';
	import Calendar from '../components/Calendar.svelte';

	initializeStores();

	const drawerStore = getDrawerStore();

	export const openAcuity = () => drawerStore.open(acuityDrawerSettings);
	export const openContact = () => drawerStore.open(contactDrawerSettings);

	export const createLoadObserver = (handler: () => void) => {
		let waiting = 0

		return (el: { addEventListener: (arg0: string, arg1: () => void) => void }) => {
			waiting++
			el.addEventListener('load', () => {
				waiting--
				if (waiting === 0) {
					handler()
				}
			})
		}
	}

	let currentTile: number = 0;

	export const modalStore = getModalStore();

	let tiggerState: Promise<boolean>;


	onMount(() => {
		$slug = window.location.pathname === '/' ? 'tigger' : window.location.pathname.slice(1);
		tiggerState = CookieModal(modalStore, $slug);
		$promise.then((p) => {
			$pictures = p;
			$init = true;
		});
	});

</script>
<Drawer class="w-20%" regionDrawer="overflow-y-hidden">
	{#if $drawerStore.id === 'Acuity'}
		<AppRail background="bg-transparent" regionDefault="overscroll-y-none	overflow-hidden">
			<svelte:fragment slot="lead">
				<a href="#~">
					<AppRailAnchor
						href="https://discord.gg/uCkAuUpu9Y"
						regionLead="inline-flex justify-center"
						bind:group={currentTile}
						name="Join our Discord group"
						value={0}
						title="Join our Discord group">
						<svelte:fragment slot="lead"></svelte:fragment>
						<span class="inline-flex justify-center bg-transparent">
							<img src="discord.png"
									 width="56em" alt="discord logo" />
						</span>
					</AppRailAnchor>
				</a>
			</svelte:fragment>
			<a href="#~">
				<AppRailAnchor
					href="/#~"
					selected={$page.url.pathname.endsWith('~')}
					regionLead="inline-flex justify-center"
					bind:group={currentTile}
					name="~"
					value={0}
					title="~">
					<svelte:fragment slot="lead"><HomeIcon size="{32}" /></svelte:fragment>
					<span>Home</span>
				</AppRailAnchor>
			</a>
			<a href="#wakeup">
				<AppRailAnchor
					href="/#wakeup"
					selected={$page.url.pathname.endsWith('wakeup')}
					regionLead="inline-flex justify-center"
					bind:group={currentTile}
					name="wakeup"
					value={1}
					title="wakeup">
					<svelte:fragment slot="lead"><Megaphone /></svelte:fragment>
					<span>Wakeup</span>
				</AppRailAnchor>
			</a>
			<a href="#events">
				<AppRailAnchor
					selected={$page.url.pathname.endsWith('events')}
					href="/#events"
					regionLead="inline-flex justify-center"
					bind:group={currentTile}
					name="events"
					value={2}
					title="events">
					<svelte:fragment slot="lead">
						<CalendarCheck2 />
					</svelte:fragment>
					<span>In-Person</span>
				</AppRailAnchor>
			</a>
			<a href="#group">
				<AppRailAnchor
					selected={$page.url.pathname === 'group'}
					href="/#group"
					regionLead="inline-flex justify-center"
					bind:group={currentTile}
					name="group"
					value={3}
					title="group">
					<svelte:fragment slot="lead">
						<Boxes />
					</svelte:fragment>
					<span>Group</span>
				</AppRailAnchor>
			</a>
			<svelte:fragment slot="trail">
				<AppRailAnchor on:click={openContact} title="Account">
					<svelte:fragment slot="lead">
						<span><Baby /></span>
					</svelte:fragment>
					<span>Admin</span>
				</AppRailAnchor>
			</svelte:fragment>
		</AppRail>
	{:else if $drawerStore.id === 'Contact'}
		<div>
			<div class="h5 text-center justify-center items-center p-2">
				Admin section, login and other such features are Undah construction UwU </div>
			<span class=" flex flex-col justify-center items-center p-2">
						<Avatar class=""
										src="https://imgs.search.brave.com/yqqglEmYgu-nlI6ply4Y9Rfs1r5sE30HooVLV4vPDVI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dGFzY28tc2FmZXR5/LmNvbS9wcm9kdWN0/X2ltYWdlcy91cGxv/YWRlZF9pbWFnZXMv/ZnVubnktY2F0LnBu/Zw"  width="w-32 md:w-48" rounded="rounded-full" />
					</span>
		</div>
	{:else}
		<!-- beep boop -->
	{/if}
</Drawer>

<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar background="bg-transparent" shadow="shadow-xl" >
			<svelte:fragment slot="lead">
				<a href="#~" on:click={openAcuity}>
					<strong class="invisible absolute md:visible md:relative uppercase h4">Tetrahedron.gay</strong>
					<p class="md:invisible md:absolute text-xl bg-transparent">
						<AlignJustify size={48} strokeWidth={2.5} />
					</p>
				</a>
				<a href="#~">
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<div class="btn-group p-2">
					<a href="https://www.transscendsurvival.org/"><Rss size="{16}"/></a>
					<a href="https://hrihospital.com/programs-services/outpatient-services/partial-hospitalization-php/triangle-program-lgbtq/" class=""><Cross size="{16}" /></a>
					<a href="https://github.com/jesssullivan" class=""><Github size="16" /></a>
					<button><LightSwitch /></button>
				</div>

			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<div class="absolute invisible md:relative md:visible">
			<AppRail background="bg-transparent" regionDefault="overscroll-y-none	overflow-hidden">
				<svelte:fragment slot="lead">
					<a href="#~">
						<AppRailAnchor
							href="https://discord.gg/uCkAuUpu9Y"
							regionLead="inline-flex justify-center"
							bind:group={currentTile}
							name="Join our Discord group"
							value={0}
							title="Join our Discord group">
							<svelte:fragment slot="lead"></svelte:fragment>
							<span class="inline-flex justify-center bg-transparent">
							<img src="discord.png"
									 width="56em" alt="discord logo" />
						</span>
						</AppRailAnchor>
					</a>
				</svelte:fragment>
				<a href="#~">
					<AppRailAnchor
						href="/#~"
						selected={$page.url.pathname.endsWith('~')}
						regionLead="inline-flex justify-center"
						bind:group={currentTile}
						name="~"
						value={0}
						title="~">
						<svelte:fragment slot="lead"><HomeIcon size="{32}" /></svelte:fragment>
						<span>Home</span>
					</AppRailAnchor>
				</a>
				<a href="#wakeup">
					<AppRailAnchor
						href="/#wakeup"
						selected={$page.url.pathname.endsWith('wakeup')}
						regionLead="inline-flex justify-center"
						bind:group={currentTile}
						name="wakeup"
						value={1}
						title="wakeup">
						<svelte:fragment slot="lead"><Megaphone /></svelte:fragment>
						<span>Wakeup</span>
					</AppRailAnchor>
				</a>
				<a href="#events">
					<AppRailAnchor
						selected={$page.url.pathname.endsWith('events')}
						href="/#events"
						regionLead="inline-flex justify-center"
						bind:group={currentTile}
						name="events"
						value={2}
						title="events">
						<svelte:fragment slot="lead">
							<CalendarCheck2 />
						</svelte:fragment>
						<span>In-Person</span>
					</AppRailAnchor>
				</a>
				<a href="#group">
					<AppRailAnchor
						selected={$page.url.pathname === 'group'}
						href="/#group"
						regionLead="inline-flex justify-center"
						bind:group={currentTile}
						name="group"
						value={3}
						title="group">
						<svelte:fragment slot="lead">
							<Boxes />
						</svelte:fragment>
						<span>Group</span>
					</AppRailAnchor>
				</a>
				<svelte:fragment slot="trail">
					<AppRailAnchor on:click={openContact} title="Account">
						<svelte:fragment slot="lead">
							<span><Baby /></span>
						</svelte:fragment>
						<span>Admin</span>
					</AppRailAnchor>
				</svelte:fragment>
			</AppRail>
		</div>
	</svelte:fragment>
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	{#await tiggerState}
<!--		<div style="height: 100%; background-image: url('Tetrahedron.gif');"></div>-->
	{:then uwu}
		<h1 class="hidden">{uwu}</h1>
		<div>
			{#await $promise}
<!--				<div style="height: 100%; background-image: url('Tetrahedron.gif');"></div>-->
			{:then $pictures}
				<slot/>
			{:catch error}
				<p>{error}</p>
			{/await}
		</div>
	{:catch error}
		<p>{error}</p>
	{/await}

	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">

	</svelte:fragment>
	<!-- (footer) -->
</AppShell>


<Modal />
