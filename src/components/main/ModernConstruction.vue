<script>
    export default{
        data(){
            return{
                cards: [
                    {
                        icon: 'fa-regular fa-building',
                        name: 'buildings',
                        text: 'Quis autem vel eum iure reprenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.' 
                    },
                    {
                        icon: 'fa-solid fa-arrows-rotate',
                        name: 'renovate',
                        text: 'Quis autem vel eum iure reprenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.'
                    },
                    {
                        icon: 'fa-solid fa-house-chimney',
                        name: 'construct',
                        text: 'Quis autem vel eum iure reprenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.'
                    },
                    {
                        icon: 'fa-solid fa-truck',
                        name: 'exclusive',
                        text: 'Quis autem vel eum iure reprenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.'
                    }
                ]
            }
        }
    }
</script>

<template>
    <section>
        <div>
            <h2>specialist in modern construction</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita iusto error earum corporis voluptatem facere!</p>
        </div>
        <div>
            <ul>
                <li v-for="(element, index) in cards" :key="index">
                    <font-awesome-icon :icon="element.icon" />
                    <h2>{{ element.name }}</h2>
                    <p>{{ element.text }}</p>
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss">

</style>