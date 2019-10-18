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
    <div id="pin" class="one-fourth">
        <div class="flex col">
            <h2 class="align">Location</h2>
            <div class="set-height flex col pin-container">
                <div class="pin"></div>
            </div>
            <h3 class="align">Tulsa, OK</h3>
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
    <p style="padding-bottom: 2rem;">Our client is trying to find more value in their sharepoint dashboard and needs a quick way to view their metrics outside of reports.
    After a consultation, we got an idea of what the client was looking for.</p>

    <div class="center-container sky full-width">
        <div class="section cloud-container">
            <div style="padding-top:4rem;">
            <img class="shadow" src="./sharepoint-example.jpg" alt="Populated sharepoint dashboard">
            </div>
            <div class="background">
                <Cloud id="cloud-bottom"/>
            </div>
            <div class="background-2">
                <Cloud id="cloud-top"/>
            </div>
        </div>
    </div>

    <p style="margin: 4rem 0;">The task was understood when we saw what the customer started with.</p>
        <div class="center-container">
        <img class="shadow" src="./blank-sharepoint-example.jpg" alt="Stock Sharepoint dashboard">
    </div>
</div>

<div class="section">
    <h2>Objective</h2>
    <p>Provide the user with a clear indicator of their monthly metrics progression with a dash of "wow" factor.</p>
</div>

<div class="section">
    <h2>Challenges</h2>
    <ul>
        <li>Need context of entire report to gain an understanding of the current state of metrics</li>
        <li>Retaining granularity of report data without the clutter</li>
        <li>Refresh rate of Sharepoint lists as data source</li>
        <li>Limitations of Sharepoint Framework and web parts within Sharepoint 2016</li>
        <li>Support for IE11</li>
    </ul>
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
    <h2>The Process After HR</h2>
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
        <p>Build</p>
        </div>
        <p class="two-thirds">With some high-level decisions made, we go into mad-scientist mode. We emerge from the basement with a pull request #1.</p>
    </div>

    <div class="side chart-icon">
        <div class="flex one-third">
        <p class="step">5</p>
        <p>Repeat step 3</p>
        </div>
        <p class="two-thirds">More emails, but now with marked-up attachments! We store these away, tied to projects in Azure Devops for reference.</p>
    </div>

    <div class="side chart-icon">
        <div class="flex one-third">
        <p class="step">6</p>
        <p>Pull Request #1 Accepted</p>
        </div>
        <p class="two-thirds">Back to the cave for the next component.</p>
    </div>


<div class="section">
<h2>Playlist</h2>
<a href="https://open.spotify.com/playlist/1t87DF4KAj9Vuz9QILyCQP?si=8Cl9kroHSl6DJthG-yhv4w">🎵 Acoustic Rock - stevenoss 🎵</a>
</div>

</div>

<style>
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
.set-height{
    height: 128px;
}
.pin-container{
    text-align: unset;
    max-height: 128px;
}

#pin{
    text-align: unset;
}
.pin{
    text-align: unset;
    width: 90px;
    height: 90px;
    border-radius: 50% 50% 50% 0;
    transform: rotate(-45deg);
    border: solid 1px white;
    align-self: center;
}
.pin:after{
    text-align: unset;
    content: '';
    width: 36px;
    height: 36px;
    background: #ff5e57;
    position: absolute;
    border-radius: 50%;
    margin-top: 26px;
    margin-left: 26px;
}

.function{
    background-color: #1e272e;
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

.background-2{
    position: relative;
    top: -675px;
    left: -400px;
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