<script>
	import { Accordion, AccordionItem, AppRailAnchor, getDrawerStore } from '@skeletonlabs/skeleton';
	import {
		BookOpenCheck,
		CalendarCheck2,
		FileCheck,
		HeartHandshake,
		LineChart,
		LocateFixed,
		Rocket,
		Route
	} from 'lucide-svelte';

	import { acuityDrawerSettings } from '$lib/util';

	const drawerStore = getDrawerStore();
	const openAcuity = () => drawerStore.open(acuityDrawerSettings);

</script>

<hr id="wakeup" class="!border-t-2" />

<div class="flex flex-col gap-10 flex-1 heading justify-center items-center text-2xl md:text-4xl">
	<h1 class="h1">
		<span class="bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone">
			Opt-in Wakeup Call
		</span>
	</h1>
</div>


<div class="flex mb-2 rounded-lg">
<div class="w-3/5 text-center mx-auto p-2 card-hover rounded-xl">
	<span class="flex-auto">
					We host a daily wakeup call at ~8:30 every day via Discord.
					Any member with the ‘wakeup-call’ discord roll is empowered to initiate, join and call
					(and- if needed- delegate further wakeup calls, via an means necessary-
					phone call, discord, email, DMs, doordash coffee delivery to your peer,
					knock on their door, call their neighbors etc)
	</span>
	<Accordion>
		<AccordionItem>
			<svelte:fragment slot="lead"><BookOpenCheck /></svelte:fragment>
			<svelte:fragment slot="summary"><h1 class=" bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone h2">Wakeup Check-in Items</h1></svelte:fragment>
			<svelte:fragment slot="content">
				<ul class="list text-left">
					<li>
						<span>&#8594;</span>
						<span>What you are getting up today</span>
					</li>
					<li>
						<span>&#8594;</span>
						<span>Brush your teefers, eat brefus, drink coffee etc</span>
					</li>
					<li>
						<span class="h3">What you need <i>therapeutically</i> today:</span>
					</li>
					<ul>
						<li>
							<span>&#10239;</span>
							<span>Group time or an ear to talk, explain, vent</span>
						</li>
						<li>
							<span>&#10239;</span>
							<span>A sounding board to talk and scheme</span>
						</li>
						<li>
							<span>&#10239;</span>
							<span>Logistical help, organizational support</span>
						</li>
						<li>
							<span>&#10239;</span>
							<span>A hug, a friendly visit, a safety buddy</span>
						</li>
						<li>
							<span>&#10239;</span>
							<span>Someone hang out in VC or over the phone</span>
						</li>
						<li>
							<span>&#10239;</span>
							<span>A walk, a gym buddy etc</span>
						</li>
					</ul>
				</ul>
			</svelte:fragment>
		</AccordionItem>
	</Accordion>

</div>
<div class="w-2/5 text-center mx-auto p-2 block card-hover rounded-xl">
	<Accordion>
		<AccordionItem>
			<svelte:fragment slot="lead"><BookOpenCheck /></svelte:fragment>
			<svelte:fragment slot="summary">@TODO: Wakeup Features</svelte:fragment>
			<svelte:fragment slot="content">
					<span>
		<code class="code">@todo</code> <a href="mailto:admin@tetrahedron.gay" class="text-blue-800">
		Jess</a> intends to write a lil piece of software to automate wakeup calls to automate pings, send out a wakeup prompt to everyone and allow users to securely wake each other up without having their personal info (phone #, address etc).
	</span>
			</svelte:fragment>
		</AccordionItem>
	</Accordion>


</div>
</div>
