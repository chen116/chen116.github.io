function Page3(props) {
    const myPage = 3;
    if (myPage != props.currentPage){return null;}

      var data = {
        table1 : [
            {   "name": "HQO",
                "summary" : "秉承總經理之命令，執行專案業務之推動及落實並負責對投資人公共關係之維繫。",
                "details" : [] 
                
            },
            {   "name": "稽核室", 
                "summary" : "執行內部控制制度的稽核工作，檢查並評估公司的營運記錄有無缺失並提出改善建議。",
                "details" : [] 
                
            },
            {   "name": "財管處",
                "summary" : "秉承總經理之命令，掌管公司之財務、人事、總務、公關等事宜。下設財務部、管理部。主要內容為：",
                "details" : ["(1)規劃公司的營運方針並執行董事會的決議，建立公司營運體制及監督日常運作。","(2)處理公司對內及對外公共關係及跨部門之溝通與協調情事。"] 
                
            },
            {   
                "name": "資訊室", 
                "summary" : "",
                "details" : ["(1)ERP系統的維護及軟體整合。","(2)內部網路的架設及電子郵件系統的更新及修護。","(3)軟、硬體設備的更新及維護。","(4)資訊安全維護及推動。"] 
            
            },
            {   
                "name": "財務部", 
                "summary" : "",
                "details" : ["(1)負責公司人事、行政、總務、股務及固定資產之管理與推動工作。","(2)公司智慧財產權利之維護與訴訟。","(3)負責勞工安全衛生規劃與管理並釐訂公司職業災害防治措施。"] 
            
            },
            {   
                "name": "業務行銷處", 
                "summary" : "秉承總經理之命令，以創造公司之最大利潤為目標，依產品別區分為散熱器、通訊﹑連接器及讀卡器四大行銷部。",
                "details" : ["(1)蒐集市場資訊，提供給主管及研發處。","(2)售價政策之擬訂及市場規劃、預估。","(3)規劃並辦理廣告及參展事宜。","(4)執行新產品開發建議之審查。","(5)擬定產品初期規格及成本分析。"] 
            
            },
            
            {   
                "name": "業務處", 
                "summary" : "秉承總經理之命令，以達成業績，創造公司之最大利潤為目標，其下區分日本、通訊、熱傳、連接器、讀卡器等五大產品線業務：",
                "details" : ["(1)客戶之開發、調查、選定、聯繫及服務客戶。"
                ,"(2)合約、訂單之審查、產銷、出貨控制之聯繫協調。","(3)客戶抱怨及維修之聯繫處理。","(4)反應品質異常資訊給品保單位，蒐集並提供技術資料給客戶。","(5)安排出貨交運事宜。"] 
            
            },
            
            
            {   
                "name": "研發處", 
                "summary" : "秉承總經理之命令，負責本公司產品開發、製造技術支援、銷售技術支援、及對客戶支援事宜。下設通訊研發部、熱傳研發部、連接器研發部、讀卡器研發部、研發管理部。",
                "details" : 
                ["通訊研發部：","(1)通訊散熱產品設計及相關零件之承認。","(2)模具開發、試產。","(3)協助解決客戶技術問題。","熱傳研發部：","(1)散熱器設計及相關零件之承認。","(2)模具開發、試產。","(3)協助解決客戶技術問題。","連接器研發部：","(1)連接器設計及相關零件之承認。","(2)模具開發、試產。","(3)協助解決客戶技術問題。","讀卡器研發部：","(1)讀卡器設計及相關零件之承認。","(2)產品開發、試產。","(3)協助解決客戶技術問題。"]

            
            },

            
            {   
                "name": "資材部", 
                "summary" : "秉承總經理之命令，以達成業績，創造公司之最大利潤為目標，其下區分日本、通訊、熱傳、連接器、讀卡器等五大產品線業務：",
                "details" : ["(1)負責原物料、各項設備等採購事宜，做到適質、適量、適時與適價的採購策略。"
                ,"(2)對物料倉儲及存貨之管制與記錄，並維護廠區存貨之完整，達到適時供給所需。"] 
            
            },

            {   
                "name": "生管部", 
                "summary" : "秉承總經理之命令，以達成業績，創造公司之最大利潤為目標，其下區分日本、通訊、熱傳、連接器、讀卡器等五大產品線業務：",
                "details" : [
                    "(1)製造部門生產排程規劃。","(2)負責原物料請購、物料安排事宜。"]
                
            
            },       
            
            
            
            {   
                "name": "品保部", 
                "summary" : "秉承總經理之命令，以達成業績，創造公司之最大利潤為目標，其下區分日本、通訊、熱傳、連接器、讀卡器等五大產品線業務：",
                "details" : [
                    "(1)執行公司品質政策、確保品質系統之實施及品質作業稽核、改善。","(2)提供經營者有關品質之建議，協助及協調各部門執行品保的工作並推行品質提升之活動與教育訓練以提供客戶滿意的服務。"
                ] 
            
            }, 
                    
            {   
                "name": "製造部", 
                "summary" : "秉承總經理之命令，以達成業績，創造公司之最大利潤為目標，其下區分日本、通訊、熱傳、連接器、讀卡器等五大產品線業務：",
                "details" : ["(1)負責公司產品之製造及生產。",
                    "(2)生產製程之改善及良率之提升。"] 
            
            },     
          
          
        ],
        table2 : [
            {"title": "董事長","name":"余清松","exps":["大同工學院工商管理系畢"]},
            {"title": "總經理","name":"梁俊興","exps":["東海大學經濟系","信邦電子股份有限公司總經理","信邦電子股份有限公司監察人","數碼醫療器材股份有限公司執行長"]}
        ],


        table3:[
            {name: '余清松',self_stock:'14,155,046',self_stock_per:"16.22", fam_stock:"773,431",fam_stock_per:"0.89",other_stock:"2,698,000",other_stock_pre:'3.09', name2:'隆昕實業',relation:'關係人',note:''},
            {name: '隆昕實業股份有限公司法人代表：葉麗娟',self_stock:'2,698,000',self_stock_per:"3.09", fam_stock:"-",fam_stock_per:"-",other_stock:"-",other_stock_pre:'-', name2:'余清松',relation:'關係人',note:''},
            {name: '林千雅',self_stock:'1,844,321',self_stock_per:"2.11", fam_stock:"-",fam_stock_per:"-",other_stock:"-",other_stock_pre:'-', name2:'',relation:'',note:''},
            {name: '台灣企銀受託保管群益創新科技基金專戶',self_stock:'1,200,000',self_stock_per:"1.38", fam_stock:"-",fam_stock_per:"-",other_stock:"-",other_stock_pre:'-', name2:'',relation:'',note:''},
            {name: '群益馬拉基金專戶',self_stock:'1,030,000',self_stock_per:"1.18", fam_stock:"-",fam_stock_per:"-",other_stock:"-",other_stock_pre:'-', name2:'',relation:'',note:''},
            {name: '謝君山',self_stock:'1,022,276',self_stock_per:"1.17", fam_stock:"280,466",fam_stock_per:"0.32",other_stock:"",other_stock_pre:'-', name2:'',relation:'',note:''},
            {name: '元大人壽保險股份有限公司',self_stock:'956,000',self_stock_per:"1.10", fam_stock:"-",fam_stock_per:"-",other_stock:"-",other_stock_pre:'-', name2:'',relation:'',note:''},
            {name: '復華傳家二號基金專戶',self_stock:'863,000',self_stock_per:"0.99", fam_stock:"-",fam_stock_per:"-",other_stock:"-",other_stock_pre:'-', name2:'',relation:'',note:''},
            {name: '野村中小基金專戶',self_stock:'855,000',self_stock_per:"0.98", fam_stock:"-",fam_stock_per:"-",other_stock:"-",other_stock_pre:'-', name2:'',relation:'',note:''},
            {name: '復華數位經濟基金專戶',self_stock:'812,000',self_stock_per:"0.93", fam_stock:"-",fam_stock_per:"-",other_stock:"-",other_stock_pre:'-', name2:'',relation:'',note:''},
        ]


      };
      const table1 = data.table1.map( (item,index) => [
                                                <tr>
                              <td> {item.name}</td>
                                <td> 
                                    <ul class="list-group list-group-flush ">{item.summary}

                                      {data.table1[index].details.map(     (detail) =>
                                          <li class="list-group-item" >
                                          {detail}
                                          </li>
                                        )}
                                    </ul>
                                </td>
                                </tr>
                                ]
        );


        const table2 = data.table2.map( (item,index) => [
                            <td> {item.title}</td>,
                                <td> {item.name}</td>,
                                <td> 
                                    <ul class="list-group list-group-flush ">
                                      {data.table2[index].exps.map( (item2) =>
                                          <li class="list-group-item" >
                                            {item2}
                                          </li>
                                        )}
                                    </ul>
                                </td>
                                ]
        );

        const table3 = data.table2.map( (item,index) => [
                                
                                  Object.keys(item).map(function(keyName,keyIndex){
                                      <td> {item.keyName}</td>
                                  } )
                               

                              ]
        );



      

      return [
      <div class="content">
        <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>組織及職掌 </h5>
        <p><span>&nbsp;&nbsp;</span></p>
    
  <div class="accordion" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          主要部門職稱及權責 
        </button>
      </h2>
    </div>

    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" >
      <div class="card-body">
        <table  class="table table-bordered table-hover">
                            <thead>
                            <tr>
                                <th rowspan="1">部門</th>
                                <th rowspan="1">主要職掌</th>
                            </tr>

                            </thead>
                            <tbody>
                               {table1}
                            </tbody>
                        </table>
       
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Collapsible Group Item #2
        </button>
      </h2>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Collapsible Group Item #3
        </button>
      </h2>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</div>
    </div>
      ];

    }
    