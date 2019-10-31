<script>
  import client from '../../sanityClient'

  let posts = getProjects();

  function formatDate(date) {
	// request a weekday along with a long date
	var options = {year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options)
  }

async function getProjects(){
	const results = await client.fetch('*[_type == "post" && defined(slug.current) && publishedAt < now()]{slug,title,publishedAt,excerpt,categories[]->{title},authors[]}|order(publishedAt desc)');
	console.log("results",results)

	return results;
}
</script>

<style>

	h2{
		margin-bottom: 1rem;
		text-decoration: underline;
		text-decoration-color: #2e9be6;
	}
	h4{
		margin-bottom: 1.3rem;
	}
	ul{
		padding:0;
	}
	p{
		margin:0;
	}
	li{
		list-style: none;
	}
	.tools li:hover{
		background-color: #2e9be6;
		color: #1e272e;
	}
    .tools{
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
		align-items: center;
		margin-bottom: 1rem;
    }

.tools li{
	font-size: 0.7rem;
    list-style: none;
    border: 1px solid white;
    border-radius: 1rem;
	padding: 0rem .5rem 0.2rem 0.5rem;
    margin: 0.1rem .1rem;
    height: 0.8rem;
}

    .side{
        display:flex;
		flex-direction: row;
		align-items: baseline;
	}

	#entry-date{
		padding-left:0;
	}
	
	.side > *{
		padding: 0 .5rem;
	}

	.entry-wrapper{
		margin-bottom: 2.5rem;
	}
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>


{#await posts}
	<h3>Loading...</h3>
{:then data}
	<ul>
		{#each data as post}
			<!-- we're using the non-standard `rel=prefetch` attribute to
					tell Sapper to load the data for the page as soon as
					the user hovers over the link or taps it, instead of
					waiting for the 'click' event -->
			<li class="entry-wrapper">
				<div class="entry">
					<h2><a href='blog/{post.slug.current}'>{post.title}</a></h2>
					<h4>
					{post.excerpt[0].children[0].text}
					</h4>
					<div class="side">
						<p id="entry-date">{formatDate(post.publishedAt)}</p>
						<ul class="tools">
							{#each post.categories as category}
								<li>{category.title}</li>
							{/each}
						</ul>
					</div>

				</div>
			</li>
		{/each}
	</ul>
{/await}

