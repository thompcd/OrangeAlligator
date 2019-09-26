<script>
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
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

	.selected {
		position: relative;
		display: inline-block;
	}

	.selected::after {
		position: absolute;
		content: '';
		width: 100%;
		height: 2px;
		background-color: #2e9be6;
		display: block;
		bottom: -3px;
	}

	a {
		text-decoration: none;
		padding: 1.9em 0.5em .1em 0.5em;
		display: block;
	}
</style>

<nav>
	<ul>
		<li class='{segment === undefined ? "selected" : ""}' id="home"><a  href='.'><img src="./oas-cog-title.png" alt="orange alligator logo"/></a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li class='{segment === "blog" ? "selected" : ""}' ><a rel=prefetch  href='blog'>blog</a></li>
		<li class='{segment === "about" ? "selected" : ""}' ><a rel=prefetch  href='about'>about</a></li>
	</ul>
</nav>