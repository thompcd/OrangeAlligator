<script>
  import IconLink from "../components/IconLink.svelte";

  export let name;
  export let imageSrc;
  export let content;
  export let jobTitle;
  export let links = [];
  console.log("links",links)
</script>

<style>
  .card {
    width: 330px;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    border-radius: 1px;
    background: white;
    color: black;
    text-align: center;
    flex: 1 1 300px;
  }
  .card-title {
    font-size: 1.5rem;
    line-height: 1.6;
    color: #000;
    font-weight: 500;
    text-align: center;
    padding: 1rem 0 0 0;
    margin-bottom: 0;
  }

  .card-content{
      color: #414141;
      text-align: center;
      padding: 1rem 1rem 1rem 1rem;
  }

  .card-img {
    width: 100%;
  }
  .card-img img {
    display: block;
    height: 100%;
    width: 100%;
  }

  .card-job{
    color: #414141;
    font-family: 'Open Sans';
    font-size: 14px;
    font-weight: 400;
  }
</style>

<div class="card">
  {#if imageSrc}
  <div class="card-img">
    <img
      src={imageSrc}
      alt={name} />
  </div>
  {/if}
  {#if name}
  <h3 class="card-title"> {name} </h3>
  {/if}
  {#if jobTitle}
  <div class="card-job">
    <span>{jobTitle}</span>
  </div>
  {/if}
  {#if links}
  <div class="card-links">
    {#each links as icon}
      <IconLink
        img={icon.img}
        link={icon.link}
      />
    {/each}
  </div>
  {/if}
  {#if content}
  <div class="card-content"> {content} </div>
  {/if}
</div>