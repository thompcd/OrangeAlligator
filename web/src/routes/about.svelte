<script>
import Card from "../components/Card.svelte";

  let teamMembers = [
    {
      name: "Corey Thompson",
	  imageSrc: "./corey-thompson.jpg",
	  links: {
		icon: {
			img: "facebook",
			link: "https://www.facebook.com/coreydwaynethompson",
		},
		icon: {
			img: "linkedIn",
			link: "https://www.linkedin.com/in/coreydthompson/",
		}
	  },
	  jobTitle: "Software Developer, Electrical Engineer",
	  content: "Corey is a father, web developer, Data Visualization Society contributor, electrical engineer and full-time software engineer in Tulsa, OK. He has a specialty in manufacturing and quality control software with nearly a decade of experience working within the electronics, HVAC, oil and gas industries.",
    },
    {
      name: "Trey Bishop",
	  imageSrc: "./trey-bishop.jpg",
	  links: {
		icon: {
			img: "linkedIn",
			link: "https://www.linkedin.com/in/treybishop/",
		}
	  },
	  jobTitle: "Designer, Innovation Consultant",
	  content: "Trey is an inventor, concept artist and graphic designer with over fifteen years of experience working for creative agencies, large corporations and educational institutions. He specializes in exploring bold new ideas and innovating beyond the status quo and has worked with clients such as Circle 5 Studios, Tri County Tech, ESI with Walmart Labs, Questel, Executive IP and Nemesis Studios.",
    },
    {
      name: "Lee Whitehead",
	  imageSrc: "./lee-whitehead.png",
	  links: {
		icon: {
			img: "linkedIn",
			link: "https://www.linkedin.com/in/leetwhitehead/",
		}
	  },
	  jobTitle: "Growth and Enablement Consultant",
	  content: "Lee is the owner of UVOICE Consulting, Inc. and has over 8 years of marketing, technology and sales enablement experience. He has a specialty in technology and SaaS businesses with a heavy focus on sustainable growth. Lee uses his vast experience in technology and marketing to help clients focus on growth through execution.",
    },
    {
      name: "Blake Tucker",
	  imageSrc: "./blake-tucker.jpg",
	  links: {
		icon: {
			img: "linkedIn",
			link: "https://www.linkedin.com/in/blake-t-85109783/",
		}
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
				<Card
				name={member.name}
				imageSrc={member.imageSrc}
				content={member.content}
				jobTitle={member.jobTitle}
				links={member.links}
				/>
		</div>
		{/each}
    </div>
<style>

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
</style>
					