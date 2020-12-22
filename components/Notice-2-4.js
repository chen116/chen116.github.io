app.component('notice-2-4', {
  data() {
    return {
      table1 : [
        {date: "109.06.05", type: "sss", items: ["1. hii","2. koko"], results:["1. rrr", "2. rrrkk"]},
        {date: "109.06.05", type: "sss", items: ["1. hii","2. koko"], results:["1. rrr", "2. rrrkk"]},
      ]
    }
  },
  props: {},
  template:
  /*html*/
  `
  <div class="content">

  <h5 style="color:blue;"><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>內部稽核 </h5>
  <h6>本公司設置隸屬於董事會之內部稽核單位，並依公司規模、業務情況、管理需要及其他有關法令之規定，配置適任及適當人數之專任內部稽核人員。</h6>

  <img class="rounded" src="./assets/images/IR-internal.gif"/>
  <p><span>&nbsp;&nbsp;</span></p>
  <h6>內部稽核單位執行內部控制制度的稽核工作，檢查並評估公司的營運記錄有無缺失。對於發現之內部控制制度可能缺失及提出改善建議，做成稽核報告，定期向董事會報告。</h6>
  <h6>內部稽核單位督促內部各單位及子公司每年定期自行檢查內部控制制度之有效性，再由內部稽核單位覆核各單位及子公司之自行檢查報告，並綜合自行檢查結果，做為董事會及總經理出具內部控制制度聲明書之依據。</h6>
  <p><span>&nbsp;&nbsp;</span></p>
  <h5 style="color:blue;"><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>獨立董事、監察人與內部稽核主管之溝通方式:</h5>
  <h6>1. 每年定期召開2次溝通會議，就本公司內部稽核業務執行狀況及內控運作情形提出報告。</h6>
  <h6>2. 若有重大或緊急事項時，召開不定期會議討論之。平時以電話及電子郵件等方式進行溝通。</h6>
  <h6>3. 稽核報告及追蹤報告陳核後，於次月底前交付各監察人、獨立董事查閱。</h6>
  <p><span>&nbsp;&nbsp;</span></p>
  <h6>獨立董事、監察人與內部稽核主管之溝通情形摘要： </h6>

   	 	 	溝通結果
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
  <tr v-for="meeting in table1">
      <td> {{meeting.date}}</td>
      <td> {{meeting.type}}</td>
      <td> 
          <ul class="list-group list-group-flush ">
              <li class="list-group-item" v-for="item in meeting.items">
                  {{item}}
              </li>
          </ul>
      </td>
      <td> 
      <ul class="list-group list-group-flush ">
          <li class="list-group-item" v-for="result in meeting.results">
              {{result}}
          </li>
      </ul>
  </td>
  </tr> 
  </tbody>
</table>



  </div>
  `,
  computed: {},
  methods: {},
  beforeMount() {}

})