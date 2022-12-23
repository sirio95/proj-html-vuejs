<script>
import {store} from '../../store.js';
export default{
    data(){
        return{
            store,
        }
    }
}

</script>

<template>
    <section>
        <div id="logo">
            <img src="/img/construction_logo_retina.png" alt="logo avada costruction">
        </div>
        <ul class="navbar">
            <li v-for="(element, index) in store.nav" :key="index" :class="element.status"><a :href="element.link">{{ element.name }}</a></li>
        </ul>
        <button class="btn light">GET QUOTE</button>
    </section>
</template>

<style lang="scss" scoped>
    section{
        width: 1280px;
        height: 100px;
        display:flex;
            .navbar{
                display:flex;
            }
    }
    
</style>