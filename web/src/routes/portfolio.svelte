<script>
// import Radial from "../components/RadialGraph.svelte";

</script>
<div class="section hero flex">
    <div class="hero-inner">
    <h1>Adding interactivity to ditch reports</h1>
    <h3>How we made a more usable KPI dashboard</h3>
    </div>
</div>

<div class="section side">
    <div class="one-third">
        <h2>Client</h2>
        <h3>CI8</h3>
        <img class="logo" src="./ci8.png" alt="CI8"/>
    </div>
    <div class="one-third">
        <h2>Location</h2>
        <h3>Tulsa, OK</h3>
    </div>
    <div class="one-third">
        <h2>Role</h2>
        <h3>Component UI, UX and Development</h3>
    </div>
</div>

<div class="section">
<h2>Tools</h2>
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

<div class="section note">
<div>info icon</div>
The following content has been obfuscated and submitted to our client for approval to protect privacy and meet NDA requirements.
</div>

<div class="section">
<h2>Project Description</h2>
<p>Our client is trying to find more value in their sharepoint dashboard and needs a quick way to view their metrics outside of reports.
After a consultation, we were asked to design and develop sharepoint dashboard components</p>
</div>

<div class="section">
<h2>Objective</h2>
<p>Provide the user with a clear indicator of their monthly metrics progress with a dash of "wow" factor.</p>
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
    <h2>Actions</h2>
    <div class="side magnifying-glass">
        <div class="flex one-third">
        <p class="step">1</p>
        <p>Look at data, determine number and type of charts.</p>
        </div>
        <p class="two-thirds">The given datasets had hierarchical qualitative categories each with a quantitative value</p>
    </div>
</div>


<style>
.hero{
    width: 100%;
    height: 300px;
    border: 1px solid white;
    align-items: center;
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
.section{
    margin-bottom: 2rem;
}

.tools{
    display: flex;
    justify-content: flex-start;
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

.quote{
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
}
</style>