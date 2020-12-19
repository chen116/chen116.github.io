const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true,
            focused_page:  window.location.href.split('?')[1]
            
        }
    },

    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        mouseLeave(id) {
            // this.$refs[id].setAttribute('aria-expanded', false)
            // this.$refs[id].setAttribute('class', 'nav-link dropdown-toggle ')
            // this.$refs[id+'-1'].setAttribute('class', 'dropdown-menu ')

        },
        mouseOver(id){

            // console.log(id)
            // console.log(this.$refs[id])
            // this.$refs[id].setAttribute('aria-expanded', true)
            // this.$refs[id].setAttribute('class', 'nav-link dropdown-toggle show')
            // this.$refs[id+'-1'].setAttribute('class', 'dropdown-menu show')
        }
    }
});

