function Page5(props) {
    const myPage = 5;
    var data = {
        table1 : [
            {date: "109.06.05", type: "座談會", items: ["1. 109年1~4月稽核業務執行情形、查核追蹤報告。","2. 就現行內控運作情形報告。"], results:["獨立董事、監察人洽悉。"]},
            {date: "109.11.06", type: "座談會", items: [
              "1. 109年5~10月稽核業務執行情形、查核追蹤報告。",
              "2. 就現行內控運作情形報告。",
              "3. 陳報110年稽核計畫。"
            ], results:[
              "1. 獨立董事、監察人洽悉。",
              "2. 獨立董事、監察人洽悉。",
              "3. 經審議後，送董事會決議。"
            ]},
            {date: "109.12.17", type: "座談會", items: ["1. 109年11月稽核業務執行情形報告。","2. 就現行內控運作情形報告。"], results:["1. 獨立董事、監察人洽悉。","2. 獨立董事、監察人洽悉"]},
          ]


    
    };
    class ActiveTable1 extends React.Component {
        constructor(props){
            super(props);
            this.state={};
        }
          render() {
              const table =  this.props.data.map( (meeting,index) => [
                <tr>
                  <td> {meeting.date}</td>
                  <td> {meeting.type}</td>
                  <td> 
                      {/* <ul class="list-group list-group-flush ">
                        { meeting.items.map((sub_item,index2) =>
                          <li class="list-group-item">
                          {sub_item}
                          </li>
                        )}
                      </ul> */}
                     
                        { meeting.items.map((sub_item,index2) =>
                          <p>
                          {sub_item}
                          </p>
                        )}
                     
                  </td>
                  <td>
                        {/* <ul class="list-group list-group-flush ">
                            { meeting.results.map((sub_item,index2) =>
                            <li class="list-group-item">
                            {sub_item}
                            </li>
                            )}
                        </ul>                       */}
                            { meeting.results.map((sub_item,index2) =>
                            <p>
                            {sub_item}
                            </p>
                            )}
                  </td>
                </tr> 
              ]);
              return (
                <table  class="table table-bordered table-hover">
                  <thead>
                    <tr>
                        <th rowspan="1">會議日期</th>
                        <th rowspan="1">會議性質</th>
                        <th rowspan="1">溝通重點</th>
                        <th rowspan="1">溝通結果</th>
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
            <h4 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>內部稽核 </h4>
            <p><span>&nbsp;&nbsp;</span></p>  
            <p class="content-p">
                本公司設置隸屬於董事會之內部稽核單位，並依公司規模、業務情況、管理需要及其他有關法令之規定，配置適任及適當人數之專任內部稽核人員。
            </p>
            <img class="rounded" src="./assets/images/IR-internal.gif"/>
            <p><span>&nbsp;&nbsp;</span></p>
            <p>內部稽核單位執行內部控制制度的稽核工作，檢查並評估公司的營運記錄有無缺失。對於發現之內部控制制度可能缺失及提出改善建議，做成稽核報告，定期向董事會報告。</p>
            <p>內部稽核單位督促內部各單位及子公司每年定期自行檢查內部控制制度之有效性，再由內部稽核單位覆核各單位及子公司之自行檢查報告，並綜合自行檢查結果，做為董事會及總經理出具內部控制制度聲明書之依據。</p>
            <p><span>&nbsp;&nbsp;</span></p>
            <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>獨立董事、監察人與內部稽核主管之溝通方式:</h5>
            <p><span>&nbsp;&nbsp;</span></p>
            <p>1. 每年定期召開2次溝通會議，就本公司內部稽核業務執行狀況及內控運作情形提出報告。</p>
            <p>2. 若有重大或緊急事項時，召開不定期會議討論之。平時以電話及電子郵件等方式進行溝通。</p>
            <p>3. 稽核報告及追蹤報告陳核後，於次月底前交付各監察人、獨立董事查閱。</p>
            <p><span>&nbsp;&nbsp;</span></p>
            <p><b>獨立董事、監察人與內部稽核主管之溝通情形摘要： </b></p>

            <p>溝通結果:</p>
            <ActiveTable1 data={data.table1} />




        </div>


    ];

}

