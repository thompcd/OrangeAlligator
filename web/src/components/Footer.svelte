<script>
	export let segment;
</script>

<footer>
	<div class="column">
        <div class="underline-box">
        	<a class="custom-underline" href="https://orangealligatorsolutions.com/file-share/">File Share</a>
        </div>
                <div class="underline-box">
        	<a class="custom-underline" href="https://orangealligatorsolutions.com/file-share/">Client Billing</a>
        </div>        <div class="underline-box">
        	<a class="custom-underline" href="https://orangealligatorsolutions.com/file-share/">Schedule Consultation</a>
        </div>
	</div>
	<div class="column">
        <div class="underline-box">
        	<a class="custom-underline" href="https://orangealligatorsolutions.com/file-share/">About OAS</a>
        </div>
        <div class="underline-box">
        	<a class="custom-underline" href="https://orangealligatorsolutions.com/file-share/">Why OAS</a>
        </div>        
        <div class="underline-box">
        	<a class="custom-underline" href="https://orangealligatorsolutions.com/file-share/">Recommended Services</a>
        </div> 
	</div>
    	<div class="column" style="max-width: 30%; flex-wrap: wrap; justify-content: center;">
        	We over-communicate to create comradery, keep our word even when it’s tough and continually learn more in order to teach more.
        
	</div>
</footer>

<style>

.custom-underline::after {
  top: 65%;
  height: 2px !important;
  width: 40%;
  left: 30%;
  background-color: rgba(255, 255, 255, 0.6);
    transition: 0.4s ease-out all .1s;
}

    footer{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
		border-top: 1px solid #ed703a;
        margin-bottom: 1rem;
    }

    .column{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        text-align: center;
    }
    
.underline-box a {line-height: 3.5rem;}

.custom-underline {
  position: relative;
  display: inline-block;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
}

.custom-underline,
.custom-underline:hover,
.custom-underline:focus,
.custom-underline:active {
  color: #fff;
  text-decoration: none;
}

.custom-underline::after {
  content: "";
  position: absolute;
}

/*--- Green Box (underline-box) ---*/
.underline-box .custom-underline::after {
  top: 65%;
  height: 2px !important;
  width: 40%;
  left: 30%;
  background-color: rgba(255, 255, 255, 0.6);
    transition: 0.4s ease-out all .1s;
}

.underline-box:hover .custom-underline::after {
  background-color: #2e9be6;
  width: 90%;
  left: 5%;
    transition: 0.5s ease all;
}

</style>