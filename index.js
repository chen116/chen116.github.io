class App extends React.Component {
    render(){
      return(
        <div>
          Hello World
          <Info/>
        </div>
      )
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('app'))