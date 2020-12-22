app.component('notice-2-2', {
    data() {
      return {



        table1 : [
            {   "name": "HQO",
                "summary" : "秉承總經理之命令，執行專案業務之推動及落實並負責對投資人公共關係之維繫。",
                "details" : [] 
                
            },
            {   "name": " 稽核室", 
                "summary" : "執行內部控制制度的稽核工作，檢查並評估公司的營運記錄有無缺失並提出改善建議。",
                "details" : ["meow","woof"] 
                
            },
            {   "name": "財管處",
                "summary" : "秉承總經理之命令，掌管公司之財務、人事、總務、公關等事宜。下設財務部、管理部。主要內容為：",
                "details" : ["規劃公司的營運方針並執行董事會的決議，建立公司營運體制及監督日常運作。","處理公司對內及對外公共關係及跨部門之溝通與協調情事。"] 
                
            }


          
          
        ],
        table2 : [
            {"title": "2-1title","name":"2-1a","exps":["meow"]},
            {"title": "2-1title","name":"2-1a","exps":["meow","woof"]}
        ],
        table3 : [
            {"name": "2-1title","self_stock":"2-1a", "self_stock_per":"ss" , "spouse_stock":"ss","spouse_stock_per":"qq",  "other_stock":"ssq","other_stock_per":"qaq","name2":"sq","relation":"pp","note":""},         
            {"name": "2-1title","self_stock":"2-1a", "self_stock_per":"ss" , "spouse_stock":"ss","spouse_stock_per":"qq",  "other_stock":"ssq","other_stock_per":"qaq","name2":"sq","relation":"pp","note":""},         
            {"name": "2-1title","self_stock":"2-1a", "self_stock_per":"ss" , "spouse_stock":"ss","spouse_stock_per":"qq",  "other_stock":"ssq","other_stock_per":"qaq","name2":"sq","relation":"pp","note":""},         
          ]
        
        }

    },
    props: {},
    template:
    /*html*/
    `
    <div class="content">
        <div class="accordion " id="accordionFlushExample">
            <div class="accordion-item">
                <h2 class="accordion-header " id="flush-headingOne">
                    <button class=" accordion-button collapsed text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        <img class="rounded" src="./assets/images/smalllogo.jpg"/><span>&nbsp;&nbsp;</span> 組織架構
                    </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body  ">
                        <img class="rounded" src="./assets/images/img20.gif"/>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header " id="flush-headingOne">
                    <button class=" accordion-button collapsed text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        <img class="rounded" src="./assets/images/smalllogo.jpg"/><span>&nbsp;&nbsp;</span> 主要部門職稱及權責
                    </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" >
                    <div class="accordion-body">
                        <table  class="table table-bordered table-hover">
                            <thead>
                            <tr>
                                <th rowspan="1">部門</th>
                                <th rowspan="1">主要職掌</th>


                            </tr>

                            </thead>
                            <tbody>
                            <tr v-for="department in table1">
                                <td> {{department.name}}</td>
                                <td> 
                                    <ul class="list-group list-group-flush ">{{department.summary}}
                                        <li class="list-group-item" v-for="(detail,index) in department.details">
                                        ({{index+1}}) {{detail}}
                                        </li>
                                    </ul>
                                </td>
                            </tr> 
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <div class="accordion-item">
                <h2 class="accordion-header " id="flush-headingOne">
                    <button class=" accordion-button collapsed text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        <img class="rounded" src="./assets/images/smalllogo.jpg"/><span>&nbsp;&nbsp;</span> 主要經營管理團隊
                    </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" >
                    <div class="accordion-body">
                        <table  class="table table-bordered table-hover">
                            <thead>
                            <tr>
                                <th rowspan="1">職稱</th>
                                <th rowspan="1">姓名</th>
                                <th rowspan="1">主要經(學)歷</th>
                            </tr>

                            </thead>
                            <tbody>
                            <tr v-for="person in table2">
                                <td> {{person.title}}</td>
                                <td> {{person.name}}</td>
                                <td> 
                                    <ul class="list-group list-group-flush ">
                                        <li class="list-group-item" v-for="exp in person.exps">
                                            {{exp}}
                                        </li>
                                    </ul>
                                </td>
                            </tr> 
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>


            <div class="accordion-item">
                <h2 class="accordion-header " id="flush-headingOne">
                    <button class=" accordion-button collapsed text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                        <img class="rounded" src="./assets/images/smalllogo.jpg"/><span>&nbsp;&nbsp;</span> 主要股東名單
                    </button>
                </h2>


                


                <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" >
                    <div class="accordion-body">
                        <img class="rounded" src="./assets/images/img21.gif"/>
                       
                    
                    </div>
                </div>
            </div>

        </div>
    </div>
    `,
    computed: {},
    methods: {},
    beforeMount() {}
})