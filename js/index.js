'use strict';
console.clear();
let url = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';


class CamperTable extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tableData: [],
    };    
  }
  componentDidMount(){
    let req = new Request(url);
    fetch(req)
    .then( res => res.json() )
    .then( res => {
      this.setState({ tableData: res });
    });
  }
  
  render(){
    let html = this.state.tableData.map(obj => {
      console.log(obj);
      return ( 
        <tr>  
            <td>{obj['username']}</td>
            <td><img src={obj['img']}></img></td>
            <td>{obj['recent']}</td>
            <td>{obj['alltime']}</td>
        </tr>
      ); 
    });
   // console.log(html);
    return (
      <table>
        <thead>
          <td>Name</td>
          <td>Image</td>
          <td>30days</td>
          <td>Alltime</td>
        </thead>
        {html}
      </table>
    )
  }
}


ReactDOM.render(<CamperTable />, document.body);


  
