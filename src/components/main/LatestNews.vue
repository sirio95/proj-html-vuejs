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
    <section>
        <div>
            <h2>latest news</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda illum, ea distinctio exercitationem voluptatum deserunt.</p>
        </div>
        <div>
            <div v-for="(element, index) in articles" :key="index">
                <div>
                    <img :src="`/img/${element.img}`" :alt="element.title" class="card-img" :class="index">
                    <div class="img-hover" :class="index">
                        <div>
                            <font-awesome-icon icon="fa-solid fa-link" />
                            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                        </div>
                        <h3>{{ element.title }}</h3>
                        <p>{{ element.tags }}</p>
                    </div>
                </div>
                <h3>{{ element.title }}</h3>
                <p>{{ element.date }}</p>
                <hr/>
                <p>{{ element.preview }}</p>

            </div>
        </div>
        <div>
            <div class="bar"></div>
            View More
            <div class="bar"></div>
        </div>
    </section>
</template>

<style lang="scss">

</style>