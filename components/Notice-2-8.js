app.component('notice-2-8', {
  data() {
    return {


      list1:[
        "1. 您所提供的個人資料，包含姓名、電話、電子郵件地址，泰碩 公司於調查期間，得為調查舉報事項與聯繫用途而處理利用； 調查若有必要，泰碩公司得傳遞您必要的個人資訊予公司內部 及司法檢調等相關單位。",
        "2. 不得明知不實而故意捏造事實，倘舉報事後被證明是出於惡意 或有故意捏造虛偽陳述之情事，您必須自負相關法律責任。",
        "3. 為能盡早調查與解決問題，請您務必提供所有可能的相關具體 資訊與文件，若相關資訊與文件不齊備，泰碩公司將無法進行 調查。",
        "4. 泰碩公司提供予您的相關聯絡內容，其全部或一部分皆不可向 任何人揭露。除依法律之規定要求外，您不得以泰碩公司與您 之間的聯絡內容提出訴訟或以該聯絡內容作為訴訟相關資料。",
        
      ]
      
    }
  },
  props: {},
  template:
  /*html*/
  `
  <div class="content">



  <h5 style="color:blue;"><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>客戶及供應商投訴中心 </h5>
  <p><span>&nbsp;&nbsp;</span></p>

  <h6><b>違反從業道德行為舉報系統:</b></h6>

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
    <li class="list-group-item" v-for="item in list1">
      {{item}}
    </li>
    <li  class="list-group-item">   郭尚仁 先生
    (副總經理暨發言人)
    E-Mail：<a href="mailto:sales@taisol.com">sales@taisol.com</a>
    </li>
  </ul>


  </div>
  `,
  computed: {},
  methods: {},
  beforeMount() {}

})