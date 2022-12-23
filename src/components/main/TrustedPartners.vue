<script>
    export default{
        data(){
            return{
                partners:[
                    "home-logo11-219096700-320x202.png", 
                    "home-logo10-219096700-320x202.png",
                    "home-logo2-219096700-320x202.png",
                    "home-logo1-219096700-320x202.png",
                    "home-logo9-219096700-320x202.png"
                ],
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
                ],

            }
        },
        
        methods: {

        }
    }
</script>

<template>
    <section>
        <div>
            <h2>trusted partners</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus autem, similique debitis maiores sequi facilis.</p>
        </div>
        <div v-for="element in partners" :key="element">
            <img :src="`/img/${element}`" alt="logo partner" class="partner-img">
        </div>
    </section>
</template>

<style lang="scss">

</style>