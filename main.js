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
        }
    }
});

