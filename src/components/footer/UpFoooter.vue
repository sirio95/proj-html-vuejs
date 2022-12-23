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
        <div class="intro">    
            <h2>building inspiring places</h2>
            <div class="light_line"></div>        
            <p>Vivamus sed consectetur tellus dolor sit amet, consectetur adipiscing lorem elit sadip ipsum ets filicis uns.</p>
        </div>
        <div class="buttons">
            <button class="btn_light">
                <a href="#">get a free quote</a>
            </button>
            <p>Only takes few seconds!</p>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    section{
        background-image:url('/img/about-call-to-action-57862405.jpg');
        background-size:cover;
        background-repeat:no-repeat;
        display:flex;
        justify-content: space-between;
        padding: 3rem 10rem;
            .intro{
                flex-basis:50%;        
                    h2{
                        font-size:28px;
                        text-align: center;
                        text-transform: capitalize;
                        color:#fff;
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
                        color:#fff;
                    }
            }
            .buttons{
                flex-basis:50%;
                    .btn_light{
                        padding: 5px;
                        background-color: #efd068;
                        height: 2rem;
                        margin: 1rem 37%;
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
                    p{
                        font-size:18px;
                        color:#fff;
                        text-align: center;

                    };
            }
    }

</style>