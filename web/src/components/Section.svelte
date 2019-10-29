

<div class="section">
<slot></slot>
</div>

<style>
.section img{
    width: 100%;
    margin: auto;
}

/* mobile */
@media only screen and (max-width: 600px) {

}

/* desktop */
@media only screen and (min-width: 600px) {
    .section{
        margin-bottom: 2rem;
        z-index: 5;
    }
}
</style>