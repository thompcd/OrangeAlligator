<script>
import FaFacebookF from 'svelte-icons/fa/FaFacebookF.svelte'
import FaAlignCenter from 'svelte-icons/fa/FaAlignCenter.svelte'

  export let img;
  export let link;
  console.log("image string:", img);
  console.log("link:", link);
</script>

<style>
  .icon {
    color: #414141;
    width: 36px;
    height: 36px;
    border-radius: 36px;
    border: 0.05rem solid #414141;
  }

  .facebook{

  }
</style>
<i class='fa fa-address-book-o'></i>
<div class="icon {img}">
    <a href={link}>
    {#if img == "facebook"}
      <FaFacebookF />
    {:else if img == "linkedIn"}
      <FaAlignCenter />
    {/if}
    </a>
</div>


