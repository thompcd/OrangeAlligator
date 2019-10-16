<script>
// import Radial from "../components/RadialGraph.svelte";

</script>

<div class="section">
<h2>Client</h2>
<h3>CI8</h3>
<img class="logo" src="./ci8.png" alt="CI8"/>
<h2>Role</h2>
<h3>Component UI, UX and Development</h3>
<h2>Tools</h2>
<ul class="tools">
    <li>D3</li>
    <li>Javascript</li>
    <li>Sharepoint</li>
    <li>VSCode</li>
    <li>Git</li>
    <li>Azure Devops</li>
    <li>FTP</li>
</ul>
</div>

<div class="section">
<h2>Project Description</h2>
<p>Design and develop sharepoint components for an intranet dashboard lacking a purpose.</p>
</div>

<div class="section">
<h2>Objective</h2>
<p>Our client is building a new sharepoint dashboard and needs a quick way to view their metrics outside of reports.
Provide the user with a clear indicator of their monthly metrics progress with a dash of "wow" factor.</p>
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

<style>
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
</style>