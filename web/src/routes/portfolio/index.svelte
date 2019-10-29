<script context="module">
  import client from '../../sanityClient'
	export function preload({ params, query }) {
    return client.fetch('*[_type=="teamMember"]{name, bio, jobTitle}').then(members => {
			return { members };
		}).catch(err => this.error(500, err));
	}
</script>

<script>
import Card from "../../components/Card.svelte";

  export let members;
 
</script>


<svelte:head>
	<title>Portfolio Projects</title>
</svelte:head>

<h1>Recent Projects</h1>

<ul>
    <div class="cards">
		{#each members as member}
		<div class="card" >
				<Card
				name={member.name}
				imageSrc={'./corey-thompson.jpg'}
				content={member.bio}
				jobTitle={member.jobTitle}
				/>
		</div>
		{/each}
    </div>
</ul>
