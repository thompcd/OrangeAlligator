<script>
import Card from "../components/Card.svelte";
import EmailIcon from 'svelte-icons/fa/FaRegEnvelope.svelte'
import GithubIcon from 'svelte-icons/fa/FaGithubSquare.svelte'
import FacebookIcon from 'svelte-icons/fa/FaFacebookSquare.svelte'
import LinkedInIcon from 'svelte-icons/fa/FaLinkedIn.svelte'
import DevIcon from 'svelte-icons/fa/FaDev.svelte'
import DeviantArtIcon from 'svelte-icons/fa/FaDeviantart.svelte'

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
	<title>About | Orange Alligator Solutions</title>
</svelte:head>
<h1>About OAS</h1>

<p>
Orange Alligator Solutions brings the technology and efficiencies of large companies to smaller local businesses, helping them and their communities grow. We believe that better local business leads to better lives for everyone in those communities.
</p>

<h2>What is OAS?</h2>

<p>
OAS offers business owners the benefit of dealing with a single point of contact to manage any project that entails expanding their business. We are primarily a small software development firm in Tulsa, OK, backed by a network of specialized consultants, allowing us to fulfill any needs of growing businesses.
</p>
<p>
Often, software projects can require expertise outside of the realm of just code. As an owner, you may know that you want to control a machine with your phone, but you don’t have the time to perform research, hire an expert in mobile development, hire an expert in mechanical engineering and coordinate the project. Automation often requires mechanical specialists, websites often require graphics, branding and social media specialists and data visualization often requires IT and graphic specialists.
</p>
<p>
We have crafted a network to ensure each project is completed on time with exceptional quality by filling key roles with experts in their domains. Project management, consultation with these subject-matter experts and their coordination with the software is handled by OAS, keeping you the business owner available to remain productive
</p>

<h2>Meet Our Experts</h2>

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
<style>

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
</style>
					