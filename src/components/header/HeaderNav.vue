<script>
import {store} from '../../store.js';
export default{
    data(){
        return{
            store,
            logo: '../../assets/construction_logo_retina.png',
        }
    }
}

</script>

<template>
    <section>
        <div id="logo">
            <img :src="logo" alt="logo avada costruction">
        </div>
        <ul class="navbar">
            <li v-for="(element, index) in store.nav" :key="index" :class="element.status"><a :href="element.link">{{ element.name }}</a></li>
        </ul>
        <button class="btn light">GET QUOTE</button>
    </section>
</template>

<style lang="sass">

</style>