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
            <h2>our home owners say</h2>
            <div class="light_line"></div>
            <img src="/img/home-testimonial-113165296.jpg" alt="profilo cliente">
        </div>
        <p>
            'No man but feels more of a man in the world if he have but a bit of ground that he can call his own. However small it is on the surface, it is four thousand miles deep; and that is a very handsome property.'
        </p>
        <div class="sub">
            <h3>harry smith &middot; new home owner</h3>
            <div class="scroll">
                <font-awesome-icon icon="fa-solid fa-circle" class="dot" />
                <font-awesome-icon icon="fa-regular fa-circle" class="dot" />
            </div>
        </div>
        
    </section>
</template>

<style lang="scss" scoped>
    section{
        background-image: url('/img/home-parallax-144609983.jpg');
        background-size: cover;
        background-repeat: no-repeat;
            .intro{
                padding: 5rem 5rem 1rem 5rem;
                h2{
                    text-transform: capitalize;
                    font-size:24px;
                    text-align: center;
                    color: #fff;
                }
                .light_line{
                    height: 2px;
                    width:40%;
                    margin: 1rem auto;
                    background-color: #fed23f;
                    border-radius: 25px;
                }
                img{
                    clip-path: circle();
                    margin: 10px 45%;
                }
            }
            p{
                font-size:18px;
                margin: 1rem 30%;
                text-align: center;
                color:#fff;
            }
            .sub{
                margin: 5rem 30%;
                    h3{
                        font-size: 16px;
                        color:#fff;
                        text-align: center;
                        text-transform: uppercase;
                    }
                    .scroll{
                        margin: 3rem 40%;
                            .dot{
                                margin: 0 5px 1rem 5px;
                                cursor: pointer;
                                color:#fff;
                            }
                    }
            }
    }
</style>