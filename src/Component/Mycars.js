import React,{Component}  from 'react'


class Mycars extends Component {
    
    
    
    render(){
    return (
    <div className="card" >
  <img src="logo512.png" className="card-img-top" alt="" style={{width:"450px",height:"300px"}}/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    )
}}

export default Mycars;
