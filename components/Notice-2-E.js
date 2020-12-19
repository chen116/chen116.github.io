app.component('notice-2-E', {
    props: {
      req: {
        type: String,
        required: false
      }
    },
    template:
    /*html*/
    `
    <div class="test2-frame">
       <h1>yoooo2</h1>
    </div>
  `,
  data() {
    return {
        myname: '2'
    }},

    computed: {
      selected(){
        return this.req == this.myname
      }
    }
  })