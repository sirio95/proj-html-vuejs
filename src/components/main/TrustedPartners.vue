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
        <div class="intro">
            <h2>trusted partners</h2>
            <div class="light_line"></div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus autem, similique debitis maiores sequi facilis.</p>
        </div>
        <ul class="container">
            <li v-for="element in partners" :key="element" class="partner">
                <img :src="`/img/${element}`" alt="logo partner" class="partner_img">
            </li>
            
        </ul>
    </section>
</template>

<style lang="scss" scoped>
    section{
        margin: 1rem 5rem;
        .intro{
            h2{
                text-transform: capitalize;
                font-size:28px;
                text-align:center;
                margin: 2rem;
            }
            .light_line{
                height: 2px;
                width:20%;
                margin: 1rem auto;
                background-color: #fed23f;
                border-radius: 25px;
            }
            p{
                font-size: 18px;
                text-align: center;
                margin: 1rem 5rem;
            }
        }
        .container{
            width:100%;
            display:flex;
            justify-content: space-around;
            margin: 3rem 0;
                .partner{
                    width:calc((100% - 100px) / 5);
                    margin: 10px;
                    list-style: none;
                    .partner_img{
                        max-width:100%;
                        cursor:pointer;
                    }
                }
                
        }
    }
</style>