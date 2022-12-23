<script>
    export default{
        data(){
            return{
                cards: [
                    {
                        icon: 'fa-regular fa-building',
                        name: 'buildings',
                        text: 'Quis autem vel eum iure reprenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
                        sub: 'artfully crafted',
                        index: 'one'
                    },
                    {
                        icon: 'fa-solid fa-arrows-rotate',
                        name: 'renovate',
                        text: 'Quis autem vel eum iure reprenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
                        sub: 'innovation at its finest',
                        index: 'two'
                    },
                    {
                        icon: 'fa-solid fa-house-chimney',
                        name: 'construct',
                        text: 'Quis autem vel eum iure reprenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
                        sub: 'high quality zero impact',
                        index: 'three'
                    },
                    {
                        icon: 'fa-solid fa-truck',
                        name: 'exclusive',
                        text: 'Quis autem vel eum iure reprenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
                        sub: 'our aesthetics, your aesthetics',
                        index: 'four'
                    }
                ],
                achievements:[
                    {
                        icon: 'fa-solid fa-city',
                        number: '3534',
                        name: 'planning application'
                    },
                    {
                        icon: 'fa-regular fa-building',
                        number: '896',
                        name: 'completed projects'
                    },
                    {
                        icon: 'fa-solid fa-users',
                        number: '172',
                        name: 'trained professionals'
                    },
                    {
                        icon: 'fa-solid fa-globe',
                        number: '19',
                        name: 'international offices'
                    }
                ]
            }
        }
    }
</script>

<template>
    <section id="services">
        <div class="intro">
            <h2>specialist in modern construction</h2>
            <div class="light_line"></div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita iusto error earum corporis voluptatem facere!</p>
        </div>
        <div class="costruction-cards">
            <ul class="principal">
                <li v-for="(element, index) in cards" :key="index" class="card" :class="cards.index">
                    <font-awesome-icon :icon="element.icon" class="card_icon" />
                    <h2>{{ element.name }}</h2>
                    <p>{{ element.text }}</p>
                </li>
            </ul>
            <ul class="secundary">
                <li v-for="(element, index) in cards" :key="index" class="hover_card" :class="cards.index">
                    <h2>{{ element.sub }}</h2>
                    <p>{{ element.text }}</p> 
                    <button class="btn light"><a href="#">get a quote</a></button>
                </li>
            </ul>

        </div>
    </section>
        
    <section id="achievements">
        <ul>
            <li v-for="(element, index) in achievements" :key="index" class="achievement">
                <font-awesome-icon :icon="element.icon" class="achievements_icon" />
                <h2>{{ element.number }}</h2>
                <p>{{ element.name }}</p>
            </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped>
    #services{
        margin: 5em;
            .intro{

                h2{
                    text-transform: capitalize;
                    text-align: center;
                    font-size:28px;
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
                    font-size:20px;
                    margin-top: 2em;
                }
            }
            .costruction-cards{
                position:relative;
                .principal, .secundary{
                    display:flex;
                }
                .secundary{
                    position:absolute;
                    top:0;
                    left:0;
                }
                .card{
                    width: calc((100% - 40px) / 4);
                    height: 250px;
                    background-color:#bcbcbc;
                    list-style: none;
                    margin: 5px;
                    border-radius: 10px;
                    z-index: 4;

                        &:hover{
                            z-index: 2;
                        }
                        .card_icon{
                            border: 1px solid #666665;
                            border-radius:50%;
                            padding: 25px;
                            font-size: 40px;
                            color: #666665;
                            margin: 4% 35%;
                        }
                        h2{
                            text-align: center;
                            text-transform: uppercase;
                            margin-bottom: 2rem;
                        }
                        p{
                            text-align: center;
                            padding: 0 15px;
                        }
                }
                .hover_card{
                    width: calc((100% - 40px) / 4);
                    height: 250px;
                    background-color: #f9d03f;
                    list-style: none;
                    margin: 5px;
                    border-radius: 10px;
                    z-index:3;
                        h2{
                            font-size:26px;
                            text-transform: uppercase;
                            margin: 2rem;
                            text-align:center;
                        }
                        p{
                            text-align:center;
                            margin: 0 2rem;
                        }
                        .btn.light{
                            padding: 5px;
                            background-color: #efd068;
                            height: 2rem;
                            margin: 1rem 33%;
                            border: 1px solid #1e1e1e;
                            cursor: pointer;
                                a{
                                    text-decoration: none;
                                    text-transform: uppercase;
                                    color: #000;
                                }

                                &:hover{
                                    background-color: #1e1e1e;
                                        a{
                                            color:#fff;
                                        }
                                }
                        }
                }
            }


    }

    #achievements{
        width: 100%;
        height: 350px;
        background-image: url(/img/home-244125289.jpg);
        background-size:cover;
        background-repeat: no-repeat;
            ul{
                display:flex;
                justify-content: space-around;
                padding:75px 5em;
                    .achievement{
                        list-style: none;
                        text-align:center;
                            .achievements_icon{
                                font-size: 50px;
                                color: #f9d03f;
                                margin-bottom: 2rem;
                            }
                            h2{
                                font-size: 40px;
                                color: #f9d03f;
                            }
                            p{
                                text-transform: uppercase;
                                color: #fff;
                                font-size: 15px;
                                margin: 2rem auto;
                            }
                    }
            }
    }

</style>