<script context="module">
import Card from "../components/Card.svelte";

import { slide } from 'svelte/transition';
import { cubicInOut } from 'svelte/easing';
// import Radial from "../components/RadialGraph.svelte";
import Cloud from "../components/Cloud.svelte";
import Section from "../components/Section.svelte";

  let cardIcons = [
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

<svelte:head>
	<title>Home | Orange Alligator Solutions</title>
</svelte:head>
<h1>
Business.<br>Software.
</h1>
Our front-end web and data visualization services provide unique consumer experiences while uncovering hidden factory, revealing your KPI’s trends and predicting your next targeted metrics. We also take dull or busy reports and make them clear, clean and professional. All of our services focus on a tangible benefit to you, the customer. <a href="./about">Learn how we focus on growing business.</a>

<div class="cards">
	      {#each cardIcons as member}
		  <div class="stack">
			<Card
			imageSrc={member.imageSrc}
			/>
			<h2 style="margin-top: -3rem; color: #414141; user-select: none; font-family: 'Roboto Condensed'; font-weight: 700; opacity: .9;">{member.name}</h2>
		  </div>
      {/each}
</div>

<h2>
What We Do
</h2>

We provide Tulsa with front-end web design, development and interactive data visualization with specialties in manufacturing and quality, we create UI/UX to best serve your internal and external customers.

<style>
  .cards {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
	padding: 3em 0;
  }
  .stack{
	  display: flex;
	  flex-direction: column;
	  text-align: center;
	  padding: 1rem;
  }

</style>