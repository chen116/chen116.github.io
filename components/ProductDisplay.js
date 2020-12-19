app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: 
  /*html*/
  `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>

        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>

        <p>Shipping: {{ shipping }}</p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div 
          v-for="(variant, index) in variants" 
          :key="variant.id" 
          @mouseover="updateVariant(index)" 
          class="color-circle" 
          :style="{ backgroundColor: variant.color }">
        </div>
        
        <button 
        type = "button"
          class="button btn btn-defaul" 
          :class="{ disabledButton: !inStock }" 
          :disabled="!inStock" 
          v-on:click="addToCart">
          Add to Cart
        </button>

        <div> {{ fdata }} </div>

      </div>
    </div>
    <review-list v-if="reviews.length" :reviews="reviews"></review-list>
    <review-form @review-submitted="addReview"></review-form>
  </div>`,
  data() {
    return {
        product: 'Socks',
        brand: 'Vue Mastery',
        selectedVariant: 0,
        details: ['50% cotton', '30% wool', '20% polyester'],
        variants: [
          { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
          { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
        ],
        reviews: [],
        fdata: ''
    }
  },
  methods: {
      addToCart() {
          this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
      },
      updateVariant(index) {
          this.selectedVariant = index
      },
      addReview(review) {
        this.reviews.push(review)
      },
       getName(){
   
        // axios({
        //   method: 'get',
        //   url: 'https://w3.taisol.com.tw/important/notice-2.html',
        //   rejectUnauthorized: false
        // })
        // // .get('https://w3.taisol.com.tw/important/notice-2.html')
        // .then(response => (this.fdata = response))

        // const instance = axios.create({
        //   httpsAgent: new https.Agent({  
        //     rejectUnauthorized: false
        //   })
        // });
        // instance.get('https://w3.taisol.com.tw/important/notice-2.html');
fetch("./notice-2.html")
        // fetch("https://smmry.com/")
        // fetch("https://api.npms.io/v2/search?q=vue")
        .then(response => response.text())
        .then(data => (this.fdata = data));


        // const res = await fetch('https://api.agify.io/?name=michael');
        // const data = await res.json();
        // this.fdata = data;
        // console.log(this.fdata);
      },
      httpGet()
      {
          // var xmlHttp = new XMLHttpRequest();
          // // xmlHttp.setRequestHeader('Content-Type', 'application/text');
          // xmlHttp.open( "GET", './notice-2.html', false ); // false for synchronous request
          // xmlHttp.send( null );
          // console.log(xmlHttp.responseText);
      
          var rawFile = new XMLHttpRequest();
          // rawFile.setRequestHeader('Content-Type', 'application/data');

          rawFile.open("GET", './notice-2.html', true);
          rawFile.onreadystatechange = function ()
          {
              if(rawFile.readyState === 4)
              {
                  if(rawFile.status === 200 || rawFile.status == 0)
                  {
                      var allText = rawFile.responseText;
                      alert(allText);
                  }
              }
          }
          rawFile.send(null);
      
        }
      
  },
  computed: {
      title() {
          return this.brand + ' ' + this.product
      },
      image() {
          return this.variants[this.selectedVariant].image
      },
      inStock() {
          return this.variants[this.selectedVariant].quantity
      },
      shipping() {
        if (this.premium) {
          return 'Free'
        }
        return 2.99
      }


  },
  beforeMount(){
    console.log(this.focusedPage);
    // this.getName()
    // this.httpGet()
 },
})