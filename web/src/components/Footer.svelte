<script>
	export let segment;
</script>

<footer>
	<div class="column">
    <h3>Contact us</h3>
    <div class="underline-box">
      <a class="custom-underline" href="https://orangealligatorsolutions.com/file-share/">File Share</a>
    </div>
    <div class="underline-box">
      <a class="custom-underline" href="https://app.invoiceninja.com/login">Client Billing</a>
    </div>        
    <div class="underline-box">
      <a class="custom-underline" href="https://orangealligatorsolutions.com/file-share/">Schedule Consultation</a>
    </div>
	</div>
	<div class="column">
    <h3>Who we are</h3>
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
    <div class="column paragraph" style="max-width: 30%; flex-wrap: wrap; ">
      <h3 style="justify-self: flex-start;">Our core values<br></h3>
      <span style="padding: 0.5rem 0;">
        We over-communicate to create comradery, keep our word even when it’s tough and continually learn more in order to teach more.
      </span>
	</div>
<!-- <span style="text-align: center; width: 100% !important">· Made with care by <span style="color: #ed703a;">Orange Alligator Solutions</span> ·</span> -->
</footer>

<style>

.paragraph{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
footer{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  border-top: 1px solid #ed703a;
    margin-bottom: 1rem;
    padding-top: 1.5rem;
}

.column{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    text-align: center;
}

.column h3{
  padding-bottom: 0;
  margin-bottom: 0;
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

/*--- Green Box (underline-box) ---*/
.underline-box .custom-underline::after {
  top: 65%;
  height: 2px !important;
  width: 40%;
  left: 30%;
  background-color: rgba(255, 255, 255, 0.6);
    transition: 0.4s ease-out all .1s;
  content: "";
  position: absolute;
}

.underline-box:hover .custom-underline::after {
  background-color: #2e9be6;
  width: 90%;
  left: 5%;
    transition: 0.5s ease all;
}

</style>