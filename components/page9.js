function Page9(props) {
    const myPage = 9;
    if (myPage != props.currentPage){return null;}

      var data =  {      
        table1:[
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
  

      }

      class ActiveTable1 extends React.Component {
        constructor(props){
            super(props);
            this.state={};
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
                    {table}
                </tbody>
                </table>
              )
          }
        }



      return  [
      <div class="content">

        <h4 style={{color:`blue`}}><img class="rounded" src="./assets/images/bullet.jpg"/><span>&nbsp;&nbsp;</span>投資人關係 </h4>
        <p><span>&nbsp;&nbsp;</span></p>

        <p><b>股權結構:</b></p>
        <p><span>&nbsp;&nbsp;</span>本公司股權比例占前十大之股東： </p>
        <p style={{textAlign:`right`}}>109 年 4 月 7 日  單位：股</p>
        <ActiveTable1 data={data.table1} />

      </div>
      ];
    
   
    
  }
