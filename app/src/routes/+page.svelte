<script lang="ts">
	import '../app.postcss';
	import { onMount } from 'svelte';
	import { CookieModal } from '$lib/components/CookieModal';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import { slug } from '$lib/store';

	export const modalStore = getModalStore();

	onMount(() => {
		$slug = window.location.pathname === '/' ? 'tigger' : window.location.pathname.slice(1);
		CookieModal(modalStore, $slug);
	});

	import Bio from '../components/Bio.svelte';

	import Wakeup from '../components/Wakeup.svelte';
	import Inperson from '../components/Inperson.svelte';
	import Calendar from '../components/Calendar.svelte';
	import Group from '../components/Group.svelte';
</script>

<div id="~" class="container h-full mx-auto flex justify-center items-center">
	<div class="p-3 flex items-center text-xs md:text-xl">
		<div class="space-y-6">
			<Bio/>
			<Wakeup/>
			<Inperson/>
			<Group/>
		</div>

	</div>

</div>
