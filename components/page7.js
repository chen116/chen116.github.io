function Page7(props) {
    const myPage = 7;
    if (myPage != props.currentPage){return null;}

      var data =  {          list1:[
                      "1. 設立環境管理系統與環境目標:供應商必須擁有 ISO 14001 或 RC14001。",
                      "2. 原物料有害物質禁用:供應商必須提供聲明，保證其產品不含對環境有害的國際禁用物質，確保產品符合客戶與國際相關法令的要求，如歐盟 RoHS。",
                      "3. 環境保護法規符合性:供應商必須符合在地政府相關空氣污染防制、水污染防制、廢棄物與毒性物質管理等環境保護法規;經查證有違反法規之情事，必須及時提出改善計劃。",
                      "4. 節能減碳:鼓勵供應商建置工廠的碳盤查資料、建立產品碳足跡、提供具體的減碳績效。",
                      "5. 水資源與節水:鼓勵供應商建置工廠的水盤查資料、提供具體的水資源管理計劃。 ",
                      "註:「非衝突(conflict-free)」之原物料係指該原物料係來自於經電子產業公民聯盟或其他同等組織所認可之供應商，或經合理查證和盡職調查後依相關法規足資認定為「非來自剛果衝突地區」(DRC conflict free)之供應商。 "
                    ],

                    list2:[
                      "1. 您所提供的個人資料，包含姓名、電話、電子郵件地址，泰碩 公司於調查期間，得為調查舉報事項與聯繫用途而處理利用； 調查若有必要，泰碩公司得傳遞您必要的個人資訊予公司內部 及司法檢調等相關單位。",
                      "2. 不得明知不實而故意捏造事實，倘舉報事後被證明是出於惡意 或有故意捏造虛偽陳述之情事，您必須自負相關法律責任。",
                      "3. 為能盡早調查與解決問題，請您務必提供所有可能的相關具體 資訊與文件，若相關資訊與文件不齊備，泰碩公司將無法進行 調查。",
                      "4. 泰碩公司提供予您的相關聯絡內容，其全部或一部分皆不可向 任何人揭露。除依法律之規定要求外，您不得以泰碩公司與您 之間的聯絡內容提出訴訟或以該聯絡內容作為訴訟相關資料。",
                      
                    ]}



        const list1 = data.list1.map( (item,index) =>
        <li class="list-group-item" >
          {item}
        </li>
        );

        const list2 = data.list2.map(item=>
        <li class="list-group-item" >
  {item}
</li>);


      return  [
      <div class="content">

<h4 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>供應商管理 </h4>
<p><span>&nbsp;&nbsp;</span></p>  
<p>泰碩公司重視企業社會責任，已要求採購「非衝突(conflict-free)」的原物料; 提倡人道精神與實踐人性尊嚴的社會道德準則，是泰碩公司理應善盡的企業社會責任。目前係以符合經濟合作暨發展組織(OECD)於 2011 年所發布之「受衝突影響與高風險地區之全球責任礦物供應鏈模範政策(Model Supply Chain Policy for a Responsible Global Supply Chain of Mineral from Conflict-Affected and High Risk Areas)」的盡職調查(due diligence)架構為依據。
</p>
<p> 泰碩公司鼓勵供應商向經特定產業組織(如 EICC 等)所認可為非衝突之原物料供應廠商進行採購，並要求供應商積極督促尚未取得此認可的供應廠商接受 EICC 或其他同等之獨立第三方稽核計劃檢驗，以符合「非衝突」之原則。
</p>
<p> 透過供應商管理，將對環保的理念向外延伸推廣，促使供應商夥伴也能共同關心環保議題，共同提升更美好的環境與社會。 
</p>

<p><span>&nbsp;&nbsp;</span></p>

<h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>對供應商有關環境保護之要求 (2018年-已完成共37家供應商評鑑) </h5>
<p><span>&nbsp;&nbsp;</span></p>  


<ul class="list-group list-group-flush" >
 {list1}
</ul>


<p><span>&nbsp;&nbsp;</span></p>
<h5 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>客戶及供應商投訴中心 </h5>
<p><span>&nbsp;&nbsp;</span></p>

<h6><b>違反從業道德行為舉報系統</b></h6>

<p>在泰碩電子股份有限公司，誠信正直是公司文化最重要之核心價值， 也是公司經營理念之首。泰碩公司一向承諾以誠信從事所有業務活動 ，絕不允許貪污及任何形式之舞弊行為。
</p>
<p>若您發現泰碩公司員工或任何代表泰碩公司的相關人士進行可疑行為 或可能違反泰碩公司的道德行為準則時，請告訴我們。
您的舉報事項，我們將交由公司副總經理直接處理。
</p>
<p>除法律另有規定外，對於您提供關於您的個人資料，我們將予以保密 ，並依法採取適當之保護措施，保護您的個人資料及隱私。 
</p>
<p><span>&nbsp;&nbsp;</span></p>

<h6><b>提醒您：</b></h6>

<ul class="list-group list-group-flush" >
{list2}
<li  class="list-group-item">   郭尚仁 先生
(副總經理暨發言人)
E-Mail：<a href="mailto:sales@taisol.com">sales@taisol.com</a>
</li>
</ul>



</div>
      ];
    
   
    
  }
