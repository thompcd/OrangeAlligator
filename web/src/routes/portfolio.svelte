<script>
// import Radial from "../components/RadialGraph.svelte";
import Cloud from "../components/Cloud.svelte";

</script>
<div class="section hero flex">
    <div class="hero-inner">
    <h1>Adding interactivity to ditch reports</h1>
    <h3>How we made a more usable KPI dashboard</h3>
    </div>
</div>

<div class="side">
    <div class="one-fourth">
        <div class="flex col">
            <h2>Client</h2>
            <div class="set-height">
                <img class="logo" src="./ci8-alpha.png" alt="CI8"/>
            </div>
            <h3>CI8</h3>
        </div>
    </div>
    <div class="one-fourth">
        <div class="flex col">
            <h2>Location</h2>
            <div class="set-height flex col pin-container">
                <div class="pin"></div>
            </div>
            <h3>Tulsa, OK</h3>
        </div>
    </div>
    <div class="one-fourth">
        <h2>Role</h2>
        <div class="set-height flex col">
            <div class="function">
                <p class="function-content">fn</p>
            </div>
        </div>
        <h3>Component UI, UX and Development</h3>
    </div>
    <div class="one-fourth">
        <h2>Team</h2>
        <div class="set-height">
            <img class="logo" src="./corey-thompson.jpg" alt="Corey Thompson"/>
        </div>
        <h3>Corey</h3>
    </div>
</div>

<div class="section">
    <ul class="tools">
        <li>Javascript</li>
        <li>D3.js</li>
        <li>SPFx.js</li>
        <li>Sharepoint</li>
        <li>VSCode</li>
        <li>Git</li>
        <li>Azure Devops</li>
        <li>FTP</li>
    </ul>
</div>

<div class="section">
    <h2>Project Description</h2>
    <p>Our client is trying to find more value in their sharepoint dashboard and needs a quick way to view their metrics outside of reports.
    After a consultation, we were asked to design and develop sharepoint dashboard components</p>

    <p>The customer started with a dashboard similar to this</p>
    <div class="center-container">
    <img  src="./blank-sharepoint-example.jpg" alt="Stock Sharepoint dashboard">
    </div>

    <p>An example of somebody that has used their space well</p>
    <div class="center-container sky full-width">
    <div class="section cloud-container">
        <img style="top: 50%;" src="./sharepoint-example.jpg" alt="Populated sharepoint dashboard">
        <div class="background">
            <Cloud />
        </div>
    </div>
    </div>
</div>

<div class="section">
    <h2>Objective</h2>
    <p>Provide the user with a clear indicator of their monthly metrics progression with a dash of "wow" factor.</p>
</div>

<div class="section">
    <h2>Challenges</h2>
    <ul>
        <li>Need context of entire report to gain an understanding of the current state</li>
        <li>Retaining granularity of report data without the clutter</li>
        <li>Refresh rate of Sharepoint lists as data source</li>
        <li>Limitations of Sharepoint Framework web parts within Sharepoint 2016</li>
        <li>Support for IE11</li>
    </ul>
</div>

<div class="section">
<h2>Playlist</h2>
<a href="https://open.spotify.com/playlist/1t87DF4KAj9Vuz9QILyCQP?si=8Cl9kroHSl6DJthG-yhv4w">🎵 Acoustic Rock - stevenoss 🎵</a>
</div>

<div class="section note">
    <div class="info-container">
        <div class="info flex">
            <div class="info-content">i</div>
        </div>
    </div>
    <p>
    Parts of the following have been intentionally altered from production content to content with similar structure and submitted to our client for approval in order to protect privacy and meet NDA requirements.
    </p>
</div>

<div class="section">
    <h2>Actions</h2>
    <div class="side magnifying-glass">
        <div class="flex one-third">
        <p class="step">1</p>
        <p>Look at data, determine number and type of charts.</p>
        </div>
        <p class="two-thirds">The given datasets had hierarchical qualitative categories each with a quantitative value</p>
    </div>

    <div class="side chart-icon">
        <div class="flex one-third">
        <p class="step">2</p>
        <img class="step-icon" src="./ci8-dashboard-redacted-crop.jpg" alt="first sketches">
        <p>Rough out charts, pitch the best, toss the rest.</p>
        </div>
        <p class="two-thirds">The given datasets had hierarchical qualitative categories each with a quantitative value</p>
    </div>

    <div class="side mail-icon">
        <div class="flex one-third">
        <p class="step">3</p>
        <p>Emails, calls and revision.</p>
        </div>
        <p class="two-thirds">The given datasets had hierarchical qualitative categories each with a quantitative value</p>
    </div>

    <div class="side chart-icon">
        <div class="flex one-third">
        <p class="step">4</p>
        <p>Build!</p>
        </div>
        <p class="two-thirds">The given datasets had hierarchical qualitative categories each with a quantitative value</p>
    </div>

    <div class="side chart-icon">
        <div class="flex one-third">
        <p class="step"><span style="text-decoration: line-through;"> 5 </span>3</p>
        <p>Repeat step 3</p>
        </div>
        <p class="two-thirds">The given datasets had hierarchical qualitative categories each with a quantitative value</p>
    </div>
</div>





<style>
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
.set-height{
    height: 128px;
}
.pin-container{
    max-height: 128px;
}

.pin{
    width: 90px;
    height: 90px;
    border-radius: 50% 50% 50% 0;
    transform: rotate(-45deg);
    border: solid 1px white;
    align-self: center;
}
.function{
    border-radius: 20px;
    border: 1px solid white;
    height: 100px;
    width: 100px;
    align-self: center;
}
.function-content{
    position:relative;
    bottom: -3.4rem;
    left: -1.7rem;
    color: white;
}

.full-width {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.hero{
    width: 100%;
    height: 300px;
    border: 1px solid white;
    align-items: center;
}

.logo{
    width: 100px;
    border-radius: 50px;
    border: solid 1px white;
}

.col{
    flex-direction: column;
    align-content: center;
}
.hero-inner{
    padding: 0 2rem;
}
.flex{
    display: flex;
}

.step{
    padding: 0rem 2rem;
    font-size: 1.5rem;
}
.step-icon{
    width: 24rem;
    height: 13.5rem;
}
.section{
    margin-bottom: 2rem;
    z-index: 5;
}

.tools{
    display: flex;
    justify-content: center;
}
.tools li{
    list-style: none;
    border: 1px solid white;
    border-radius: 1rem;
    padding: 0 .5rem;
    margin: 0 .1rem;
}

.logo{
    height: 100px;
}

.side{
    display:flex;
}

.one-third{
    width: 33%;
    padding: 0.5rem 2rem;
}

.one-fourth{
    width: 25%;
    padding: 0.25rem 2rem;
    text-align: center;
    justify-content: center;
}

.two-thirds{
    width: 67%;
    padding: 0.5rem 2rem;
}
.background{
    position: relative;
    top: -300px;
    left: 50px;
    z-index: -1;
}
.center-container{
    display: flex;
    align-content: center;
    justify-content: center;
}

.sky{
      background: linear-gradient(0deg, #62a0d8 0%, #2178d1 50%, #085cb3 100%);
}
.cloud-container{
    position: relative;
}
.note{
    border: solid 1px white;
    margin: 0 2rem;
    margin-bottom: 2rem;
    padding: 0.5rem 2rem;
    display: flex;
    align-items: baseline;
}
</style>