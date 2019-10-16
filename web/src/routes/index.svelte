<script>
import Card from "../components/Card.svelte";
import EmailIcon from 'svelte-icons/fa/FaRegEnvelope.svelte'
import GithubIcon from 'svelte-icons/fa/FaGithubSquare.svelte'
import FacebookIcon from 'svelte-icons/fa/FaFacebookSquare.svelte'
import LinkedInIcon from 'svelte-icons/fa/FaLinkedIn.svelte'
import DevIcon from 'svelte-icons/fa/FaDev.svelte'
import DeviantArtIcon from 'svelte-icons/fa/FaDeviantart.svelte'

  let icons = [
    {
		name: "Web",
	  	imageSrc: "./web-icon.png",
	},
	{
		name: "Data",
	  	imageSrc: "./data-icon.png",
	},
	{
		name: "Automation",
	  	imageSrc: "./automation-icon.png",
	},
  ];

    let teamMembers = [
    {
      name: "Corey Thompson",
	  imageSrc: "./corey-thompson.jpg",
	  links: {
		facebook: "https://www.facebook.com/coreydwaynethompson",
		linkedIn: "https://www.linkedin.com/in/coreydthompson/",
		github: "https://github.com/thompcd",
	  },
	  jobTitle: "Software Developer, Electrical Engineer",
	  content: "Corey is a father, web developer, Data Visualization Society contributor, electrical engineer and full-time software engineer in Tulsa, OK. He has a specialty in manufacturing and quality control software with nearly a decade of experience working within the electronics, HVAC, oil and gas industries.",
    },
    {
      name: "Trey Bishop",
	  imageSrc: "./trey-bishop.jpg",
	  links: {
		linkedIn: "https://www.linkedin.com/in/treybishop/",
		deviantArt: "https://www.deviantart.com/treybishop",
	  },
	  jobTitle: "Designer, Innovation Consultant",
	  content: "Trey is an inventor, concept artist and graphic designer with over fifteen years of experience working for creative agencies, large corporations and educational institutions. He specializes in exploring bold new ideas and innovating beyond the status quo and has worked with clients such as Circle 5 Studios, Tri County Tech, ESI with Walmart Labs, Questel, Executive IP and Nemesis Studios.",
    },
    {
      name: "Lee Whitehead",
	  imageSrc: "./lee-whitehead.png",
	  links: {
		linkedIn: "https://www.linkedin.com/in/leetwhitehead/",
	  },
	  jobTitle: "Growth and Enablement Consultant",
	  content: "Lee is the owner of UVOICE Consulting, Inc. and has over 8 years of marketing, technology and sales enablement experience. He has a specialty in technology and SaaS businesses with a heavy focus on sustainable growth. Lee uses his vast experience in technology and marketing to help clients focus on growth through execution.",
    },
    {
      name: "Blake Tucker",
	  imageSrc: "./blake-tucker.jpg",
	  links: {
		linkedIn: "https://www.linkedin.com/in/blake-t-85109783/",
	  },
	  jobTitle: "Network Analyst, Technology Consultant",
	  content: "Blake is a Network and Systems Analyst with over half a decade in the field. He uses his expertise in Azure's cloud services and Office 365 to help clients meet their Information Technology needs. He has worked in many industries such as oil and gas, healthcare, manufacturing, sales, marketing and legal.",
    }
  ];

  </script>

<svelte:head>
	<title>Home | Orange Alligator Solutions</title>
</svelte:head>
<h1>
Web Development.<br>
Data Visualization.<br>
A Network of Subject Matter Experts.
</h1>
<p>
Orange Alligator Solutions is a solutions vendor. OAS offers primarily software development and is operated by Corey Thompson, backed by a network of domain experts.
By leveraging these connections, we offer whole turn-key projects rather than a standalone piece of software.
</p>

<div class="cards">
	{#each icons as icon}
		<div class="stack">
			<img src={icon.imageSrc} alt={icon.name}/>
			<h2 style="margin-top: -3rem; color: #414141; user-select: none; font-family: 'Roboto Condensed'; font-weight: 700; opacity: .9;">{icon.name}</h2>
		</div>
	{/each}
</div>

<br>

<h1>Doing it right</h1>
<p>
The advantage of having a network of craftsmen available is the knowledge of their area's best-practices, industry standards and common pitfalls.
Orange Alligator Solutions doesn't focus on meeting project deadlines and moving to the next client. 
We thrive on setting up a stable environment built with best-practices, giving the proper tools to maintain it and teaching the owners how to leverage their technology most effectively.
</p>

<h1>Meet Our Experts</h1>

    <div class="cards">
		{#each teamMembers as member}
		<div class="card" >
				<Card>
				<h2 slot="name" class="card-title">{member.name}</h2>
				<img slot="image" class="card-image" src={member.imageSrc} alt={member.name} />
				<h3 slot="title" class="card-job">{member.jobTitle}</h3>
				<span class="icon {member['links']['facebook'] == undefined ? "hide" : ""}" 
					slot="facebook"><a  href={member['links']['facebook'] || ''} alt="facebook"><FacebookIcon /></a></span>
				<span class="icon {member['links']['linkedIn'] == undefined ? "hide" : ""}"
					slot="linkedIn"><a  href={member['links']['linkedIn'] || ''} alt="linkedIn"><LinkedInIcon /></a></span>
				<span class="icon {member['links']['github'] == undefined ? "hide" : ""}" 
					slot="github"><a  href={member['links']['github'] || ''} alt="github"><GithubIcon /></a></span>
				<span class="icon {member['links']['deviantArt'] == undefined ? "hide" : "render"}" 
					slot="deviantArt"><a  href={member['links']['deviantArt'] || ''} alt="deviantArt"><DeviantArtIcon /></a></span>
				<p slot="content" class="card-content">{member.content}</p>
				</Card>
		</div>
		{/each}
    </div>

<h1>
What Is OAS?
</h1>
<p>
We provide Tulsa with front-end web design, web apps, website development and interactive data visualization. We specialize in manufacturing and quality tools and reporting.
Our front-end web and data visualization services provide unique consumer experiences while uncovering hidden factory, revealing your KPI’s trends and predicting your next targeted metrics.
</p>

<div class="contact">
	<h1>Questions?</h1>
	<h3>Drop us a line, we’ll be in touch with you soon!</h3>

	<div class="fill">
		<form style="display:flex; flex-direction: column;">
			<label>Name<input /></label>
			<label>Email<input /></label>
			<label>Subject<input /></label>
			<label>Message<input style="height:6rem;" /></label>
			<button>Send</button>
		</form>
	</div>
</div>


<style>
	p{
		margin-bottom: 1rem;
	}
	.fill{
		width: 15rem;
	}
	.contact{
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	img{
	width: 300px;
	}
	.cards {
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	padding: 1em 0;
	}
	.stack{
		display: flex;
		flex-direction: column;
		text-align: center;
		padding: 1rem;
	}

	.hide{
		display: none;
	}
	.icon {
	width: 1.5rem;
	height: 1.5rem;
	padding: .25rem .25rem;
	}

	.icon a{
	color: #2e9be6;
	}

	.icon a:hover{
	color: #ed703a;
	}

	.cards {
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
		}
	.card{
		display: flex;
		flex-direction: column;
		text-align: center;
		padding: 1rem;
	}
	.card-image{
		width: 300px;
	}

	.card-title {
	font-size: 1.5rem;
	line-height: 1.6;
	color: #000;
	font-weight: 500;
	text-align: center;
	padding: 0rem 0 0 0;
	margin-bottom: 0;
	}
	.card-content{
		color: #414141;
		text-align: center;
		padding: 0rem 1rem 1rem 1rem;
		margin-top: 0.5rem;
	}

	.card-job{
		color: #414141;
		font-family: 'Open Sans';
		font-size: 14px;
		font-weight: 400;
		margin-bottom: 1rem;
	}
	button{
		width: 6rem;
		height: 2rem;
		background-color: #2e9be6;
		border-radius: 0rem;
		color: white;
	}

	button:hover{
		color: #2e9be6;
		background-color: white;
		cursor: pointer;
	}

	label{
		width: 4rem;
	}
	input{
		width: 15rem;
		margin: .5rem 0;
		border-radius: 0.1rem;
	}
</style>