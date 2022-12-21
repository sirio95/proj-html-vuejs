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
            <div>
                <button class="btn dark"><a href="#work">explore recent work</a></button>
                <button class="btn light"><a href="#">get a quote today</a></button>
            </div>
        </div>
        <div id="sub">
            <p>do you have a construction project we can help with?</p>
            <button class="btn dark" id="absolute">get a free quote</button> 
        </div>
    </section>

</template>

<style lang="scss" scoped>
    section{
        width:1280px;
        height: 600px;
            #hero{
                width: 1280px;
                height:500px;
                background-image: url("../../assets/home-slider-62528242.jpg");
                background-repeat: no-repeat;
                background-size: contain;
                
            }
            #sub{
                width: 1280px;
                height:100px;
                position: relative;
                    #absolute{
                        position:absolute;
                        bottom: 0;
                        left: 50%;
                    }
            }
    }
    

</style>