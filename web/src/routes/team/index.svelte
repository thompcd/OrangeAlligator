<script context="module">
  import client from '../../sanityClient'
	export function preload({ params, query }) {
    return client.fetch('*[_type=="teamMember"]{name, bio, jobTitle, skills, image, facebook, linkedIn, deviantArt, twitter, devTo,  skills[] -> {description,title}}')
        .then(members => {
                return { members };
            }).catch(err => this.error(500, err));
	}
</script>

<script>
import Card from "../../components/Card.svelte";
import myConfiguredSanityClient from '../../sanityClient'
import imageUrlBuilder from '@sanity/image-url'

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(myConfiguredSanityClient)

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
function urlFor(source) {
  let it =  builder.image(source);
  console.log("img url", it)
  return it;
}

  export let members;
 
</script>

<style>

</style>

<svelte:head>
	<title>Team Members</title>
</svelte:head>

<h1>Team Members</h1>

<ul>
    <div class="cards">
		{#each members as member}
		<div class="card" >
				<Card
				name={member.name}
				imageSrc={urlFor(member.image).width(300).url()}
				content={member.bio}
				jobTitle={member.jobTitle}}
				/>
                     <ul>
                    {#each member.skills as skill}
                        <li>{skill.title}</li>
                    {/each}
                     </ul>
		</div>
		{/each}
    </div>
</ul>
