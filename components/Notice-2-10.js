app.component('notice-2-10', {
  data() {
    return {

      table1:[
        {name: 'namee',self_stock:'ss',self_stock_per:"eee", fam_stock:"ff",fam_stock_per:"ee",other_stock:"oof",other_stock_pre:'dddd', name2:'ee2',relation:'eee',note:'d'},
        {name: 'namee',self_stock:'ss',self_stock_per:"eee", fam_stock:"ff",fam_stock_per:"ee",other_stock:"oof",other_stock_pre:'dddd', name2:'ee2',relation:'eee',note:'d'},
        {name: 'namee',self_stock:'ss',self_stock_per:"eee", fam_stock:"ff",fam_stock_per:"ee",other_stock:"oof",other_stock_pre:'dddd', name2:'ee2',relation:'eee',note:'d'},
      ]

      
    }
  },
  props: {},
  template:
  /*html*/
  `
  <div class="content">



  <h5 style="color:blue;"><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>股權結構 </h5>
  <p><span>&nbsp;&nbsp;</span></p>

  <h6><b>本公司股權比例占前十大之股東：   </b></h6>

  <p style="text-align:right;">109 年 4 月 7 日  單位：股</p>

  
  <table  class="table table-bordered table-hover">
    <thead>
    <tr>
        <th rowspan="2">姓名（註一）</th>
        <th colspan="2">本人持有股份</th>
        <th colspan="2">配偶、未成年子女持有股份</th>
        <th colspan="2">利用他人名義合計持有股份</th>
        <th colspan="2">前十大股東互相間具有財務會計準則公報第六號關係人或為配偶、二等親以內之親屬關係者，其名稱或姓名及關係（註三）</th>
        <th rowspan="2">備註</th>
    </tr>
    <tr>

      <th>股數</th>
      <th>持股比率(%)</th>
      <th>股數</th>
      <th>持股比率(%)</th>
      <th>股數</th>
      <th>持股比率(%)</th>
      <th>名稱(或姓名)</th>
      <th>關係</th>
    </tr>

    </thead>
    <tbody>
    <tr v-for="row in table1">
      <td v-for="key in Object.keys(row)">{{ row[key] }}</td>
    </tr> 
    </tbody>
  </table>


  </div>
  `,
  computed: {},
  methods: {},
  beforeMount() {}

})