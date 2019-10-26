<script>
export let tools = [];
export let roles;
export let location;
export let clients;
export let teamMembers;

$: projTools= tools;
</script>

<div class="side">
    <div class="one-fourth">
        <div class="flex col">
            <h2 class="align">Client</h2>
            <div class="set-height">
                <slot name="client-icon">
                    <img src="./corey-thompson.jpg" alt="sry">
                </slot>
            </div>
            <h3>{clients}</h3>
        </div>
    </div>
    <div id="pin" class="one-fourth">
        <div class="flex col">
            <h2 class="align">Location</h2>
            <div class="set-height flex col pin-container">
                <div class="pin"></div>
            </div>
            <h3 class="align">{location}</h3>
        </div>
    </div>
    <div class="one-fourth">
        <h2 class="align">Role</h2>
        <div class="set-height flex col">
            <div class="function">
                <p class="function-content">fn</p>
            </div>
        </div>
        <h3>{roles}</h3>
    </div>
    <div class="one-fourth">
        <h2 class="align">Team</h2>
        <div class="set-height">
            <img class="logo" src="./corey-thompson.jpg" alt="Corey Thompson"/>
        </div>
        <h3>{teamMembers}</h3>
    </div>
</div>

<div class="sub">
    <ul class="tools center-container">
        {#each projTools as tool}
            <li>{tool}</li>
        {/each}
    </ul>
</div>

<style>

.align{
    text-align: center;
}

.set-height{
    height: 128px;
}
.pin-container{
    text-align: unset;
    max-height: 128px;
}

#pin{
    text-align: unset;
}
.pin{
    text-align: unset;
    width: 90px;
    height: 90px;
    border-radius: 50% 50% 50% 0;
    transform: rotate(-45deg);
    border: solid 1px white;
    align-self: center;
}
.pin:after{
    text-align: unset;
    content: '';
    width: 36px;
    height: 36px;
    background: #ff5e57;
    position: absolute;
    border-radius: 50%;
    margin-top: 26px;
    margin-left: 26px;
}

.function{
    background-color: #1e272e;
    border-radius: 20px;
    border: 1px solid white;
    height: 100px;
    width: 100px;
    align-self: center;
}
.function-content{
    position:relative;
    bottom: -3.4rem;
    left: -1.7rem;
    color: white;
}

/* mobile */
@media only screen and (max-width: 600px) {
    .side{
        display:flex;
        flex-direction: column;
    }

    .tools{
        display: flex;
        flex-wrap: wrap;
        padding-left: 0;
    }

    .sub{
        margin-bottom: 0.5rem;
        z-index: 5;
    }

    .one-fourth{
        text-align: center;
        justify-content: center;
    }

}

/* desktop */
@media only screen and (min-width: 600px) {

    .hero > *{
        margin-top: 1rem;
        margin-bottom: 1 rem;
        padding: 0 2rem;
    }
    
    .side{
        display:flex;
    }

    .tools{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .sub{
        margin-bottom: 2rem;
        z-index: 5;
    }

    .one-fourth{
        width: 25%;
        padding: 0.25rem 2rem;
        text-align: center;
        justify-content: center;
    }

}

.set-height :global(img) {
    width: 100px;
    border-radius: 50px;
    border: solid 1px white;
    height: 100px;
}

.col{
    flex-direction: column;
    align-content: center;
}

.flex{
    display: flex;
}

.tools li{
    list-style: none;
    border: 1px solid white;
    border-radius: 1rem;
    padding: 0.2rem .5rem;
    margin: 0.1rem .1rem;
    height: 1.4rem;
}

.tools{
    padding: 0;
}

.center-container{
    display: flex;
    align-content: center;
    justify-content: center;
}
</style>