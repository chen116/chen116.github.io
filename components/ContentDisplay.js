app.component('content-display', {
    props: {
        focused_page: {
          type: String,
          required: true
      }
    },
    template: 
    /*html*/
    `<div class="content-display">



    <nav class="navbar navbar-expand-lg navbar-dark sub-navbar ">
    <div class="container-fluid">
        <ul class="list-group list-group-horizontal">
        <!--<h4> 公司治理 </h4>-->
        <span>&nbsp;&nbsp;&nbsp;</span>

        <li class="nav-item" v-for="(page,index) in pages">
               
            <a class="nav-link" v-on:click="focusThisPage(page)" href="javascript:void(0);" >{{pageChineseNames[index]}}</a>
              </li>

<!--            <li class="list-group-item  li-bg" v-for="(page,index) in pages" :key="index">
                <button  v-on:click="focusThisPage(page)" type="button" class="btn btn-primary" >{{page}}</button>
            </li> -->
        </ul>



        
    </div>
  </nav>
  

    <notice-2  v-if="focusedPage === 'notice-2' ||  !focusedPage || focusedPage === '' " ></notice-2>
    <notice-2-E  v-if="focusedPage === 'notice-2-E'"></notice-2-E>

    </div>`,
    data() {
      return {
          pages: ['notice-2','notice-2-E','notice-2-1','notice-2-2','notice-2-3','notice-2-4','notice-2-5','notice-2-7','notice-2-8','notice-2-10','notice-2-9','notice-2-6'], 
          pageChineseNames: ['董事會','董事會(Board of Director)','薪酬委員會','組織及職掌','規章','內部稽核','企業社會責任','供應商管理','客戶服務','投資人關係','人力資源','與利害關係人對話'],
          focusedPage: ''
      }
    },
    methods: {
        focusThisPage(page){

            this.focusedPage = page;
            console.log("focus this page",this.focusedPage)
            // window.location.search = '?'+page
            // console.log(window.location)

        },
        showPage(){

        },


        
    },
    computed: {
        selected(){
            console.log("sleceted page now is ")
                return true;
        }



  
  
    },
    beforeMount(){
        this.focusedPage = this.focused_page;
        console.log(this.focusedPage);
        console.log("gonna mount");
 

        // this.getName()
      // this.httpGet()
   },
  })