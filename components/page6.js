function Page6(props) {
    const myPage = 6;
    var data = {
      list1 : [
        "遵守相關勞動法規並尊重國際公認基本勞動人權原則，保障員工之合法權益，雇用政策並無差別待遇，並已建立相關管理機制。",
        "為保護地球及降低對生態系統的破壞，並使產品能符合歐盟ROHS及其他相關環境指令之要求， 本公司原物料供應商皆簽署限用物質承諾保證書，承諾其供應之產品設計及製造方面均嚴守環境保護法令及規範，並與本公司共同努力達到世界環境保護政策之目標，有效管控原料和製程，保證其所提供之產品均符合ROHS之規範。",
        "本公司勵行節能減炭作業，對可節省能源之相關議題或措施均會列入檢討，若屬可行並全力推行。",
        "本公司提供安全與健康之工作環境，並定期健康檢查及辦理安全講座。",
        "對於公司政策之宣導、員工的意見了解，皆採開放雙向溝通方式進行。",
        "本公司訂有客訴處理作業，並建立以客戶為導向的品質系統，利用客觀的方法及標準流程，來評估客戶對本公司產品或服務之滿意度。",
        "本公司對各項公益活動均熱心參與，亦鼓勵員工主動參與。",
        "本公司每年定期於股東會年報中揭露與企業社會責任相關資訊之執行情形。"
      ],
      list2 : [
        {title:"溫室氣體資訊管理程序",href:"http://w3.taisol.com.tw/file/%E6%BA%AB%E5%AE%A4%E6%B0%A3%E9%AB%94%E8%B3%87%E8%A8%8A%E7%AE%A1%E7%90%86%E7%A8%8B%E5%BA%8F.pdf"},
        {title:"溫室氣體管理手冊",href:"http://w3.taisol.com.tw/file/%E6%BA%AB%E5%AE%A4%E6%B0%A3%E9%AB%94%E7%AE%A1%E7%90%86%E6%89%8B%E5%86%8A.pdf"},
        {title:"溫室氣體報告管理程序",href:"http://w3.taisol.com.tw/file/%E6%BA%AB%E5%AE%A4%E6%B0%A3%E9%AB%94%E5%A0%B1%E5%91%8A%E7%AE%A1%E7%90%86%E7%A8%8B%E5%BA%8F.pdf"}, 
        {title:"溫室氣體清單說明管理程序",href:"http://w3.taisol.com.tw/file/%E6%BA%AB%E5%AE%A4%E6%B0%A3%E9%AB%94%E6%B8%85%E5%96%AE%E8%AA%AA%E6%98%8E%E7%AE%A1%E7%90%86%E7%A8%8B%E5%BA%8F.pdf"},
        {title:"溫室氣體內部查證程序",href:"http://w3.taisol.com.tw/file/%E6%BA%AB%E5%AE%A4%E6%B0%A3%E9%AB%94%E5%85%A7%E9%83%A8%E6%9F%A5%E8%AD%89%E7%A8%8B%E5%BA%8F.pdf"},
        {title:"汙水處理系統緊急預案",href:"http://w3.taisol.com.tw/file/%E6%B1%99%E6%B0%B4%E8%99%95%E7%90%86%E7%B3%BB%E7%B5%B1%E7%B7%8A%E6%80%A5%E9%A0%90%E6%A1%88.pdf"},
        {title:"水汙染物管理辦法",href:"http://w3.taisol.com.tw/file/%E6%B0%B4%E6%B1%99%E6%9F%93%E7%89%A9%E7%AE%A1%E7%90%86%E8%BE%A6%E6%B3%95.pdf"},
        {title:"噪音汙染管理辦法",href:"http://w3.taisol.com.tw/file/%E5%99%AA%E9%9F%B3%E6%B1%99%E6%9F%93%E7%AE%A1%E7%90%86%E8%BE%A6%E6%B3%95.pdf"},
        {title:"噪聲測量管理辦法",href:"http://w3.taisol.com.tw/file/%E5%99%AA%E8%81%B2%E6%B8%AC%E9%87%8F%E7%AE%A1%E7%90%86%E8%BE%A6%E6%B3%95.pdf"},
        {title:"廢棄物管理辦法",href:"http://w3.taisol.com.tw/file/%E5%BB%A2%E6%A3%84%E7%89%A9%E7%AE%A1%E7%90%86%E8%BE%A6%E6%B3%95.pdf"},
        {title:"化學危險品管理辦法",href:"http://w3.taisol.com.tw/file/%E5%8C%96%E5%AD%B8%E5%8D%B1%E9%9A%AA%E5%93%81%E7%AE%A1%E7%90%86%E8%BE%A6%E6%B3%95.pdf"},
        {title:"大氣污染物管理辦法",href:"http://w3.taisol.com.tw/file/%E5%A4%A7%E6%B0%A3%E6%B1%A1%E6%9F%93%E7%89%A9%E7%AE%A1%E7%90%86%E8%BE%A6%E6%B3%95.pdf"},
        {title:"跑、冒、滴、漏管理辦法",href:"http://w3.taisol.com.tw/file/%E8%B7%91%E3%80%81%E5%86%92%E3%80%81%E6%BB%B4%E3%80%81%E6%BC%8F%E7%AE%A1%E7%90%86%E8%BE%A6%E6%B3%95.pdf"},
        {title:"液氨洩漏緊急預案",href:"http://w3.taisol.com.tw/file/%E6%B6%B2%E6%B0%A8%E6%B4%A9%E6%BC%8F%E7%B7%8A%E6%80%A5%E9%A0%90%E6%A1%88.pdf"},
        {title:"環境相關物質清單及削減計劃表",href:"http://w3.taisol.com.tw/file/%E7%92%B0%E5%A2%83%E7%9B%B8%E9%97%9C%E7%89%A9%E8%B3%AA%E6%B8%85%E5%96%AE%E5%8F%8A%E5%89%8A%E6%B8%9B%E8%A8%88%E5%8A%83%E8%A1%A8.pdf"},
        {title:"環境目標、指標、管理方案管理程序",href:"http://w3.taisol.com.tw/file/%E7%92%B0%E5%A2%83%E7%9B%AE%E6%A8%99%E3%80%81%E6%8C%87%E6%A8%99%E3%80%81%E7%AE%A1%E7%90%86%E6%96%B9%E6%A1%88%E7%AE%A1%E7%90%86%E7%A8%8B%E5%BA%8F.pdf"},
        {title:"環境管理職責程序",href:"http://w3.taisol.com.tw/file/%E7%92%B0%E5%A2%83%E7%AE%A1%E7%90%86%E8%81%B7%E8%B2%AC%E7%A8%8B%E5%BA%8F.pdf"},
        {title:"環境管理物質禁(限)用標準",href:"http://w3.taisol.com.tw/file/%E7%92%B0%E5%A2%83%E7%AE%A1%E7%90%86%E7%89%A9%E8%B3%AA%E7%A6%81(%E9%99%90)%E7%94%A8%E6%A8%99%E6%BA%96.pdf"},
        {title:"環境管理方針和目標",href:"http://w3.taisol.com.tw/file/%E7%92%B0%E5%A2%83%E7%AE%A1%E7%90%86%E6%96%B9%E9%87%9D%E5%92%8C%E7%9B%AE%E6%A8%99.pdf"},
        {title:"環境監測程序",href:"http://w3.taisol.com.tw/file/%E7%92%B0%E5%A2%83%E7%9B%A3%E6%B8%AC%E7%A8%8B%E5%BA%8F.pdf"},
        {title:"環保產品管制程序",href:"http://w3.taisol.com.tw/file/%E7%92%B0%E4%BF%9D%E7%AE%A1%E7%90%86%E7%A8%8B%E5%BA%8F.pdf"},
        {title:"環保管理程序",href:"http://w3.taisol.com.tw/file/%E7%92%B0%E4%BF%9D%E7%AE%A1%E7%90%86%E7%A8%8B%E5%BA%8F.pdf"},
        {title:"環境手冊",href:"http://w3.taisol.com.tw/file/%E7%92%B0%E5%A2%83%E6%89%8B%E5%86%8A.pdf"},
        {title:"資源、能源管理辦法",href:"http://w3.taisol.com.tw/file/%E8%B3%87%E6%BA%90%E3%80%81%E8%83%BD%E6%BA%90%E7%AE%A1%E7%90%86%E8%BE%A6%E6%B3%95.pdf"},
        {title:"運行控制程序",href:"http://w3.taisol.com.tw/file/%E9%81%8B%E8%A1%8C%E6%8E%A7%E5%88%B6%E7%A8%8B%E5%BA%8F.pdf"},
        {title:"緊急準備與回應程序",href:"http://w3.taisol.com.tw/file/%E7%B7%8A%E6%80%A5%E6%BA%96%E5%82%99%E8%88%87%E5%9B%9E%E6%87%89%E7%A8%8B%E5%BA%8F.pdf"},
        {title:"緊急應變手冊",href:"http://w3.taisol.com.tw/file/%E7%B7%8A%E6%80%A5%E6%87%89%E8%AE%8A%E6%89%8B%E5%86%8A.pdf"},
        {title:"重要環境因素評價管理辦法",href:"http://w3.taisol.com.tw/file/%E9%87%8D%E8%A6%81%E7%92%B0%E5%A2%83%E5%9B%A0%E7%B4%A0%E8%A9%95%E5%83%B9%E7%AE%A1%E7%90%86%E8%BE%A6%E6%B3%95.pdf"},
        {title:"承包商、服務商環境影響評價管理辦法",href:"http://w3.taisol.com.tw/file/%E6%89%BF%E5%8C%85%E5%95%86%E3%80%81%E6%9C%8D%E5%8B%99%E5%95%86%E7%92%B0%E5%A2%83%E5%BD%B1%E9%9F%BF%E8%A9%95%E5%83%B9%E7%AE%A1%E7%90%86%E8%BE%A6%E6%B3%95.pdf"},
      ]
    };
    class ActiveList1 extends React.Component {
      constructor(props){
          super(props);
          this.state={
          };
      }
      render() {
          const list =  this.props.data.map( (item,index) => [
            <li class="list-group-item" >
              <img class="rounded" src="./assets/images/menu01.jpg"/><span>&nbsp;&nbsp;</span>{item}
            </li>
            ]);
          return (
            <ul class="list-group list-group-flush" >
              {list}
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
            <li class="list-item list-unstyled  col-4 border-bottom py-2 ">
              <img class="rounded" src="./assets/images/menu01.jpg"/><span>&nbsp;&nbsp;</span>
              <a href={item.href} target="_blank">   
                {item.title}<img class="rounded" src="./assets/images/investor04_7.jpg"/>
              </a> 
            </li>
            ])
          return (
            <ul class="list-unstyled row">
              {list}
            </ul>
          )
      }
    } 
    if (myPage != props.currentPage){return null;}
    return [
        <div class="content">
            <h4 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>企業社會責任 </h4>
            <p><span>&nbsp;&nbsp;</span></p>  
            <p><b>環境永續:</b></p>
            <ul class="list-group list-group-flush" >
              <li class="list-group-item" >
                <img class="rounded" src="./assets/images/menu01.jpg"/><span>&nbsp;&nbsp;</span><b>ISO14001 環境管理體系 </b> 
                  <a href="http://w3.taisol.com.tw/important/EMS-ARES-ISO14001.pdf" target="_blank">   
                  (證書<img class="rounded" src="./assets/images/investor04_7.jpg"/>)
                  </a>: <br/ >
                  為致力於提升各項資源之利用效率，積極使用再生物料，並對空氣、噪音、水資源等各項汙染防制進行管理，已制定多項相關作業辦法，以資遵循。
              </li>
              <li class="list-group-item" >
                <img class="rounded" src="./assets/images/menu01.jpg"/><span>&nbsp;&nbsp;</span><b>EICC 電子產業行為準則 </b> 
                  <a href="http://cn.taisol.com.cn/eicc" target="_blank">   
                  (EICC專區<img class="rounded" src="./assets/images/investor04_7.jpg"/>)
                  </a> :<br />
                  工作環境均已列入規範管理，並設有專人管理或推動EICC相關規範。
              </li>
              <li class="list-group-item" >
                <img class="rounded" src="./assets/images/menu01.jpg"/><span>&nbsp;&nbsp;</span><b>ISO14064-1 溫室氣體管理體系 </b> :
                  <br />
                  為提高對溫室氣體管理之標準，已制定多項相關作業辦法，以資遵循。
              </li>
              <li></li>
            
            
            </ul>
            <ActiveList1 data={data.list1} />  

            <p><span>&nbsp;&nbsp;</span></p>

            <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>相關作業辦法 </h5>
            <p><span>&nbsp;&nbsp;</span></p>

            <div class="col-12 container" >
              <ActiveList2 data={data.list2} />
            </div>

            <p><span>&nbsp;&nbsp;</span></p>
            <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>公益關懷 </h5>
            <p><span>&nbsp;&nbsp;</span></p>

            <p> <b>｢散發熱情，傳愛千里｣ </b></p>
            <p>2020年是泰碩的公益啟動年，泰碩電子秉持著「取之於社會、回饋於社會」的公益理念，在董事長余清松的支持下，由總經理梁竣興親自率領成立了泰碩志工團，並開啟了第一屆【耶誕圓夢鞋盒】活動。 </p>
            <p>首年辦理耶誕圓夢鞋盒活動，泰碩與失親兒福利基金會、藍迪兒童之家合作，由社工老師一對一的了解每位失親或單親孩子的耶誕願望，再由泰碩來協助孩子們圓夢，2020年我們一共送出了118個耶誕圓夢鞋盒，在每個鞋盒內除了有孩子許願的禮物外，還附上由同仁及主管們親手撰寫的鼓勵卡片，希望透過良善的互動，溫暖孩子的童年，讓這群弱勢家庭的孩童年年都能過個有溫度的耶誕節。 </p>
            <p>透過這次活動，我們深刻的發現在台灣仍有很多需要被關懷的弱勢孩童，雖然第一屆志工團的力量有限，但我們堅信只要一直做著對的事，愛的力量便會無限的壯大，良善的循環將會一屆傳承一屆，將泰碩的愛心傳送千里。</p>

             <div class="container">
                <div class="row">
                  <div class="col">
                    <img src="http://w3.taisol.com.tw/image/notice2-5/A.JPG" class="img-thumbnail rounded " alt="..." />
                  </div>
                  <div class="col">
                  <img src="http://w3.taisol.com.tw/image/notice2-5/C.JPG" class="img-thumbnail rounded " alt="..." />
                  </div>
                  
                </div>
                <div class="row">
                  <div class="col">
                  <p><span>&nbsp;&nbsp;</span></p>
                  </div>
                </div>
              </div> 
              <div class="row">
                <div class="col-sm">
                <img src="http://w3.taisol.com.tw/image/notice2-5/D.JPG" class="img-thumbnail rounded " alt="..." />
                </div>
                <div class="col-sm">
                  <img src="http://w3.taisol.com.tw/image/notice2-5/F.JPG" class="img-thumbnail rounded " alt="..." />
                </div>
                <div class="col-sm">
                  <img src="http://w3.taisol.com.tw/image/notice2-5/B.JPG" class="img-thumbnail rounded " alt="..." />
                </div>
              </div>

           



                 

            <p><span>&nbsp;&nbsp;</span></p>
            <h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>環境關懷 </h5>
            <p><span>&nbsp;&nbsp;</span></p>

            <p> <b>｢關懷土地，用行動支持在地友善農業｣</b></p>
              <p>隨著環保意識抬頭，在台灣有越來越多的小農秉持著無毒無化肥的環保理念，致力將環保生態與農業發展進行結合，而這群在地友善農友就是泰碩要支持的對象。  </p>
              <p>2020年中秋節，泰碩首次購入新南田董米，以行動支持友善農友!</p>
              <p> 不同於一般稻米求豐收，田董米以「水鳥棲地保育」做為品牌使命，所以全年採用無農藥耕種，並以米糠作為肥料灌溉，用最自然的方式守護水田，進而提供珍貴水鳥們一個天然又安全的家，達到生態與農作共存的理念。</p>
              <p>展望未來，泰碩仍會持續以行動支持環保、關懷土地，將綠色幸福的理念，年年不斷的傳遞下去。</p>

              <div class="row justify-content-md-center">
                <div class="col-md-auto">
                  <img src="http://w3.taisol.com.tw/image/notice2-5/E.JPG" class="card-img-top img-thumbnail rounded " alt="..." />
                </div>
              </div> 


        </div>


    ];

}

