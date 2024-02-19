<script>
import Calendar from './Calendar.svelte';
import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
import { BookOpenCheck } from 'lucide-svelte';
</script>

<hr id="events" class="!border-t-2" />

<div class="flex flex-col gap-10 flex-1 text-center justify-center items-center text-2xl md:text-4xl">
	In-Person Events & Socials
</div>

<p class="text-center m-6">
	Gay brunch!  Potlucks!  Walkies!  Birding!  We endeavor to maintain and nourish the friendships and community aggregated by the Triangle Program.  In-person events are organized and published via Discord.
</p>


<Accordion>
	<AccordionItem>
		<svelte:fragment slot="lead"><BookOpenCheck /></svelte:fragment>
		<svelte:fragment slot="summary">View our Public Calendar</svelte:fragment>
		<svelte:fragment slot="content">
				<Calendar/>
		</svelte:fragment>
	</AccordionItem>
</Accordion>
