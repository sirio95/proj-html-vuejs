<script>
    export default{
        data(){
            return {
                values:[
                    {
                        icon: 'fa-solid fa-house-chimney',
                        title: 'great services',
                        text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia',
                        color: 'ocean_blue'
                    },
                    {
                        icon: 'fa-solid fa-gear',
                        title: 'highest standards',
                        text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia',
                        color: 'violet'
                    },
                    {
                        icon: 'fa-solid fa-users',
                        title: 'professional team',
                        text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia',
                        color: 'orange'
                    },
                    {
                        icon: 'fa-regular fa-lightbulb',
                        title: 'creative solutions',
                        text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia',
                        color: 'light_green'
                    }
                ]
            }
        }
    }
</script>

<template>
    <section id="about">
        <div class="info">
            <h2>our core values</h2>
            <div class="light_line"></div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis quod provident voluptatem molestias perferendis.</p>
        </div>
        <div class="container">
            <ul>
                <li v-for="(element, index) in values" :key="index" class="card">
                    <font-awesome-icon :icon="element.icon" class="icon" :id="element.color"/>
                    <h3>{{ element.title }}</h3>
                    <p>{{ element.text }}</p>
                </li>
            </ul>
        </div>
        

    </section>
</template>

<style lang="scss" scoped>
    #about{
        background-color: #f5f5f5;
        .info{
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
                font-size:18px;
            }
        }
        .container{
            width:100%;
            margin: 5rem;
            
                ul{
                    display:flex;
                    justify-content: space-around;
                    margin: 2rem 0;
                    .card{
                        width:calc((100% - 40px) / 4);
                        list-style: none;
                        
                        #ocean_blue{
                            background-color: #4ea4a5;
                        }
                        #violet{
                            background-color: #4e6da5;
                        }
                        #orange{
                            background-color: #f6722a;
                        }                                    
                        #light_green{
                            background-color: #a7cf47;
                        }
                        .icon{
                            width: 60px;
                            height: 60px;
                            font-size: 35px;
                            color:#fff;
                            padding:15px;
                            border-radius: 50%;   
                            margin: 1rem 8rem;     
                        }
                        h3{
                            text-transform: uppercase;
                            font-size: 24px;
                            text-align: center;
                            margin: 2rem;
                        }
                        p{
                            font-size:18px;
                            text-align:center;
                            margin: 2rem;
                        }
                    }    
                            
                }
        }   
    }
    
</style>