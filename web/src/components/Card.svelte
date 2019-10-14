<script>
  export let name;
  export let imageSrc;
  export let content;
  export let jobTitle;
  export let links;
  
</script>
<div class="card">
  <slot name="image" class="card-img">
  </slot>
  <slot name="name" class="card-title">
  </slot>
  <slot name="title" class="card-job">
  </slot>
  
  <div class="card-links">
    <slot name="contact"></slot>
    <slot name="facebook"></slot>
    <slot name="linkedIn"></slot>
    <slot name="github"></slot>
  </div>

  <slot name="content" class="card-content"> {content} </slot>
</div>

<style>

::slotted(img){
  width: 300px;
}
  .card-links{
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .card {
    width: 300px;
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
    padding: 0rem 0 0 0;
    margin-bottom: 0;
  }

  /* .card-img {
    width: 100%;
  } */
  .card-img {
    display: block;
    height: 300px;
    width: 300px;
  }

</style>
