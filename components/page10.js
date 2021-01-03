function Page10(props) {
    const myPage = 10;
    if (myPage != props.currentPage){return null;}

      var data =  {      

        list1:[
          "三節禮金、勞動節禮金、生日禮金、生育禮金、婚喪喜慶補助金、旅遊補助金、住院慰問金、退休慰問金等。",
          "除法定勞健保外，尚為同仁提供免費團保(含壽險、意外險、意外醫療、住院醫療等，優於一般公司團保)、旅平險。",
          "特定人員免費停車位、手機費、汽車津貼、油資等補助及投保團體年金。",
          "免費咖啡飲料。",
          "業績獎金、專利提案獎金、專利權獎金及專利應用獎金。",
          "週休二日、可彈性上下班。",
          "不定期舉辦運動競賽、國內外旅遊、員工電影票、冬至湯圓、部門聚餐等休閒活動。",
          "每年舉辦尾牙、抽獎活動、資深員工表揚等犒賞員工，並依營運狀況提供年終禮物(例如:高級GORE-TEX外套等)。",
          "優於勞基法規定(如增設訂婚假等)。",
          "其他各項有關員工福利事項。"],
  
          list2:[
  
            "新人訓練",
            "專業職能培訓",
            "管理職能培訓",
            "共通職能培訓",
            "派外訓練補助",
          ],
  
          list3: [ 
            {title: "一、工作環境",
            details:[
                "綠色採購(例如:環保文具、LED燈具、辦公設備等)。",
              "公司符合公共安全規定，例如採用防燃設備(地毯、窗簾、漆等)、防爆門、逃生設備等。",
              "公司門禁與新光保全公司合作，電腦控制並定期保全人員巡邏，維護員工安全。",
              "定期進行辦公室環境清潔及消毒。"]
            },
            {title:"二、人身安全的保護措施",
            details:[
              "辦理免費員工健康檢查(優於法定規定年限及項目)，維護員工健康。",
              "定期舉辦消防演習，加強員工消防意識。",
              "實施夜間下班員工之免費特約企業計程車服務，保護夜歸員工之安全。"]
            }
          ],
  
          table1: [
            {date: "108年06月12日", content:"消防自我檢查"},
            {date: "108年07月25日", content:"急救訓練及消防逃生訓練"},
            {date: "108年09月17日", content:"大樓修繕消防缺失"},
            {date: "108年09月27日", content:"	市府消防隊安全復檢"},
          ],
          table2: [
  
            {date:"107年04月10日",content:	"1樓台中銀行--台北市消防局檢測"},
            {date:"107年05月11日",content:	"大樓及各公司自我檢測"},
            {date:"107年07月23日",content:	"大樓及各公司消防演練"},
            {date:"107年10月12日",content:	"大樓及各公司--台北市消防局檢測"},
            {date:"107年12月07日",content:	"1樓郵局自我檢測"},
            {date:"107年12月14日",content:	"1樓郵局--台北市消防局檢測"},
            {date:"108年01月14日",content:	"大樓及各公司消防演練"}
          
          ],
  
  
  
  
  
          list4:[
  
            {
              title:"1.      多元包容性與平等機會", 
              content:"本公司落實職場多元性，不因種族、階級、語言、思想、宗教、黨派、籍貫、出生地、性別、性傾向、年齡、婚姻、容貌、五官、身心障礙、星座、血型或以往工會會員身分為由等，予以差別待遇或任何形式之歧視。"
            },
            {
              title:"2.      合理工時",
              content:"為確保員工健康，泰碩明訂工作時間與延長工時之規範，並定期關懷及管理員工出勤狀況。"
            },
            {
              title:" 3.      健康職場",
              content:"為關懷員工身心健康，泰碩定期提供員工免費健康檢查，並設有企業舒壓按摩服務及不定期辦理員工活動，如：員工旅遊、耶誕活動、專業及生活講座等來活絡員工人際互動，以達工作與生活平衡，全面照顧員工身心靈健康。"
            },
            {
              title:"4.      勞資關係",
              content:      "為提供員工順暢的溝通管道，本公司設有『員工建議與申訴信箱：talk@taisol.com』，並定期召開勞資會議，確保勞雇雙方權益。"
            }
  
          ]

      }
      class ActiveList1 extends React.Component {
        constructor(props){
            super(props);
            this.state={
            };
        }
        render() {
            const list =  this.props.data.map( (item,index) => [
              <li class="list-group-item" >
                <img class="rounded" src="./assets/images/menu01.jpg"  /><span>&nbsp;&nbsp;</span>{item}
              </li>
              ]);
            return (
              <ul class="list-group list-group-flush" >
                <li class="list-group-item list-group-flush"><b>一、福利措施</b>
                  {list}
                </li>
                <li class="list-group-item list-group-flush"><b>二、員工認股</b>
                  <li class="list-group-item list-group-flush" >
                  <img class="rounded" src="./assets/images/menu01.jpg"  /><span>&nbsp;&nbsp;</span>本公司為追求企業永續成長與員工共同分享企業經營成果，推行員工認股與分紅入股辦法，落
                  　　實『員工即股東』之理念。
                  </li>
                </li>
                <li class="list-group-item list-group-flush"><b>三、退休制度</b>
                  <li class="list-group-item list-group-flush" >	
                    <img class="rounded" src="./assets/images/menu01.jpg"  /><span>&nbsp;&nbsp;</span>實施情形:
                    <br />
                    本公司員工退休辦法悉依勞動基準法訂定，由公司每月按員工薪資總額之3％提撥退休準備金，
                    儲存於中央信託局退休金專戶；另，自民國九十四年七月一日起配合勞工退休金條例(以下簡稱
                    「新制」)之實施，原適用本公司退休辦法之員工如經選擇適用新制後之服務年資或新制施行後到
                    職之員工其服務年資改採確定提撥制，其退休金之給付由本公司按月依每月工資百分之六提繳退
                    休金，儲存於勞工退休金個人專戶。
                  </li>
                
                  <li class="list-group-item list-group-flush" >	
                    <img class="rounded" src="./assets/images/menu01.jpg"  /><span>&nbsp;&nbsp;</span>退休之資格(依最新版本之勞基法):
                    <br />
                    凡本公司之員工，合乎下列規定之一，即得自行申請退休或辦理強制退休：
                    <ul class="list-group list-group-flush" >(1)自請退休：
                      <li class="list-group-item list-group-flush" >a.於本公司服務滿十五年以上且年滿五十五歲者。
                      </li>
                      <li class="list-group-item list-group-flush" >b.於本公司服務滿二十五年者。
                      </li>
                      <li class="list-group-item list-group-flush" >c.於本公司服務滿十年以上且年滿六十歲者。
                      </li>
                    </ul>
                    <ul class="list-group list-group-flush" > (2)強制退休：
                      <li class="list-group-item list-group-flush" > a.年滿六十五歲者。
                      </li>
                      <li class="list-group-item list-group-flush" >b.心神喪失或身體殘廢不堪勝任職務者。
                      </li>
                    </ul>
                  </li>

                </li> 

              </ul>
            )
        }
      }  
      class ActiveList2 extends React.Component {
        constructor(props){
            super(props);
            this.state={
            };
        }
        render() {
            const list =  this.props.data.map( (item,index) => [
              
              <li class="list-group-item " >
              <img class="rounded" src="./assets/images/menu01.jpg"/><span>&nbsp;&nbsp;</span>{item}
              </li>
              ]);
            return (
              <ul class="list-group list-group-flush" >
                <li class="list-group-item list-group-flush"><b>人才培育範疇包含：</b>
                  {list}
                </li>
              </ul>
            )
        }
      }  
      class ActiveList3 extends React.Component {
        constructor(props){
            super(props);
            this.state={
            };
        }
        render() {
            const list =  this.props.data.map( (item,index) => [
              <li class="list-group-item list-group-flush"><b>{item.title}</b>
                  {item.details.map(function(detail, index2) {
                    return [
                      <li class="list-group-item " >
                        <img class="rounded" src="./assets/images/menu01.jpg"/><span>&nbsp;&nbsp;</span>{detail}
                      </li>
                    ]
                    
                    })}
 
              </li>
              ]);
            return (
              <ul class="list-group list-group-flush" >
                  {list}
              </ul>
            )
        }
      }  
      class ActiveTable1 extends React.Component {
        constructor(props){
            super(props);
            this.state={};
        }
          render() {
              const table =  this.props.data.map( (item,index) => [
                <tr>
                  <td> {item.date}</td>
                  <td> {item.content}</td>
                </tr> 
              ]);
              return (
                <table  class="table table-bordered table-hover">
                <thead>
                  <tr>
                      <th rowspan="1" style={{width: `50%`}}>檢測時間</th>
                      <th rowspan="1" style={{width: `50%`}}>計畫內容</th>
                  </tr>

                </thead>
                <tbody>
                    {table}
                </tbody>
                </table>
              )
          }
        }

        class ActiveList4 extends React.Component {
          constructor(props){
              super(props);
              this.state={
              };
          }
          render() {
              const list =  this.props.data.map( (item,index) => [
                
                <li class="list-group-item list-group-flush"><b>{item.title}</b>
                  <li class="list-group-item list-group-flush">
                    <img class="rounded" src="./assets/images/menu01.jpg"/><span>&nbsp;&nbsp;</span>{item.content}
                  </li>
                </li>
                ]);
              return (
                <ul class="list-group list-group-flush" >
                  <li class="list-group-item list-group-flush"><b>人才培育範疇包含：</b>
                    {list}
                  </li>
                </ul>
              )
          }
        }  

      return  [
      <div class="content">

        <h4 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>人力資源 </h4>
        <p><span>&nbsp;&nbsp;</span></p>


        <p ><b>福利制度:</b> </p>
        <p>本公司秉持尊重及關心員工的理念，致力於提供高品質的友善職場環境及員工福利，並於88年5月1日正式成立職工福利委員會組織，負責員工福利規劃與活動辦理，我們期許透過完善的福利制度，全方位照顧員工的身、心、靈健康與平衡。員工福利措施及制度包含：
        </p>
        <ActiveList1 data={data.list1} />
  
        <p><span>&nbsp;&nbsp;</span></p>

        <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>人才培育 </h5>
        <p><span>&nbsp;&nbsp;</span></p>
        <p>泰碩瞭解『員工』是公司最重要的資產，而持續的人才培育正是提升員工技能及服務品質的重要策略。本公司訂有教育訓練相關辦法，並配合公司短中長期之發展需要，辦理內外訓相關課程，不斷增進員工專業知識及管理技能。  
        </p>
        <ActiveList2 data={data.list2} />
        <p><span>&nbsp;&nbsp;</span></p>

        <div class="row justify-content-md-center">
          <div class="col">
            <img src="http://w3.taisol.com.tw/image/Notice2-9A.JPG" class="card-img-top img-thumbnail rounded " alt="..." />
          </div>
          <div class="col">
            <img src="http://w3.taisol.com.tw/image/Notice2-9B.JPG" class="card-img-top img-thumbnail rounded " alt="..." />
          </div>
        </div>
        <p><span>&nbsp;&nbsp;</span></p>
        <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>員工工作環境與人身安全的保護措施 </h5>
        <p><span>&nbsp;&nbsp;</span></p>
        <p>泰碩重視員工安全，並致力提供一個安全、衛生與舒適的工作環境予全體同仁，工作環境與員工人身安全保護措施彙整如下：  </p>
        <ActiveList3 data={data.list3} />
        <div class="row justify-content-md-center">
        <div class="col-md-auto">
          <img src="http://w3.taisol.com.tw/important/notice-2-9.jpg" class="card-img-top img-thumbnail rounded " alt="..." />
        </div>
        </div>
        <p><span>&nbsp;&nbsp;</span></p>

        <p><b>亞洲科技大樓108年消防及安全檢測計畫：</b></p>
          <ActiveTable1 data={data.table1} />
        <p><b>亞洲科技大樓107年消防及安全檢測計畫：</b></p>
          <ActiveTable1 data={data.table2} />
        <p><span>&nbsp;&nbsp;</span></p>
        <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>人權政策 </h5>
        <p><span>&nbsp;&nbsp;</span></p>
        <p>泰碩電子股份有限公司(以下稱「泰碩」)，為善盡企業社會責任並落實人權保障，尊重並遵循「聯合國世界人權宣言」、「聯合國全球盟約」及國際勞工組織的「工作基本原則與權利宣言」等各項國際人權公約所揭橥之人權保護精神與基本原則，特制定本政策，並遵守《中華民國勞動基準法》、《性別工作平等法》、《就業服務法》等勞動相關法規，杜絕任何侵犯及違反人權之行為，有尊嚴的對待及尊重所有同仁。  </p>
        <p>本公司人權政策適用範圍包括本公司及相關企業，落實方針如下：</p>
        <ActiveList4 data={data.list4}/>
      </div>
      ];
    
   
    
  }
