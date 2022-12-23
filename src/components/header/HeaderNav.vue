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
        width: 100%;
        height: 100px;
        display:flex;
        justify-content: space-around;

            #logo{
                height:100px;
                    img{
                        height:100px;
                    }
            }
            .navbar{
                height:100px;
                display:flex;

                    li{
                        list-style: none;
                        margin: 0 2rem;
                        height: 100px;

                            &:hover{
                                border-bottom: 4px solid #fed23f;
                            }

                            a{
                                text-decoration: none;
                                text-transform: uppercase;
                                line-height: 100px;
                                    &:hover{
                                        color:#fe6f1d;
                                    }
                            }
                    }
            }
            .btn.light{
                padding: 5px;
                background-color: #fed23f;
                height: 2rem;
                margin: auto 0;
                border: 0px;
                cursor: pointer;

                    &:hover{
                        background-color: #1e1e1e;
                        color:#fff;
                    }
            }

    }
    
</style>