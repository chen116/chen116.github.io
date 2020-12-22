app.component('notice-2-3', {
  data() {
    return {
      links: [

        {title :"公司章程",
        href:"http://w3.taisol.com.tw/important/%E5%85%AC%E5%8F%B8%E7%AB%A0%E7%A8%8B.pdf"},

        {title :"董事及監察人選舉辦法",
        href:"http://w3.taisol.com.tw/important/%E8%91%A3%E7%9B%A3%E9%81%B8%E8%88%89%E8%BE%A6%E6%B3%95.pdf"},

        {title:"股東會議事規則",href:""},
        {title:"取得或處分資產處理程序",href:""},
        {title:"背書保證作業程序",href:""},
        {title:"資金貸與他人作業程序",href:""},
        {title:"內部重大資訊處理作業程序",href:""},
        {title:"誠信經營作業程序及行為指南",href:""},
        {title:"道德行為準則",href:""},
        {title:"企業社會責任實務守則",href:""},
        {title:"公司治理實務守則",href:""},
        {title:"提名委員會組織規程",href:""},

      ]
    }
  },
  props: {},
  template:
  /*html*/
  `
  <div class="content">
    <ul class="list-group list-group-flush" v-for="link in links">
      <li class="list-group-item" ><img class="rounded" src="./assets/images/menu01.jpg"/><span>&nbsp;&nbsp;</span>
        <a v-bind:href="link.href" target="_blank"> {{link.title}} 
          <img class="rounded" src="./assets/images/investor04_7.jpg"/>
        </a>
      </li>
    </ul>
  </div>
  `,
  computed: {},
  methods: {},
  beforeMount() {}

})