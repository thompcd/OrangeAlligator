<script>
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid #ed703a;
		font-weight: 300;
		padding: .5rem 1.5rem;
		height: 58px;
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

	/* a:hover {
		color: #2e9be6;
	} */
</style>

<nav>
	<ul>


		<li class='{segment === undefined ? "selected" : ""} underline-box' id="home"><a class="custom-underline" href='.'><img src="./oas-cog-title.png" alt="orange alligator logo"/></a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li class='{segment === "blog" ? "selected" : ""} underline-box' ><a class="custom-underline" rel=prefetch  href='blog'>blog</a></li>
		<li class='{segment === "about" ? "selected" : ""} underline-box' ><a class="custom-underline" rel=prefetch  href='about'>about</a></li>
	</ul>
</nav>