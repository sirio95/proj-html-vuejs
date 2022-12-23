<script>
    export default{
        data(){
            return{
                contact:[
                    {
                        icon: 'fa-solid fa-globe',
                        info: 'Corporate Location 1600 Amphiteatre Parkway London WC1 1BA'
                    },
                    {
                        icon: 'fa-solid fa-house-chimney',
                        info: 'Residential Location 9521 Broadsberry Avenue Paddington RC7 gZA'
                    },
                    {
                        icon: 'fa-solid fa-phone',
                        info: '1.800.458.556 / 1.800.532.2112'
                    },
                    {
                        icon: 'fa-regular fa-envelope',
                        info: 'info&#64;your-domain.com'
                    },
                    {
                        icon: 'fa-regular fa-clock',
                        info: 'Monday - Friday: 9:00 AM - 6:00 PM'
                    },
                    {
                        icon: 'fa-regular fa-clock',
                        info: 'Saturday - Sunday: 9:00 AM - 12:00 PM'
                    }
                ]
            }
        }
    }
</script>

<template>
    <section>
        <div>
            <img src="../../assets/footer-logo.png" alt="logo">
            <p>We are specialists in the construction of unique and exclusive properties. Our work inspires. We pride ourselves on delivering outstanding quality and design for leading clients across the world.</p>
            <button class="btn-light">learn more</button>
        </div>
        <div>
            <h3>latest tweets</h3>
            <div>
                <img src="../../assets/3a74ce3d0532b7773b174c45ca3bd05a_normal.png" alt="theme fusion logo">
                <div>
                    <p>ThemeFusion</p>
                    <sub>&#64;Theme_Fusion</sub>
                </div>
                <font-awesome-icon icon="fa-brands fa-twitter" />
            </div>
            <div>
                <p>Do you need sublime WordPress hosting for your next website? Take advantage of exclusive partner offers that we have secured just for you, &amp; launch your site in second with <a href="#">&#35;avada</a> on WP Engine hosting &amp; get 30&percnt; Off this Black Friday <a href="#">bit.ly/3kjLLE2&#35;BlackFriday2020</a></p>
                <img src="../../assets/En2TRxLW4AEiWUN.jpeg" alt="offerta wpengine">
                <div>
                    <span>
                        <font-awesome-icon icon="fa-regular fa-heart" />
                        <font-awesome-icon icon="fa-regular fa-share-from-square" />
                    </span>
                    <p>22h</p>
                </div>
            </div>
        </div>
        <div>
            <h3>contact us today</h3>
            <ul v-for="element in contact" :key="element">
                <li>
                    <font-awesome-icon :icon="element.icon" />
                    {{ element.info }}
                </li>
            </ul>
        </div>
        <div>
            <h3>find us</h3>
            <img src="../../assets/construction_map_pin.png-Notti" alt="sede società">
        </div>
    </section>
</template>

<style lang="scss" scoped>

</style>