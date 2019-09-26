<script>
import Card from "../components/Card.svelte";

  let teamMembers = [
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
  </script>

<style>
  .cards {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .stack{
	  display: flex;
	  flex-direction: column;
	  text-align: center;
  }

</style>

<svelte:head>
	<title>Orange Alligator Solutions</title>
</svelte:head>
<h1>
Business.<br>Software.
</h1>
Our front-end web and data visualization services provide unique consumer experiences while uncovering hidden factory, revealing your KPI’s trends and predicting your next targeted metrics. We also take dull or busy reports and make them clear, clean and professional. All of our services focus on a tangible benefit to you, the customer. Learn how we focus on growing business.

<div class="cards">
	      {#each teamMembers as member}
		  <div class="stack">
			<Card
			imageSrc={member.imageSrc}
			/>
			<h2>{member.name}</h2>
		  </div>
      {/each}
</div>

<h2>
What We Do
</h2>

We provide Tulsa with front-end web design, development and interactive data visualization with specialties in manufacturing and quality, we create UI/UX to best serve your internal and external customers.