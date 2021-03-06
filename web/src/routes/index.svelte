<script context="module">
import client from '../sanityClient'
export async function preload({ params, query }) {
return await client.fetch('*[_type=="teamMember"]{name, bio, jobTitle, skills, image, facebook, linkedIn, deviantArt, twitter, devTo,  skills[] -> {description,title}}')
    .then(members => {
            return { members };
        }).catch(err => this.error(500, err));
}
</script>

<script>
import Card from "../components/Card.svelte";
import Proj from "../components/ProjectSummary.svelte";
import imageUrlBuilder from '@sanity/image-url'
import myConfiguredSanityClient from '../sanityClient'

import { slide } from 'svelte/transition';
import { cubicInOut } from 'svelte/easing';
import { onMount } from 'svelte';

export let members;

let collapse = true;
let collapseTeam = true;
let verticalShift;

onMount(() => {
    let di = document.querySelector('#proj-btn-1')
    verticalShift = offset(di)
    console.log(verticalShift)
});

function offset(el) {
	    var rect = el.getBoundingClientRect(),
	    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
	    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

function toggleCollapse() {
    if(collapse){
        window.scrollTo({top: verticalShift.top
        , behavior:'smooth',});
    }
    collapse = !collapse;
}

function toggleTeam(){
    collapseTeam = !collapseTeam;
}
    
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

</script>

<svelte:head>
	<title>Home | Orange Alligator Solutions</title>
</svelte:head>

<h1 id="projects" class="align sub">
Recent Projects
</h1>

<div id="hero-container" class="full-width center-container gradient sub">
    <div id="hero" class="section hero flex" style="max-width: 70%;">
        <div class="hero-inner">
			<h1>Adding interactivity to ditch reports</h1>
			<h3>How we made a more usable KPI dashboard</h3>
			<button id="proj-btn-1" class="primary-btn" on:click={toggleCollapse}>
				{collapse === true ? 'Read Story' : 'Hide Story'}
			</button>
        </div>
    </div>
</div>
{#if !collapse}
<div transition:slide={{easing: cubicInOut, duration: 400}} 
class:collapse
>

<!-- TODO: Add team member filter -->
<Proj clients="CI8" location="Tulsa, OK" teamMembers={["Corey"]} roles="Component UI, UX, Development" tools={['Sharpeoint','D3.js','SPFX.js','Data Visualization','Interactive Design']}>
<img slot="client-icon" src="./ci8-alpha.png" alt="CI8"/>
<img slot="team-icon" src="./corey-thompson.jpg" alt="Corey Thompson"/>
</Proj>

    <div class="section note">
        <div class="info-container">
            <div class="info flex">
                <div class="info-content">i</div>
            </div>
        </div>
        <p>
        Parts of the following have been intentionally altered from production content to protect privacy and meet NDA requirements.
        </p>
    </div> 
    <div class="section">
        <h2>Existing System</h2><p>Our client prides themselves on being a metrics-driven company. However, the process to distribute these values to employees seems cumbersome and frequent.
        <br>After a consultation, we were asked to create a better experience for the employees to access and track these values daily.</p>
        <div class="sub"><h3>Sharepoint</h3><p>The company has their PLM system tied into Sharepoint. Sharepoint dashboard offers a hub for all employees.</p></div>
        
     </div>

    <div class="section">
        <h2>Identifying What to Fix</h2>
        <div id="fixes" class="center-container wrap">
            <div class="one-third"><h3>Ease of Access</h3><p>Employees use these values in their everyday workflow, they should be readily available.</p></div>
            <div class="one-third"><h3>Poor Usability</h3><p>Data existis in a complex report. A user has to traverse too much data for their use-case.</p></div>
            <div class="one-third"><h3>High Barrier</h3><p>A complex report prevents new employees from understanding the numbers governing their work.</p></div>
        </div>
    </div>

    <div class="section">
        <h2>First Thoughts</h2><p>After some research and thought about the issues, we proposed a concept.</p>
        <div class="sub"><h3>Interactive Dashboard Widgets</h3><p>Charts exist to provide digest information of large datasets at the sacrifice of granularity of data. Using interactive charts, we can retain the granularity of information on the client's KPI's.</p></div>
        <div class="sub"><h3>Macro/Micro</h3><p>A measurement isn't valuable on its own, the numbers are only relevant in comparison to others. We had the an idea of a macro and micro pair of widgets to quickly understand today's numbers and the sources that drive that them as well vs. the trends of the past year.</p></div>
    </div>

    <div class="section">
        <h2>Laying a Path</h2><p>With the buy-in of the client, we perform research to cement a design.</p>
        <div class="sub"><h3>Sharepoint Framework (SPFx.js)</h3><p>This library has been proven enterprise production-ready and allows us to use the power of javascript within Sharepoint. Using Sharepoint Server 2016 puts us in the range of official support.</p></div>
        <div class="sub"><h3>D3.js</h3><p>When it comes to interactive charts in javascript, D3 is always in the conversation. We opted to use v4 for some IE11 guarantees.</p></div>
        <div class="sub"><h3>Sharepoint Apps</h3><p>Our code can be bundled into a sharepoint app and shipped via the client's local app store. Again, Sharepoint Server 2016 is within range of official support.</p></div>
    </div>

    <section>
        <h2>First Pass</h2><p>With approval, we started development.</p>
        <div class="sub"><h3>Sunburst Chart</h3>
            <div class="side">
                <div class="two-thirds">
                    <p>Our datasets had hierarchical qualitative categories each with a quantitative value.
                    <br>We let the data lead us to the chart and the sunburst is a great fit for uncovering our strucutre.
                    These charts are very flashy and are often used in a sub-optimal capacity, so when we chose it we did some soul-searching to make sure we weren't led astray.
                    <br>Ultimately, we felt confident in our method of selection. We used this as our micro chart, displaying month-to-date values.
                    <br>To make better use of space, we hollowed the center and added an "always-on" indicator, so a user could get exactly what they needed without even using the chart if they needed.
                    </p>
                </div>
                <div class="one-third"><img src="./radial-nohover.png" alt="Sunburst Chart"></div>
            </div>
        </div>

        <div class="sub"><h3>Heatmap</h3>
            <div class="side">
                <div class="one-third"><img src="./heatmap.png" alt="Heatmap"></div>
                <div class="two-thirds">
                    <p>While looking at our data, we had even more qualitative fields available. We really wanted our macro chart to complement in more than just theory, choosing the proper chart was crucial to make this happen.
                    <br>Rather than viewing multiple lines or clusters of histograms, we were able to utilize a heatmap to display a rolling 12 month window of monthly bins, with an added category breakdown.
                    <br>Another bonus to this choice was, knowing we wanted to add interactivity, it is much more usable than its competitors. The square bins are much easier to navigate and display tooltips than points or lines on hover.
                    </p>
                </div>
            </div>
        </div>

    </section>

    <div class="section">
        <h2>Adding Interactivity For Ultimate Value</h2>

        <div class="sub"><h3>Heatmap</h3>
                <div class="side">
                    <div class="two-thirds">
                        <p>By adding a tooltip box with the context of that month's metrics, the user gained so much power to utilize the numbers at a glance or dig deep to investigate the source of the numbers, all immediately available to the employee.</p>
                    </div>
                    <div class="one-third"><img src="./radial-hover-stock.png" alt="Sunburst hover"></div>
                </div>
        </div>
        <div class="sub"><h3>Sunburst</h3>
                <div class="side">
                    <div class="one-third"><img src="./heatmap-hover.png" alt="Heatmap hover"></div>
                    <div class="two-thirds">
                        <p>The center indicator now updates with the specific values of the hovered item, replacing the existing indicator and informing the user through design that they have left a high-level context and entered a new one.</p>
                    </div>
                </div>
        </div>
    </div>

    <div class="section">
        <h2>Retrospective</h2>
        <h3>Biggest Challenges</h3>
        <ul>
            <li>Finding the balance between granularity of data vs clutter</li>
            <li>Refresh rate of Sharepoint lists as data source</li>
            <li>Limitations of Sharepoint Framework and web parts within Sharepoint 2016</li>
            <li>Support for IE11</li>
        </ul>
    </div>

    <div class="section center-container">
        <button class="primary-btn" on:click={toggleCollapse}>
            {collapse === true ? 'Read Story' : 'Hide Story'}
        </button>
    </div>
</div>
{/if}

<h1 class="align sub">
Got needs? We've got solutions.
</h1>

<div id="tool-container" class="sub">
    <ul class="tools center-container">
		{#each members as member}
            {#each member.skills as skill}
                <li on:click={toggleTeam}>{skill.title}</li>
            {:else}
                <li on:click={toggleTeam}>Data Visualization</li>
                <li on:click={toggleTeam}>Interactive Data</li>
                <li on:click={toggleTeam}>Frontend Development</li>
                <li on:click={toggleTeam}>Portfolio Sites</li>
                <li on:click={toggleTeam}>D3.js</li>
                <li on:click={toggleTeam}>Wordpress</li>
                <li on:click={toggleTeam}>Web Frameworks</li>
                <li on:click={toggleTeam}>Svelte</li>
            {/each}
        {:else}
            <!-- this block renders when members.length === 0 -->
            <p>loading...</p>
        {/each}
    </ul>
</div>
{#if !collapseTeam}
<div class="sub" transition:slide={{easing: cubicInOut, duration: 500}}>
<h2>Meet Our Experts</h2>
<h3 class="align sub">
Software projects require expertise outside of the realm of just code. We have crafted a network of specialists that we partner with, allowing you to have experts work on your projects, even in niche fields.
</h3>
    <div class="cards">
		{#each members as member}
		<div class="card" >
				<Card
				name={member.name}
				imageSrc={urlFor(member.image).width(300).url()}
				content={member.bio}
				jobTitle={member.jobTitle}
				links={member.links}
				/>
		</div>
        	{:else}
		<!-- this block renders when photos.length === 0 -->
		<p>loading...</p>
		{/each}
    </div>
</div>
{/if}


<style>
h1{
    text-decoration: underline #ed703a solid;
}
.hero-inner *{
	margin-left: 1rem;
}
.hero-inner h1{
	text-decoration: none;
	border-left: solid 2px #ed703a;
	padding-left: 0.5rem;
	margin-left: 0.5rem;
}
.gradient{
    
    background: rgb(46,155,230);
    background: linear-gradient(135deg, rgba(46, 155,230,1) 15%, rgba(43,43,43,1) 15%, rgba(43,43,43,1) 65%, rgba(46,155,230,1) 65%); 
/* background: rgb(43,43,43);
background: linear-gradient(180deg, rgba(43,43,43,1) 10%, rgba(46,155,230,1) 15%, rgba(67,131,233,1) 50%, rgba(46,155,230,1) 85%, rgba(43,43,43,1) 90%); */
}

#hero-container:hover{
    transition: background 1s;
    background: rgb(46,155,230);
    background: linear-gradient(135deg, rgba(46, 155,230,1) 10%, rgba(43,43,43,1) 20%, rgba(43,43,43,1) 60%, rgba(46,155,230,1) 70%); 

}

.primary-btn{
    font-size: 1rem;
    color: white;
    border: solid 1px white;
    background-color: #ed703a;
    border-radius: .1rem;
    height: 2rem;
}
.primary-btn:hover{
    border: solid 2px #2e9be6;
}
.align{
    text-align: center;
}
.shadow{
    -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
}
.info{
    height:1rem;
    width: 1rem;
    border-radius: 0.5rem;
    border: 1px solid white;
    justify-content: center;
}
.info-content{
    align-self: center;
    font-style: italic;
}
.note p{
    padding: 0 1rem;
}

.full-width {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.section img{
    width: 100%;
    margin: auto;
}

.one-third img{
    width: 100%;
}

.flex{
    display: flex;
}

.tools li{
    list-style: none;
    border: 1px solid white;
    border-radius: 1rem;
    padding: 0.2rem .5rem;
    margin: 0.1rem .1rem;
    height: 1.4rem;
}

.center-container{
    display: flex;
    align-content: center;
    justify-content: center;
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

/* mobile */
@media only screen and (max-width: 600px) {
    .hero{
        width: 100%;
        align-items: center;
    }
    .hero-inner{
        padding: 1rem 1rem 0 1rem;
    }
    .side{
        display:flex;
        flex-direction: column;
    }

    .tools{
        display: flex;
        flex-wrap: wrap;
        padding-left: 0;
    }

    #tool-container{
        height: 15.8rem;
        overflow: hidden;
    }

    .section{
        margin-bottom: 1rem;
        z-index: 5;
    }

    .sub{
        margin-bottom: 0.5rem;
        z-index: 5;
    }

    .one-third{
        flex-wrap: wrap;
    }

    #fixes{
        display: block;
    }
    .two-thirds{
        flex-wrap: wrap;
    }
    .note{
        display: flex;
        align-items: baseline;
    }
}

/* desktop */
@media only screen and (min-width: 600px) {
    #hero-container{
        border-top: solid 1px white;
        border-bottom: solid 1px white;
    }
    #hero{
        margin-bottom: 2rem;
    }
    .hero{
        width: 100%;
        height: 250px;
        align-items: center;
    }
    .hero > *{
        margin-top: 1rem;
        margin-bottom: 1 rem;
        padding: 0 2rem;
    }
    
    .side{
        display:flex;
    }

    #tool-container{
        max-height: 200px; 
        overflow:hidden;
    }

	#tool-container .tools li:hover{
		background-color: #2e9be6;
		color: #1e272e;
	}
    .tools{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .section{
        margin-bottom: 8rem;
        z-index: 5;
    }
    .sub{
        margin-bottom: 2rem;
        z-index: 5;
    }

    .one-third{
        width: 33%;
        padding: 0.5rem 2rem;
    }

    .two-thirds{
        width: 67%;
        padding: 0.5rem 2rem;
    }
    
    .note{
        border: solid 1px white;
        margin: 0 2rem;
        margin-bottom: 2rem;
        padding: 0.5rem 2rem;
        display: flex;
        align-items: baseline;
    }
}
</style>