<script>
    export default{
        data(){
            return{
                works:[
                    {
                        name: 'florida health facility',
                        img: 'project1-featured-294276386-800x800.jpg',
                        type: 'commercial',
                    },
                    {
                        name: 'berlin bundeskanzleramt',
                        img: 'project2-featured-15013609-800x800.jpg',
                        type: 'public'
                    },
                    {
                        name: 'exclusive urban living',
                        img: 'project3-featured-189023420-800x800.jpg',
                        type: 'private'
                    }
                ]
            }
        }
    }
</script>

<template>
    <section id="work">
        <div class="intro">
            <h2>explore recent work</h2>
            <div class="light_line"></div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt eius vel, reprehenderit nihil exercitationem sint.</p>
        </div>
        <div class="container">
            <div v-for="(element, index) in works" :key="index" class="card">
                <img :src="`/img/${element.img}`" :alt="element.name" class="card-img" :class="index">
            </div>
            <div class="hover_container">
                <div v-for="(element,index) in works" :key="index" class="hover_card" :class="index">
                    <div class="icons">
                        <font-awesome-icon icon="fa-solid fa-link" class="icon" />
                        <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="icon" />
                    </div>
                    <h3>{{ element.name }}</h3>
                    <p>{{ element.type }}</p>
                </div>
            </div>
        </div>
        
        
        <div class="more">
            <div class="light_line"></div>
            View More
            <div class="light_line"></div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    #work{
        margin: 5rem;

            .intro{
                h2{
                    text-transform: capitalize;
                    text-align: center;
                    font-size:32px;
                }
                .light_line{
                    height: 2px;
                    width:40%;
                    margin: 1rem auto;
                    background-color: #fed23f;
                    border-radius: 25px;
                }
                p{
                    text-align: center;
                    margin-bottom: 3rem;
                }
            }
            .container{
                display:flex;
                justify-content: space-around;
                width:100%;
                position: relative;

                .card{
                    margin: 10px;
                    width: 400px;
                    z-index: 4;
                        .card-img{
                            width: calc(100% - 20px);
                            
                        }

                        &:hover{
                            z-index: 2;
                        }
                    }
                .hover_container{
                    width: 100%;
                    display:flex;
                    justify-content: space-around;
                    position: absolute;
                    top:0;
                    left:-10px;
                    z-index: 3;
                    .hover_card{
                        width: 380px;
                        height:380px;
                        margin: 10px;
                        background-color: #f9d03f;
                            .icons{
                                margin: 10% 25%;
                                    .icon{
                                        font-size: 24px;
                                        margin: 1rem;
                                        color:#f9d03f;
                                        background-color:#fff;
                                        padding: 1rem;
                                        border-radius: 50%;
                                    }
                            }
                            h3{
                                text-transform: uppercase;
                                color:#fff;
                                text-align: center;
                                margin: 2rem 0;
                            }
                            p{
                                text-transform: capitalize;
                                color:#fff;
                                text-align: center;
                                margin: 2rem 0;
                            }
                        }
                }
            }
            .more{
                font-size: 20px;
                margin: 3rem 1rem;
                display:flex;
                justify-content: space-around;
                .light_line{
                    height: 2px;
                    width:20%;
                    margin: 1rem auto;
                    background-color: #fed23f;
                    border-radius: 25px;
                }
            }
            
                    
                    
                
            
    }
</style>