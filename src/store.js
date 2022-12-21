import { reactive } from 'vue';
export const store = reactive({
    nav: [
        {
            name: 'home',
            link: '#home',
            status: 'active'
        },
        {
            name: 'about',
            link: '#about',
            status: 'inactive'
        },
        {
            name: 'services',
            link: '#services',
            status: 'inactive'
        },
        {
            name: 'work',
            link: '#work',
            status: 'inactive'

        },
        {
            name: 'articles',
            link: '#articles',
            status: 'inactive'
        }
    ]
})