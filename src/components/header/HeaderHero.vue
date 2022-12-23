<script>
    export default{
        data(){
            return{
            }
        }
    }
</script>

<template>
    <section>
        <div class="hero">
            <h1>building inspiring spaces</h1>
            <h3>we build inspiring residential &amp; commercial spaces</h3>
            <div class="btn container">
                <button class="btn dark"><a href="#work">explore recent work</a></button>
                <button class="btn light"><a href="#">get a quote today</a></button>
            </div>
        </div>
        <div id="sub">
            <p>do you have a construction project we can help with?</p>
            <button class="btn dark" id="absolute"><a href="#">get a free quote</a></button> 
        </div>
    </section>

</template>

<style lang="scss" scoped>
    .hero{
        height: 400px;
        background-image: url(/img/home-slider-62528242.jpg);
        background-repeat: no-repeat;
        background-size: cover;
            h1{
                text-align: center;
                font-size:32px;
                text-transform: uppercase;
                color:#fff;
                padding-top: 10rem;
            }
            h3{
                text-align: center;
                font-size: 24px;
                text-transform: capitalize;
                color:#fff;
                margin-top: 3rem;
            }

            .btn.container{
                margin-top: 3rem;
                text-align: center;

                .btn.dark{
                    padding: 5px;
                    background-color: #31312f;
                    height: 2rem;
                    margin: auto 2rem;
                    border: 0px;
                    cursor: pointer;

                        a{
                            color:#fff;
                            text-decoration: none;
                            text-transform: uppercase;
                        }

                        &:hover{
                            background-color: #fed23f;
                            a{
                                color:#000;
                            }
                        }
                }
                
                .btn.light{
                    padding: 5px;
                    background-color: #fed23f;
                    height: 2rem;
                    margin: auto 2rem;
                    border: 0px;
                    cursor: pointer;
                        a{
                            text-decoration: none;
                            text-transform: uppercase;
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
    #sub{
        height:100px;
        background-color:#fed23f;
        position:relative;
            p{
                text-transform: capitalize;
                text-align:center;
                font-size: 20px;
                padding-top: 2em;
            }
            .dark{
                padding: 5px;
                background-color: #31312f;
                height: 2rem;
                margin: auto 2rem;
                border: 0px;
                cursor: pointer;
                    a{
                        color:#fff;
                        text-decoration: none;
                        text-transform: uppercase;
                    }
                    &:hover{
                        background-color: #fff;
                        border: 1px solid #31312f;
                        a{
                            color:#000;
                        }
                    }
            }
            #absolute{
                position:absolute;
                bottom: -15%;
                left:45%;
            }
    }

</style>