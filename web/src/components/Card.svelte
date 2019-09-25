<script>
  export let name;
  export let imageSrc;
  export let content;
</script>

<style>
  .card {
    max-width: 300px;
    border: 1px solid #414141;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    border-radius: 1px;
    padding: 0.2rem;
    background: white;
    text-align: center;
    flex: 1 1 300px;
    margin: 5px 0 5px 5px;
    color: var(--white-color);
  }
  .card-title {
    font-size: 1.5rem;
    line-height: 1.6;
    /* margin-bottom: 1rem; */
    color: #414141;
    font-weight: 500;
    text-align: center;
    padding: 0.5rem 2rem;
  }

  .card-content{
      color: #414141;
      text-align: center;
  }

  .card-img {
    width: 100%;
    /* background: var(--white-color); */
  }
  .card-img img {
    display: block;
    height: 300px;
    width: 100%;
  }
</style>

<div class="card">
  <div class="card-img">
    <img
      src={imageSrc}
      alt="Daytona Dev Solutions Svelte app Development Daytona Beach" />
  </div>
  <div class="card-title"> {name} </div>
  <div class="card-content"> {content} </div>
</div>