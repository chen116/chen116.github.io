
  class SinglePageApp extends React.Component {
    constructor(props){
      super(props);
      this.state ={
        init:false,
        foucusedPage : 0,
        navItems : ['董事會','董事會(Board of Director)','薪酬委員會','組織及職掌','規章','內部稽核','企業社會責任','供應商管理','客戶服務','投資人關係','人力資源','與利害關係人對話'],
      };
    }
    focusThisPage(index){
      this.setState({foucusedPage: index},function(){
        console.log("FoucusThisPage:",this.state.foucusedPage);
      });
    };
    render(){
      const navItems = this.state.navItems.map( (item,index) =>
      <li class="nav-item">
          <a class="nav-link"  href="javascript:void(0);" onClick={()=>{ this.focusThisPage(index);}}>{item}</a>
      </li>
      );
      if (!this.state.init)
      {
        var initFoucusedPage=window.location.href.split('?')[1];
        if (initFoucusedPage==null){initFoucusedPage=0}
        else {initFoucusedPage=parseInt(initFoucusedPage) }
        this.state.foucusedPage=initFoucusedPage;
        console.log("initFoucusedPage:",this.state.foucusedPage)
        this.state.init=true
      }
      return (
        <div>
          <nav class="navbar navbar-expand-lg navbar-dark sub-navbar ">
            <div class="container-fluid">
              <ul class="list-group list-group-horizontal">
                {navItems}
              </ul>
            </div>
          </nav>
          <Page0 currentPage={this.state.foucusedPage}/>
          <Page1 currentPage={this.state.foucusedPage}/>
          <Page2 currentPage={this.state.foucusedPage}/>
          <Page3 currentPage={this.state.foucusedPage}/>
          <Page7 currentPage={this.state.foucusedPage}/>

        </div>  
      )
    }
  }



