<script>
    export default{
        data(){
            return{
                articles:[
                    {
                        title: "redeveloping florida's remote southern coast",
                        date: "december 7th, 2015",
                        img: "blog-post-134132600-600x362.jpg",
                        tags: "architecture, building, construction, news",
                        preview: "Technology is Here to Stay Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempora excepturi dolorem fuga. Nisi, temporibus."
                    },
                    {
                        title: "how we manage large construction projects",
                        date: "december 7th, 2015",
                        img: "blog-post-92486644-600x362.jpg",
                        tags: "architecture, projects, construction, news",
                        preview: "Technology is Here to Stay Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempora excepturi dolorem fuga. Nisi, temporibus."
                    },
                    {
                        title: "future proofing a modern home",
                        date: "december 6th, 2015",
                        img: "blog-post-332773904-600x362.jpg",
                        tags: "architecture, design, construction, news",
                        preview: "Technology is Here to Stay Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempora excepturi dolorem fuga. Nisi, temporibus."
                    }
                ]
            }
        }
    }
</script>

<template>
    <section id="articles">
        <div class="intro">
            <h2>latest news</h2>
            <div class="light_line"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda illum, ea distinctio exercitationem voluptatum deserunt.</p>
        </div>
        <div class="container">
            <div v-for="(element, index) in articles" :key="index" class="cards">
                <div class="card">
                    <img :src="`/img/${element.img}`" :alt="element.title" class="card_img" :class="index">
                    <h3>{{ element.title }}</h3>
                    <sub>{{ element.date }}</sub>
                    <div class="line_gray"></div>
                    <p>{{ element.preview }}</p>
                </div>
                <div class="container_hover">
                    <div class="img_hover">
                        <div class="icons">
                            <font-awesome-icon icon="fa-solid fa-link" class="icon" />
                            <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="icon" />
                        </div>
                        <h3>{{ element.title }}</h3>
                        <p>{{ element.tags }}</p>
                    </div>
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
    #articles{
        padding: 1rem 10rem;
        .intro{
            h2{
                text-transform: capitalize;
                font-size: 28px;
                text-align: center;
            }
            .light_line{
                height: 2px;
                width:40%;
                margin: 1rem auto;
                background-color: #fed23f;
                border-radius: 25px;
            }
            p{
                font-size:18px;
                text-align: center;
            }

        }
        .container{
            display:flex;
            justify-content: space-around;
                .cards{
                    width: calc((100% - 60px) / 3);
                    margin: 2rem 0;
                    position:relative;
                    z-index: 4;
                        .card{
                            margin: 0 10px;
                                
                                .card_img{
                                    width:100%;
                                }
                                h3{
                                    text-transform: capitalize;
                                    font-size: 22px;
                                    color:#545f74;
                                }
                                sub{
                                    text-transform: capitalize;
                                    color:#545f74;
                                    font-style: italic;
                                    font-size:16px;
                                }
                                .line_gray{
                                    height: 2px;
                                    width:20%;
                                    margin: 1rem auto;
                                    background-color: #545f74;
                                    border-radius: 25px;
                                }
                                p{
                                    font-size:18px;
                                    color:#545f74;
                                }
                            
                        }
                        .container_hover{
                            width:calc(100% - 20px);
                            height:210px;
                            position:absolute;
                            top:0;
                            left:10px;
                            background-color:#fed23f;
                            z-index:3;
                                .icons{
                                    margin: 1rem 30%;
                                        .icon{
                                            color:#fed23f;
                                            background-color:#fff;
                                            font-size:30px;
                                            padding:10px;
                                            border-radius:50%;
                                            margin: 0 5px;
                                        }
                                }
                                h3{
                                    text-transform: capitalize;
                                    font-size:22px;
                                    text-align: center;
                                    margin: 1rem;
                                    color:#fff;
                                }
                                p{
                                    text-transform: capitalize;
                                    color:#fff;
                                    font-size:16px;
                                    text-align: center;
                                    font-style: italic;
                                }
                        }
                        &:hover{
                           z-index: 2;
                        }



                }
        }
        .more{
            font-size: 20px;
            margin: 3rem 1rem;
            display:flex;
            justify-content: space-around;
            cursor:pointer;
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