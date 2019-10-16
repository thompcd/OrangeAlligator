<script>
	export let segment;
	
	let w, h;
	let customUnderline = "";
	let underlineBox = "";
	let navStyle = "height 40px;";
	let liStyle = "padding-top: 0.45rem;";
	let iconStyle = "";

	$: if (w < 480) {
		console.log("less than 480");
		customUnderline = "";
		underlineBox = "";
		navStyle = "height 40px;";
		liStyle = "padding-top: 0.8rem;";
		iconStyle = ""
	}
	$: if (w > 480){
		console.log("more than 480");
		customUnderline = "custom-underline";
		underlineBox = "underline-box";
		navStyle = "height: 58px;"
		liStyle = "";
		iconStyle = "height: 30px;";
	}
	
</script>

<svelte:window  bind:innerHeight={h} bind:innerWidth={w}></svelte:window>

<nav style={navStyle}>
	<ul>
		<li class='{segment === undefined ? "selected" : ""} {underlineBox}' id="home"><a rel=prefetch class={customUnderline} href='.'><img src="./oas-cog-title.png" alt="orange alligator logo"/></a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li style={liStyle} class='{segment === "contact" ? "selected" : ""} {underlineBox}' ><a class={customUnderline} rel=prefetch  href='contact'>contact</a></li>
		<!-- <li class='{segment === "customer-services" ? "selected" : ""} underline-box' ><a class="custom-underline" rel=prefetch  href='customer-services'>client</a></li> -->
		<!-- <li class='{segment === "blog" ? "selected" : ""} underline-box' ><a class="custom-underline" rel=prefetch  href='blog'>blog</a></li> -->
		<li style={liStyle} class='{segment === "about" ? "selected" : ""} {underlineBox}' ><a class={customUnderline} rel=prefetch  href='about'>about</a></li>
		<li style={liStyle} class='{segment === "services" ? "selected" : ""} {underlineBox}' ><a class={customUnderline} rel=prefetch  href='services'>services</a></li>
	</ul>
</nav>

<style>
	nav {
		border-bottom: 1px solid #ed703a;
		font-weight: 300;
		padding: .5rem 1.5rem;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: right;
		transition: ease-in;
		/* height: 50px; */
	}

	#home{
		float: left;
		/* align-self: flex-start; */
	}

	#home img{
		height: 44px;
		padding: 6px 0 0px 0px;

	}

	#home a{
		padding: 0 0 ;
	}

	a {
		text-decoration: none;
		padding: 0 0.5em .1em 0.5em;
		display: block;
		color: #f3f3f3;
	}

	a:hover {
		color: #2e9be6;
	}
</style>