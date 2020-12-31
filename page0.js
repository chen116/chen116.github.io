function Page0(props) {
    const myPage = 0;
    var data = {
        table1 : [
            {title:"董事長",from:"臺灣",name:"余清松",sex:"男",start_date:"107.06.19",duration:"3年",first_start_date:"88.11.06",stock1:"11,799,516",stock_per1:"16.9",stock2:"14,155,046",stock_per2:"16.37",stock3:"773.431",stock_per3:"0.89",stock4:"3151000",stock_per4:"3.64",exps:["大同工學院工商管理系畢"],other_titles:["泰碩電子(香港)有限公司 董事","世窗電子(香港)有限公司 董事","TAISOL ELEC. JAPAN 董事","衡國企業(股)公司 董事長"],relative_title:"-",relative_name:"-",relative_relation:"-"},
            {title:"董  事",from:"臺灣",name:"林展列",sex:"男",start_date:"107.06.19",duration:"3年",first_start_date:"102.04.22",stock1:"-",stock_per1:"-",stock2:"104.000",stock_per2:"0.12",stock3:"-",stock_per3:"-",stock4:"-",stock_per4:"-",exps:["台南高工機械工程科","萬旭電業股份有限公司 總經理","萬旭電業股份有限公司 董事"],other_titles:["萬旭電業股份有限公司 顧問","萬旭電業股份有限公司 董事","胡連精密股份有限公司 獨立董事","泗陽泰碩電子有限公司 董事兼法人代表","泰碩電子(股)公司 董事/營運長","蘇州泰碩電子有限公司 董事","TAISOL ELEC. JAPAN 董事","鈺邦科技股份有限公司 監察人"],relative_title:"-",relative_name:"-",relative_relation:"-"},
            {title:"董  事",from:"臺灣",name:"梁竣興",sex:"男",start_date:"107.06.19",duration:"3年",first_start_date:"107.06.19",stock1:"38000",stock_per1:"0.05",stock2:"98.813",stock_per2:"0.11",stock3:"-",stock_per3:"-",stock4:"-",stock_per4:"-",exps:["東海大學經濟系","信邦電子(股)公司 總經理/營運長/顧問"],other_titles:["東莞泰碩電子有限公司 董事","泰碩電子(股)公司 總經理","泗陽泰碩電子有限公司 董事"],relative_title:"-",relative_name:"-",relative_relation:"-"},
            {title:"董  事",from:"日本",name:"蘆原錦吾",sex:"男",start_date:"107.06.19",duration:"3年",first_start_date:"107.06.19",stock1:"-",stock_per1:"-",stock2:"-",stock_per2:"-",stock3:"-",stock_per3:"-",stock4:"-",stock_per4:"-",exps:["中興大學地政系","信邦電子(股)公司 董事"],other_titles:["Oriental Computer Inc.  President"],relative_title:"-",relative_name:"-",relative_relation:"-"},
            {title:"獨立董事",from:"臺灣",name:"張文添",sex:"男",start_date:"107.06.19",duration:"3年",first_start_date:"102.04.22 (註4)",stock1:"-",stock_per1:"-",stock2:"-",stock_per2:"-",stock3:"-",stock_per3:"-",stock4:"-",stock_per4:"-",exps:["文化大學企業管理研究所碩士","交通銀行副理","泰豐輪胎(股)公司 副總經理兼發言人","寶華銀行協理、研發處長、管理部經理、祕書處長","文化大學、逢甲大學 兼任講師","實踐大學企管系 兼任講師"],other_titles:["李洲科技(股)公司 獨立董事"],relative_title:"-",relative_name:"-",relative_relation:"-"},
            {title:"獨立董事",from:"臺灣",name:"曾天運",sex:"男",start_date:"107.06.19",duration:"3年",first_start_date:"107.06.19",stock1:"-",stock_per1:"-",stock2:"-",stock_per2:"-",stock3:"-",stock_per3:"-",stock4:"-",stock_per4:"-",exps:["中興大學科技法律研究所碩士","冠軍建材股份有限公司 財務副總","萬泰科技股份有限公司 財務副總"],other_titles:["大哲聯合會計師事務所 合夥會計師","中華民國仲裁協會 仲裁人","萬旭電業股份有限公司 薪酬委員"],relative_title:"-",relative_name:"-",relative_relation:"-"},
            {title:"獨立董事",from:"臺灣",name:"陳志弘",sex:"男",start_date:"107.06.19",duration:"3年",first_start_date:"107.06.19",stock1:"-",stock_per1:"-",stock2:"-",stock_per2:"-",stock3:"-",stock_per3:"-",stock4:"-",stock_per4:"-",exps:["大同工學院事業經營系","東南水泥股份有限公司","副董事長室特別助理/駐廠董事室主任兼品保部經理/高雄廠行政副廠長/高雄廠廠長/駐廠董事長室特別助理"],other_titles:["澎湖有線電視股份有限公司 總經理"],relative_title:"-",relative_name:"-",relative_relation:"-"},
            {title:"監察人",from:"臺灣",name:"謝君山",sex:"男",start_date:"107.06.19",duration:"3年",first_start_date:"102.04.22 (註5)",stock1:"1205197",stock_per1:"1.73",stock2:"1,571,276",stock_per2:"1.82",stock3:"288466",stock_per3:"0.33",stock4:"-",stock_per4:"-",exps:["省立台南高級工業職業學校","原價屋電腦有限公司 顧問","泰碩電子股份有限公司 董事"],other_titles:["無"],relative_title:"-",relative_name:"-",relative_relation:"-"},
            {title:"監察人",from:"臺灣",name:"林千雅",sex:"女",start_date:"107.06.19",duration:"3年",first_start_date:"104.05.15 (註6)",stock1:"1818316",stock_per1:"2.6",stock2:"2,074,321",stock_per2:"2.4",stock3:"-",stock_per3:"-",stock4:"-",stock_per4:"-",exps:["文化大學土地資源學系畢","富邦證券 財務部襄理"],other_titles:["隆昕實業股份有限公司 財務部襄理"],relative_title:"-",relative_name:"-",relative_relation:"-"},
            {title:"監察人",from:"臺灣",name:"張敏君",sex:"女",start_date:"107.06.19",duration:"3年",first_start_date:"102.07.05",stock1:"-",stock_per1:"-",stock2:"-",stock_per2:"-",stock3:"-",stock_per3:"-",stock4:"-",stock_per4:"-",exps:["台大商學院國際企業組碩士","宏達電子HTC日本分公司社長/全球行銷處處長"],other_titles:["拓連科技股份有限公司 營運長"],relative_title:"-",relative_name:"-",relative_relation:"-"}
        ],
        table2 : [
            {name:"余清松",pro_exp1:"✔",pro_exp2:"✔",pro_exp3:"✔",fit_item1:" ",fit_item2:" ",fit_item3:" ",fit_item4:"✔",fit_item5:"✔",fit_item6:"✔",fit_item7:"✔",fit_item8:"✔",fit_item9:"✔",fit_item10:"✔",num_company:"無"},
            {name:"林展列",pro_exp1:"✔",pro_exp2:"✔",pro_exp3:"✔",fit_item1:" ",fit_item2:" ",fit_item3:"✔",fit_item4:"✔",fit_item5:"✔",fit_item6:"✔",fit_item7:"✔",fit_item8:"✔",fit_item9:"✔",fit_item10:"✔",num_company:"1"},
            {name:"梁竣興",pro_exp1:"✔",pro_exp2:"✔",pro_exp3:"✔",fit_item1:" ",fit_item2:" ",fit_item3:"✔",fit_item4:"✔",fit_item5:"✔",fit_item6:"✔",fit_item7:"✔",fit_item8:"✔",fit_item9:"✔",fit_item10:"✔",num_company:"無"},
            {name:"蘆原錦吾",pro_exp1:"✔",pro_exp2:"✔",pro_exp3:"✔",fit_item1:" ",fit_item2:" ",fit_item3:"✔",fit_item4:"✔",fit_item5:"✔",fit_item6:" ",fit_item7:"✔",fit_item8:"✔",fit_item9:"✔",fit_item10:"✔",num_company:"無"},
            {name:"張文添",pro_exp1:"-",pro_exp2:"✔",pro_exp3:"✔",fit_item1:"✔",fit_item2:"✔",fit_item3:"✔",fit_item4:"✔",fit_item5:"✔",fit_item6:"✔",fit_item7:"✔",fit_item8:"✔",fit_item9:"✔",fit_item10:"✔",num_company:"1"},
            {name:"曾天運",pro_exp1:"✔",pro_exp2:"-",pro_exp3:"✔",fit_item1:"✔",fit_item2:"✔",fit_item3:"✔",fit_item4:"✔",fit_item5:"✔",fit_item6:"✔",fit_item7:"✔",fit_item8:"✔",fit_item9:"✔",fit_item10:"✔",num_company:"無"},
            {name:"陳志弘",pro_exp1:"✔",pro_exp2:"✔",pro_exp3:"✔",fit_item1:"✔",fit_item2:"✔",fit_item3:"✔",fit_item4:"✔",fit_item5:"✔",fit_item6:"✔",fit_item7:"✔",fit_item8:"✔",fit_item9:"✔",fit_item10:"✔",num_company:"無"},
            {name:"謝君山",pro_exp1:"✔",pro_exp2:"✔",pro_exp3:"✔",fit_item1:"✔",fit_item2:"✔",fit_item3:" ",fit_item4:"✔",fit_item5:"✔",fit_item6:"✔",fit_item7:"✔",fit_item8:"✔",fit_item9:"✔",fit_item10:"✔",num_company:"無"},
            {name:"林千雅",pro_exp1:"✔",pro_exp2:"✔",pro_exp3:"✔",fit_item1:" ",fit_item2:"✔",fit_item3:" ",fit_item4:"✔",fit_item5:"✔",fit_item6:"✔",fit_item7:"✔",fit_item8:"✔",fit_item9:"✔",fit_item10:"✔",num_company:"無"},
            {name:"張敏君",pro_exp1:"✔",pro_exp2:"✔",pro_exp3:"✔",fit_item1:"✔",fit_item2:"✔",fit_item3:"✔",fit_item4:"✔",fit_item5:"✔",fit_item6:"✔",fit_item7:"✔",fit_item8:"✔",fit_item9:"✔",fit_item10:"✔",num_company:"無"},
        ]
    };
    class ActiveTable1 extends React.Component {
        constructor(props){
            super(props);
            this.state={
            tableExpanded: 0,
            showExpandedTableButton: ['全部展開','全部收起'],
            expandList:{},

            
            };
            // this.toggleExpandTable=this.toggleExpandTable.bind(this);
        }
        toggleExpandTable(){
            var currentTableState = this.state.tableExpanded
            // this.setState({tableExpanded: (currentTableState+1)%2} ,function(){
            //     if (this.state.tableExpanded) {
            //         $('.collapseTable').collapse('show')
            //         $('.collapseTableButton').collapse('hide')
            //     }else{
            //         $('.collapseTable').collapse('hide')
            //         $('.collapseTableButton').collapse('show')
            //     }
            // });
            this.setState(function(state,props){
                if (state.tableExpanded==0) {
                    $('.collapseTable').collapse('show')
                    $('.collapseTableButton').collapse('hide')
                }else{
                    $('.collapseTable').collapse('hide')
                    $('.collapseTableButton').collapse('show')
                }
                return {
                    tableExpanded: (state.tableExpanded+1)%2  
                };
                });


            
        };

        render() {
            const table = this.props.data.map( (item,index) => [
                <tr><td>{item.title}</td><td>{item.from}</td><td>{item.name}</td><td>{item.sex}</td><td>{item.start_date}</td><td>{item.duration}</td><td>{item.first_start_date}</td><td>{item.stock1}</td> <td>{item.stock_per1}</td> <td>{item.stock2}</td> <td>{item.stock_per2}</td> <td>{item.stock3}</td><td>{item.stock_per3}</td><td>{item.stock4}</td><td>{item.stock_per4}</td>
                    <td >
                        <button class="btn btn-secondary dropdown-toggle btn-sm collapseTableButton" type="button" data-toggle="collapse" data-target={"#collapseExample0"+index} aria-expanded="false" aria-controls={"collapseExample0"+index}>
                        </button>
                        <div class="collapse collapseTable" id={"collapseExample0"+index}>
                            <div class="card card-body">
                                {item.exps.map(     (detail) =>
                                    <li type="disc" >
                                        {detail}
                                    </li >
                                )}
                            </div>
                        </div>
                    </td>
                    <td>
                        <button id={"collapseTableButton1"+index} class="btn btn-secondary dropdown-toggle btn-sm collapseTableButton" type="button" data-toggle="collapse" data-target={"#collapseExample1"+index} aria-expanded="false" aria-controls={"collapseExample1"+index}>
                        </button>
                        <div class="collapse collapseTable" id={"collapseExample1"+index}>
                            <div class="card card-body">
                                {item.other_titles.map((detail) =>
                                    <li type="disc">
                                        {detail}
                                    </li >
                                )}
                            </div>
                        </div>
                    </td>
                    <td>{item.relative_title}</td>
                    <td>{item.relative_name}</td>
                    <td>{item.relative_relation}</td>
                </tr>
            ]);

            return (
                <div>
                     <button class="btn btn-secondary btn-sm" type="button"   onClick={()=>
                    {
                        this.toggleExpandTable();
                    }}>
                    {this.state.showExpandedTableButton[this.state.tableExpanded]}
                    </button> 
                      {/* <button class="btn btn-secondary btn-sm" type="button"   onClick={this.toggleExpandTable}> 
                    {this.state.showExpandedTableButton[this.state.tableExpanded]}
                    </button> */}
                    <table  class="table table-bordered table-hover"  style={{width:`1650px`}} >
                        <thead>
                            <tr>
                                <th rowspan="2" style={{width: `1%`}}>職稱（註一）</th>
                                <th rowspan="2" style={{width: `3%`}}>國籍或註冊地</th>
                                <th rowspan="2" >姓名</th>
                                <th rowspan="2" >性別</th>
                                <th rowspan="2" style={{width: `1%`}}>選(就)任日期</th>
                                <th rowspan="2" style={{width: `1%`}}>任期</th>
                                <th rowspan="2" style={{width: `1%`}}>初次選任日期（註二）</th>
                                <th colspan="2" style={{width: `8%`}}>選任時持有股份</th>
                                <th colspan="2" style={{width: `8%`}}>現在持有股份</th>
                                <th colspan="2" style={{width: `8%`}}>配偶,未成年子女現在持有股份</th>
                                <th colspan="2" style={{width: `8%`}}>利用他人名義持有股份</th>
                                <th rowspan="2" style={{width: `25%`}} >主要經（學）歷（註三）</th>
                                <th rowspan="2" style={{width: `25%`}}>目前兼任本公司及其他公司之職務</th>
                                <th colspan="3" style={{width: `10%`}}>具配偶或二親等以內關係之其他主管,董事或監察人</th>
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
                            {table}
                        </tbody>
                    </table>
                </div>
            )
        }
    }
    class ActiveTable2 extends React.Component {
        constructor(props){
            super(props);
            this.state={
            };
        }
        render() {
            const table =  this.props.data.map( (item,index) => [
                    <tr>
                        {Object.keys(item).map(function(keyName, keyIndex) {
                            return <td>{item[keyName]}</td>
                        })}
                    </tr>
                ]);

        

            return (
                <table  class="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th rowspan="2">條件姓名(註1)</th>
                            <th colspan="3"  style={{width: `50%`}}>是否具有五年以上工作經驗及下列專業資格</th>
                            <th colspan="10">符合獨立性情形（註2）</th>
                            <th rowspan="2"  style={{width: `10%`}}>兼任其他公開發行公司獨立董事家數</th>
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
                        {table}
                    </tbody>
                </table>
            )
        }
    }
    if (myPage != props.currentPage){return null;}
    return [
        <div class="content">
            <h4 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>董事會 </h4>
            <p><span>&nbsp;&nbsp;</span></p>
            <p class="content-p">
                本公司之董事、監察人含2名女性、7名男性；分別在電子零組件或周邊產品業、橡膠業、銀行業、光電業、玻璃陶瓷業、通信網路業、水泥工業、證券業、電信業等，具有行銷企劃、經營管理、領導決策、產業知識、財務會計之專業經驗與素養。
            </p>
            <div class="accordion" id="accordionExample">
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <img class="rounded" src="./assets/images/smalllogo.jpg"/><span>&nbsp;&nbsp;</span>
                                董事(含獨立董事)及監察人資料(1) 
                            </button>
                        </h2>
                    </div>
                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" >
                        <div class="card-body"  style={{overflow: `auto`}}>
                            <ActiveTable1  data={data.table1} />
                        </div>
                        <p><span>&nbsp;&nbsp;</span></p>

                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                <img class="rounded" src="./assets/images/smalllogo.jpg"/><span>&nbsp;&nbsp;</span>
                                董事(含獨立董事)及監察人資料(2) 
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingOne" >
                        <div class="card-body"  style={{overflow: `auto`}}>
                            <ActiveTable2  data={data.table2} />
                        </div>
                        <p><span>&nbsp;&nbsp;</span></p>
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



          </ul>
        </li>
    

        <li class="list-group-item">四、績效評估結果： 
          <ul class="list-group list-group-flush ">
            <li class="list-group-item">108年度 :
              <a href="./assets/docs/board.pdf" target="_blank">  董事會 
                <img class="rounded" src="./assets/images/investor04_7.jpg"/>
              </a> 
              <span>&nbsp;</span>  
              <a href="./assets/docs/payout_member.pdf" target="_blank"> 薪酬委員會 
                <img class="rounded" src="./assets/images/investor04_7.jpg"/>
              </a>
            </li>
          </ul>
        </li>
      </ul>







        </div>


    ];

}

