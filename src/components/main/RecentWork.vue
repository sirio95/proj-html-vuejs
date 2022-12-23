<script>
    export default{
        data(){
            return{
                works:[
                    {
                        name: 'florida health facility',
                        img: 'project1-featured-294276386-400x400.jpg',
                        type: 'commercial',
                    },
                    {
                        name: 'berlin bundeskanzleramt',
                        img: 'project2-featured-15013609-400x400.jpg',
                        type: 'public'
                    },
                    {
                        name: 'exclusive urban living',
                        img: 'project3-featured-189023420-400x400.jpg',
                        type: 'private'
                    }
                ]
            }
        }
    }
</script>

<template>
    <section id="work">
        <div v-for="(element, index) in works" :key="index" class="card">
            <img :src="`/img/${element.img}`" :alt="element.name" class="card-img" :class="index">
            <div class="hover-card" :class="index">
                <div>
                    <font-awesome-icon icon="fa-solid fa-link" />
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                </div>
                <h3>{{ element.name }}</h3>
                <p>{{ element.type }}</p>
            </div>
        </div>
        <div>
            <div class="bar"></div>
            View More
            <div class="bar"></div>
        </div>
    </section>
</template>

<style lang="scss">

</style>