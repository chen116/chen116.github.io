app.component('notice-2', {
    props: {
      req: {
        type: String,
        required: false
      }
    },
    template:
    /*html*/
    `
    <div class="content">

      <h5 class="content-p">
      <img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span> 本公司之董事、監察人含2名女性、7名男性；分別在電子零組件或周邊產品業、橡膠業、銀行業、光電業、玻璃陶瓷業、通信網路業、水泥工業、證券業、電信業等，具有行銷企劃、經營管理、領導決策、產業知識、財務會計之專業經驗與素養。
      </h5>

      <div class="accordion " id="accordionFlushExample">
      <div class="accordion-item">
        <h2 class="accordion-header " id="flush-headingOne">
          <button  v-on:click="readFile"  table_id="table1" class=" accordion-button collapsed text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
          <img class="rounded" src="./assets/images/smalllogo.jpg"/><span>&nbsp;&nbsp;</span> 董事(含獨立董事)及監察人資料(1)
          </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">

 <!-- https://css-tricks.com/complete-guide-table-element/ -->
          <table  class="table table-bordered table-hover">
             <thead>
               <tr>
                <th rowspan="2">職稱（註一）</th>
                <th rowspan="2">國籍或註冊地</th>
                <th rowspan="2">姓名</th>
                <th rowspan="2">性別</th>
                <th rowspan="2">選(就)任日期</th>
                <th rowspan="2">任期</th>
                <th rowspan="2">初次選任日期（註二）</th>
                
                <th colspan="2">選任時持有股份</th>
                <th colspan="2">現在持有股份</th>
                <th colspan="2">配偶,未成年子女現在持有股份</th>
                <th colspan="2">利用他人名義持有股份</th>
                <th rowspan="2">主要經（學）歷（註三）</th>

                <th rowspan="2">目前兼任本公司及其他公司之職務</th>
                <th colspan="3">具配偶或二親等以內關係之其他主管,董事或監察人</th>
                </tr>

                <tr>
                <th>股數</th>
                <th>持股比率(%)</th>
                <th>股數</th>
                <th>持股比率(%)</th>
                <th>股數</th>
                <th>持股比率(%)</th>
                <th>股數</th>
                <th>持股比率(%)</th>
                <th>職稱</th>
                <th>姓名</th>
                <th>關係</th>
                </tr>
              </thead>
              
              
              <tbody>
              
              <tr v-for="user in table1" :key="user.name">
                    <td v-for="key in Object.keys(user)">{{ user[key] }}</td>
                  <!--<td>{{user.title}}</td>
                  <td>{{user.from}}</td>
                  <td>{{user.name}}</td>
                  <td>{{user.sex}}</td>
                  <td>{{user.start_date}}</td>
                  <td>{{user.duration}}</td>
                  <td>{{user.first_start_date}}</td>
                  <td>{{user.stock1}}</td>
                  <td>{{user.stock_per1}}</td>
                  <td>{{user.stock2}}</td>
                  <td>{{user.stock_per2}}</td>
                  <td>{{user.stock3}}</td>
                  <td>{{user.stock_per3}}</td>
                  <td>{{user.stock4}}</td>
                  <td>{{user.stock_per4}}</td>
                  <td>{{user.exp}}</td>
                  <td>{{user.other_title}}</td>
                  <td>{{user.relative_title}}</td>
                  <td>{{user.relative_name}}</td>
                  <td>{{user.relative_relation}}</td>-->
              </tr> 
              </tbody>
              </table>


 

          </div>
        
        
        
        
        
        
        
        </div>
      </div>
      <div class="accordion-item">
      <h2 class="accordion-header " id="flush-headingOne">
      <button     class=" accordion-button collapsed text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      <img class="rounded" src="./assets/images/smalllogo.jpg"/><span>&nbsp;&nbsp;</span> 董事(含獨立董事)及監察人資料(2)
      </button>
    </h2>
        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" >
          <div class="accordion-body">


 
          <table  class="table table-bordered table-hover">
             <thead>
               <tr>
                <th rowspan="2">條件姓名(註1)</th>
                <th colspan="3">是否具有五年以上工作經驗及下列專業資格</th>
                <th colspan="10">符合獨立性情形（註2）</th>
                <th rowspan="2">兼任其他公開發行公司獨立董事家數</th>



                </tr>

                <tr>
                <th>商務、法務、財務、會計或公司業務所須相關科系之公私立大專院校講師以上</th>
                <th>法官、檢察官、律師、會計師或其他與公司業務所需之國家考試及格領有證書之專門職業及技術人員</th>
                <th>商務、法務、財務、會計或公司業務所須之工作經驗</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
                <th>8</th>
                <th>9</th>
                <th>10</th>
                </tr>
              </thead>
              
              
              <tbody>
              
              <tr v-for="user in table2">
                  <td v-for="entry in user">{{ entry }}</td>
              </tr> 
              </tbody>
              </table>


 

          </div>
        
          </div>
      </div>

    </div>
    <ul class="list-group list-group-flush ">
    <li class="list-group-item">一、本公司依107年董事會通過之「董事及經理人績效評估辦法」，於每年定期辦理董事會及其成員之績效評估。</li>
    <li class="list-group-item">二、上述績效評估辦法之合宜性需每年定期檢討。</li>
    <li class="list-group-item"> 三、董事會績效評估之衡量項目為下列五大面向：
      <ul class="list-group list-group-flush ">
        <li class="list-group-item"> 1. 對公司營運之參與程度。</li>
        <li class="list-group-item">2. 提升董事會決策品質。</li>
        <li class="list-group-item">3. 董事會組成與結構。</li>
        <li class="list-group-item">4. 董事的選任及持續進修。</li>
        <li class="list-group-item">5. 內部控制。</li>
      </ul>
    </li>
   
        
    <li class="list-group-item">董事成員績效評估之衡量項目為下列六大面向：
        <ul class="list-group list-group-flush ">
        <li class="list-group-item">1. 公司目標與任務之掌握。</li>
        <li class="list-group-item">2. 董事職責認知。</li>
        <li class="list-group-item">3. 對公司營運之參與程度。</li>
        <li class="list-group-item">4. 內部關係經營與溝通。</li>
        <li class="list-group-item">5. 董事之專業及持續進修。</li>
        <li class="list-group-item">6. 內部控制。</li>
      </ul>
    </li>
    
    <li class="list-group-item">四、績效評估結果： 
      <ul class="list-group list-group-flush ">
        <li class="list-group-item">108年度 :
          <a href="./assets/docs/board.pdf" target="_blank">  董事會 
            <i class="bi bi-box-arrow-up-right"></i>
          </a> 
          <span>&nbsp;</span>  
          <a href="./assets/docs/payout_member.pdf" target="_blank"> 薪酬委員會 
            <i class="bi bi-box-arrow-up-right"></i>
          </a>
        </li>
      </ul>
    </li>
    


  </ul>
    

  
    
    
    
    
    
    
    

    </div>
  `,
  
  data() {

      return {

  

        table1: [
          { title: '1', from: '2', name: '3', sex: '4' ,start_date:'5', duration: '6', first_start_date: '7', stock1: '8', stock_per1:'9',stock2: '10', stock_per2:'11' ,stock3: '12', stock_per3:'13' ,stock4: '14', stock_per4:'15' ,exp:'16',other_title: '17',relative_title:'18',relative_name:'19',relative_relation:'20'},
          { title: '1', from: '2', name: '3', sex: '4' ,start_date:'5', duration: '6', first_start_date: '7', stock1: '8', stock_per1:'9',stock2: '10', stock_per2:'11' ,stock3: '12', stock_per3:'13' ,stock4: '14', stock_per4:'15' ,exp:'16',other_title: '17',relative_title:'18',relative_name:'19',relative_relation:'20'},
          { title: '1', from: '2', name: '3', sex: '4' ,start_date:'5', duration: '6', first_start_date: '7', stock1: '8', stock_per1:'9',stock2: '10', stock_per2:'11' ,stock3: '12', stock_per3:'13' ,stock4: '14', stock_per4:'15' ,exp:'16',other_title: '17',relative_title:'18',relative_name:'19',relative_relation:'20'},
          { title: '1', from: '2', name: '3', sex: '4' ,start_date:'5', duration: '6', first_start_date: '7', stock1: '8', stock_per1:'9',stock2: '10', stock_per2:'11' ,stock3: '12', stock_per3:'13' ,stock4: '14', stock_per4:'15' ,exp:'16',other_title: '17',relative_title:'18',relative_name:'19',relative_relation:'20'},
          { title: '1', from: '2', name: '3', sex: '4' ,start_date:'5', duration: '6', first_start_date: '7', stock1: '8', stock_per1:'9',stock2: '10', stock_per2:'11' ,stock3: '12', stock_per3:'13' ,stock4: '14', stock_per4:'15' ,exp:'16',other_title: '17',relative_title:'18',relative_name:'19',relative_relation:'20'}
         
      ],

      table2: [
        ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'],
        ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'],
        ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']
        
      ]
      , 

      tables_data :{}

    }




    },

    computed: {
      selected(){
       
          console.log(this.req)
        return this.req == '1'
      }
    },
    methods: {
      readFile(e) {
        console.log(e.currentTarget.getAttribute('table_id'))
        table_id = e.currentTarget.getAttribute('table_id')

        this[table_id] = this.tables[table_id]
        // table_id = e.currentTarget.getAttribute('table_id')
        // // console.log("var data id",this.{{table_id}})
        // fetch('https://chen116.github.io/assets/data/notice-2.json')
        // .then(response => response.json())
        // .then(tables_data => {console.log(tables_data[table_id]);this[table_id]= tables_data[table_id];} )
      },
       fillTableData(){
        fetch('https://chen116.github.io/assets/data/notice-2.json')
        .then(response => response.json())
        .then(tables_data => {
          console.log(tables_data)     ;  

            this.tables_data = tables_data;   
            console.log(this.tables_data)     ;  

        })
        // tables_data.forEach(element => {
        //  console.log(element); 
        // });

        // const res = await fetch('https://chen116.github.io/assets/data/notice-2.json');
        // const data =  await res.json();
        // data.forEach(element => {
        //   console.log(element)
          
        // });

        }
      },
      beforeMount() {
        this.fillTableData()
        // const res =  fetch('https://chen116.github.io/assets/data/notice-2.json');
        // const data =  res.json();
        // data.forEach(element => {
        //   console.log(element)
          
        // });
     

      
    }

  })