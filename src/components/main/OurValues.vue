<script>
    export default{
        data(){
            return {
                values:[
                    {
                        icon: 'fa-solid fa-house-chimney',
                        title: 'great services',
                        text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia'
                    },
                    {
                        icon: 'fa-solid fa-gear',
                        title: 'highest standards',
                        text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia'
                    },
                    {
                        icon: 'fa-solid fa-users',
                        title: 'professional team',
                        text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia'
                    },
                    {
                        icon: 'fa-regular fa-lightbulb',
                        title: 'creative solutions',
                        text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia'
                    }
                ]
            }
        }
    }
</script>

<template>
    <section>
        <div>
            <h2>our core values</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis quod provident voluptatem molestias perferendis.</p>
        </div>
        <div v-for="(element, index) in values" :key="index">
            <font-awesome-icon :icon="element.icon" />
            <h3>{{ element.title }}</h3>
            <p>{{ element.text }}</p>
        </div>
        

    </section>
</template>

<style lang="scss">

</style>