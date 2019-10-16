<script>
import { onMount } from 'svelte';

  export let img;
  export let link;
  // console.log("icon img", img)
    
  onMount(() => {
    console.log("icon img!", img)
    console.log("icon link!", link)
  });

</script>

<style>
  .icon {
    color: #414141;
    width: 36px;
    height: 36px;
    border-radius: 36px;
    border: 0.05rem solid #414141;
  }
</style>
<div class="icon {img}">
    <a href={link}>
    {#if img == "facebook"}
      <FacebookIcon />
    {:else if img == "linkedIn"}
      <LinkedInIcon />
    {:else if img == "github"}
      <GithubIcon />
    {/if}
    </a>
</div>


